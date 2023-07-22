import {Page, TiniComponent, html} from '@tinijs/core';

import coreStyle from '../../styles/bootstrap/base/core';
import headingsStyle from '../../styles/bootstrap/base/headings';
import linkStyle from '../../styles/bootstrap/base/link';
import textStyle from '../../styles/bootstrap/base/text';

@Page({
  name: 'app-page-home',
  theming: {
    styling: {
      bootstrap: [coreStyle, headingsStyle, linkStyle, textStyle],
    },
  },
})
export class AppPageHome extends TiniComponent {
  protected render() {
    return html`
      <h1>Tini UI</h1>
      <p>
        The UI system of the TiniJS Framework. All components can be used inside
        a TiniJS app or with other frameworks like Vue, React, Angular, ... or
        without any framework at all.
      </p>

      <h2>Components</h2>
      <p>
        Tini UI components are web components. Please see detail page of each
        component for detail usage.
      </p>

      <h2>Styles</h2>
      <p>
        Tini UI supports many interface flavors: Twitter Bootstrap, Google
        Material, Microsoft Fluent, ... and more to come.
      </p>
    `;
  }
}
