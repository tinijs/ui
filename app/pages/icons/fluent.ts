import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

import {AppIconPageComponent} from '../../components/icon-page';

@Page({
  name: 'app-page-icons-fluent',
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
export class AppPageIconsFluent extends TiniComponent {
  protected render() {
    return html`
      <app-icon-page
        titleText="Fluent"
        name="fluent"
        packageName="@tinijs/fluent-icons"
      ></app-icon-page>
    `;
  }
}
