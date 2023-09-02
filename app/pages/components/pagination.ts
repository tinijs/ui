import {html, css} from 'lit';
import {Page, TiniComponent, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniPaginationComponent} from '@tinijs/ui/components/pagination';

import {
  renderDefaultSection,
  renderBaseColorsSection,
  renderBaseGradientsSection,
  renderScalesSection,
} from '../../helpers/varies';

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
  private readonly PART_LIST = [
    ['root', 'The root part'],
    ['previous', 'The previous button'],
    ['previous-disabled', 'The disabled previous button'],
    ['next', 'The next button'],
    ['next-disabled', 'The disabled next button'],
    ['item', 'An item button'],
    ['item-active', 'An active item button'],
  ];

  protected render() {
    return html`
      <app-component-page
        titleText="Pagination"
        name="pagination"
        path="components/pagination"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Pagination description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default current page is <code>1</code>. Default color is
              <code>primary</code>, default size is <code>md</code>.
            </p>
          `,
          html`<tini-pagination totalPage="3"></tini-pagination>`
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-pagination
              totalPage="3"
              currentPage="2"
              scheme=${baseName}
            ></tini-pagination>`
        )}

        <!-- gradients -->
        ${renderBaseGradientsSection(
          baseName =>
            html`<tini-pagination
              totalPage="3"
              currentPage="2"
              scheme=${baseName}
            ></tini-pagination>`
        )}

        <!-- scales -->
        ${renderScalesSection(
          scale =>
            html`<tini-pagination
              totalPage="3"
              currentPage="2"
              scale=${scale}
            ></tini-pagination>`
        )}
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
