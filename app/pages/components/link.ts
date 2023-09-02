import {html, css} from 'lit';
import {Page, TiniComponent, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniBoxComponent} from '@tinijs/ui/components/box';
import {TiniLinkComponent} from '@tinijs/ui/components/link';

import {
  renderSection,
  renderDefaultSection,
  renderBaseColorsSection,
  renderContrastColorsSection,
  renderBaseGradientsSection,
  renderContrastGradientsSection,
  renderFontTypesSection,
  renderFontSizesSection,
  renderFontWeightsSection,
  renderTextTransformsSection,
  renderItalicUnderlineSection,
  renderTransformsSection,
  renderFiltersSection,
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
            html`<tini-link href="#" fontType=${font}
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
        ${renderFontWeightsSection(
          weight =>
            html`<tini-link href="#" fontWeight=${weight}
              >Text with ${weight} weight</tini-link
            >`
        )}

        <!-- transforms -->
        ${renderTextTransformsSection(
          transform =>
            html`<tini-link href="#" textTransform=${transform}
              >Text with ${transform} transform</tini-link
            >`
        )}

        <!-- italic-underline -->
        ${renderItalicUnderlineSection(html`
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
        `)}

        <!-- transforms -->
        ${renderTransformsSection(html`
          <tini-link
            fontSize="1_5x"
            style="display: inline-flex;"
            transform="rotate(-45deg)"
            >Transform me</tini-link
          >
          <tini-link
            style="display: inline-flex;"
            transform="translateX(370px) scale(5) skew(45deg, 10deg)"
            >Transform me</tini-link
          >
        `)}

        <!-- filters -->
        ${renderFiltersSection(html`
          <div class="group">
            <tini-link color="primary" fontSize="1_5x">Link</tini-link>
            <tini-link color="primary" fontSize="1_5x" filter="opacity(50%)"
              >Filtered link</tini-link
            >
          </div>
          <div class="group">
            <tini-link color="gradient-disco-club" fontSize="1_5x"
              >Link</tini-link
            >
            <tini-link
              color="gradient-disco-club"
              fontSize="1_5x"
              filter="blur(2px)"
              >Filtered link</tini-link
            >
          </div>
          <div class="group">
            <tini-link color="gradient-mello-yellow" fontSize="1_5x"
              >Link</tini-link
            >
            <tini-link
              color="gradient-mello-yellow"
              fontSize="1_5x"
              filter="grayscale(90%)"
              >Filtered link</tini-link
            >
          </div>
        `)}
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
