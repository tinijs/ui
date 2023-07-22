import {Theming} from '@tinijs/core';
import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import coreStyle from '../../../styles/bootstrap/base/core';
import headingsStyle from '../../../styles/bootstrap/base/headings';
import linkStyle from '../../../styles/bootstrap/base/link';
import textStyle from '../../../styles/bootstrap/base/text';

@customElement('app-page-components-link')
@Theming({
  styling: {
    bootstrap: [coreStyle, headingsStyle, linkStyle, textStyle],
  },
})
export class AppPageComponentsLink extends LitElement {
  static styles = css``;

  protected render() {
    return html` <h1>Component Link</h1> `;
  }
}
