import {
  Page,
  TiniComponent,
  html,
  css,
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
          <div slot="content">
            <h2>Default</h2>
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
              <div slot="content">
                <h2>Color ${color}</h2>
              </div>
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
              <div slot="content">
                <h2>${gradient.replace(/-/g, ' ')}</h2>
              </div>
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
          <div slot="content"><h2>Disabled colors</h2></div>
          <div slot="code">
            <tini-button color="primary" disabled>Primary</tini-button>
            <tini-button color="secondary" disabled>Secondary</tini-button>
            <tini-button color="tertiary" disabled>Tertiary</tini-button>
            <tini-button color="success" disabled>Success</tini-button>
            <tini-button color="danger" disabled>Danger</tini-button>
            <tini-button color="warning" disabled>Warning</tini-button>
            <tini-button color="light" disabled>Light</tini-button>
            <tini-button color="medium" disabled>Medium</tini-button>
            <tini-button color="dark" disabled>Dark</tini-button>
          </div>
        </app-section>

        <app-section class="disabled-gradients">
          <div slot="content"><h2>Disabled gradients</h2></div>
          <div slot="code">
            <tini-button color="gradient-primary" disabled
              >Gradient Primary</tini-button
            >
            <tini-button color="gradient-secondary" disabled
              >Gradient Secondary</tini-button
            >
            <tini-button color="gradient-tertiary" disabled
              >Gradient Tertiary</tini-button
            >
            <tini-button color="gradient-success" disabled
              >Gradient Success</tini-button
            >
            <tini-button color="gradient-danger" disabled
              >Gradient Danger</tini-button
            >
            <tini-button color="gradient-warning" disabled
              >Gradient Warning</tini-button
            >
            <tini-button color="gradient-light" disabled
              >Gradient Light</tini-button
            >
            <tini-button color="gradient-medium" disabled
              >Gradient Medium</tini-button
            >
            <tini-button color="gradient-dark" disabled
              >Gradient Dark</tini-button
            >
          </div>
        </app-section>

        <app-section class="text-colors">
          <div slot="content">
            <h2>Text colors</h2>
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
          <div slot="content"><h2>Sizes</h2></div>
          <div slot="code">
            <tini-button size="xxxs" color="primary">XXXS</tini-button>
            <tini-button size="xxs" color="primary">XXS</tini-button>
            <tini-button size="xs" color="primary">XS</tini-button>
            <tini-button size="ss" color="primary">SS</tini-button>
            <tini-button size="sm" color="primary">SM</tini-button>
            <tini-button size="md" color="primary">MD</tini-button>
            <tini-button size="ml" color="primary">ML</tini-button>
            <tini-button size="lg" color="primary">LG</tini-button>
            <tini-button size="sl" color="primary">SL</tini-button>
            <tini-button size="xl" color="primary">XL</tini-button>
            <tini-button size="xxl" color="primary">XXL</tini-button>
            <tini-button size="xxxl" color="primary">XXXL</tini-button>
          </div>
        </app-section>

        <app-section class="icons-and-justifications">
          <div slot="content"><h2>Icons and Justifications</h2></div>
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
    app-section [slot='content'] h2 {
      text-transform: capitalize;
    }

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
