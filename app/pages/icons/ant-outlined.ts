import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-ant-outlined',
  components: [AppIconPageComponent],
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
      <app-icon-page
        titleText="Ant Outlined"
        name="ant-outlined"
        packageName="@tinijs/ant-outlined-icons"
      ></app-icon-page>
    `;
  }
}
