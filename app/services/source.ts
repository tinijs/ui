import {getText} from './http';

export interface SoulVariable {
  key: string;
  value: string;
  description: string;
  category?: string;
}

export interface ComponentProperty {
  name: string;
  type: string;
  isOptional: boolean;
  defaultValue?: string;
}

export async function extractCSSVariables(
  src: string,
  scope?: [string, string]
) {
  const code = await getText<string>(src);
  const processedCode = !scope
    ? ['', code]
    : code.match(new RegExp(`${scope[0]}\([\\\s\\\S]*?\)${scope[1]}`));
  if (!processedCode) return [];
  const variableMatchingArr = processedCode[1]
    .replace(/(?:\r\n|\r|\n)/g, '\n')
    .match(/--([\s\S]*?);/g);
  return (variableMatchingArr || []).map(line => {
    const [key, value, description] = line
      .replace(/\n/g, '')
      .replace(/(;$)|(\*\/)/g, '')
      .replace('/*', ':')
      .split(':')
      .map(item => item.trim());
    const [category] = description?.match(/\[[a-zA-Z0-9_]+\]/) || [];
    return {
      key,
      value,
      description: (
        (!category ? description : description?.replace(category, '')) || ''
      ).trim(),
      category: category?.replace(/\[|\]/g, ''),
    };
  });
}

export async function extractComponentProperties(src: string) {
  const code = await getText<string>(src);
  const propsMatchingArr = code.match(/@property\(([\s\S]*?);/g);
  if (!propsMatchingArr) return [];
  return propsMatchingArr.map(item => {
    const [, mainContent] = item.split(' declare ');
    const [rawName, ...rest] = mainContent
      .replace(/readonly|private|public|protected|(;$)/g, '')
      .split(':');
    const isOptional = !!~rawName.indexOf('?');
    const name = (!isOptional ? rawName : rawName.replace(/\?/g, '')).trim();
    const defaultAssignMatching = code.match(
      new RegExp(`this.${name} = \([\\\s\\\S]*?\);`)
    );
    const defaultValue = !defaultAssignMatching
      ? 'undefined'
      : defaultAssignMatching[1];
    return {
      name,
      type: rest.join('').trim(),
      isOptional,
      defaultValue,
    };
  });
}
