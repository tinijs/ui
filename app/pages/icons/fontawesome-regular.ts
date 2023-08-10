import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-fontawesome-regular',
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
export class AppPageIconsFontawesomeRegular extends TiniComponent {
  protected render() {
    return html`
      <app-icon-page
        titleText="Font Awesome Regular"
        name="fontawesome-regular"
        packageName="@tinijs/fontawesome-regular-icons"
      ></app-icon-page>
    `;
  }
}
