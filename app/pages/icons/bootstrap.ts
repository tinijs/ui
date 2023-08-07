import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '@tinijs/ui/bases';

import {AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-bootstrap',
  components: [
    AppPageIconComponent,
  ],
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
    ]),
  },
})
export class AppPageIconsBootstrap extends TiniComponent {
  protected render() {
    return html`
      <app-page-icon titleText="Bootstrap" name="bootstrap"></app-page-icon>
    `;
  }
}
