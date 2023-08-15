import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniSelectComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-select',
  components: [
    TiniSelectComponent,
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
export class AppPageComponentsSelect extends TiniComponent {
  private readonly PART_LIST = [['select', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Select"
        name="select"
        path="components/select"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Select description.</div>
      </app-component-page>
    `;
  }
}
