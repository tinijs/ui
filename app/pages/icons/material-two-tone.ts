import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '@tinijs/ui/bases';

import {AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-material-two-tone',
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
export class AppPageIconsMaterialTwoTone extends TiniComponent {
  protected render() {
    return html`
      <app-page-icon
        titleText="Material Two Tone"
        name="material-two-tone"
      ></app-page-icon>
    `;
  }
}
