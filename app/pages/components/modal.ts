import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniModalComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-modal',
  components: [
    TiniModalComponent,
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
export class AppPageComponentsModal extends TiniComponent {
  private readonly PART_LIST = [['modal', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Modal"
        name="modal"
        path="components/modal"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Modal description.</div>
      </app-component-page>
    `;
  }
}
