import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniCardComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-card',
  components: [
    TiniCardComponent,
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
export class AppPageComponentsCard extends TiniComponent {
  private readonly PART_LIST = [['card', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Card"
        name="card"
        path="components/card"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Card description.</div>
      </app-component-page>
    `;
  }
}
