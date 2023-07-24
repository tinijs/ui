import {Page, TiniComponent, html, stylingWithBaseStyles} from '@tinijs/core';
import {
  commonStyles,
  headingsStyles,
  linkStyles,
  textStyles,
} from '../../../dev/styles';

import {APP_PAGE_ICON, AppPageIconComponent} from '../../components/page-icon';

@Page({
  name: 'app-page-icons-bootstrap',
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
export class AppPageIconsBootstrap extends TiniComponent {
  protected render() {
    return html`
      <app-page-icon titleText="Bootstrap" name="bootstrap"></app-page-icon>
    `;
  }
}
