import {html, css} from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';
import {Page, TiniComponent, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniBoxComponent} from '@tinijs/ui/components/box';

import {
  renderSection,
  renderDefaultSection,
  renderBaseColorsSection,
  renderContrastColorsSection,
  renderBaseGradientsSection,
  renderContrastGradientsSection,
  renderFontColorsSection,
  renderFontSizesSection,
  renderSpacesSection,
} from '../../helpers/varies';

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

  private readonly PREPROCESS_CODE_RADIUS = (code: string) =>
    code.replace(/borderradius=/g, 'borderRadius=');

  protected render() {
    return html`
      <app-component-page
        titleText="Boxes"
        name="box"
        path="components/box"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Boxes are containers for any content.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default background is <code>none</code>, default color is the
              current <code>foreground</code>.
            </p>
          `,
          html`<tini-box>Here is a default box</tini-box>`
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-box scheme=${baseName}
              >Box with ${baseName} background</tini-box
            >`
        )}

        <!-- contrast colors -->
        ${renderContrastColorsSection(
          contrastName => html`
            <tini-box scheme=${contrastName}
              >Box with ${contrastName} background</tini-box
            >
          `
        )}

        <!-- gradients -->
        ${renderBaseGradientsSection(
          baseName =>
            html`<tini-box scheme=${baseName}
              >Box with ${baseName} background</tini-box
            >`
        )}

        <!-- contrast gradients -->
        ${renderContrastGradientsSection(
          contrastName => html`
            <tini-box scheme=${contrastName}
              >Box with ${contrastName} background</tini-box
            >
          `
        )}

        <!-- text colors -->
        ${renderFontColorsSection(
          ['background', 'warning', 'gradient-danger'] as any,
          scheme =>
            html`<tini-box scheme=${scheme} color="primary"
              >Box with ${scheme} scheme / primary text</tini-box
            >`
        )}

        <!-- font sizes -->
        ${renderFontSizesSection(
          false,
          fontSize =>
            html`<tini-box fontSize=${fontSize}
              >Box with ${fontSize.replace('_', '.')} font size</tini-box
            >`
        )}

        <!-- borders -->
        ${renderSection(
          'borders',
          'Borders',
          html`
            <p>
              Default style is <code>solid</code>, default color is
              <code>medium</code>, default size is <code>border</code>, default
              border radius is <code>radius</code>.
            </p>
          `,
          html`
            ${[['solid'], ['primary'], ['2x'], ['2x dashed primary', '3x']].map(
              ([bordering, radius]) =>
                html`<tini-box
                  bordering=${bordering}
                  borderRadius=${ifDefined(radius as any)}
                  >Box with ${bordering}
                  border${!radius ? '' : ` and ${radius} radius`}</tini-box
                >`
            )}
          `,
          {
            preprocessCode: this.PREPROCESS_CODE_RADIUS,
          }
        )}

        <!-- paddings -->
        ${renderSpacesSection(
          'padding',
          padding => html`<tini-box bordering="solid" padding=${padding}
              ><div>Box with ${padding} padding</div></tini-box
            ></app-section>`
        )}

        <!-- margins -->
        ${renderSpacesSection(
          'margin',
          margin =>
            html`<div class="margin-container">
              <tini-box scheme="primary" margin=${margin}
                >Box with ${margin} margin</tini-box
              >
            </div>`
        )}
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
