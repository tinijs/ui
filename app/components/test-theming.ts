import {Theming} from '@tinijs/core';
import {LitElement, html, css} from 'lit';

import headingsStyle from '../../styles/bootstrap/base/headings';

export const APP_TEST = 'app-test';

@Theming({
  styling: {
    bootstrap: [
      headingsStyle,
      css`
        h1 {
          color: red;
        }
      `,
    ],
    material: [
      css`
        h1 {
          color: blue;
          font-style: italic;
        }
      `,
    ],
  },
})
export class AppTest extends LitElement {
  protected render() {
    return html` <h1>Test theming</h1> `;
  }
}
