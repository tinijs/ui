import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
  TiniLabelComponent,
} from '@tinijs/ui';

import {
  renderDefaultSection,
  renderBaseColorsSection,
  renderContrastColorsSection,
  renderSizesSection,
  renderFontColorsSection,
} from '../../helpers/varies';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-label',
  components: [
    TiniBoxComponent,
    TiniLabelComponent,
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
export class AppPageComponentsLabel extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Label"
        name="label"
        path="components/label"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Label description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default color is <code>medium</code>, default size is
              <code>md</code>.
            </p>
          `,
          html`
            <tini-label>Label</tini-label>
            <tini-label pilled>Label</tini-label>
          `
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName => html`<tini-label scheme=${baseName}>Label</tini-label>`
        )}

        <!-- contrast colors -->
        ${renderContrastColorsSection(
          contrastName => html`
            <tini-label scheme=${contrastName}>Label</tini-label>
          `
        )}

        <!-- text colors -->
        ${renderFontColorsSection(
          ['medium', 'warning'] as any,
          scheme =>
            html`<tini-label scheme=${scheme as any} color="primary"
              >Label</tini-label
            >`
        )}

        <!-- sizes -->
        ${renderSizesSection(
          size =>
            html`<tini-label size=${size} scheme="primary">Label</tini-label>`
        )}
      </app-component-page>
    `;
  }

  static styles = css`
    .contrasts [slot='code'] {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `;
}
