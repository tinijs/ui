import {
  Component,
  TiniComponent,
  Input,
  html,
  css,
  nothing,
  stylingWithBases,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
  TiniIconComponent,
} from '@tinijs/ui';

import {
  renderDefaultSection,
  renderBaseColorsSection,
  renderContrastColorsSection,
  renderBaseGradientsSection,
  renderContrastGradientsSection,
  renderSizesSection,
} from '../helpers/varies';
import {AppSectionComponent} from './section';

export const APP_ICON_PAGE_CONTENT = 'app-icon-page-content';
@Component({
  components: [TiniBoxComponent, TiniIconComponent],
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
export class AppIconPageContentComponent extends TiniComponent {
  static readonly defaultTagName = APP_ICON_PAGE_CONTENT;

  @Input({type: String}) src!: string;
  @Input({type: Boolean}) noVariants = false;
  @Input({type: Object}) preprocessCode?: AppSectionComponent['preprocessCode'];
  @Input({type: Object})
  codeBuildContext?: AppSectionComponent['codeBuildContext'];

  private renderSectionOptions?: any;
  willUpdate() {
    this.renderSectionOptions = {
      preprocessCode: this.preprocessCode,
      codeBuildContext: this.codeBuildContext,
    };
  }

  protected render() {
    return html`
      <!-- default -->
      ${renderDefaultSection(
        html`
          <p>
            Default color is the <strong>original</strong> color, and default
            size is <code>md</code>.
          </p>
        `,
        html`<tini-icon .src=${this.src}></tini-icon>`,
        this.renderSectionOptions
      )}

      <!-- variants -->
      ${this.noVariants
        ? nothing
        : html`
            <!-- colors -->
            ${renderBaseColorsSection(
              baseName =>
                html`<tini-icon
                  .src=${this.src}
                  scheme=${baseName}
                ></tini-icon>`,
              this.renderSectionOptions
            )}

            <!-- contrast colors -->
            ${renderContrastColorsSection(
              contrastName =>
                html`<tini-icon
                  .src=${this.src}
                  scheme=${contrastName}
                ></tini-icon>`,
              this.renderSectionOptions
            )}

            <!-- gradients -->
            ${renderBaseGradientsSection(
              baseName =>
                html`<tini-icon
                  .src=${this.src}
                  scheme=${baseName}
                ></tini-icon>`,
              this.renderSectionOptions
            )}

            <!-- contrast gradients -->
            ${renderContrastGradientsSection(
              contrastName =>
                html`<tini-icon
                  .src=${this.src}
                  scheme=${contrastName}
                ></tini-icon>`,
              this.renderSectionOptions
            )}
          `}

      <!-- sizes -->
      ${renderSizesSection(
        size =>
          html`<tini-icon
            scheme="primary"
            size=${size}
            .src=${this.src}
          ></tini-icon>`,
        this.renderSectionOptions
      )}
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
