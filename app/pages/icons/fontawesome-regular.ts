import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-fontawesome-regular',
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
export class AppPageIconsFontawesomeRegular extends TiniComponent {
  protected render() {
    return html`
      <app-page-icon
        titleText="Font Awesome Regular"
        name="fontawesome-regular"
      ></app-page-icon>
    `;
  }
}
