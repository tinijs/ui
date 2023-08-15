import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const badgeStyle = css`
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

export const badgeScript = undefined;
export const badgeUnscript = undefined;
