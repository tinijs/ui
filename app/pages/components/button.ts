import {
  Page,
  TiniComponent,
  html,
  css,
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
  TiniButtonComponent,
} from '@tinijs/ui';
import {
  IconChevronLeftComponent,
  IconChevronRightComponent,
  IconHeartFillComponent,
} from '@tinijs/bootstrap-icons';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-button',
  components: [
    IconChevronLeftComponent,
    IconChevronRightComponent,
    IconHeartFillComponent,
    TiniBoxComponent,
    TiniButtonComponent,
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
export class AppPageComponentsButton extends TiniComponent {
  private readonly PART_LIST = [['button', 'The root part']];
  protected render() {
    return html`
      <app-component-page
        titleText="Buttons"
        name="button"
        path="components/button"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Use buttons to trigger actions.</div>

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default color is <code>medium</code>, default size is
              <code>md</code>.
            </p>
          </div>
          <div slot="code">
            <tini-button>Default</tini-button>
          </div>
        </app-section>

        ${BASE_COLORS.map(
          color => html`
            <app-section class="colors">
              <h2 slot="title">Color ${color}</h2>
              <div slot="code">
                <tini-button color=${color}>Button ${color}</tini-button>
                <tini-button color=${`${color}-shade` as any}
                  >Button ${color}-shade</tini-button
                >
                <tini-button color=${`${color}-shade-2` as any}
                  >Button ${color}-shade-2</tini-button
                >
                <tini-button color=${`${color}-shade-3` as any}
                  >Button ${color}-shade-3</tini-button
                >
                <tini-button color=${`${color}-shade-4` as any}
                  >Button ${color}-shade-4</tini-button
                >
                <tini-button color=${`${color}-shade-5` as any}
                  >Button ${color}-shade-5</tini-button
                >
                <tini-button color=${`${color}-tint` as any}
                  >Button ${color}-tint</tini-button
                >
                <tini-button color=${`${color}-tint-2` as any}
                  >Button ${color}-tint-2</tini-button
                >
                <tini-button color=${`${color}-tint-3` as any}
                  >Button ${color}-tint-3</tini-button
                >
                <tini-button color=${`${color}-tint-4` as any}
                  >Button ${color}-tint-4</tini-button
                >
                <tini-button color=${`${color}-tint-5` as any}
                  >Button ${color}-tint-5</tini-button
                >
                <tini-box background=${color}>
                  <tini-button color=${`${color}-contrast` as any}
                    >Button ${color}-contrast</tini-button
                  >
                </tini-box>
              </div>
            </app-section>
          `
        )}
        ${BASE_GRADIENTS.map(
          gradient => html`
            <app-section class="gradients">
              <h2 slot="title">${gradient.replace(/-/g, ' ')}</h2>
              <div slot="code">
                <tini-button color=${gradient}>Button ${gradient}</tini-button>
                <tini-button color=${`${gradient}-shade` as any}
                  >Button ${gradient}-shade</tini-button
                >
                <tini-button color=${`${gradient}-tint` as any}
                  >Button ${gradient}-tint</tini-button
                >
                <tini-box background=${gradient}>
                  <tini-button color=${`${gradient}-contrast` as any}
                    >Button ${gradient}-contrast</tini-button
                  >
                </tini-box>
              </div>
            </app-section>
          `
        )}

        <app-section class="disabled-colors">
          <h2 slot="title">Disabled colors</h2>
          <div slot="code">
            ${BASE_COLORS.map(
              color =>
                html`<tini-button color=${color} disabled
                  >Button ${color} disabled</tini-button
                >`
            )}
          </div>
        </app-section>

        <app-section class="disabled-gradients">
          <h2 slot="title">Disabled gradients</h2>
          <div slot="code">
            ${BASE_GRADIENTS.map(
              gradient =>
                html`<tini-button color=${gradient} disabled
                  >Gradient ${gradient} disabled</tini-button
                >`
            )}
          </div>
        </app-section>

        <app-section class="text-colors">
          <h2 slot="title">Text colors</h2>
          <div slot="content">
            <p>
              You can combine any text colors with any background colors. Below
              are just some examples.
            </p>
          </div>
          <div slot="code">
            <tini-button textColor="primary"
              >Default background / Primary text</tini-button
            >
            <tini-button color="warning" textColor="primary"
              >Warning background / Primary text</tini-button
            >
            <tini-button color="gradient-danger" textColor="primary"
              >Gradient Danger background / Primary text</tini-button
            >
          </div>
        </app-section>

        <app-section class="sizes">
          <h2 slot="title">Sizes</h2>
          <div slot="code">
            ${SIZES.map(
              size =>
                html`<tini-button size=${size} color="primary"
                  >${size}</tini-button
                > `
            )}
          </div>
        </app-section>

        <app-section class="icons-and-justifications">
          <h2 slot="title">Icons and Justifications</h2>
          <div slot="code">
            <tini-button color="primary">
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
              <span>Left</span>
            </tini-button>
            <!-- / -->
            <tini-button color="primary">
              <span>Right</span>
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
            </tini-button>
            <!-- / -->
            <tini-button color="primary">
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
              <span>Left Right</span>
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
            </tini-button>
            <!-- / -->
            <tini-button justify="space-between" color="primary">
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
              <span>Far Left</span>
            </tini-button>
            <!-- / -->
            <tini-button justify="space-between" color="primary">
              <span>Far Right</span>
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
            </tini-button>
            <!-- / -->
            <tini-button justify="space-between" color="primary">
              <icon-chevron-left
                size="ss"
                color="primary-contrast"
              ></icon-chevron-left>
              <span>Far Left Right</span>
              <icon-chevron-right
                size="ss"
                color="primary-contrast"
              ></icon-chevron-right>
            </tini-button>
            <!-- / -->
            <tini-button justify="space-between" color="primary">
              <span class="content-group">
                <icon-heart-fill
                  size="ss"
                  color="primary-contrast"
                ></icon-heart-fill>
                <span>Content Group</span>
              </span>
              <icon-chevron-right
                size="ss"
                color="primary-contrast"
              ></icon-chevron-right>
            </tini-button>
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-flow: column;
      gap: var(--size-space);

      tini-box {
        width: 325px;
      }
    }

    .sizes [slot='code'] {
      display: block;
    }

    .icons-and-justifications [slot='code'] {
      tini-button::part(button) {
        width: var(--wide-xs);
      }
    }
  `;
}
