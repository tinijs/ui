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
  TiniSwitchComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-switch',
  components: [
    TiniSwitchComponent,
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
export class AppPageComponentsSwitch extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Switch"
        name="switch"
        path="components/switch"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Switch description.</div>

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default color is <code>medium</code>, default size is
              <code>md</code>.
            </p>
          </div>
          <div slot="code">
            <tini-switch label="Default switch checkbox input"></tini-switch>
            <tini-switch
              checked
              label="Default switch checkbox input (checked)"
            ></tini-switch>
          </div>
        </app-section>

        <app-section class="colors">
          <h2 slot="title">Colors</h2>
          <div slot="code">
            ${BASE_COLORS.map(
              color => html`<tini-switch checked scheme=${color}></tini-switch>`
            )}
          </div>
        </app-section>

        <app-section class="gradients">
          <h2 slot="title">Gradients</h2>
          <div slot="code">
            ${BASE_GRADIENTS.map(
              gradient =>
                html`<tini-switch checked scheme=${gradient}></tini-switch>`
            )}
          </div>
        </app-section>

        <app-section class="sizes">
          <h2 slot="title">Sizes</h2>
          <div slot="code">
            ${SIZES.map(
              size => html`<tini-switch checked size=${size}></tini-switch>`
            )}
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    .default [slot='code'] {
      display: flex;
      flex-flow: column;
      gap: var(--size-space);
    }
  `;
}
