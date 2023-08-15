import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const dialogStyle = css`
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

export const dialogScript = undefined;
export const dialogUnscript = undefined;
