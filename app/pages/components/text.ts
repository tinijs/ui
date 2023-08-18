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

import {renderColorVaries, renderGradientVaries} from '../../helpers/varies';

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
  private readonly PART_LIST = [['root', 'The root part']];
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
          <h2 slot="title">Default</h2>
          <div slot="content">
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
          <h2 slot="title">Types</h2>
          <div slot="content">
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
          baseName => html`
            <app-section class="colors">
              <h2 slot="title">Color ${baseName}</h2>
              <div slot="code">
                ${renderColorVaries(
                  baseName,
                  fullName =>
                    html`<tini-text color=${fullName}
                      >Text with ${fullName} color</tini-text
                    >`
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
                    html`<tini-text color=${fullName}
                      >Text with ${fullName} color</tini-text
                    >`
                )}
              </div>
            </app-section>
          `
        )}

        <app-section class="fonts">
          <h2 slot="title">Fonts</h2>
          <div slot="code">
            ${FONT_TYPES.map(
              font =>
                html`<tini-text font=${font}>Text with ${font} font</tini-text>`
            )}
          </div>
        </app-section>

        <app-section class="font-sizes">
          <h2 slot="title">Font sizes</h2>
          <div slot="code">
            ${SIZE_FACTORS.map(
              size =>
                html`<tini-text font-size=${size}
                  >${size.replace('_', '.')}</tini-text
                >`
            )}
          </div>
        </app-section>

        <app-section class="weights">
          <h2 slot="title">Weights</h2>
          <div slot="content">
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
          <h2 slot="title">Text transforms</h2>
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
          <h2 slot="title">Italic and Underline</h2>
          <div slot="code">
            <tini-text italic>Text with italic style</tini-text><br />
            <tini-text italic color="gradient-primary" font-size="2x"
              >Gradient text with italic style</tini-text
            ><br />
            <tini-text underline>Text with underline decoration</tini-text
            ><br />
            <tini-text underline color="gradient-primary" font-size="2x"
              >Gradient text with underline decoration</tini-text
            >
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-flow: column;
      gap: var(--size-space-0_5x);

      tini-box {
        width: 375px;
      }
    }

    .types [slot='code'],
    .font-sizes [slot='code'],
    .italic-underline [slot='code'] {
      display: block;
    }
  `;
}
