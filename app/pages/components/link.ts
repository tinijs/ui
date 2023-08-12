import {Page, TiniComponent, html, css, stylingWithBases, BASE_COLORS, BASE_GRADIENTS} from '@tinijs/core';
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
        <div slot="description">Link.</div>

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
                <tini-link href="#" color=${color}>Link with ${color} color</tini-link>
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
                <p>Note that the gradient links only support underline for the last one line of text.</p>
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
            <tini-link href="#" font="head">Link with Head font</tini-link>
            <tini-link href="#" font="body">Link with Body font</tini-link>
            <tini-link href="#" font="quote">Link with Quote font</tini-link>
            <tini-link href="#" font="code">Link with Code font</tini-link>
          </div>
        </app-section>

        <app-section class="sizes">
          <div slot="content">
            <h2>Sizes</h2>
          </div>
          <div slot="code">
            <tini-link href="#" size="0_1x">0.1x</tini-link>
            <tini-link href="#" size="0_2x">0.2x</tini-link>
            <tini-link href="#" size="0_25x">0.25x</tini-link>
            <tini-link href="#" size="0_3x">0.3x</tini-link>
            <tini-link href="#" size="0_4x">0.4x</tini-link>
            <tini-link href="#" size="0_5x">0.5x</tini-link>
            <tini-link href="#" size="0_6x">0.6x</tini-link>
            <tini-link href="#" size="0_7x">0.7x</tini-link>
            <tini-link href="#" size="0_75x">0.75x</tini-link>
            <tini-link href="#" size="0_8x">0.8x</tini-link>
            <tini-link href="#" size="0_9x">0.9x</tini-link>
            <tini-link href="#" size="1x">1x</tini-link>
            <tini-link href="#" size="1_25x">1.25x</tini-link>
            <tini-link href="#" size="1_5x">1.5x</tini-link>
            <tini-link href="#" size="1_75x">1.75x</tini-link>
            <tini-link href="#" size="2x">2x</tini-link>
            <tini-link href="#" size="3x">3x</tini-link>
            <tini-link href="#" size="4x">4x</tini-link>
            <tini-link href="#" size="5x">5x</tini-link>
            <tini-link href="#" size="6x">6x</tini-link>
            <tini-link href="#" size="7x">7x</tini-link>
            <tini-link href="#" size="8x">8x</tini-link>
            <tini-link href="#" size="9x">9x</tini-link>
            <tini-link href="#" size="10x">10x</tini-link>
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
