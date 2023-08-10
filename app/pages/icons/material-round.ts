import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-material-round',
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
export class AppPageIconsMaterialRound extends TiniComponent {
  protected render() {
    return html`
      <app-icon-page
        titleText="Material Round"
        name="material-round"
        packageName="@tinijs/material-round-icons"
      ></app-icon-page>
    `;
  }
}
