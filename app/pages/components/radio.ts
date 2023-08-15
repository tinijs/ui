import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniRadioComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-radio',
  components: [
    TiniRadioComponent,
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
export class AppPageComponentsRadio extends TiniComponent {
  private readonly PART_LIST = [['radio', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Radio"
        name="radio"
        path="components/radio"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Radio description.</div>
      </app-component-page>
    `;
  }
}
