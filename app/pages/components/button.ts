import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
  TiniButtonComponent,
} from '@tinijs/ui';
import {IconChevronLeftComponent} from '@tinijs/bootstrap-icons/chevron-left';
import {IconChevronRightComponent} from '@tinijs/bootstrap-icons/chevron-right';
import {IconHeartFillComponent} from '@tinijs/bootstrap-icons/heart-fill';

import {AppPageComponent} from '../../components/page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-button',
  components: [
    IconChevronLeftComponent,
    IconChevronRightComponent,
    IconHeartFillComponent,
    TiniBoxComponent,
    TiniButtonComponent,
    AppPageComponent,
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
  static styles = css``;

  protected render() {
    return html`
      <app-page titleText="Buttons" name="button" path="components/button">
        <div slot="description">
          Use <strong>buttons</strong> to trigger actions.
        </div>

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

        <app-section class="colors">
          <div slot="content">
            <h2>Background</h2>
          </div>
          <div slot="code">
            <tini-box background="foreground">
              <tini-button color="background">Background</tini-button>
              <tini-box background="background">
                <tini-button color="background-contrast"
                  >Background Contrast</tini-button
                >
              </tini-box>
              <tini-button color="background-shade"
                >Background Shade</tini-button
              >
              <tini-button color="background-shade-2"
                >Background Shade 2</tini-button
              >
              <tini-button color="background-shade-3"
                >Background Shade 3</tini-button
              >
              <tini-button color="background-shade-4"
                >Background Shade 4</tini-button
              >
              <tini-button color="background-shade-5"
                >Background Shade 5</tini-button
              >
              <tini-button color="background-tint">Background Tint</tini-button>
              <tini-button color="background-tint-2"
                >Background Tint 2</tini-button
              >
              <tini-button color="background-tint-3"
                >Background Tint 3</tini-button
              >
              <tini-button color="background-tint-4"
                >Background Tint 4</tini-button
              >
              <tini-button color="background-tint-5"
                >Background Tint 5</tini-button
              >
            </tini-box>
          </div>
        </app-section>

        <app-section class="colors">
          <div slot="content">
            <h2>Foreground</h2>
          </div>
          <div slot="code">
            <tini-button color="foreground">Foreground</tini-button>
            <tini-box background="foreground">
              <tini-button color="foreground-contrast"
                >Foreground Contrast</tini-button
              >
            </tini-box>
            <tini-button color="foreground-shade">Foreground Shade</tini-button>
            <tini-button color="foreground-shade-2"
              >Foreground Shade 2</tini-button
            >
            <tini-button color="foreground-shade-3"
              >Foreground Shade 3</tini-button
            >
            <tini-button color="foreground-shade-4"
              >Foreground Shade 4</tini-button
            >
            <tini-button color="foreground-shade-5"
              >Foreground Shade 5</tini-button
            >
            <tini-button color="foreground-tint">Foreground Tint</tini-button>
            <tini-button color="foreground-tint-2"
              >Foreground Tint 2</tini-button
            >
            <tini-button color="foreground-tint-3"
              >Foreground Tint 3</tini-button
            >
            <tini-button color="foreground-tint-4"
              >Foreground Tint 4</tini-button
            >
            <tini-button color="foreground-tint-5"
              >Foreground Tint 5</tini-button
            >
          </div>
        </app-section>

        <app-section class="colors">
          <div slot="content"><h2>Color Primary</h2></div>
          <div slot="code">
            <tini-button color="primary">Primary</tini-button>
            <tini-box background="primary">
              <tini-button color="primary-contrast"
                >Primary Contrast</tini-button
              >
            </tini-box>
            <tini-button color="primary-shade">Primary Shade</tini-button>
            <tini-button color="primary-shade-2">Primary Shade 2</tini-button>
            <tini-button color="primary-shade-3">Primary Shade 3</tini-button>
            <tini-button color="primary-shade-4">Primary Shade 4</tini-button>
            <tini-button color="primary-shade-5">Primary Shade 5</tini-button>
            <tini-button color="primary-tint">Primary Tint</tini-button>
            <tini-button color="primary-tint-2">Primary Tint 2</tini-button>
            <tini-button color="primary-tint-3">Primary Tint 3</tini-button>
            <tini-button color="primary-tint-4">Primary Tint 4</tini-button>
            <tini-button color="primary-tint-5">Primary Tint 5</tini-button>
          </div>
        </app-section>

        <app-section class="colors">
          <div slot="content"><h2>Colors</h2></div>
          <div slot="code">
            <tini-button color="secondary">Secondary</tini-button>
            <tini-button color="tertiary">Tertiary</tini-button>
            <tini-button color="success">Success</tini-button>
            <tini-button color="danger">Danger</tini-button>
            <tini-button color="warning">Warning</tini-button>
            <tini-button color="light">Light</tini-button>
            <tini-button color="medium">Medium</tini-button>
            <tini-button color="dark">Dark</tini-button>
          </div>
        </app-section>

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

        <app-section class="gradients">
          <div slot="content"><h2>Gradient Background</h2></div>
          <div slot="code">
            <tini-button color="gradient-background"
              >Gradient Background</tini-button
            >
            <tini-box background="background">
              <tini-button color="gradient-background-contrast"
                >Gradient Background Contrast</tini-button
              >
            </tini-box>
            <tini-button color="gradient-background-shade"
              >Gradient Background Shade</tini-button
            >
            <tini-button color="gradient-background-tint"
              >Gradient Background Tint</tini-button
            >
          </div>
        </app-section>

        <app-section class="gradients">
          <div slot="content"><h2>Gradient Foreground</h2></div>
          <div slot="code">
            <tini-box background="background">
              <tini-button color="gradient-foreground"
                >Gradient Foreground</tini-button
              >
              <tini-box background="foreground">
                <tini-button color="gradient-foreground-contrast"
                  >Gradient Foreground Contrast</tini-button
                >
              </tini-box>
              <tini-button color="gradient-foreground-shade"
                >Gradient Foreground Shade</tini-button
              >
              <tini-button color="gradient-foreground-tint"
                >Gradient Foreground Tint</tini-button
              >
            </tini-box>
          </div>
        </app-section>

        <app-section class="gradients">
          <div slot="content"><h2>Gradient Primary</h2></div>
          <div slot="code">
            <tini-button color="gradient-primary">Gradient Primary</tini-button>
            <tini-box background="primary">
              <tini-button color="gradient-primary-contrast"
                >Gradient Primary Contrast</tini-button
              >
            </tini-box>
            <tini-button color="gradient-primary-shade"
              >Gradient Primary Shade</tini-button
            >
            <tini-button color="gradient-primary-tint"
              >Gradient Primary Tint</tini-button
            >
          </div>
        </app-section>

        <app-section class="gradients">
          <div slot="content"><h2>Gradients</h2></div>
          <div slot="code">
            <tini-button color="gradient-secondary"
              >Gradient Secondary</tini-button
            >
            <tini-button color="gradient-tertiary"
              >Gradient Tertiary</tini-button
            >
            <tini-button color="gradient-success">Gradient Success</tini-button>
            <tini-button color="gradient-danger">Gradient Danger</tini-button>
            <tini-button color="gradient-warning">Gradient Warning</tini-button>
            <tini-button color="gradient-light">Gradient Light</tini-button>
            <tini-button color="gradient-medium">Gradient Medium</tini-button>
            <tini-button color="gradient-dark">Gradient Dark</tini-button>
          </div>
        </app-section>

        <app-section class="text-colors">
          <div slot="content">
            <h2>Text colors</h2>
            <p>Forced text colors.</p>
          </div>
          <div slot="code">
            <tini-button textColor="primary">Default / Primary</tini-button>
            <tini-button color="background" textColor="foreground"
              >Background / Foregorund</tini-button
            >
            <tini-button color="foreground" textColor="background"
              >Foregorund / Background</tini-button
            >
            <tini-button color="warning" textColor="danger"
              >Warning / Danger</tini-button
            >
            <tini-button color="gradient-background" textColor="foreground"
              >Gradient Background / Foreground</tini-button
            >
            <tini-button color="gradient-foreground" textColor="background"
              >Gradient Foreground / Background</tini-button
            >
            <tini-button color="gradient-success" textColor="light"
              >Gradient Success / Light</tini-button
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

        <app-section class="with-icons">
          <div slot="content"><h2>With icons</h2></div>
          <div slot="code">
            <tini-button color="primary">
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
              <span>Left</span>
            </tini-button>
            <!--  -->
            <tini-button color="primary">
              <span>Right</span>
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
            </tini-button>
            <!--  -->
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
            <!--  -->
            <tini-button justify="space-between" color="primary">
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
              <span>Far Left</span>
            </tini-button>
            <!--  -->
            <tini-button justify="space-between" color="primary">
              <span>Far Right</span>
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
            </tini-button>
            <!--  -->
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
            <!--  -->
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
      </app-page>
    `;
  }
}
