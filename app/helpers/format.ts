import {format} from 'prettier';
import * as pluginHTML from 'prettier/plugins/html';

export function formatHTML(code: string) {
  return format(code, {
    parser: 'html',
    plugins: [pluginHTML],
    htmlWhitespaceSensitivity: 'ignore',
  });
}
