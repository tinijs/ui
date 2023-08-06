import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TINI_BOX, TiniBoxComponent} from '@tinijs/ui/components/box';

import {APP_PAGE, AppPageComponent} from '../../components/page';
import {APP_SECTION, AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-box',
  components: {
    [TINI_BOX]: TiniBoxComponent,
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
export class AppPageComponentsBox extends TiniComponent {
  static styles = css``;

  protected render() {
    return html`
      <app-page titleText="Boxes" name="box" path="components/box">
        <div slot="description">Boxes are containers for any content.</div>

        <app-section class="default">
          <div slot="content">
            <h2>Default</h2>
            <p>
              Default background is the current <code>background</code>, default
              color is the current <code>foreground</code>.
            </p>
          </div>
          <div slot="code">
            <tini-box>Here is some content.</tini-box>
          </div>
        </app-section>

        <app-section class="dynamic">
          <div slot="content">
            <h2>Dynamic</h2>
            <p>
              Default background is the current <code>foreground</code>, default
              color is the current <code>background</code>.
            </p>
          </div>
          <div slot="code">
            <tini-box background="dynamic">Here is some content.</tini-box>
            <tini-box background="dynamic">
              <tini-box background="dynamic-contrast"
                >Here is some content.</tini-box
              >
            </tini-box>
            <tini-box background="dynamic-shade"
              >Here is some content.</tini-box
            >
            <tini-box background="dynamic-shade-2"
              >Here is some content.</tini-box
            >
            <tini-box background="dynamic-shade-3"
              >Here is some content.</tini-box
            >
            <tini-box background="dynamic-shade-4"
              >Here is some content.</tini-box
            >
            <tini-box background="dynamic-shade-5"
              >Here is some content.</tini-box
            >
            <tini-box background="dynamic-tint">Here is some content.</tini-box>
            <tini-box background="dynamic-tint-2"
              >Here is some content.</tini-box
            >
            <tini-box background="dynamic-tint-3"
              >Here is some content.</tini-box
            >
            <tini-box background="dynamic-tint-4"
              >Here is some content.</tini-box
            >
            <tini-box background="dynamic-tint-5"
              >Here is some content.</tini-box
            >
          </div>
        </app-section>

        <app-section class="colors">
          <div slot="content">
            <h2>Color Primary</h2>
          </div>
          <div slot="code">
            <tini-box background="primary">Here is some content.</tini-box>
            <tini-box background="primary">
              <tini-box background="primary-contrast"
                >Here is some content.</tini-box
              >
            </tini-box>
            <tini-box background="primary-shade"
              >Here is some content.</tini-box
            >
            <tini-box background="primary-shade-2"
              >Here is some content.</tini-box
            >
            <tini-box background="primary-shade-3"
              >Here is some content.</tini-box
            >
            <tini-box background="primary-shade-4"
              >Here is some content.</tini-box
            >
            <tini-box background="primary-shade-5"
              >Here is some content.</tini-box
            >
            <tini-box background="primary-tint">Here is some content.</tini-box>
            <tini-box background="primary-tint-2"
              >Here is some content.</tini-box
            >
            <tini-box background="primary-tint-3"
              >Here is some content.</tini-box
            >
            <tini-box background="primary-tint-4"
              >Here is some content.</tini-box
            >
            <tini-box background="primary-tint-5"
              >Here is some content.</tini-box
            >
          </div>
        </app-section>

        <app-section class="colors">
          <div slot="content">
            <h2>Colors</h2>
          </div>
          <div slot="code">
            <tini-box background="secondary">Here is some content.</tini-box>
            <tini-box background="tertiary">Here is some content.</tini-box>
            <tini-box background="success">Here is some content.</tini-box>
            <tini-box background="warning">Here is some content.</tini-box>
            <tini-box background="danger">Here is some content.</tini-box>
            <tini-box background="light">Here is some content.</tini-box>
            <tini-box background="medium">Here is some content.</tini-box>
            <tini-box background="dark">Here is some content.</tini-box>
          </div>
        </app-section>

        <app-section class="gradients">
          <div slot="content">
            <h2>Gradient Dynamic</h2>
          </div>
          <div slot="code">
            <tini-box background="gradient-dynamic"
              >Here is some content.</tini-box
            >
            <tini-box background="dynamic">
              <tini-box background="gradient-dynamic-contrast"
                >Here is some content.</tini-box
              >
            </tini-box>
            <tini-box background="gradient-dynamic-shade"
              >Here is some content.</tini-box
            >
            <tini-box background="gradient-dynamic-tint"
              >Here is some content.</tini-box
            >
          </div>
        </app-section>

        <app-section class="gradients">
          <div slot="content">
            <h2>Gradient Primary</h2>
          </div>
          <div slot="code">
            <tini-box background="gradient-primary"
              >Here is some content.</tini-box
            >
            <tini-box background="primary">
              <tini-box background="gradient-primary-contrast"
                >Here is some content.</tini-box
              >
            </tini-box>
            <tini-box background="gradient-primary-shade"
              >Here is some content.</tini-box
            >
            <tini-box background="gradient-primary-tint"
              >Here is some content.</tini-box
            >
          </div>
        </app-section>

        <app-section class="gradients">
          <div slot="content">
            <h2>Gradients</h2>
          </div>
          <div slot="code">
            <tini-box background="gradient-secondary"
              >Here is some content.</tini-box
            >
            <tini-box background="gradient-tertiary"
              >Here is some content.</tini-box
            >
            <tini-box background="gradient-success"
              >Here is some content.</tini-box
            >
            <tini-box background="gradient-warning"
              >Here is some content.</tini-box
            >
            <tini-box background="gradient-danger"
              >Here is some content.</tini-box
            >
            <tini-box background="gradient-light"
              >Here is some content.</tini-box
            >
            <tini-box background="gradient-medium"
              >Here is some content.</tini-box
            >
            <tini-box background="gradient-dark"
              >Here is some content.</tini-box
            >
          </div>
        </app-section>
      </app-page>
    `;
  }
}
