import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniSwitchComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-switch',
  components: [
    TiniSwitchComponent,
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
export class AppPageComponentsSwitch extends TiniComponent {
  private readonly PART_LIST = [['switch', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Switch"
        name="switch"
        path="components/switch"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Switch description.</div>
      </app-component-page>
    `;
  }
}
