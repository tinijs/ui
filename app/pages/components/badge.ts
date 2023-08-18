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
  TiniBoxComponent,
  TiniBadgeComponent,
} from '@tinijs/ui';

import {renderColorVaries, renderGradientVaries} from '../../helpers/varies';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-badge',
  components: [
    TiniBoxComponent,
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
  private readonly PART_LIST = [['root', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Badge"
        name="badge"
        path="components/badge"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Badge description.</div>

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default color is <code>medium</code>, default size is
              <code>md</code>.
            </p>
          </div>
          <div slot="code">
            <tini-badge>0</tini-badge>
            <tini-badge>99+</tini-badge>
            <tini-badge>1000</tini-badge>
          </div>
        </app-section>

        <app-section class="pilled-rounded">
          <h2 slot="title">Pilled and Rouded</h2>
          <div slot="content">
            <p>
              Rounded badges are best for values with less than or equals 2
              characters.
            </p>
          </div>
          <div slot="code">
            <div class="group">
              <tini-badge pilled scheme="primary">0</tini-badge>
              <tini-badge pilled scheme="secondary">99+</tini-badge>
              <tini-badge pilled scheme="tertiary">1000</tini-badge>
            </div>
            <div class="group" style="margin-top: 1rem;">
              <tini-badge rounded scheme="success">0</tini-badge>
              <tini-badge rounded scheme="warning">99+</tini-badge>
              <tini-badge rounded scheme="danger">1000</tini-badge>
            </div>
          </div>
        </app-section>

        ${BASE_COLORS.map(
          baseName => html`
            <app-section class="colors">
              <h2 slot="title">Color ${baseName}</h2>
              <div slot="code">
                ${renderColorVaries(
                  baseName,
                  fullName =>
                    html`<tini-badge scheme=${fullName}>99+</tini-badge>`
                )}
              </div>
            </app-section>
          `
        )}
        ${BASE_GRADIENTS.map(
          baseName => html`
            <app-section class="gradients">
              <h2 slot="title">${baseName.replace(/-/g, ' ')}</h2>
              <div slot="code">
                ${renderGradientVaries(
                  baseName,
                  fullName =>
                    html`<tini-badge scheme=${fullName}>99+</tini-badge>`
                )}
              </div>
            </app-section>
          `
        )}

        <app-section class="text-colors">
          <h2 slot="title">Text colors</h2>
          <div slot="content">
            <p>
              You can combine any text colors with any background colors. Below
              are just some examples.
            </p>
          </div>
          <div slot="code">
            <tini-badge color="primary">99+</tini-badge>
            <tini-badge scheme="warning" color="primary">99+</tini-badge>
            <tini-badge scheme="gradient-danger" color="primary"
              >99+</tini-badge
            >
          </div>
        </app-section>

        <app-section class="sizes">
          <h2 slot="title">Sizes</h2>
          <div slot="code">
            ${SIZES.map(
              size =>
                html`<tini-badge size=${size} scheme="primary"
                  >1000</tini-badge
                >`
            )}
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      tini-box {
        width: 65px;
        margin-top: var(--size-space);
      }
    }
  `;
}
