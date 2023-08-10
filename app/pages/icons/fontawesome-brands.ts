import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-fontawesome-brands',
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
export class AppPageIconsFontawesomeBrands extends TiniComponent {
  protected render() {
    return html`
      <app-icon-page
        titleText="Font Awesome Brands"
        name="fontawesome-brands"
        packageName="@tinijs/fontawesome-brands-icons"
      ></app-icon-page>
    `;
  }
}
