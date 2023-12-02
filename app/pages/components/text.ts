import {html} from 'lit';
import {Page, TiniComponent, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TextTypes, TiniTextComponent} from '@tinijs/ui/components/text';
import {TiniBoxComponent} from '@tinijs/ui/components/box';

import {
  renderSection,
  renderDefaultSection,
  renderColorsSection,
  renderGradientsSection,
  renderFontTypesSection,
  renderFontSizesSection,
  renderFontWeightsSection,
  renderTextTransformsSection,
  renderItalicUnderlineSection,
  renderTransformsSection,
  renderFiltersSection,
  RenderSectionOptions,
} from '../../helpers/varies';
import {ConsumerPlatforms} from '../../consts/main';
import {CodeBuilder, ReactCommonProps} from '../../helpers/code-builder';

import {AppComponentPageComponent} from '../../components/component-page';
import {
  AppSectionComponent,
  BLOCK_STYLES,
  FLEX_COLUMN_STYLES,
  WIDE_SS_STYLES,
} from '../../components/section';

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

  private readonly PREPROCESS_CODE: CodeBuilder = builder =>
    builder.attrCasing([
      'font type',
      'font size',
      'font weight',
      'text transform',
    ]);

  private readonly CODE_BUILDERS: Record<string, CodeBuilder> = {
    [ConsumerPlatforms.React]: builder =>
      builder.reactConverter(
        [/* tini-box, */ TiniTextComponent.defaultTagName],
        [/* scheme, */ ReactCommonProps.ColorButGradientsSupported]
      ),
  };

  private renderSectionOptions?: RenderSectionOptions;
  onChanges() {
    this.renderSectionOptions = {
      preprocessCode: this.PREPROCESS_CODE,
      codeBuilders: this.CODE_BUILDERS,
      styleRecord: {
        common: FLEX_COLUMN_STYLES,
        types: BLOCK_STYLES,
        contrastBoxes: WIDE_SS_STYLES,
        fontSizes: BLOCK_STYLES,
        transforms: BLOCK_STYLES,
      },
    };
  }

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

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              The default container tag is <code>span</code>. The default color
              is <code>foreground</code>.
            </p>
          `,
          html`<tini-text>This is a default text</tini-text>`,
          this.renderSectionOptions
        )}

        <!-- types -->
        ${renderSection(
          'types',
          'Types',
          html`<p>Use different tag types.</p>`,
          html`
            ${Object.values(TextTypes).map(
              type =>
                html`<tini-text type=${type}
                  >Use the &lt;${type}&gt; tag</tini-text
                >`
            )}
          `,
          this.renderSectionOptions
        )}

        <!-- colors -->
        ${renderColorsSection(
          color =>
            html`<tini-text color=${color}
              >Text with ${color} color</tini-text
            >`,
          this.renderSectionOptions
        )}

        <!-- gradients -->
        ${renderGradientsSection(
          gradient =>
            html`<tini-text color=${gradient}
              >Text with ${gradient} gradient</tini-text
            >`,
          this.renderSectionOptions
        )}

        <!-- fonts -->
        ${renderFontTypesSection(
          font =>
            html`<tini-text fontType=${font}
              >Text with ${font} font</tini-text
            >`,
          this.renderSectionOptions
        )}

        <!-- font sizes -->
        ${renderFontSizesSection(
          true,
          fontSize =>
            html`<tini-text fontSize=${fontSize}
              >${fontSize.replace('_', '.')}</tini-text
            >`,
          this.renderSectionOptions
        )}

        <!-- weights -->
        ${renderFontWeightsSection(
          weight =>
            html`<tini-text fontWeight=${weight}
              >Text with ${weight} weight</tini-text
            >`,
          this.renderSectionOptions
        )}

        <!-- transforms -->
        ${renderTextTransformsSection(
          transform =>
            html`<tini-text textTransform=${transform}
              >Text with ${transform} transform</tini-text
            >`,
          this.renderSectionOptions
        )}

        <!-- italic and underline -->
        ${renderItalicUnderlineSection(
          html`
            <tini-text italic>Text with italic style</tini-text>
            <tini-text italic color="gradient-primary" fontSize="2x"
              >Gradient text with italic style</tini-text
            >
            <tini-text underline>Text with underline decoration</tini-text>
            <tini-text underline color="gradient-primary" fontSize="2x"
              >Gradient text with underline decoration</tini-text
            >
          `,
          this.renderSectionOptions
        )}

        <!-- transforms -->
        ${renderTransformsSection(
          html`
            <tini-text
              fontSize="1_5x"
              display="inline-block"
              transform="rotate(-45deg)"
              >Transform me</tini-text
            >
            <tini-text
              display="inline-block"
              transform="translateX(300px) scale(5) skew(45deg, 10deg)"
              >Transform me</tini-text
            >
          `,
          this.renderSectionOptions
        )}

        <!-- filters -->
        ${renderFiltersSection(
          html`
            <div class="group">
              <tini-text color="primary" fontSize="1_5x">Original</tini-text>
              <tini-text color="primary" fontSize="1_5x" filter="opacity(50%)"
                >Filtered opacity(50%)</tini-text
              >
            </div>
            <div class="group">
              <tini-text color="gradient-disco-club" fontSize="1_5x"
                >Original</tini-text
              >
              <tini-text
                color="gradient-disco-club"
                fontSize="1_5x"
                filter="blur(2px)"
                >Filtered blur(2px)</tini-text
              >
            </div>
            <div class="group">
              <tini-text color="gradient-mello-yellow" fontSize="1_5x"
                >Original</tini-text
              >
              <tini-text
                color="gradient-mello-yellow"
                fontSize="1_5x"
                filter="grayscale(90%)"
                >Filtered grayscale(90%)</tini-text
              >
            </div>
          `,
          this.renderSectionOptions
        )}
      </app-component-page>
    `;
  }
}
