import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-material-sharp',
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
export class AppPageIconsMaterialSharp extends TiniComponent {
  protected render() {
    return html`
      <app-icon-page
        titleText="Material Sharp"
        name="material-sharp"
        packageName="@tinijs/material-sharp-icons"
      ></app-icon-page>
    `;
  }
}
