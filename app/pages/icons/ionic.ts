import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-ionic',
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
export class AppPageIconsIonic extends TiniComponent {
  protected render() {
    return html`
      <app-icon-page
        titleText="Ionic"
        name="ionic"
        packageName="@tinijs/ionic-icons"
      ></app-icon-page>
    `;
  }
}
