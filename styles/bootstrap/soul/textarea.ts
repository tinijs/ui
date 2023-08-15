import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const textareaStyle = css`
  :host {
  }

  /*
   * Main
   */

  /*
   * [color]
   */

  ${generateColorVaries(
    ({name, color}) => `
    .color-${name} {
      
    }
  `
  )}
`;

export const textareaScript = undefined;
export const textareaUnscript = undefined;
