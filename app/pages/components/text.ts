import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
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
  renderBaseColorsSection,
  renderContrastColorsSection,
  renderBaseGradientsSection,
  renderContrastGradientsSection,
  renderFontTypesSection,
  renderFontSizesSection,
  renderWeightsSection,
  renderTransformsSection,
} from '../../helpers/varies';

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

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              The default container tag is <code>span</code>. The default color
              is <code>foreground</code>.
            </p>
          `,
          html`<tini-text>This is a default text</tini-text>`
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
          `
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-text color=${baseName}
              >Text with ${baseName} color</tini-text
            >`
        )}

        <!-- contrast colors -->
        ${renderContrastColorsSection(
          contrastName => html`
            <tini-text color=${contrastName}
              >Text with ${contrastName} color</tini-text
            >
          `
        )}

        <!-- gradients -->
        ${renderBaseGradientsSection(
          baseName =>
            html`<tini-text color=${baseName}
              >Text with ${baseName} color</tini-text
            >`
        )}

        <!-- contrast gradients -->
        ${renderContrastGradientsSection(
          contrastName => html`
            <tini-text color=${contrastName}
              >Text with ${contrastName} color</tini-text
            >
          `
        )}

        <!-- fonts -->
        ${renderFontTypesSection(
          font =>
            html`<tini-text font=${font}>Text with ${font} font</tini-text>`
        )}

        <!-- font sizes -->
        ${renderFontSizesSection(
          true,
          fontSize =>
            html`<tini-text fontSize=${fontSize}
              >${fontSize.replace('_', '.')}</tini-text
            >`
        )}

        <!-- weights -->
        ${renderWeightsSection(
          weight =>
            html`<tini-text weight=${weight}
              >Text with ${weight} weight</tini-text
            >`
        )}

        <!-- transforms -->
        ${renderTransformsSection(
          transform =>
            html`<tini-text transform=${transform}
              >Text with ${transform} transform</tini-text
            >`
        )}

        <!-- italic and underline -->
        ${renderSection(
          'italic-underline',
          'Italic and Underline',
          null,
          html`
            <tini-text italic>Text with italic style</tini-text><br />
            <tini-text italic color="gradient-primary" fontSize="2x"
              >Gradient text with italic style</tini-text
            ><br />
            <tini-text underline>Text with underline decoration</tini-text
            ><br />
            <tini-text underline color="gradient-primary" fontSize="2x"
              >Gradient text with underline decoration</tini-text
            >
          `
        )}
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
