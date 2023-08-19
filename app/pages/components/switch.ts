import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniSwitchComponent,
} from '@tinijs/ui';

import {
  renderDefaultSection,
  renderBaseColorsSection,
  renderBaseGradientsSection,
  renderSizesSection,
} from '../../helpers/varies';

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
  private readonly PART_LIST = [
    ['root', 'The root part'],
    ['switch', 'The switch container'],
    ['input', 'The input element'],
    ['slider', 'The slider part'],
    ['label', 'The label'],
  ];

  protected render() {
    return html`
      <app-component-page
        titleText="Switch"
        name="switch"
        path="components/switch"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Switch description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default color is <code>medium</code>, default size is
              <code>md</code>.
            </p>
          `,
          html`
            <tini-switch label="Default switch checkbox input"></tini-switch>
            <tini-switch
              checked
              label="Default switch checkbox input (checked)"
            ></tini-switch>
          `
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-switch checked scheme=${baseName}></tini-switch>`
        )}

        <!-- gradients -->
        ${renderBaseGradientsSection(
          baseName =>
            html`<tini-switch checked scheme=${baseName}></tini-switch>`
        )}

        <!-- sizes -->
        ${renderSizesSection(
          size => html`<tini-switch checked size=${size}></tini-switch>`
        )}
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
