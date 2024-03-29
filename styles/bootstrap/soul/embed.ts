import {css} from 'lit';

export const embedStyle = css`
  :host {
    display: block;
  }

  /*
   * Root
   */

  .root {
    display: block;
    position: relative;
    height: 0;
  }

  ::slotted(iframe) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const embedScript = undefined;
export const embedUnscript = undefined;
