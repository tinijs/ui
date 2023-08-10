import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-material-round',
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
export class AppPageIconsMaterialRound extends TiniComponent {
  protected render() {
    return html`
      <app-page-icon
        titleText="Material Round"
        name="material-round"
      ></app-page-icon>
    `;
  }
}
