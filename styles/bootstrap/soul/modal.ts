import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const modalStyle = css`
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

export const modalScript = undefined;
export const modalUnscript = undefined;
