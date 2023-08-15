import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const checkboxStyle = css`
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

export const checkboxScript = undefined;
export const checkboxUnscript = undefined;
