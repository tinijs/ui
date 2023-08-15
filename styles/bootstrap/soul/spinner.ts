import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const spinnerStyle = css`
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

export const spinnerScript = undefined;
export const spinnerUnscript = undefined;
