import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '../../../dev/bases';

import {APP_PAGE_ICON, AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-material-filled',
  components: {
    [APP_PAGE_ICON]: AppPageIconComponent,
  },
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
      <app-page-icon
        titleText="Material Filled"
        name="material-filled"
      ></app-page-icon>
    `;
  }
}
