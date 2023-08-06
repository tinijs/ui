import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TINI_BOX, TiniBoxComponent} from '@tinijs/ui/components/box';
import {TINI_BUTTON, TiniButtonComponent} from '@tinijs/ui/components/button';

import {APP_PAGE, AppPageComponent} from '../../components/page';
import {APP_SECTION, AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-button',
  components: {
    [TINI_BOX]: TiniBoxComponent,
    [TINI_BUTTON]: TiniButtonComponent,
    [APP_PAGE]: AppPageComponent,
    [APP_SECTION]: AppSectionComponent,
  },
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
  static styles = css`
    .default [slot='code'] tini-button,
    .dynamic [slot='code'] tini-button {
      width: 150px;
    }

    .colors [slot='code'],
    .disabled-colors [slot='code'],
    .gradients [slot='code'] {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .sizes [slot='code'] {
      display: flex;
      align-items: flex-end;
      gap: 1rem;
    }
  `;

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

        <app-section class="dynamic">
          <div slot="content">
            <h2>Dynamic</h2>
            <p>
              Text color is the current <code>background</code> color and
              background color is the current <code>foreground</code> color.
            </p>
          </div>
          <div slot="code">
            <tini-button color="dynamic">Dynamic</tini-button>
            <tini-box background="dynamic">
              <tini-button color="dynamic-contrast"
                >Dynamic Contrast</tini-button
              >
            </tini-box>
            <tini-button color="dynamic-shade">Dynamic Shade</tini-button>
            <tini-button color="dynamic-shade-2">Dynamic Shade 2</tini-button>
            <tini-button color="dynamic-shade-3">Dynamic Shade 3</tini-button>
            <tini-button color="dynamic-shade-4">Dynamic Shade 4</tini-button>
            <tini-button color="dynamic-shade-5">Dynamic Shade 5</tini-button>
            <tini-button color="dynamic-tint">Dynamic Tint</tini-button>
            <tini-button color="dynamic-tint-2">Dynamic Tint 2</tini-button>
            <tini-button color="dynamic-tint-3">Dynamic Tint 3</tini-button>
            <tini-button color="dynamic-tint-4">Dynamic Tint 4</tini-button>
            <tini-button color="dynamic-tint-5">Dynamic Tint 5</tini-button>
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
          <div slot="content"><h2>Gradient Dynamic</h2></div>
          <div slot="code">
            <tini-button color="gradient-dynamic">Gradient Dynamic</tini-button>
            <tini-box background="dynamic">
              <tini-button color="gradient-dynamic-contrast"
                >Gradient Dynamic Contrast</tini-button
              >
            </tini-box>
            <tini-button color="gradient-dynamic-shade"
              >Gradient Dynamic Shade</tini-button
            >
            <tini-button color="gradient-dynamic-tint"
              >Gradient Dynamic Tint</tini-button
            >
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
            <tini-button color="dynamic" textColor="warning"
              >Dynamic / Warning</tini-button
            >
            <tini-button color="warning" textColor="danger"
              >Warning / Danger</tini-button
            >
            <tini-button color="gradient-dynamic" textColor="success"
              >Gradient Dynamic / Success</tini-button
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
      </app-page>
    `;
  }
}
