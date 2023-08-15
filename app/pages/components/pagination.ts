import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniPaginationComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-pagination',
  components: [
    TiniPaginationComponent,
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
export class AppPageComponentsPagination extends TiniComponent {
  private readonly PART_LIST = [['pagination', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Pagination"
        name="pagination"
        path="components/pagination"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Pagination description.</div>
      </app-component-page>
    `;
  }
}
