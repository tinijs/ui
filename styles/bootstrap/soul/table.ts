import {css} from 'lit';
import {generateColorVaries, generateScaleVaries} from 'tinijs';

export const tableStyle = css`
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

export const tableScript = undefined;
export const tableUnscript = undefined;
