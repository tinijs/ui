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
  TextTypes,
  TiniBoxComponent,
  TiniTextComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-text',
  components: [
    TiniBoxComponent,
    TiniTextComponent,
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
export class AppPageComponentsText extends TiniComponent {
  private readonly PART_LIST = [['text', 'The root part']];
  protected render() {
    return html`
      <app-component-page
        titleText="Texts"
        name="text"
        path="components/text"
        .partList=${this.PART_LIST}
      >
        <div slot="description">
          Create texts with different colors, fonts, sizes ...
        </div>

        <app-section class="default">
          <div slot="content">
            <h2>Default</h2>
            <p>
              The default container tag is <code>span</code>. The default color
              is <code>foreground</code>.
            </p>
          </div>
          <div slot="code">
            <tini-text>This is a default text</tini-text>
          </div>
        </app-section>

        <app-section class="types">
          <div slot="content">
            <h2>Types</h2>
            <p>Use different tag types.</p>
          </div>
          <div slot="code">
            ${Object.values(TextTypes).map(
              type =>
                html`<tini-text type=${type}
                  >Use the &lt;${type}&gt; tag</tini-text
                >`
            )}
          </div>
        </app-section>

        ${BASE_COLORS.map(
          color => html`
            <app-section class="colors">
              <div slot="content">
                <h2>Color ${color}</h2>
              </div>
              <div slot="code">
                <tini-text color=${color}>Text with ${color} color</tini-text>
                <tini-text color=${`${color}-shade` as any}
                  >Text with ${color}-shade color</tini-text
                >
                <tini-text color=${`${color}-shade-2` as any}
                  >Text with ${color}-shade-2 color</tini-text
                >
                <tini-text color=${`${color}-shade-3` as any}
                  >Text with ${color}-shade-3 color</tini-text
                >
                <tini-text color=${`${color}-shade-4` as any}
                  >Text with ${color}-shade-4 color</tini-text
                >
                <tini-text color=${`${color}-shade-5` as any}
                  >Text with ${color}-shade-5 color</tini-text
                >
                <tini-text color=${`${color}-tint` as any}
                  >Text with ${color}-tint color</tini-text
                >
                <tini-text color=${`${color}-tint-2` as any}
                  >Text with ${color}-tint-2 color</tini-text
                >
                <tini-text color=${`${color}-tint-3` as any}
                  >Text with ${color}-tint-3 color</tini-text
                >
                <tini-text color=${`${color}-tint-4` as any}
                  >Text with ${color}-tint-4 color</tini-text
                >
                <tini-text color=${`${color}-tint-5` as any}
                  >Text with ${color}-tint-5 color</tini-text
                >
                <tini-box background=${color}>
                  <tini-text color=${`${color}-contrast` as any}
                    >Text with ${color}-contrast color</tini-text
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
              </div>
              <div slot="code">
                <tini-text color=${gradient}
                  >Text with ${gradient} color</tini-text
                >
                <tini-text color=${`${gradient}-shade` as any}
                  >Text with ${gradient}-shade color</tini-text
                >
                <tini-text color=${`${gradient}-tint` as any}
                  >Text with ${gradient}-tint color</tini-text
                >
                <tini-box background=${gradient}>
                  <tini-text color=${`${gradient}-contrast` as any}
                    >Text with ${gradient}-contrast color</tini-text
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
                html`<tini-text font=${font}>Text with ${font} font</tini-text>`
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
                html`<tini-text size=${size}
                  >${size.replace('_', '.')}</tini-text
                >`
            )}
          </div>
        </app-section>

        <app-section class="weights">
          <div slot="content">
            <h2>Weights</h2>
            <p>
              Please note that the active font must support the respective
              weights.
            </p>
          </div>
          <div slot="code">
            ${FONT_WEIGHTS.map(
              weight =>
                html`<tini-text weight=${weight}
                  >Text with ${weight} weight</tini-text
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
                html`<tini-text transform=${transform}
                  >Text with ${transform} transform</tini-text
                >`
            )}
          </div>
        </app-section>

        <app-section class="italic-underline">
          <div slot="content">
            <h2>Italic and Underline</h2>
          </div>
          <div slot="code">
            <tini-text italic>Text with italic style</tini-text>
            <tini-text underline>Text with underline decoration</tini-text>
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
