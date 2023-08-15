import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const cardStyle = css`
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

export const cardScript = undefined;
export const cardUnscript = undefined;
