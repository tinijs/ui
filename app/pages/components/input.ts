import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniInputComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-input',
  components: [
    TiniInputComponent,
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
export class AppPageComponentsInput extends TiniComponent {
  private readonly PART_LIST = [['input', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Input"
        name="input"
        path="components/input"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Input description.</div>
      </app-component-page>
    `;
  }
}
