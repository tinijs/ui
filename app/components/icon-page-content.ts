import {html, css, nothing} from 'lit';
import {Component, TiniComponent, Input, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniBoxComponent} from '@tinijs/ui/components/box';
import {TiniIconComponent} from '@tinijs/ui/components/icon';

import {
  renderSection,
  renderDefaultSection,
  renderBaseColorsSection,
  renderContrastColorsSection,
  renderBaseGradientsSection,
  renderContrastGradientsSection,
  renderScalesSection,
  renderTransformsSection,
  renderFiltersSection,
} from '../helpers/varies';
import {AppSectionComponent} from './section';

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
  static readonly defaultTagName = 'app-icon-page-content';

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

      <!-- scales -->
      ${renderScalesSection(
        scale => html`<tini-icon scale=${scale} .src=${this.src}></tini-icon>`,
        this.renderSectionOptions
      )}

      <!-- transforms -->
      ${renderTransformsSection(html`
        <tini-icon transform="rotate(-45deg)" .src=${this.src}></tini-icon>
        <tini-icon
          transform="scale(2.5) translate(30px, 15px)"
          .src=${this.src}
        ></tini-icon>
        <tini-icon
          transform="translate(170px, 10px) scale(3.5) skew(20deg, 10deg)"
          .src=${this.src}
        ></tini-icon>
      `)}

      <!-- filters -->
      ${renderFiltersSection(html`
        <div class="group">
          <tini-icon scheme="primary" scale="xxl" .src=${this.src}></tini-icon>
          <tini-icon
            scheme="primary"
            scale="xxl"
            filter="opacity(50%)"
            .src=${this.src}
          ></tini-icon>
        </div>
        <div class="group">
          <tini-icon
            scheme="gradient-disco-club"
            scale="xxl"
            .src=${this.src}
          ></tini-icon>
          <tini-icon
            scheme="gradient-disco-club"
            scale="xxl"
            filter="blur(5px)"
            .src=${this.src}
          ></tini-icon>
        </div>
        <div class="group">
          <tini-icon
            scheme="gradient-mello-yellow"
            scale="xxl"
            .src=${this.src}
          ></tini-icon>
          <tini-icon
            scheme="gradient-mello-yellow"
            scale="xxl"
            filter="grayscale(90%)"
            .src=${this.src}
          ></tini-icon>
        </div>
      `)}
    `;
  }

  static styles = css`
    .contrasts [slot='code'],
    .common-contrasts [slot='code'] {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `;
}
