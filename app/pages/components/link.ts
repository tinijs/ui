import {
  Page,
  TiniComponent,
  html,
  css,
  stylingWithBases,
  BASE_COLORS,
  BASE_GRADIENTS,
  FONT_TYPES,
  SIZE_FACTORS,
  FONT_WEIGHTS,
  TEXT_TRANSFORMS,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
  TiniLinkComponent,
} from '@tinijs/ui';

import {renderColorVaries, renderGradientVaries} from '../../helpers/varies';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-link',
  components: [
    TiniBoxComponent,
    TiniLinkComponent,
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
export class AppPageComponentsLink extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];
  protected render() {
    return html`
      <app-component-page
        titleText="Links"
        name="link"
        path="components/link"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Use link to navigate around.</div>

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="code">
            <tini-link href="#">This is a default link!</tini-link>
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
                    html`<tini-link href="#" color=${fullName}
                      >Link with ${fullName} color</tini-link
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
              <div slot="content">
                <p>
                  Note that the gradient links only support underline for the
                  last one line of text.
                </p>
              </div>
              <div slot="code">
                ${renderGradientVaries(
                  baseName,
                  fullName =>
                    html`<tini-link href="#" color=${fullName}
                      >Link with ${fullName} color</tini-link
                    >`
                )}
              </div>
            </app-section>
          `
        )}

        <app-section class="fonts">
          <h2 slot="title">Fonts</h2>
          <div slot="code">
            ${FONT_TYPES.map(
              font =>
                html`<tini-link href="#" font=${font}
                  >Link with ${font} font</tini-link
                >`
            )}
          </div>
        </app-section>

        <app-section class="sizes">
          <h2 slot="title">Sizes</h2>
          <div slot="code">
            ${SIZE_FACTORS.map(
              size =>
                html`<tini-link href="#" font-size=${size}
                  >${size.replace('_', '.')}</tini-link
                >`
            )}
          </div>
        </app-section>

        <app-section class="weights">
          <h2 slot="title">Weights</h2>
          <div slot="content">
            <p>Please note that the active font the respective weights.</p>
          </div>
          <div slot="code">
            ${FONT_WEIGHTS.map(
              weight =>
                html`<tini-link href="#" weight=${weight}
                  >Text with ${weight} weight</tini-link
                >`
            )}
          </div>
        </app-section>

        <app-section class="transfroms">
          <h2 slot="title">Text transforms</h2>
          <div slot="code">
            ${TEXT_TRANSFORMS.map(
              transform =>
                html`<tini-link href="#" transform=${transform}
                  >Text with ${transform} transform</tini-link
                >`
            )}
          </div>
        </app-section>

        <app-section class="italic-underline">
          <h2 slot="title">Italic and Underline</h2>
          <div slot="code">
            <tini-link href="#" italic>Link with italic style</tini-link><br />
            <tini-link href="#" italic color="gradient-primary" font-size="2x"
              >Gradient link with italic style</tini-link
            ><br />
            <tini-link href="#" underline
              >Link with underline decoration</tini-link
            ><br />
            <tini-link
              href="#"
              underline
              color="gradient-primary"
              font-size="2x"
              >Gradient link with underline decoration</tini-link
            >
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-flow: column;
      gap: var(--size-space-0_5x);

      tini-box {
        width: 375px;
      }
    }

    .sizes [slot='code'],
    .italic-underline [slot='code'] {
      display: block;
    }
  `;
}
