import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '@tinijs/ui/bases';
import {TINI_LINK, TiniLinkComponent} from '@tinijs/ui/components/link';

import {APP_PAGE, AppPageComponent} from '../../components/page';
import {APP_SECTION, AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-link',
  components: {
    [TINI_LINK]: TiniLinkComponent,
    [APP_PAGE]: AppPageComponent,
    [APP_SECTION]: AppSectionComponent,
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
export class AppPageComponentsLink extends TiniComponent {
  static styles = css``;

  protected render() {
    return html`
      <app-page titleText="Links" name="link" path="components/link">
        <div slot="description">
          Link.
        </div>

        <app-section class="default">
          <div slot="content">
            <h2>Default</h2>
          </div>
          <div slot="code">
            <tini-link href="#">A link!</tini-link>
          </div>
        </app-section>
      </app-page>
    `;
  }
}
