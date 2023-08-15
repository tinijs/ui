import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniSpinnerComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-spinner',
  components: [
    TiniSpinnerComponent,
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
export class AppPageComponentsSpinner extends TiniComponent {
  private readonly PART_LIST = [['spinner', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Spinner"
        name="spinner"
        path="components/spinner"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Spinner description.</div>
      </app-component-page>
    `;
  }
}
