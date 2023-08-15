import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const paginationStyle = css`
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

export const paginationScript = undefined;
export const paginationUnscript = undefined;
