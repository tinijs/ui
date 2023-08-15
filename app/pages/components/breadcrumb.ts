import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBreadcrumbComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-breadcrumb',
  components: [
    TiniBreadcrumbComponent,
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
export class AppPageComponentsBreadcrumb extends TiniComponent {
  private readonly PART_LIST = [['breadcrumb', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Breadcrumb"
        name="breadcrumb"
        path="components/breadcrumb"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Breadcrumb description.</div>
      </app-component-page>
    `;
  }
}
