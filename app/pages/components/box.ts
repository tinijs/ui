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
  renderColorsSection,
  renderGradientsSection,
  renderFontColorsSection,
  renderFontSizesSection,
  renderSpacesSection,
  renderTransformsSection,
  renderFiltersSection,
  RenderSectionOptions,
} from '../../helpers/varies';
import {ConsumerPlatforms} from '../../consts/main';
import {CodeBuilder, ReactCommonProps} from '../../helpers/code-builder';

import {AppComponentPageComponent} from '../../components/component-page';
import {
  AppSectionComponent,
  FLEX_COLUMN_STYLES,
} from '../../components/section';

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

  private readonly PREPROCESS_CODE: CodeBuilder = builder =>
    builder.attrCasing(['font size', 'border radius']);

  private readonly CODE_BUILDERS: Record<string, CodeBuilder> = {
    [ConsumerPlatforms.React]: builder =>
      builder.reactConverter(
        [
          /* tini-box, */
        ],
        [
          /* scheme, */ ReactCommonProps.FontSize,
          ReactCommonProps.Color,
          ReactCommonProps.BorderRadius,
        ]
      ),
  };

  private renderSectionOptions?: RenderSectionOptions;
  onChanges() {
    this.renderSectionOptions = {
      preprocessCode: this.PREPROCESS_CODE,
      codeBuilders: this.CODE_BUILDERS,
      styleRecord: {
        common: FLEX_COLUMN_STYLES,
      },
    };
  }

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
          html`<tini-box>Here is a default box</tini-box>`,
          this.renderSectionOptions
        )}

        <!-- colors -->
        ${renderColorsSection(
          color =>
            html`<tini-box scheme=${color}
              >Box with ${color} background</tini-box
            >`,
          this.renderSectionOptions
        )}

        <!-- gradients -->
        ${renderGradientsSection(
          gradient =>
            html`<tini-box scheme=${gradient}
              >Box with ${gradient} background</tini-box
            >`,
          this.renderSectionOptions
        )}

        <!-- text colors -->
        ${renderFontColorsSection(
          ['background', 'warning', 'gradient-danger'] as any,
          scheme =>
            html`<tini-box scheme=${scheme} color="primary"
              >Box with ${scheme} scheme / primary text</tini-box
            >`,
          this.renderSectionOptions
        )}

        <!-- font sizes -->
        ${renderFontSizesSection(
          false,
          fontSize =>
            html`<tini-box fontSize=${fontSize}
              >Box with ${fontSize.replace('_', '.')} font size</tini-box
            >`,
          this.renderSectionOptions
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
            ${[
              ['solid'],
              ['primary'],
              ['big'],
              ['big dashed primary', 'max'],
            ].map(
              ([border, radius]) =>
                html`<tini-box
                  border=${border}
                  borderRadius=${ifDefined(radius as any)}
                  >Box with <strong>${border}</strong> border${!radius
                    ? ''
                    : html` and <strong>${radius}</strong> radius`}</tini-box
                >`
            )}
          `,
          this.renderSectionOptions
        )}

        <!-- paddings -->
        ${renderSpacesSection(
          'padding',
          padding => html`<tini-box border="solid" padding=${padding}
              ><div class="content">Box with <strong>${padding}</strong> padding</div></tini-box
            ></app-section>`,
          this.renderSectionOptions
        )}

        <!-- margins -->
        ${renderSpacesSection(
          'margin',
          margin =>
            html`<div class="margin-container">
              <tini-box scheme="primary" margin=${margin}
                >Box with <strong>${margin}</strong> margin</tini-box
              >
            </div>`,
          this.renderSectionOptions
        )}

        <!-- transforms -->
        ${renderTransformsSection(
          html`
            <tini-box scheme="primary" transform="rotate(-15deg)"
              >Transform me</tini-box
            >
            <tini-box
              scheme="primary"
              transform="translateX(100px) skew(45deg, 10deg)"
              >Transform me</tini-box
            >
          `,
          this.renderSectionOptions
        )}

        <!-- filters -->
        ${renderFiltersSection(
          html`
            <tini-box scheme="primary" filter="opacity(50%)"
              >Filtered box</tini-box
            >
            <tini-box scheme="gradient-disco-club" filter="blur(1px)"
              >Filtered box</tini-box
            >
            <tini-box scheme="gradient-mello-yellow" filter="grayscale(90%)"
              >Filtered box</tini-box
            >
          `,
          this.renderSectionOptions
        )}
      </app-component-page>
    `;
  }

  static styles = css`
    .borders [slot='code'] .margin-container {
      border: 1px solid var(--color-medium);
      margin-top: var(--size-space);
    }

    .paddings [slot='code'] tini-box > div {
      background: var(--color-primary);
      color: var(--color-primary-contrast);
    }
  `;
}
