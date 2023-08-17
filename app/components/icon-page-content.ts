import {
  Component,
  TiniComponent,
  Input,
  html,
  css,
  nothing,
  stylingWithBases,
  BASE_COLORS,
  BASE_GRADIENTS,
  SIZES,
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

import {renderColorVaries, renderGradientVaries} from '../helpers/varies';

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
  @Input({type: Object}) preprocessCode?: any;
  @Input({type: Object}) codeBuildContext?: any;

  protected render() {
    return html`
      <app-section
        class="default"
        .preprocessCode=${this.preprocessCode}
        .codeBuildContext=${this.codeBuildContext}
      >
        <h2 slot="title">Default</h2>
        <div slot="content">
          <p>
            Default color is the <strong>original</strong> color, and default
            size is <code>md</code>.
          </p>
        </div>
        <div slot="code">
          <tini-icon .src=${this.src}></tini-icon>
        </div>
      </app-section>

      ${this.noVariants
        ? nothing
        : html`
            ${BASE_COLORS.map(
              baseName => html`
                <app-section
                  class="colors"
                  .preprocessCode=${this.preprocessCode}
                  .codeBuildContext=${this.codeBuildContext}
                >
                  <h2 slot="title">Color ${baseName}</h2>
                  <div slot="code">
                    ${renderColorVaries(
                      baseName,
                      fullName =>
                        html`<tini-icon
                          .src=${this.src}
                          color=${fullName}
                        ></tini-icon>`
                    )}
                  </div>
                </app-section>
              `
            )}
            ${BASE_GRADIENTS.map(
              baseName => html`
                <app-section
                  class="gradients"
                  .preprocessCode=${this.preprocessCode}
                  .codeBuildContext=${this.codeBuildContext}
                >
                  <h2 slot="title">${baseName.replace(/-/g, ' ')}</h2>
                  <div slot="code">
                    ${renderGradientVaries(
                      baseName,
                      fullName =>
                        html`<tini-icon
                          .src=${this.src}
                          color=${fullName}
                        ></tini-icon>`
                    )}
                  </div>
                </app-section>
              `
            )}
          `}

      <app-section
        class="sizes"
        .preprocessCode=${this.preprocessCode}
        .codeBuildContext=${this.codeBuildContext}
      >
        <h2 slot="title">Sizes</h2>
        <div slot="code">
          ${SIZES.map(
            size => html`<tini-icon size=${size} .src=${this.src}></tini-icon>`
          )}
        </div>
      </app-section>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      tini-box {
        width: 65px;
      }
    }
  `;
}
