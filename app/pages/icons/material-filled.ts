import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-material-filled',
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
export class AppPageIconsMaterialFilled extends TiniComponent {
  protected render() {
    return html`
      <app-icon-page
        titleText="Material Filled"
        name="material-filled"
        packageName="@tinijs/material-filled-icons"
      ></app-icon-page>
    `;
  }
}
