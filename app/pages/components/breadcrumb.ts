import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  BreadcrumbItem,
  TiniBreadcrumbComponent,
} from '@tinijs/ui';

import {
  renderDefaultSection,
  renderBaseColorsSection,
  renderBaseGradientsSection,
} from '../../helpers/varies';

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
  private readonly PART_LIST = [
    ['root', 'The root part'],
    ['item', 'A segment'],
    ['item-active', 'An active segment'],
  ];

  private readonly ITEMS: BreadcrumbItem[] = [
    {label: 'Home', href: '#'},
    {label: 'Library', href: '#'},
    {label: 'Data'},
  ];

  protected render() {
    return html`
      <app-component-page
        titleText="Breadcrumb"
        name="breadcrumb"
        path="components/breadcrumb"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Breadcrumb description.</div>

        <!-- default -->
        ${renderDefaultSection(
          null,
          html`
            ${[[this.ITEMS[0]], [this.ITEMS[0], this.ITEMS[1]], this.ITEMS].map(
              items => html`<tini-breadcrumb .items=${items}></tini-breadcrumb>`
            )}
          `
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-breadcrumb
              linkColor=${baseName}
              .items=${this.ITEMS}
            ></tini-breadcrumb>`
        )}

        <!-- gradients -->
        ${renderBaseGradientsSection(
          baseName =>
            html`<tini-breadcrumb
              linkColor=${baseName}
              .items=${this.ITEMS}
            ></tini-breadcrumb>`
        )}
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `;
}
