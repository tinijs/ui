import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniCheckboxComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-checkbox',
  components: [
    TiniCheckboxComponent,
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
export class AppPageComponentsCheckbox extends TiniComponent {
  private readonly PART_LIST = [['checkbox', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Checkbox"
        name="checkbox"
        path="components/checkbox"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Checkbox description.</div>
      </app-component-page>
    `;
  }
}
