import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '@tinijs/ui/bases';

import {AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-fluent',
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
export class AppPageIconsFluent extends TiniComponent {
  protected render() {
    return html`
      <app-page-icon titleText="Fluent" name="fluent"></app-page-icon>
    `;
  }
}
