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
              <tini-badge pilled color="primary">0</tini-badge>
              <tini-badge pilled color="secondary">99+</tini-badge>
              <tini-badge pilled color="tertiary">1000</tini-badge>
            </div>
            <div class="group" style="margin-top: 1rem;">
              <tini-badge rounded color="success">0</tini-badge>
              <tini-badge rounded color="warning">99+</tini-badge>
              <tini-badge rounded color="danger">1000</tini-badge>
            </div>
          </div>
        </app-section>

        ${BASE_COLORS.map(
          color => html`
            <app-section class="colors">
              <h2 slot="title">Color ${color}</h2>
              <div slot="code">
                <tini-badge color=${color}>99+</tini-badge>
                <tini-badge color=${`${color}-shade` as any}>99+</tini-badge>
                <tini-badge color=${`${color}-shade-2` as any}>99+</tini-badge>
                <tini-badge color=${`${color}-shade-3` as any}>99+</tini-badge>
                <tini-badge color=${`${color}-shade-4` as any}>99+</tini-badge>
                <tini-badge color=${`${color}-shade-5` as any}>99+</tini-badge>
                <tini-badge color=${`${color}-tint` as any}>99+</tini-badge>
                <tini-badge color=${`${color}-tint-2` as any}>99+</tini-badge>
                <tini-badge color=${`${color}-tint-3` as any}>99+</tini-badge>
                <tini-badge color=${`${color}-tint-4` as any}>99+</tini-badge>
                <tini-badge color=${`${color}-tint-5` as any}>99+</tini-badge>
                <tini-box background=${color}>
                  <tini-badge color=${`${color}-contrast` as any}
                    >99+</tini-badge
                  >
                </tini-box>
              </div>
            </app-section>
          `
        )}
        ${BASE_GRADIENTS.map(
          gradient => html`
            <app-section class="gradients">
              <h2 slot="title">${gradient.replace(/-/g, ' ')}</h2>
              <div slot="code">
                <tini-badge color=${gradient}>99+</tini-badge>
                <tini-badge color=${`${gradient}-shade` as any}>99+</tini-badge>
                <tini-badge color=${`${gradient}-tint` as any}>99+</tini-badge>
                <tini-box background=${gradient}>
                  <tini-badge color=${`${gradient}-contrast` as any}
                    >99+</tini-badge
                  >
                </tini-box>
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
            <tini-badge textColor="primary">99+</tini-badge>
            <tini-badge color="warning" textColor="primary">99+</tini-badge>
            <tini-badge color="gradient-danger" textColor="primary"
              >99+</tini-badge
            >
          </div>
        </app-section>

        <app-section class="sizes">
          <h2 slot="title">Sizes</h2>
          <div slot="code">
            ${SIZES.map(
              size =>
                html`<tini-badge size=${size} color="primary">1000</tini-badge>`
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
