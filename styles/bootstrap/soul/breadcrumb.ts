import {css} from 'lit';
import {generateColorVaries} from '@tinijs/core';

export const breadcrumbStyle = css`
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

export const breadcrumbScript = undefined;
export const breadcrumbUnscript = undefined;
