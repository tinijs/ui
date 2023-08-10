import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-material-sharp',
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
export class AppPageIconsMaterialSharp extends TiniComponent {
  protected render() {
    return html`
      <app-page-icon
        titleText="Material Sharp"
        name="material-sharp"
      ></app-page-icon>
    `;
  }
}
