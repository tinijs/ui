import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '@tinijs/ui/bases';
import {dataURI as iconSRC} from '@tinijs/bootstrap-icons/1-circle-fill.source';
import {TINI_ICON, TiniIconComponent} from '@tinijs/ui/components/icon';

import {APP_PAGE, AppPageComponent} from '../../components/page';
import {APP_SECTION, AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-icon',
  components: {
    [TINI_ICON]: TiniIconComponent,
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
export class AppPageComponentsIcon extends TiniComponent {
  static styles = css``;

  protected render() {
    return html`
      <app-page titleText="Icons" name="icon" path="components/icon">
        <div slot="description">A generic icon component.</div>

        <app-section class="default">
          <div slot="content">
            <h2>Default</h2>
          </div>
          <div slot="code">
            <tini-icon src=${iconSRC}></tini-icon>
          </div>
        </app-section>
      </app-page>
    `;
  }
}
