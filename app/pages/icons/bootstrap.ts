import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-bootstrap',
  components: [AppIconPageComponent],
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
      <app-icon-page
        titleText="Bootstrap"
        name="bootstrap"
        packageName="@tinijs/bootstrap-icons"
      ></app-icon-page>
    `;
  }
}
