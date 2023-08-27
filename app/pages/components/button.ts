import {html, css} from 'lit';
import {Page, TiniComponent, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniBoxComponent} from '@tinijs/ui/components/box';
import {TiniButtonComponent} from '@tinijs/ui/components/button';
import {IconChevronLeftComponent} from '@tinijs/bootstrap-icons/chevron-left';
import {IconChevronRightComponent} from '@tinijs/bootstrap-icons/chevron-right';
import {IconHeartFillComponent} from '@tinijs/bootstrap-icons/heart-fill';

import {
  renderSection,
  renderDefaultSection,
  renderBaseColorsSection,
  renderContrastColorsSection,
  renderBaseGradientsSection,
  renderContrastGradientsSection,
  renderSizesSection,
  renderFontColorsSection,
  renderFontSizesSection,
} from '../../helpers/varies';

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

  private readonly PREPROCESS_CODE_FONT_SIZE = (code: string) =>
    code.replace(/fontsize=/g, 'fontSize=');

  protected render() {
    return html`
      <app-component-page
        titleText="Buttons"
        name="button"
        path="components/button"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Use buttons to trigger actions.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default color is <code>medium</code>, default size is
              <code>md</code>.
            </p>
          `,
          html`<tini-button>Default</tini-button>`
        )}

        <!-- block -->
        ${renderSection(
          'block',
          'Block',
          null,
          html`<tini-button block>Block button</tini-button>`
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-button scheme=${baseName}
              >Button ${baseName}</tini-button
            >`
        )}

        <!-- contrast colors -->
        ${renderContrastColorsSection(
          contrastName => html`
            <tini-button scheme=${contrastName}
              >Button ${contrastName}</tini-button
            >
          `
        )}

        <!-- disabled colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-button disabled scheme=${baseName}
              >Button ${baseName} disabled</tini-button
            >`,
          {
            className: 'disabled',
            title: 'Disabled colors',
          }
        )}

        <!-- gradients -->
        ${renderBaseGradientsSection(
          baseName =>
            html`<tini-button scheme=${baseName}
              >Button ${baseName}</tini-button
            >`
        )}

        <!-- contrast gradients -->
        ${renderContrastGradientsSection(
          contrastName => html`
            <tini-button scheme=${contrastName}
              >Button ${contrastName}</tini-button
            >
          `
        )}

        <!-- disabled gradients -->
        ${renderBaseGradientsSection(
          baseName =>
            html`<tini-button disabled scheme=${baseName}
              >Button ${baseName} disabled</tini-button
            >`,
          {
            className: 'disabled',
            title: 'Disabled gradients',
          }
        )}

        <!-- text colors -->
        ${renderFontColorsSection(
          ['background', 'warning', 'gradient-danger'] as any,
          scheme =>
            html`<tini-button scheme=${scheme} color="primary"
              >Button with ${scheme} scheme / primary text</tini-button
            >`
        )}

        <!-- sizes -->
        ${renderSizesSection(
          size =>
            html`<tini-button size=${size} scheme="primary"
              >${size}</tini-button
            > `
        )}

        <!-- font sizes -->
        ${renderFontSizesSection(
          false,
          fontSize =>
            html`<tini-button scheme="primary" fontSize=${fontSize}
              >Button with ${fontSize} font size</tini-button
            >`,
          {
            preprocessCode: this.PREPROCESS_CODE_FONT_SIZE,
          }
        )}

        <!-- icons and justifications -->
        ${renderSection(
          'icons-and-justifications',
          'Icons and Justifications',
          null,
          html`
            <tini-button scheme="primary">
              <icon-heart-fill
                size="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
              <span>Left</span>
            </tini-button>

            <tini-button scheme="primary">
              <span>Right</span>
              <icon-heart-fill
                size="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
            </tini-button>

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

            <tini-button justify="space-between" scheme="primary">
              <icon-heart-fill
                size="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
              <span>Far Left</span>
            </tini-button>

            <tini-button justify="space-between" scheme="primary">
              <span>Far Right</span>
              <icon-heart-fill
                size="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
            </tini-button>

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
          `
        )}
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-flow: column;
      gap: var(--size-space);

      tini-box {
        width: 350px;
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
