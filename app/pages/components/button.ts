import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '../../../dev/bases';
import {TINI_BUTTON, TiniButtonComponent} from '../../../dev/components/button';

import {ConsumerPlatforms} from '../../consts/main';

import {APP_PAGE, AppPageComponent} from '../../components/page';
import {APP_SECTION, AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-button',
  components: {
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

  private readonly CODE_BUILDERS = {
    [ConsumerPlatforms.HTML]: (code?: string) => '<h1>HTML</h1>',
    [ConsumerPlatforms.Vue]: (code?: string) => '<h1>Vue</h1>',
    [ConsumerPlatforms.React]: (code?: string) => '<h1>React</h1>',
    [ConsumerPlatforms.Angular]: (code?: string) => '<h1>Angular</h1>',
  };

  protected render() {
    return html`
      <app-page titleText="Buttons" name="button" path="components/button">
        <div slot="description">
          Use <strong>buttons</strong> to trigger actions.
        </div>

        <app-section class="default" .codeBuilders=${this.CODE_BUILDERS}>
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

        <app-section class="dynamic" .codeBuilders=${this.CODE_BUILDERS}>
          <div slot="content">
            <h2>Dynamic</h2>
            <p>
              Text color is the current <code>background</code> color and
              background color is the current <code>foreground</code> color.
            </p>
          </div>
          <div slot="code">
            <tini-button color="dynamic">Dynamic</tini-button>
          </div>
        </app-section>

        <app-section class="colors" .codeBuilders=${this.CODE_BUILDERS}>
          <div slot="content"><h2>Colors</h2></div>
          <div slot="code">
            <tini-button color="primary">Primary</tini-button>
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

        <app-section
          class="disabled-colors"
          .codeBuilders=${this.CODE_BUILDERS}
        >
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

        <app-section class="gradients" .codeBuilders=${this.CODE_BUILDERS}>
          <div slot="content"><h2>Gradients</h2></div>
          <div slot="code">
            <tini-button color="gradient-dynamic">Gradient Dynamic</tini-button>
            <tini-button color="gradient-primary">Gradient Primary</tini-button>
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

        <app-section class="sizes" .codeBuilders=${this.CODE_BUILDERS}>
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
