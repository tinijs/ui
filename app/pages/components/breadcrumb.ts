import {
  Page,
  TiniComponent,
  html,
  css,
  stylingWithBases,
  BASE_COLORS,
  BASE_GRADIENTS,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  BreadcrumbItem,
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
  private readonly PART_LIST = [['root', 'The root part']];

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

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="code">
            <tini-breadcrumb .items=${[this.ITEMS[0]]}></tini-breadcrumb>
            <tini-breadcrumb
              .items=${[this.ITEMS[0], this.ITEMS[1]]}
            ></tini-breadcrumb>
            <tini-breadcrumb .items=${this.ITEMS}></tini-breadcrumb>
          </div>
        </app-section>

        <app-section class="colors">
          <h2 slot="title">Link colors</h2>
          <div slot="code">
            ${BASE_COLORS.map(
              color =>
                html`<tini-breadcrumb
                  linkColor=${color}
                  .items=${this.ITEMS}
                ></tini-breadcrumb>`
            )}
          </div>
        </app-section>

        <app-section class="gradients">
          <h2 slot="title">Link gradients</h2>
          <div slot="code">
            ${BASE_GRADIENTS.map(
              gradient =>
                html`<tini-breadcrumb
                  linkColor=${gradient}
                  .items=${this.ITEMS}
                ></tini-breadcrumb>`
            )}
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-direction: column;
      gap: var(--size-space);
    }
  `;
}
