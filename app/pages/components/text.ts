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
  protected render() {
    return html`
      <app-component-page titleText="Texts" name="text" path="components/text">
        <div slot="description">
          Create texts with different colors, fonts, sizes ...
        </div>

        <app-section class="default">
          <div slot="content">
            <h2>Default</h2>
            <p>Default color is <code>foreground</code>.</p>
          </div>
          <div slot="code">
            <tini-text>This is a default text</tini-text>
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
            <tini-text font="head">Text with Head font</tini-text>
            <tini-text font="body">Text with Body font</tini-text>
            <tini-text font="quote">Text with Quote font</tini-text>
            <tini-text font="code">Text with Code font</tini-text>
          </div>
        </app-section>

        <app-section class="sizes">
          <div slot="content">
            <h2>Sizes</h2>
          </div>
          <div slot="code">
            <tini-text size="0_1x">0.1x</tini-text>
            <tini-text size="0_2x">0.2x</tini-text>
            <tini-text size="0_25x">0.25x</tini-text>
            <tini-text size="0_3x">0.3x</tini-text>
            <tini-text size="0_4x">0.4x</tini-text>
            <tini-text size="0_5x">0.5x</tini-text>
            <tini-text size="0_6x">0.6x</tini-text>
            <tini-text size="0_7x">0.7x</tini-text>
            <tini-text size="0_75x">0.75x</tini-text>
            <tini-text size="0_8x">0.8x</tini-text>
            <tini-text size="0_9x">0.9x</tini-text>
            <tini-text size="1x">1x</tini-text>
            <tini-text size="1_25x">1.25x</tini-text>
            <tini-text size="1_5x">1.5x</tini-text>
            <tini-text size="1_75x">1.75x</tini-text>
            <tini-text size="2x">2x</tini-text>
            <tini-text size="3x">3x</tini-text>
            <tini-text size="4x">4x</tini-text>
            <tini-text size="5x">5x</tini-text>
            <tini-text size="6x">6x</tini-text>
            <tini-text size="7x">7x</tini-text>
            <tini-text size="8x">8x</tini-text>
            <tini-text size="9x">9x</tini-text>
            <tini-text size="10x">10x</tini-text>
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
