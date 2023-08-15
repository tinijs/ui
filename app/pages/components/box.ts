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
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-box',
  components: [
    TiniBoxComponent,
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
export class AppPageComponentsBox extends TiniComponent {
  private readonly PART_LIST = [['box', 'The root part']];
  protected render() {
    return html`
      <app-component-page
        titleText="Boxes"
        name="box"
        path="components/box"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Boxes are containers for any content.</div>

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default background is <code>none</code>, default color is the
              current <code>foreground</code>.
            </p>
          </div>
          <div slot="code">
            <tini-box>Here is a default box</tini-box>
          </div>
        </app-section>

        ${BASE_COLORS.map(
          color => html`
            <app-section class="colors">
              <h2 slot="title">Color ${color}</h2>
              <div slot="code">
                <tini-box background=${color}
                  >Box with ${color} background</tini-box
                >
                <tini-box background=${`${color}-shade` as any}
                  >Box with ${color}-shade background</tini-box
                >
                <tini-box background=${`${color}-shade-2` as any}
                  >Box with ${color}-shade-2 background</tini-box
                >
                <tini-box background=${`${color}-shade-3` as any}
                  >Box with ${color}-shade-3 background</tini-box
                >
                <tini-box background=${`${color}-shade-4` as any}
                  >Box with ${color}-shade-4 background</tini-box
                >
                <tini-box background=${`${color}-shade-5` as any}
                  >Box with ${color}-shade-5 background</tini-box
                >
                <tini-box background=${`${color}-tint` as any}
                  >Box with ${color}-tint background</tini-box
                >
                <tini-box background=${`${color}-tint-2` as any}
                  >Box with ${color}-tint-2 background</tini-box
                >
                <tini-box background=${`${color}-tint-3` as any}
                  >Box with ${color}-tint-3 background</tini-box
                >
                <tini-box background=${`${color}-tint-4` as any}
                  >Box with ${color}-tint-4 background</tini-box
                >
                <tini-box background=${`${color}-tint-5` as any}
                  >Box with ${color}-tint-5 background</tini-box
                >
                <tini-box background=${color}>
                  <tini-box background=${`${color}-contrast` as any}
                    >Box with ${color}-contrast background</tini-box
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
                <tini-box background=${gradient}
                  >Box with ${gradient} background</tini-box
                >
                <tini-box background=${`${gradient}-shade` as any}
                  >Box with ${gradient}-shade background</tini-box
                >
                <tini-box background=${`${gradient}-tint` as any}
                  >Box with ${gradient}-tint background</tini-box
                >
                <tini-box background=${gradient}>
                  <tini-box background=${`${gradient}-contrast` as any}
                    >Box with ${gradient}-contrast background</tini-box
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
            <tini-box textColor="primary"
              >Default background / Primary text</tini-box
            >
            <tini-box background="warning" textColor="primary"
              >Warning background / Primary text</tini-box
            >
            <tini-box background="gradient-danger" textColor="primary"
              >Gradient Danger background / Primary text</tini-box
            >
          </div>
        </app-section>

        <app-section class="text-sizes">
          <h2 slot="title">Text sizes</h2>
          <div slot="content">
            <p>Text size from 0.1x to 10x.</p>
          </div>
          <div slot="code">
            <tini-box textSize="0_5x">Text size 0.5x</tini-box>
            <tini-box>Text size 1x</tini-box>
            <tini-box textSize="3x">Text size 3x</tini-box>
          </div>
        </app-section>

        <app-section class="borders">
          <h2 slot="title">Borders</h2>
          <div slot="code">
            <tini-box borderSize="1x">Box with a default border</tini-box>
            <tini-box borderSize="1x" borderColor="primary"
              >Box with border of primary color</tini-box
            >
            <tini-box borderSize="2x" borderRadius="3x"
              >Box with border of 2x size and 3x radius</tini-box
            >
            <tini-box borderSize="1x" borderStyle="dashed"
              >Box with border of dashed style</tini-box
            >
          </div>
        </app-section>

        <app-section class="paddings">
          <h2 slot="title">Paddings</h2>
          <div slot="code">
            <tini-box background="primary" padding="0x"
              >Box with "0x" padding</tini-box
            >
            <tini-box background="primary" padding="0_5x"
              >Box with "0.5x" padding</tini-box
            >
            <tini-box background="primary" padding="1x 2x"
              >Box with "1x 2x" padding</tini-box
            >
            <tini-box background="primary" padding="1x 2x 3x"
              >Box with "1x 2x 3x" padding</tini-box
            >
            <tini-box background="primary" padding="1x 2x 3x 4x"
              >Box with "1x 2x 3x 4x" padding</tini-box
            >
          </div>
        </app-section>

        <app-section class="margins">
          <h2 slot="title">Margins</h2>
          <div slot="code">
            <div class="margin-container">
              <tini-box background="primary" margin="0_5x"
                >Box with "0.5x" margin</tini-box
              >
            </div>
            <div class="margin-container">
              <tini-box background="primary" margin="1x 2x"
                >Box with "1x 2x" margin</tini-box
              >
            </div>
            <div class="margin-container">
              <tini-box background="primary" margin="1x 2x 3x"
                >Box with "1x 2x 3x" margin</tini-box
              >
            </div>
            <div class="margin-container">
              <tini-box background="primary" margin="1x 2x 3x 4x"
                >Box with "1x 2x 3x 4x" margin</tini-box
              >
            </div>
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-flow: column nowrap;
      gap: var(--size-space);

      .margin-container {
        border: 1px solid var(--color-medium);
        margin-top: var(--size-space);
      }
    }
  `;
}
