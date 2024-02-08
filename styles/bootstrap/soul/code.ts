import {css} from 'lit';
import {generateColorVaries, generateScaleVaries} from 'tinijs';

export const codeStyle = css`
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

  /*
   * [scale]
   */

  ${generateScaleVaries(
    ({fullName, scale}) => `
    .${fullName} {
      
    }
  `
  )}
`;

export const codeScript = undefined;
export const codeUnscript = undefined;
