import {Page, TiniComponent, html, stylingWithBaseStyles} from '@tinijs/core';
import {
  commonStyles,
  headingsStyles,
  linkStyles,
  textStyles,
} from '../../../dev/styles';

import {APP_PAGE_ICON, AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-fontawesome-solid',
  components: {
    [APP_PAGE_ICON]: AppPageIconComponent,
  },
  theming: {
    styling: stylingWithBaseStyles([
      commonStyles,
      headingsStyles,
      linkStyles,
      textStyles,
    ]),
  },
})
export class AppPageIconsFontawesomeSolid extends TiniComponent {
  protected render() {
    return html`
      <app-page-icon
        titleText="Font Awesome Solid"
        name="fontawesome-solid"
      ></app-page-icon>
    `;
  }
}
