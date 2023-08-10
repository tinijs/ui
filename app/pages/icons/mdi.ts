import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-mdi',
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
export class AppPageIconsMDI extends TiniComponent {
  protected render() {
    return html`
      <app-page-icon titleText="MDI Icons" name="mdi"></app-page-icon>
    `;
  }
}
