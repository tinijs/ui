import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '../../../dev/bases';

import {APP_PAGE_ICON, AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-ant-outlined',
  components: {
    [APP_PAGE_ICON]: AppPageIconComponent,
  },
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
    ]),
  },
})
export class AppPageIconsAntOutlined extends TiniComponent {
  protected render() {
    return html`
      <app-page-icon
        titleText="Ant Outlined"
        name="ant-outlined"
      ></app-page-icon>
    `;
  }
}
