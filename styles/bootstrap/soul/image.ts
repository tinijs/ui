import {css} from 'lit';
import {generateColorVaries} from 'tinijs';

export const imageStyle = css`
  :host {
  }

  /*
   * Root
   */

  .root {
  }

  /*
   * [scheme]
   */

  ${generateColorVaries(
    ({fullName, color}) => `
    .${fullName} {
      
    }
  `
  )}
`;

export const imageScript = undefined;
export const imageUnscript = undefined;
