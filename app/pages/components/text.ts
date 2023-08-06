import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '@tinijs/ui/bases';
import {TINI_BOX, TiniBoxComponent} from '@tinijs/ui/components/box';
import {TINI_TEXT, TiniTextComponent} from '@tinijs/ui/components/text';

import {APP_PAGE, AppPageComponent} from '../../components/page';
import {APP_SECTION, AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-text',
  components: {
    [TINI_BOX]: TiniBoxComponent,
    [TINI_TEXT]: TiniTextComponent,
    [APP_PAGE]: AppPageComponent,
    [APP_SECTION]: AppSectionComponent,
  },
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
    ]),
  },
})
export class AppPageComponentsText extends TiniComponent {
  static styles = css``;

  protected render() {
    return html`
      <app-page titleText="Texts" name="text" path="components/text">
        <div slot="description">Text text text.</div>

        <app-section class="default">
          <div slot="content">
            <h2>Default</h2>
            <p>Default color is <code>foreground</code>.</p>
          </div>
          <div slot="code">
            <tini-text>This is a text.</tini-text>
          </div>
        </app-section>

        <app-section class="colors">
          <div slot="content">
            <h2>Color Primary</h2>
          </div>
          <div slot="code">
            <tini-text color="primary">This is a text.</tini-text>
            <tini-box background="primary">
              <tini-text color="primary-contrast">This is a text.</tini-text>
            </tini-box>
            <tini-text color="primary-shade">This is a text.</tini-text>
            <tini-text color="primary-shade-2">This is a text.</tini-text>
            <tini-text color="primary-shade-3">This is a text.</tini-text>
            <tini-text color="primary-shade-4">This is a text.</tini-text>
            <tini-text color="primary-shade-5">This is a text.</tini-text>
            <tini-text color="primary-tint">This is a text.</tini-text>
            <tini-text color="primary-tint-2">This is a text.</tini-text>
            <tini-text color="primary-tint-3">This is a text.</tini-text>
            <tini-text color="primary-tint-4">This is a text.</tini-text>
            <tini-text color="primary-tint-5">This is a text.</tini-text>
          </div>
        </app-section>

        <app-section class="colors">
          <div slot="content">
            <h2>Colors</h2>
          </div>
          <div slot="code">
            <tini-text color="secondary">This is a text.</tini-text>
            <tini-text color="tertiary">This is a text.</tini-text>
            <tini-text color="success">This is a text.</tini-text>
            <tini-text color="warning">This is a text.</tini-text>
            <tini-text color="danger">This is a text.</tini-text>
            <tini-text color="light">This is a text.</tini-text>
            <tini-text color="medium">This is a text.</tini-text>
            <tini-text color="dark">This is a text.</tini-text>
          </div>
        </app-section>

        <app-section class="gradients">
          <div slot="content">
            <h2>Gradient Primary</h2>
          </div>
          <div slot="code">
            <tini-text color="gradient-primary">This is a text.</tini-text>
            <tini-box background="primary">
              <tini-text color="gradient-primary-contrast"
                >This is a text.</tini-text
              >
            </tini-box>
            <tini-text color="gradient-primary-shade"
              >This is a text.</tini-text
            >
            <tini-text color="gradient-primary-tint">This is a text.</tini-text>
          </div>
        </app-section>

        <app-section class="gradients">
          <div slot="content">
            <h2>Gradients</h2>
          </div>
          <div slot="code">
            <tini-text color="gradient-secondary">This is a text.</tini-text>
            <tini-text color="gradient-tertiary">This is a text.</tini-text>
            <tini-text color="gradient-success">This is a text.</tini-text>
            <tini-text color="gradient-warning">This is a text.</tini-text>
            <tini-text color="gradient-danger">This is a text.</tini-text>
            <tini-text color="gradient-light">This is a text.</tini-text>
            <tini-text color="gradient-medium">This is a text.</tini-text>
            <tini-text color="gradient-dark">This is a text.</tini-text>
          </div>
        </app-section>
      </app-page>
    `;
  }
}
