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
            ${BASE_COLORS.map(
              color => html`
                <app-section class="colors">
                  <div slot="content">
                    <h2>Color ${color}</h2>
                  </div>
                  <div slot="code">
                    <tini-icon .src=${this.src} color=${color}></tini-icon>
                    <div class="group">
                      <tini-icon
                        .src=${this.src}
                        color=${`${color}-shade` as any}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${color}-shade-2` as any}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${color}-shade-3` as any}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${color}-shade-4` as any}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${color}-shade-5` as any}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${color}-tint` as any}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${color}-tint-2` as any}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${color}-tint-3` as any}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${color}-tint-4` as any}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${color}-tint-5` as any}
                      ></tini-icon>
                    </div>
                    <tini-box background=${color}>
                      <tini-icon
                        .src=${this.src}
                        color=${`${color}-contrast` as any}
                      ></tini-icon>
                    </tini-box>
                  </div>
                </app-section>
              `
            )}
            ${BASE_GRADIENTS.map(
              gradient => html`
                <app-section class="gradients">
                  <div slot="content">
                    <h2>${gradient.replace(/-/g, ' ')}</h2>
                  </div>
                  <div slot="code">
                    <tini-icon .src=${this.src} color=${gradient}></tini-icon>
                    <div class="group">
                      <tini-icon
                        .src=${this.src}
                        color=${`${gradient}-shade` as any}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${gradient}-tint` as any}
                      ></tini-icon>
                    </div>
                    <tini-box background=${gradient}>
                      <tini-icon
                        .src=${this.src}
                        color=${`${gradient}-contrast` as any}
                      ></tini-icon>
                    </tini-box>
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

  static styles = css`
    app-section [slot='content'] h2 {
      text-transform: capitalize;
    }

    app-section [slot='code'] {
      display: flex;
      flex-flow: column;
      gap: var(--size-space);

      tini-box {
        width: 65px;
      }
    }

    .sizes [slot='code'] {
      display: block;
    }
  `;
}
