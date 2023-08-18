import {html, HTMLTemplateResult} from 'lit';

export const COLOR_SUFFIXES = [
  '',
  'shade',
  'shade-2',
  'shade-3',
  'shade-4',
  'shade-5',
  'tint',
  'tint-2',
  'tint-3',
  'tint-4',
  'tint-5',
  'contrast',
];

export const GRADIENT_SUFFIXES = ['', 'shade', 'tint', 'contrast'];

function buildFullName(baseName: string, suffix: string) {
  return `${baseName}${!suffix ? '' : `-${suffix}`}`;
}

function mapColorOrgradientVaries<Result>(
  suffixes: string[],
  baseName: string,
  handler: (fullName: string) => Result,
  skipContrast = false
) {
  return suffixes
    .filter(suffix => !skipContrast || suffix !== 'contrast')
    .map(suffix => handler(buildFullName(baseName, suffix)));
}

export function mapColorVaries<Result>(
  baseName: string,
  handler: (fullName: string) => Result,
  skipContrast = false
) {
  return mapColorOrgradientVaries(
    COLOR_SUFFIXES,
    baseName,
    handler,
    skipContrast
  );
}

export function mapGradientVaries<Result>(
  baseName: string,
  handler: (fullName: string) => Result,
  skipContrast = false
) {
  return mapColorOrgradientVaries(
    GRADIENT_SUFFIXES,
    baseName,
    handler,
    skipContrast
  );
}

function renderColorOrGradientVaries(
  suffixes: string[],
  baseName: string,
  render: (fullName: string) => HTMLTemplateResult,
  skipContrast = false
) {
  return suffixes
    .filter(suffix => !skipContrast || suffix !== 'contrast')
    .map(suffix => {
      const fullName = buildFullName(baseName, suffix);
      return suffix !== 'contrast'
        ? render(fullName)
        : // prettier-ignore
          html`<tini-box scheme=${baseName}>\n  ${render(fullName)}\n</tini-box>`;
    });
}

export function renderColorVaries(
  baseName: string,
  render: (fullName: string) => HTMLTemplateResult,
  skipContrast = false
) {
  return renderColorOrGradientVaries(
    COLOR_SUFFIXES,
    baseName,
    render,
    skipContrast
  );
}

export function renderGradientVaries(
  baseName: string,
  render: (fullName: string) => HTMLTemplateResult,
  skipContrast = false
) {
  return renderColorOrGradientVaries(
    GRADIENT_SUFFIXES,
    baseName,
    render,
    skipContrast
  );
}
