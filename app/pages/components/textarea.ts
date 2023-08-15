import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniTextareaComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-textarea',
  components: [
    TiniTextareaComponent,
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
export class AppPageComponentsTextarea extends TiniComponent {
  private readonly PART_LIST = [['textarea', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Textarea"
        name="textarea"
        path="components/textarea"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Textarea description.</div>
      </app-component-page>
    `;
  }
}
