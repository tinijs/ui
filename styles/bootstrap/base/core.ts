import {css} from 'lit';

export default css`
  :host {
    display: block;
    width: 100%;
    container-type: inline-size;
  }

  *,
  *::before,
  *::after,
  :host {
    box-sizing: border-box;
  }
`;
