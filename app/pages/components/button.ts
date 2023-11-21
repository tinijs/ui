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
  renderColorsSection,
  renderGradientsSection,
  renderScalesSection,
  renderFontColorsSection,
  renderFontSizesSection,
  renderTransformsSection,
  renderFiltersSection,
  RenderSectionOptions,
} from '../../helpers/varies';
import {ConsumerPlatforms} from '../../consts/main';
import {CodeBuilder, ReactCommonProps} from '../../helpers/code-builder';

import {AppComponentPageComponent} from '../../components/component-page';
import {
  AppSectionComponent,
  BLOCK_STYLES,
  FLEX_COLUMN_STYLES,
  WIDE_XS_STYLES,
} from '../../components/section';

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

  private readonly PREPROCESS_CODE: CodeBuilder = builder =>
    builder.attrCasing(['font size', 'justify content']);

  private readonly CODE_BUILDERS: Record<string, CodeBuilder> = {
    [ConsumerPlatforms.React]: builder =>
      builder.reactConverter(
        [/* tini-box, */ TiniButtonComponent.defaultTagName],
        [
          /* scheme, */ ReactCommonProps.Scale,
          ReactCommonProps.Color,
          ReactCommonProps.FontSize,
          ReactCommonProps.JustifyContent,
        ]
      ),
  };

  private renderSectionOptions?: RenderSectionOptions;
  onChanges() {
    this.renderSectionOptions = {
      preprocessCode: this.PREPROCESS_CODE,
      codeBuilders: this.CODE_BUILDERS,
      styleRecord: {
        common: FLEX_COLUMN_STYLES,
        contrastBoxes: WIDE_XS_STYLES,
        scales: BLOCK_STYLES,
        transforms: BLOCK_STYLES,
      },
    };
  }

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
          html`<tini-button>Default</tini-button>`,
          this.renderSectionOptions
        )}

        <!-- block -->
        ${renderSection(
          'block',
          'Block',
          null,
          html`<tini-button block>Block button</tini-button>`,
          this.renderSectionOptions
        )}

        <!-- colors -->
        ${renderColorsSection(
          color =>
            html`<tini-button scheme=${color}>Button ${color}</tini-button>`,
          this.renderSectionOptions
        )}

        <!-- disabled colors -->
        ${renderColorsSection(
          color =>
            html`<tini-button disabled scheme=${color}
              >Button ${color} disabled</tini-button
            >`,
          {
            ...this.renderSectionOptions,
            className: 'disabled',
            title: 'Disabled colors',
          }
        )}

        <!-- gradients -->
        ${renderGradientsSection(
          gradient =>
            html`<tini-button scheme=${gradient}
              >Button ${gradient}</tini-button
            >`,
          this.renderSectionOptions
        )}

        <!-- disabled gradients -->
        ${renderGradientsSection(
          gradient =>
            html`<tini-button disabled scheme=${gradient}
              >Button ${gradient} disabled</tini-button
            >`,
          {
            ...this.renderSectionOptions,
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
            >`,
          this.renderSectionOptions
        )}

        <!-- scales -->
        ${renderScalesSection(
          scale =>
            html`<tini-button scale=${scale} scheme="primary"
              >${scale}</tini-button
            > `,
          this.renderSectionOptions
        )}

        <!-- font sizes -->
        ${renderFontSizesSection(
          false,
          fontSize =>
            html`<tini-button scheme="primary" fontSize=${fontSize}
              >Button with ${fontSize} font size</tini-button
            >`,
          this.renderSectionOptions
        )}

        <!-- icons and justifications -->
        ${renderSection(
          'icons-and-justifications',
          'Icons and Justifications',
          null,
          html`
            <tini-button scheme="primary">
              <icon-heart-fill
                scale="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
              <span>Left</span>
            </tini-button>

            <tini-button scheme="primary">
              <span>Right</span>
              <icon-heart-fill
                scale="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
            </tini-button>

            <tini-button scheme="primary">
              <icon-heart-fill
                scale="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
              <span>Left Right</span>
              <icon-heart-fill
                scale="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
            </tini-button>

            <tini-button justifyContent="space-between" scheme="primary">
              <icon-heart-fill
                scale="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
              <span>Far Left</span>
            </tini-button>

            <tini-button justifyContent="space-between" scheme="primary">
              <span>Far Right</span>
              <icon-heart-fill
                scale="ss"
                scheme="primary-contrast"
              ></icon-heart-fill>
            </tini-button>

            <tini-button justifyContent="space-between" scheme="primary">
              <icon-chevron-left
                scale="ss"
                scheme="primary-contrast"
              ></icon-chevron-left>
              <span>Far Left Right</span>
              <icon-chevron-right
                scale="ss"
                scheme="primary-contrast"
              ></icon-chevron-right>
            </tini-button>

            <tini-button justifyContent="space-between" scheme="primary">
              <div class="content-group">
                <icon-heart-fill
                  scale="ss"
                  scheme="primary-contrast"
                ></icon-heart-fill>
                <span>Content Group</span>
              </div>
              <icon-chevron-right
                scale="ss"
                scheme="primary-contrast"
              ></icon-chevron-right>
            </tini-button>
          `,
          this.renderSectionOptions
        )}

        <!-- pseudo -->
        ${renderSection(
          'pseudos',
          'Pseudos',
          html`<p>Change hover behavior.</p>`,
          html`
            <tini-button scheme="primary" .hoverMap=${{scheme: 'primary-shade'}}
              >primary / primary-shade</tini-button
            >
            <tini-button scheme="secondary" .hoverMap=${{scheme: 'warning'}}
              >secondary / warning</tini-button
            >
            <tini-button
              scheme="tertiary"
              .hoverMap=${{scheme: 'gradient-tertiary'}}
              >tertiary / gradient-tertiary</tini-button
            >
            <tini-button
              scheme="gradient-success"
              .hoverMap=${{scheme: 'success'}}
              >gradient-success / success</tini-button
            >
            <tini-button
              scheme="gradient-warning"
              .hoverMap=${{scheme: 'gradient-danger'}}
              >gradient-warning / gradient-danger</tini-button
            >
            <tini-button scheme="danger" .hoverMap=${{color: 'dark'}}
              >danger / dark (color)</tini-button
            >
          `,
          this.renderSectionOptions
        )}

        <!-- transforms -->
        ${renderTransformsSection(
          html`
            <tini-button display="inline-block" transform="rotate(-45deg)"
              >Transform me</tini-button
            >
            <tini-button
              display="inline-block"
              transform="translateX(300px) scale(2) skew(45deg, 10deg)"
              >Transform me</tini-button
            >
          `,
          this.renderSectionOptions
        )}

        <!-- filters -->
        ${renderFiltersSection(
          html`
            <div class="group">
              <tini-button scheme="primary">Button</tini-button>
              <tini-button scheme="primary" filter="opacity(50%)"
                >Filtered button</tini-button
              >
            </div>
            <div class="group">
              <tini-button scheme="gradient-disco-club">Button</tini-button>
              <tini-button scheme="gradient-disco-club" filter="blur(1px)"
                >Filtered button</tini-button
              >
            </div>
            <div class="group">
              <tini-button scheme="gradient-mello-yellow">Button</tini-button>
              <tini-button
                scheme="gradient-mello-yellow"
                filter="grayscale(90%)"
                >Filtered button</tini-button
              >
            </div>
          `,
          this.renderSectionOptions
        )}

        <!-- pseudo -->
        ${renderSection(
          'overrides',
          'Overrides',
          html`<p>
            Refer different values for different themes (switch to
            <strong>Bootstrap Dark</strong> to see the differences).
          </p>`,
          html`
            <tini-button
              scheme="primary"
              fontSize="1x"
              .refers=${{
                'bootstrap/dark': {
                  scheme: 'secondary',
                  fontSize: '1_5x',
                },
              }}
              >primary + 1x font / secondary + 1_5x font</tini-button
            >
          `,
          this.renderSectionOptions
        )}
      </app-component-page>
    `;
  }

  static styles = css`
    .icons-and-justifications [slot='code'] {
      tini-button::part(root) {
        width: var(--wide-xs);
      }
    }
  `;
}
