import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const messageStyle = css`
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

export const messageScript = undefined;
export const messageUnscript = undefined;
