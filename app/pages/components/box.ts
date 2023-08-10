import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-box',
  components: [
    TiniBoxComponent,
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
export class AppPageComponentsBox extends TiniComponent {
  static styles = css``;

  protected render() {
    return html`
      <app-component-page
        titleText="Boxes"
        packageName="@tinijs/ui"
        name="box"
        path="components/box"
      >
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

        <app-section class="colors">
          <div slot="content">
            <h2>Background</h2>
          </div>
          <div slot="code">
            <tini-box background="background">Here is some content.</tini-box>
            <tini-box background="background">
              <tini-box background="background-contrast"
                >Here is some content.</tini-box
              >
            </tini-box>
            <tini-box background="background-shade"
              >Here is some content.</tini-box
            >
            <tini-box background="background-shade-2"
              >Here is some content.</tini-box
            >
            <tini-box background="background-shade-3"
              >Here is some content.</tini-box
            >
            <tini-box background="background-shade-4"
              >Here is some content.</tini-box
            >
            <tini-box background="background-shade-5"
              >Here is some content.</tini-box
            >
            <tini-box background="background-tint"
              >Here is some content.</tini-box
            >
            <tini-box background="background-tint-2"
              >Here is some content.</tini-box
            >
            <tini-box background="background-tint-3"
              >Here is some content.</tini-box
            >
            <tini-box background="background-tint-4"
              >Here is some content.</tini-box
            >
            <tini-box background="background-tint-5"
              >Here is some content.</tini-box
            >
          </div>
        </app-section>

        <app-section class="colors">
          <div slot="content">
            <h2>Foreground</h2>
          </div>
          <div slot="code">
            <tini-box background="background">
              <tini-box background="foreground">Here is some content.</tini-box>
              <tini-box background="foreground">
                <tini-box background="foreground-contrast"
                  >Here is some content.</tini-box
                >
              </tini-box>
              <tini-box background="foreground-shade"
                >Here is some content.</tini-box
              >
              <tini-box background="foreground-shade-2"
                >Here is some content.</tini-box
              >
              <tini-box background="foreground-shade-3"
                >Here is some content.</tini-box
              >
              <tini-box background="foreground-shade-4"
                >Here is some content.</tini-box
              >
              <tini-box background="foreground-shade-5"
                >Here is some content.</tini-box
              >
              <tini-box background="foreground-tint"
                >Here is some content.</tini-box
              >
              <tini-box background="foreground-tint-2"
                >Here is some content.</tini-box
              >
              <tini-box background="foreground-tint-3"
                >Here is some content.</tini-box
              >
              <tini-box background="foreground-tint-4"
                >Here is some content.</tini-box
              >
              <tini-box background="foreground-tint-5"
                >Here is some content.</tini-box
              >
            </tini-box>
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
            <h2>Gradient Background</h2>
          </div>
          <div slot="code">
            <tini-box background="gradient-background"
              >Here is some content.</tini-box
            >
            <tini-box background="background">
              <tini-box background="gradient-background-contrast"
                >Here is some content.</tini-box
              >
            </tini-box>
            <tini-box background="gradient-background-shade"
              >Here is some content.</tini-box
            >
            <tini-box background="gradient-background-tint"
              >Here is some content.</tini-box
            >
          </div>
        </app-section>

        <app-section class="gradients">
          <div slot="content">
            <h2>Gradient Foreground</h2>
          </div>
          <div slot="code">
            <tini-box background="background">
              <tini-box background="gradient-foreground"
                >Here is some content.</tini-box
              >
              <tini-box background="foreground">
                <tini-box background="gradient-foreground-contrast"
                  >Here is some content.</tini-box
                >
              </tini-box>
              <tini-box background="gradient-foreground-shade"
                >Here is some content.</tini-box
              >
              <tini-box background="gradient-foreground-tint"
                >Here is some content.</tini-box
              >
            </tini-box>
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
      </app-component-page>
    `;
  }
}
