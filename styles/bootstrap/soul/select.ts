import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const selectStyle = css`
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

export const selectScript = undefined;
export const selectUnscript = undefined;
