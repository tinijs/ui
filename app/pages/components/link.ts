import {
  Page,
  TiniComponent,
  html,
  css,
  stylingWithBases,
  BASE_COLORS,
  BASE_GRADIENTS,
  FONT_TYPES,
  SIZE_FACTORS,
  FONT_WEIGHTS,
  TEXT_TRANSFORMS,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
  TiniLinkComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-link',
  components: [
    TiniBoxComponent,
    TiniLinkComponent,
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
export class AppPageComponentsLink extends TiniComponent {
  protected render() {
    return html`
      <app-component-page titleText="Links" name="link" path="components/link">
        <div slot="description">Use link to navigate around.</div>

        <app-section class="default">
          <div slot="content">
            <h2>Default</h2>
          </div>
          <div slot="code">
            <tini-link href="#">This is a default link!</tini-link>
          </div>
        </app-section>

        ${BASE_COLORS.map(
          color => html`
            <app-section class="colors">
              <div slot="content">
                <h2>Color ${color}</h2>
              </div>
              <div slot="code">
                <tini-link href="#" color=${color}
                  >Link with ${color} color</tini-link
                >
                <tini-link href="#" color=${`${color}-shade` as any}
                  >Link with ${color}-shade color</tini-link
                >
                <tini-link href="#" color=${`${color}-shade-2` as any}
                  >Link with ${color}-shade-2 color</tini-link
                >
                <tini-link href="#" color=${`${color}-shade-3` as any}
                  >Link with ${color}-shade-3 color</tini-link
                >
                <tini-link href="#" color=${`${color}-shade-4` as any}
                  >Link with ${color}-shade-4 color</tini-link
                >
                <tini-link href="#" color=${`${color}-shade-5` as any}
                  >Link with ${color}-shade-5 color</tini-link
                >
                <tini-link href="#" color=${`${color}-tint` as any}
                  >Link with ${color}-tint color</tini-link
                >
                <tini-link href="#" color=${`${color}-tint-2` as any}
                  >Link with ${color}-tint-2 color</tini-link
                >
                <tini-link href="#" color=${`${color}-tint-3` as any}
                  >Link with ${color}-tint-3 color</tini-link
                >
                <tini-link href="#" color=${`${color}-tint-4` as any}
                  >Link with ${color}-tint-4 color</tini-link
                >
                <tini-link href="#" color=${`${color}-tint-5` as any}
                  >Link with ${color}-tint-5 color</tini-link
                >
                <tini-box background=${color}>
                  <tini-link href="#" color=${`${color}-contrast` as any}
                    >Link with ${color}-contrast color</tini-link
                  >
                </tini-box>
              </div>
            </app-section>
          `
        )}
        ${BASE_GRADIENTS.map(
          gradient => html`
            <app-section class="gradients">
              <div slot="content">
                <h2>${gradient.replace(/-/g, ' ')}</h2>
                <p>
                  Note that the gradient links only support underline for the
                  last one line of text.
                </p>
              </div>
              <div slot="code">
                <tini-link href="#" color=${gradient}
                  >Link with ${gradient} color</tini-link
                >
                <tini-link href="#" color=${`${gradient}-shade` as any}
                  >Link with ${gradient}-shade color</tini-link
                >
                <tini-link href="#" color=${`${gradient}-tint` as any}
                  >Link with ${gradient}-tint color</tini-link
                >
                <tini-box background=${gradient}>
                  <tini-link href="#" color=${`${gradient}-contrast` as any}
                    >Link with ${gradient}-contrast color</tini-link
                  >
                </tini-box>
              </div>
            </app-section>
          `
        )}

        <app-section class="fonts">
          <div slot="content">
            <h2>Fonts</h2>
          </div>
          <div slot="code">
            ${FONT_TYPES.map(
              font =>
                html`<tini-link href="#" font=${font}
                  >Link with ${font} font</tini-link
                >`
            )}
          </div>
        </app-section>

        <app-section class="sizes">
          <div slot="content">
            <h2>Sizes</h2>
          </div>
          <div slot="code">
            ${SIZE_FACTORS.map(
              size =>
                html`<tini-link href="#" size=${size}
                  >${size.replace('_', '.')}</tini-link
                >`
            )}
          </div>
        </app-section>

        <app-section class="weights">
          <div slot="content">
            <h2>Weights</h2>
          </div>
          <div slot="code">
            ${FONT_WEIGHTS.map(
              weight =>
                html`<tini-link href="#" weight=${weight}
                  >Text with ${weight} weight</tini-link
                >`
            )}
          </div>
        </app-section>

        <app-section class="transfroms">
          <div slot="content">
            <h2>Text transforms</h2>
          </div>
          <div slot="code">
            ${TEXT_TRANSFORMS.map(
              transform =>
                html`<tini-link href="#" transform=${transform}
                  >Text with ${transform} transform</tini-link
                >`
            )}
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='content'] h2 {
      text-transform: capitalize;
    }

    app-section [slot='code'] {
      display: flex;
      flex-flow: column;
      gap: var(--size-space-0_5x);

      tini-box {
        width: 375px;
      }
    }

    .sizes [slot='code'] {
      display: block;
    }
  `;
}
