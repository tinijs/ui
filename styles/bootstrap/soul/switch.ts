import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const switchStyle = css`
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

export const switchScript = undefined;
export const switchUnscript = undefined;
