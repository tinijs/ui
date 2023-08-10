import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-ant-filled',
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
export class AppPageIconsAntFilled extends TiniComponent {
  protected render() {
    return html`
      <app-icon-page
        titleText="Ant Filled"
        name="ant-filled"
        packageName="@tinijs/ant-filled-icons"
      ></app-icon-page>
    `;
  }
}
