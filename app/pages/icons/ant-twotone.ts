import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-ant-twotone',
  components: [AppPageIconComponent],
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
      <app-page-icon
        titleText="Ant Twotone"
        name="ant-twotone"
        .noVariants=${true}
      ></app-page-icon>
    `;
  }
}
