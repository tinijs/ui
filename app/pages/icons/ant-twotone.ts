import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-ant-twotone',
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
export class AppPageIconsAntTwotone extends TiniComponent {
  protected render() {
    return html`
      <app-icon-page
        titleText="Ant Twotone"
        name="ant-twotone"
        packageName="@tinijs/ant-twotone-icons"
        .noVariants=${true}
      ></app-icon-page>
    `;
  }
}
