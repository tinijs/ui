import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-fontawesome-solid',
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
export class AppPageIconsFontawesomeSolid extends TiniComponent {
  protected render() {
    return html`
      <app-icon-page
        titleText="Font Awesome Solid Icons"
        name="fontawesome-solid"
        packageName="@tinijs/fontawesome-solid-icons"
        homepage="https://fontawesome.com/icons"
      ></app-icon-page>
    `;
  }
}
