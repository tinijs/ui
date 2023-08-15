import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBadgeComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-badge',
  components: [
    TiniBadgeComponent,
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
export class AppPageComponentsBadge extends TiniComponent {
  private readonly PART_LIST = [['badge', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Badge"
        name="badge"
        path="components/badge"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Badge description.</div>
      </app-component-page>
    `;
  }
}
