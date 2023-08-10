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

  static styles = css`
    .colors [slot='code'],
    .gradients [slot='code'],
    .sizes [slot='code'] {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .sizes {
      padding-bottom: 2rem;
    }
    .sizes [slot='code'] {
      align-items: flex-end;
    }
  `;

  @Input() src!: string;
  @Input() noVariants = false;
  @Input({type: Object}) preprocessCode?: any;
  @Input({type: Object}) codeBuildContext?: any;

  protected render() {
    return html`
      <app-section
        class="default"
        .preprocessCode=${this.preprocessCode}
        .codeBuildContext=${this.codeBuildContext}
      >
        <div slot="content">
          <h2>Default</h2>
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
            <app-section
              class="colors"
              .preprocessCode=${this.preprocessCode}
              .codeBuildContext=${this.codeBuildContext}
            >
              <div slot="content">
                <h2>Background</h2>
              </div>
              <div slot="code">
                <tini-box background="foreground">
                  <tini-icon color="background" .src=${this.src}></tini-icon>
                  <tini-box background="background">
                    <tini-icon
                      color="background-contrast"
                      .src=${this.src}
                    ></tini-icon>
                  </tini-box>
                  <tini-icon
                    color="background-shade"
                    .src=${this.src}
                  ></tini-icon>
                  <tini-icon
                    color="background-shade-2"
                    .src=${this.src}
                  ></tini-icon>
                  <tini-icon
                    color="background-shade-3"
                    .src=${this.src}
                  ></tini-icon>
                  <tini-icon
                    color="background-shade-4"
                    .src=${this.src}
                  ></tini-icon>
                  <tini-icon
                    color="background-shade-5"
                    .src=${this.src}
                  ></tini-icon>
                  <tini-icon
                    color="background-tint"
                    .src=${this.src}
                  ></tini-icon>
                  <tini-icon
                    color="background-tint-2"
                    .src=${this.src}
                  ></tini-icon>
                  <tini-icon
                    color="background-tint-3"
                    .src=${this.src}
                  ></tini-icon>
                  <tini-icon
                    color="background-tint-4"
                    .src=${this.src}
                  ></tini-icon>
                  <tini-icon
                    color="background-tint-5"
                    .src=${this.src}
                  ></tini-icon>
                </tini-box>
              </div>
            </app-section>

            <app-section
              class="colors"
              .preprocessCode=${this.preprocessCode}
              .codeBuildContext=${this.codeBuildContext}
            >
              <div slot="content">
                <h2>Foreground</h2>
              </div>
              <div slot="code">
                <tini-icon color="foreground" .src=${this.src}></tini-icon>
                <tini-box background="foreground">
                  <tini-icon
                    color="foreground-contrast"
                    .src=${this.src}
                  ></tini-icon>
                </tini-box>
                <tini-icon
                  color="foreground-shade"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon
                  color="foreground-shade-2"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon
                  color="foreground-shade-3"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon
                  color="foreground-shade-4"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon
                  color="foreground-shade-5"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon color="foreground-tint" .src=${this.src}></tini-icon>
                <tini-icon
                  color="foreground-tint-2"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon
                  color="foreground-tint-3"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon
                  color="foreground-tint-4"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon
                  color="foreground-tint-5"
                  .src=${this.src}
                ></tini-icon>
              </div>
            </app-section>

            <app-section
              class="colors"
              .preprocessCode=${this.preprocessCode}
              .codeBuildContext=${this.codeBuildContext}
            >
              <div slot="content">
                <h2>Color Primary</h2>
              </div>
              <div slot="code">
                <tini-icon color="primary" .src=${this.src}></tini-icon>
                <tini-box background="primary">
                  <tini-icon
                    color="primary-contrast"
                    .src=${this.src}
                  ></tini-icon>
                </tini-box>
                <tini-icon color="primary-shade" .src=${this.src}></tini-icon>
                <tini-icon color="primary-shade-2" .src=${this.src}></tini-icon>
                <tini-icon color="primary-shade-3" .src=${this.src}></tini-icon>
                <tini-icon color="primary-shade-4" .src=${this.src}></tini-icon>
                <tini-icon color="primary-shade-5" .src=${this.src}></tini-icon>
                <tini-icon color="primary-tint" .src=${this.src}></tini-icon>
                <tini-icon color="primary-tint-2" .src=${this.src}></tini-icon>
                <tini-icon color="primary-tint-3" .src=${this.src}></tini-icon>
                <tini-icon color="primary-tint-4" .src=${this.src}></tini-icon>
                <tini-icon color="primary-tint-5" .src=${this.src}></tini-icon>
              </div>
            </app-section>

            <app-section
              class="colors"
              .preprocessCode=${this.preprocessCode}
              .codeBuildContext=${this.codeBuildContext}
            >
              <div slot="content">
                <h2>Colors</h2>
              </div>
              <div slot="code">
                <tini-icon color="secondary" .src=${this.src}></tini-icon>
                <tini-icon color="tertiary" .src=${this.src}></tini-icon>
                <tini-icon color="success" .src=${this.src}></tini-icon>
                <tini-icon color="warning" .src=${this.src}></tini-icon>
                <tini-icon color="danger" .src=${this.src}></tini-icon>
                <tini-icon color="light" .src=${this.src}></tini-icon>
                <tini-icon color="medium" .src=${this.src}></tini-icon>
                <tini-icon color="dark" .src=${this.src}></tini-icon>
              </div>
            </app-section>

            <app-section
              class="gradients"
              .preprocessCode=${this.preprocessCode}
              .codeBuildContext=${this.codeBuildContext}
            >
              <div slot="content">
                <h2>Gradient Background</h2>
              </div>
              <div slot="code">
                <tini-box background="foreground">
                  <tini-icon
                    color="gradient-background"
                    .src=${this.src}
                  ></tini-icon>
                  <tini-box background="background">
                    <tini-icon
                      color="gradient-background-contrast"
                      .src=${this.src}
                    ></tini-icon>
                  </tini-box>
                  <tini-icon
                    color="gradient-background-shade"
                    .src=${this.src}
                  ></tini-icon>
                  <tini-icon
                    color="gradient-background-tint"
                    .src=${this.src}
                  ></tini-icon>
                </tini-box>
              </div>
            </app-section>

            <app-section
              class="gradients"
              .preprocessCode=${this.preprocessCode}
              .codeBuildContext=${this.codeBuildContext}
            >
              <div slot="content">
                <h2>Gradient Foreground</h2>
              </div>
              <div slot="code">
                <tini-icon
                  color="gradient-foreground"
                  .src=${this.src}
                ></tini-icon>
                <tini-box background="foreground">
                  <tini-icon
                    color="gradient-foreground-contrast"
                    .src=${this.src}
                  ></tini-icon>
                </tini-box>
                <tini-icon
                  color="gradient-foreground-shade"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon
                  color="gradient-foreground-tint"
                  .src=${this.src}
                ></tini-icon>
              </div>
            </app-section>

            <app-section
              class="gradients"
              .preprocessCode=${this.preprocessCode}
              .codeBuildContext=${this.codeBuildContext}
            >
              <div slot="content">
                <h2>Gradient Primary</h2>
              </div>
              <div slot="code">
                <tini-icon
                  color="gradient-primary"
                  .src=${this.src}
                ></tini-icon>
                <tini-box background="primary">
                  <tini-icon
                    color="gradient-primary-contrast"
                    .src=${this.src}
                  ></tini-icon>
                </tini-box>
                <tini-icon
                  color="gradient-primary-shade"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon
                  color="gradient-primary-tint"
                  .src=${this.src}
                ></tini-icon>
              </div>
            </app-section>

            <app-section
              class="gradients"
              .preprocessCode=${this.preprocessCode}
              .codeBuildContext=${this.codeBuildContext}
            >
              <div slot="content">
                <h2>Gradients</h2>
              </div>
              <div slot="code">
                <tini-icon
                  color="gradient-secondary"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon
                  color="gradient-tertiary"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon
                  color="gradient-success"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon
                  color="gradient-warning"
                  .src=${this.src}
                ></tini-icon>
                <tini-icon color="gradient-danger" .src=${this.src}></tini-icon>
                <tini-icon color="gradient-light" .src=${this.src}></tini-icon>
                <tini-icon color="gradient-medium" .src=${this.src}></tini-icon>
                <tini-icon color="gradient-dark" .src=${this.src}></tini-icon>
              </div>
            </app-section>
          `}

      <app-section
        class="sizes"
        .preprocessCode=${this.preprocessCode}
        .codeBuildContext=${this.codeBuildContext}
      >
        <div slot="content">
          <h2>Sizes</h2>
        </div>
        <div slot="code">
          <tini-icon size="xxxs" .src=${this.src}></tini-icon>
          <tini-icon size="xxs" .src=${this.src}></tini-icon>
          <tini-icon size="xs" .src=${this.src}></tini-icon>
          <tini-icon size="ss" .src=${this.src}></tini-icon>
          <tini-icon size="sm" .src=${this.src}></tini-icon>
          <tini-icon size="md" .src=${this.src}></tini-icon>
          <tini-icon size="ml" .src=${this.src}></tini-icon>
          <tini-icon size="lg" .src=${this.src}></tini-icon>
          <tini-icon size="sl" .src=${this.src}></tini-icon>
          <tini-icon size="xl" .src=${this.src}></tini-icon>
          <tini-icon size="xxl" .src=${this.src}></tini-icon>
          <tini-icon size="xxxl" .src=${this.src}></tini-icon>
        </div>
      </app-section>
    `;
  }
}
