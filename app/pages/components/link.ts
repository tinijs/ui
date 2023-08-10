import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniLinkComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-link',
  components: [
    TiniLinkComponent,
    AppComponentPageComponent,
    AppSectionComponent,
  ],
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
      codeBases,
    ]),
  },
})
export class AppPageComponentsLink extends TiniComponent {
  protected render() {
    return html`
      <app-component-page
        titleText="Links"
        packageName="@tinijs/ui"
        name="link"
        path="components/link"
      >
        <div slot="description">Link.</div>

        <app-section class="default">
          <div slot="content">
            <h2>Default</h2>
          </div>
          <div slot="code">
            <tini-link href="#">A link!</tini-link>
          </div>
        </app-section>
      </app-component-page>
    `;
  }
}
