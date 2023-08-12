import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-material-two-tone',
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
export class AppPageIconsMaterialTwoTone extends TiniComponent {
  protected render() {
    return html`
      <app-icon-page
        titleText="Material Two Tone Icons"
        name="material-two-tone"
        packageName="@tinijs/material-two-tone-icons"
        homepage="https://material.io/resources/icons"
      ></app-icon-page>
    `;
  }
}
