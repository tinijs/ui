import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const radioStyle = css`
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

export const radioScript = undefined;
export const radioUnscript = undefined;
