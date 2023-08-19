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

import {renderColorVaries, renderGradientVaries} from '../../helpers/varies';

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
  private readonly PART_LIST = [['root', 'The root part']];
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
          baseName => html`
            <app-section class="colors">
              <h2 slot="title">Color ${baseName}</h2>
              <div slot="code">
                ${renderColorVaries(
                  baseName,
                  fullName =>
                    html`<tini-button scheme=${fullName}
                      >Button ${fullName}</tini-button
                    >`
                )}
              </div>
            </app-section>
          `
        )}
        ${BASE_GRADIENTS.map(
          baseName => html`
            <app-section class="gradients">
              <h2 slot="title">${baseName.replace(/-/g, ' ')}</h2>
              <div slot="code">
                ${renderGradientVaries(
                  baseName,
                  fullName =>
                    html`<tini-button scheme=${fullName}
                      >Button ${fullName}</tini-button
                    >`
                )}
              </div>
            </app-section>
          `
        )}

        <app-section class="disabled-colors">
          <h2 slot="title">Disabled colors</h2>
          <div slot="code">
            ${BASE_COLORS.map(
              color =>
                html`<tini-button scheme=${color} disabled
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
                html`<tini-button scheme=${gradient} disabled
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
            <tini-button color="primary"
              >Default background / Primary text</tini-button
            >
            <tini-button scheme="warning" color="primary"
              >Warning background / Primary text</tini-button
            >
            <tini-button scheme="gradient-danger" color="primary"
              >Gradient Danger background / Primary text</tini-button
            >
          </div>
        </app-section>

        <app-section class="sizes">
          <h2 slot="title">Sizes</h2>
          <div slot="code">
            ${SIZES.map(
              size =>
                html`<tini-button size=${size} scheme="primary"
                  >${size}</tini-button
                > `
            )}
          </div>
        </app-section>

        <app-section class="font-sizes">
          <h2 slot="title">Font sizes</h2>
          <div slot="content">
            <p>Font size from 0.1x to 10x.</p>
          </div>
          <div slot="code">
            <tini-button scheme="primary" fontSize="0_5x"
              >Font size 0.5x</tini-button
            >
            <tini-button scheme="primary" fontSize="1x"
              >Font size 1x</tini-button
            >
            <tini-button scheme="primary" fontSize="3x"
              >Font size 3x</tini-button
            >
          </div>
        </app-section>

        <app-section class="icons-and-justifications">
          <h2 slot="title">Icons and Justifications</h2>
          <div slot="code">
            <tini-button scheme="primary">
              <icon-heart-fill
                size="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
              <span>Left</span>
            </tini-button>
            <!-- / -->
            <tini-button scheme="primary">
              <span>Right</span>
              <icon-heart-fill
                size="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
            </tini-button>
            <!-- / -->
            <tini-button scheme="primary">
              <icon-heart-fill
                size="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
              <span>Left Right</span>
              <icon-heart-fill
                size="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
            </tini-button>
            <!-- / -->
            <tini-button justify="space-between" scheme="primary">
              <icon-heart-fill
                size="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
              <span>Far Left</span>
            </tini-button>
            <!-- / -->
            <tini-button justify="space-between" scheme="primary">
              <span>Far Right</span>
              <icon-heart-fill
                size="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
            </tini-button>
            <!-- / -->
            <tini-button justify="space-between" scheme="primary">
              <icon-chevron-left
                size="ss"
                scheme="primary-contrast"
              ></icon-chevron-left>
              <span>Far Left Right</span>
              <icon-chevron-right
                size="ss"
                scheme="primary-contrast"
              ></icon-chevron-right>
            </tini-button>
            <!-- / -->
            <tini-button justify="space-between" scheme="primary">
              <div class="content-group">
                <icon-heart-fill
                  size="ss"
                  scheme="primary-contrast"
                ></icon-heart-fill>
                <span>Content Group</span>
              </div>
              <icon-chevron-right
                size="ss"
                scheme="primary-contrast"
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
      tini-button::part(root) {
        width: var(--wide-xs);
      }
    }
  `;
}
