import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const labelStyle = css`
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

export const labelScript = undefined;
export const labelUnscript = undefined;
