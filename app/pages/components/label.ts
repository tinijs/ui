import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniLabelComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-label',
  components: [
    TiniLabelComponent,
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
export class AppPageComponentsLabel extends TiniComponent {
  private readonly PART_LIST = [['label', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Label"
        name="label"
        path="components/label"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Label description.</div>
      </app-component-page>
    `;
  }
}
