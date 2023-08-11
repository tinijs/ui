import {css} from 'lit';

export default css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    display: block;
    container-type: inline-size;
    margin: 0;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }
`;
