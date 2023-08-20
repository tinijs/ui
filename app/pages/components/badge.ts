import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
  TiniBadgeComponent,
} from '@tinijs/ui';

import {
  renderSection,
  renderDefaultSection,
  renderBaseColorsSection,
  renderContrastColorsSection,
  renderBaseGradientsSection,
  renderContrastGradientsSection,
  renderFontColorsSection,
  renderSizesSection,
} from '../../helpers/varies';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-badge',
  components: [
    TiniBoxComponent,
    TiniBadgeComponent,
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
export class AppPageComponentsBadge extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Badge"
        name="badge"
        path="components/badge"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Badge description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default color is <code>medium</code>, default size is
              <code>md</code>.
            </p>
          `,
          html`
            ${['0', '99+', '1000'].map(
              content => html`<tini-badge>${content}</tini-badge>`
            )}
          `
        )}

        <!-- pilled-rounded -->
        ${renderSection(
          'pilled-rounded',
          'Pilled and Rouded',
          html`
            <p>
              Rounded badges are best for values with less than or equals 2
              characters.
            </p>
          `,
          html`
            <div class="group">
              ${[
                ['0', 'primary'],
                ['99+', 'secondary'],
                ['1000', 'tertiary'],
              ].map(
                ([content, scheme]) =>
                  html`<tini-badge pilled scheme=${scheme as any}
                    >${content}</tini-badge
                  >`
              )}
            </div>
            <div class="group" style="margin-top: 1rem;">
              ${[
                ['0', 'success'],
                ['99+', 'warning'],
                ['1000', 'danger'],
              ].map(
                ([content, scheme]) =>
                  html`<tini-badge rounded scheme=${scheme as any}
                    >${content}</tini-badge
                  >`
              )}
            </div>
          `
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName => html`<tini-badge scheme=${baseName}>99+</tini-badge>`
        )}

        <!-- contrasts -->
        ${renderContrastColorsSection(
          contrastName =>
            html`<tini-badge scheme=${contrastName}>99+</tini-badge>`
        )}

        <!-- gradients -->
        ${renderBaseGradientsSection(
          baseName => html`<tini-badge scheme=${baseName}>99+</tini-badge>`
        )}

        <!-- contrast gradients -->
        ${renderContrastGradientsSection(
          contrastName =>
            html`<tini-badge scheme=${contrastName}>99+</tini-badge>`
        )}

        <!-- text colors -->
        ${renderFontColorsSection(
          ['medium', 'warning', 'gradient-danger'] as any,
          scheme =>
            html`<tini-badge scheme=${scheme} color="primary">99+</tini-badge>`
        )}

        <!-- sizes -->
        ${renderSizesSection(
          size =>
            html`<tini-badge size=${size} scheme="primary">1000</tini-badge>`
        )}
      </app-component-page>
    `;
  }

  static styles = css`
    .contrasts [slot='code'] {
      display: flex;
      gap: 1rem;
    }
  `;
}
