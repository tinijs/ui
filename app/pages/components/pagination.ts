import {
  Page,
  TiniComponent,
  html,
  css,
  stylingWithBases,
  BASE_COLORS,
  BASE_GRADIENTS,
  SIZES,
} from '@tinijs/core';
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

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default current page is <code>1</code>. Default color is
              <code>primary</code>, default size is <code>md</code>.
            </p>
          </div>
          <div slot="code">
            <tini-pagination totalPage="3"></tini-pagination>
          </div>
        </app-section>

        ${BASE_COLORS.map(
          color => html`
            <app-section class="colors">
              <h2 slot="title">Color ${color}</h2>
              <div slot="code">
                <tini-pagination
                  totalPage="3"
                  currentPage="2"
                  color=${color}
                ></tini-pagination>
              </div>
            </app-section>
          `
        )}
        ${BASE_GRADIENTS.map(
          gradient => html`
            <app-section class="gradients">
              <h2 slot="title">${gradient.replace(/-/g, ' ')}</h2>
              <div slot="code">
                <tini-pagination
                  totalPage="3"
                  currentPage="2"
                  color=${gradient}
                ></tini-pagination>
              </div>
            </app-section>
          `
        )}

        <app-section class="sizes">
          <h2 slot="title">Sizes</h2>
          <div slot="code">
            ${SIZES.map(
              size =>
                html`<tini-pagination
                  totalPage="3"
                  currentPage="2"
                  size=${size}
                ></tini-pagination>`
            )}
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-flow: column;
      gap: var(--size-space);
    }
  `;
}
