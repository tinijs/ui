import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniDialogComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-dialog',
  components: [
    TiniDialogComponent,
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
export class AppPageComponentsDialog extends TiniComponent {
  private readonly PART_LIST = [['dialog', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Dialog"
        name="dialog"
        path="components/dialog"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Dialog description.</div>
      </app-component-page>
    `;
  }
}
