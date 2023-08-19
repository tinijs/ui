import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
  TiniLinkComponent,
} from '@tinijs/ui';

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
  private readonly PART_LIST = [['root', 'The root part']];
  protected render() {
    return html`
      <app-component-page
        titleText="Links"
        name="link"
        path="components/link"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Use link to navigate around.</div>

        <!-- default -->
        ${renderDefaultSection(
          null,
          html`<tini-link href="#">This is a default link!</tini-link>`
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-link href="#" color=${baseName}
              >Link with ${baseName} color</tini-link
            >`
        )}

        <!-- contrast colors -->
        ${renderContrastColorsSection(
          contrastName => html`
            <tini-link color=${contrastName}
              >Link with ${contrastName} color</tini-link
            >
          `
        )}

        <!-- gradients -->
        ${renderBaseGradientsSection(
          baseName =>
            html`<tini-link href="#" color=${baseName}
              >Link with ${baseName} color</tini-link
            >`
        )}

        <!-- contrast gradients -->
        ${renderContrastGradientsSection(
          contrastName => html`
            <tini-link color=${contrastName}
              >Link with ${contrastName} color</tini-link
            >
          `
        )}

        <!-- fonts -->
        ${renderFontTypesSection(
          font =>
            html`<tini-link href="#" font=${font}
              >Link with ${font} font</tini-link
            >`
        )}

        <!-- font sizes -->
        ${renderFontSizesSection(
          true,
          fontSize =>
            html`<tini-link href="#" fontSize=${fontSize}
              >${fontSize.replace('_', '.')}</tini-link
            >`
        )}

        <!-- weights -->
        ${renderWeightsSection(
          weight =>
            html`<tini-link href="#" weight=${weight}
              >Text with ${weight} weight</tini-link
            >`
        )}

        <!-- transforms -->
        ${renderTransformsSection(
          transform =>
            html`<tini-link href="#" transform=${transform}
              >Text with ${transform} transform</tini-link
            >`
        )}

        <!-- italic-underline -->
        ${renderSection(
          'italic-underline',
          'Italic and Underline',
          null,
          html`
            <tini-link href="#" italic>Link with italic style</tini-link><br />
            <tini-link href="#" italic color="gradient-primary" fontSize="2x"
              >Gradient link with italic style</tini-link
            ><br />
            <tini-link href="#" underline
              >Link with underline decoration</tini-link
            ><br />
            <tini-link href="#" underline color="gradient-primary" fontSize="2x"
              >Gradient link with underline decoration</tini-link
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

    .font-sizes [slot='code'],
    .italic-underline [slot='code'] {
      display: block;
    }
  `;
}
