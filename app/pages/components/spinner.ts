import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniBoxComponent} from '@tinijs/ui/components/box';
import {TiniSpinnerComponent} from '@tinijs/ui/components/spinner';

import {
  renderDefaultSection,
  renderBaseColorsSection,
  renderContrastColorsSection,
  renderSizesSection,
} from '../../helpers/varies';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-spinner',
  components: [
    TiniBoxComponent,
    TiniSpinnerComponent,
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
export class AppPageComponentsSpinner extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Spinner"
        name="spinner"
        path="components/spinner"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Spinner description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default color is <code>medium</code>, default size is
              <code>md</code>.
            </p>
          `,
          html`<tini-spinner></tini-spinner>`
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName => html`<tini-spinner scheme=${baseName}></tini-spinner>`
        )}

        <!-- contrast colors -->
        ${renderContrastColorsSection(
          contrastName =>
            html`<tini-spinner scheme=${contrastName}></tini-spinner>`
        )}

        <!-- sizes -->
        ${renderSizesSection(
          size =>
            html`<tini-spinner size=${size} scheme="primary"></tini-spinner>`
        )}
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      tini-box {
        width: 65px;
      }
    }
  `;
}
