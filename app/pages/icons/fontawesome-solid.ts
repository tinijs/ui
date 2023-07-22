import {Page, TiniComponent, html, css} from '@tinijs/core';

import coreStyle from '../../../styles/bootstrap/base/core';
import headingsStyle from '../../../styles/bootstrap/base/headings';
import linkStyle from '../../../styles/bootstrap/base/link';
import textStyle from '../../../styles/bootstrap/base/text';

import {APP_PAGE_ICON, AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-fontawesome-solid',
  components: {
    [APP_PAGE_ICON]: AppPageIconComponent,
  },
  theming: {
    styling: {
      bootstrap: [coreStyle, headingsStyle, linkStyle, textStyle],
    },
  },
})
export class AppPageIconsFontawesomeSolid extends TiniComponent {
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
