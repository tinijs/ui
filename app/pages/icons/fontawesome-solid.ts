import {Theming, Components} from '@tinijs/core';
import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import coreStyle from '../../../styles/bootstrap/base/core';
import headingsStyle from '../../../styles/bootstrap/base/headings';
import linkStyle from '../../../styles/bootstrap/base/link';
import textStyle from '../../../styles/bootstrap/base/text';

import {APP_PAGE_ICON, AppPageIcon} from '../../components/page-icon';

@customElement('app-page-icons-fontawesome-solid')
@Components({
  [APP_PAGE_ICON]: AppPageIcon,
})
@Theming({
  styling: {
    bootstrap: [coreStyle, headingsStyle, linkStyle, textStyle],
  },
})
export class AppPageIconsFontawesomeSolid extends LitElement {
  static styles = css``;

  protected render() {
    return html`
      <app-page-icon
        titleText="Font Awesome Solid"
        name="fontawesome-solid"
      ></app-page-icon>
    `;
  }
}
