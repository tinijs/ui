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

import {renderColorVaries, renderGradientVaries} from '../../helpers/varies';

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
  private readonly PART_LIST = [['root', 'The root part']];
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
          baseName => html`
            <app-section class="colors">
              <h2 slot="title">Color ${baseName}</h2>
              <div slot="code">
                ${renderColorVaries(
                  baseName,
                  fullName =>
                    html`<tini-box scheme=${fullName}
                      >Box with ${fullName} background</tini-box
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
                    html`<tini-box scheme=${fullName}
                      >Box with ${fullName} background</tini-box
                    >`
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
            <tini-box text-color="primary"
              >Default background / Primary text</tini-box
            >
            <tini-box scheme="warning" text-color="primary"
              >Warning background / Primary text</tini-box
            >
            <tini-box scheme="gradient-danger" text-color="primary"
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
            <tini-box text-size="0_5x">Text size 0.5x</tini-box>
            <tini-box>Text size 1x</tini-box>
            <tini-box text-size="3x">Text size 3x</tini-box>
          </div>
        </app-section>

        <app-section class="borders">
          <h2 slot="title">Borders</h2>
          <div slot="content">
            <p>
              Default style is <code>solid</code>, default color is
              <code>medium</code>, default size is <code>border</code>, default
              border radius is <code>radius</code>.
            </p>
          </div>
          <div slot="code">
            <tini-box bordering="solid">Box with border</tini-box>
            <tini-box bordering="primary"
              >Box with border of primary color</tini-box
            >
            <tini-box bordering="2x">Box with border of 2x size</tini-box>
            <tini-box bordering="2x dashed primary" border-radius="3x"
              >Box with border of 2x size, dashed style, primary color and 3x
              radius</tini-box
            >
          </div>
        </app-section>

        <app-section class="paddings">
          <h2 slot="title">Paddings</h2>
          <div slot="code">
            <tini-box bordering="solid" padding="0x"
              ><div>Box with "0x" padding</div></tini-box
            >
            <tini-box bordering="solid" padding="0_5x"
              ><div>Box with "0.5x" padding</div></tini-box
            >
            <tini-box bordering="solid" padding="1x 2x"
              ><div>Box with "1x 2x" padding</div></tini-box
            >
            <tini-box bordering="solid" padding="1x 2x 3x"
              ><div>Box with "1x 2x 3x" padding</div></tini-box
            >
            <tini-box bordering="solid" padding="1x 2x 3x 4x"
              ><div>Box with "1x 2x 3x 4x" padding</div></tini-box
            >
          </div>
        </app-section>

        <app-section class="margins">
          <h2 slot="title">Margins</h2>
          <div slot="code">
            <div class="margin-container">
              <tini-box scheme="primary"
                >Box with "0x" margin</tini-box
              >
            </div>
            <div class="margin-container">
              <tini-box scheme="primary" margin="0_5x"
                >Box with "0.5x" margin</tini-box
              >
            </div>
            <div class="margin-container">
              <tini-box scheme="primary" margin="1x 2x"
                >Box with "1x 2x" margin</tini-box
              >
            </div>
            <div class="margin-container">
              <tini-box scheme="primary" margin="1x 2x 3x"
                >Box with "1x 2x 3x" margin</tini-box
              >
            </div>
            <div class="margin-container">
              <tini-box scheme="primary" margin="1x 2x 3x 4x"
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

    .paddings [slot='code'] tini-box > div {
      background: var(--color-primary);
      color: var(--color-primary-contrast);
    }
  `;
}
