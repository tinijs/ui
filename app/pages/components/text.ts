import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
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
      <app-component-page
        titleText="Texts"
        packageName="@tinijs/ui"
        name="text"
        path="components/text"
      >
        <div slot="description">Text text text.</div>

        <app-section class="default">
          <div slot="content">
            <h2>Default</h2>
            <p>Default color is <code>foreground</code>.</p>
          </div>
          <div slot="code">
            <tini-text>This is a text</tini-text>
          </div>
        </app-section>

        <app-section class="colors">
          <div slot="content">
            <h2>Color Primary</h2>
          </div>
          <div slot="code">
            <tini-text color="primary">Primary</tini-text>
            <tini-box background="primary">
              <tini-text color="primary-contrast">Primary Contrast</tini-text>
            </tini-box>
            <tini-text color="primary-shade">Primary Shade</tini-text>
            <tini-text color="primary-shade-2">Primary Shade 2</tini-text>
            <tini-text color="primary-shade-3">Primary Shade 3</tini-text>
            <tini-text color="primary-shade-4">Primary Shade 4</tini-text>
            <tini-text color="primary-shade-5">Primary Shade 5</tini-text>
            <tini-text color="primary-tint">Primary Tint</tini-text>
            <tini-text color="primary-tint-2">Primary Tint 2</tini-text>
            <tini-text color="primary-tint-3">Primary Tint 3</tini-text>
            <tini-text color="primary-tint-4">Primary Tint 4</tini-text>
            <tini-text color="primary-tint-5">Primary Tint 5</tini-text>
          </div>
        </app-section>

        <app-section class="colors">
          <div slot="content">
            <h2>Colors</h2>
          </div>
          <div slot="code">
            <tini-text color="secondary">Secondary</tini-text>
            <tini-text color="tertiary">Tertiary</tini-text>
            <tini-text color="success">Success</tini-text>
            <tini-text color="warning">Warning</tini-text>
            <tini-text color="danger">Danger</tini-text>
            <tini-text color="light">Light</tini-text>
            <tini-text color="medium">Medium</tini-text>
            <tini-text color="dark">Dark</tini-text>
          </div>
        </app-section>

        <app-section class="gradients">
          <div slot="content">
            <h2>Gradient Primary</h2>
          </div>
          <div slot="code">
            <tini-text color="gradient-primary">Gradient Primary</tini-text>
            <tini-box background="primary">
              <tini-text color="gradient-primary-contrast"
                >Gradient Primary Contrast</tini-text
              >
            </tini-box>
            <tini-text color="gradient-primary-shade"
              >Gradient Primary Shade</tini-text
            >
            <tini-text color="gradient-primary-tint">Gradient Primary Tint</tini-text>
          </div>
        </app-section>

        <app-section class="gradients">
          <div slot="content">
            <h2>Gradients</h2>
          </div>
          <div slot="code">
            <tini-text color="gradient-secondary">Gradient Secondary</tini-text>
            <tini-text color="gradient-tertiary">Gradient Tertiary</tini-text>
            <tini-text color="gradient-success">Gradient Success</tini-text>
            <tini-text color="gradient-warning">Gradient Warning</tini-text>
            <tini-text color="gradient-danger">Gradient Danger</tini-text>
            <tini-text color="gradient-light">Gradient Light</tini-text>
            <tini-text color="gradient-medium">Gradient Medium</tini-text>
            <tini-text color="gradient-dark">Gradient Dark</tini-text>
          </div>
        </app-section>

        <app-section class="fonts">
          <div slot="content">
            <h2>Fonts</h2>
          </div>
          <div slot="code">
            <tini-text font="head">Head text</tini-text>
            <tini-text font="body">Body text</tini-text>
            <tini-text font="quote">Quote text</tini-text>
            <tini-text font="code">Code text</tini-text>
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
}
