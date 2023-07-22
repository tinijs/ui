import {Page, TiniComponent, html, css} from '@tinijs/core';

import coreStyle from '../../../styles/bootstrap/base/core';
import headingsStyle from '../../../styles/bootstrap/base/headings';
import linkStyle from '../../../styles/bootstrap/base/link';
import textStyle from '../../../styles/bootstrap/base/text';

@Page({
  name: 'app-page-components-icon',
  theming: {
    styling: {
      bootstrap: [coreStyle, headingsStyle, linkStyle, textStyle],
    },
  },
})
export class AppPageComponentsIcon extends TiniComponent {
  static styles = css``;

  protected render() {
    return html` <h1>Component Icon</h1> `;
  }
}
