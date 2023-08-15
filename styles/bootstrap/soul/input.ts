import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const inputStyle = css`
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

export const inputScript = undefined;
export const inputUnscript = undefined;
