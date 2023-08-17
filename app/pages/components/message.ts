import {
  Page,
  TiniComponent,
  html,
  css,
  stylingWithBases,
  BASE_COLORS,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
  TiniMessageComponent,
} from '@tinijs/ui';

import {renderColorVaries} from '../../helpers/varies';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-message',
  components: [
    TiniBoxComponent,
    TiniMessageComponent,
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
export class AppPageComponentsMessage extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Message"
        name="message"
        path="components/message"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Message description.</div>

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default background is <code>none</code>, default color is the
              current <code>foreground</code>.
            </p>
          </div>
          <div slot="code">
            <tini-message>Here is a default message</tini-message>
          </div>
        </app-section>

        ${BASE_COLORS.map(
          baseName => html`
            <app-section class="colors">
              <h2 slot="title">Color ${baseName}</h2>
              <div slot="code">
                ${renderColorVaries(
                  baseName,
                  fullName =>
                    html`<tini-message background=${fullName}
                      >Message with ${fullName} background</tini-message
                    >`
                )}
              </div>
            </app-section>
          `
        )}

        <app-section class="text-colors">
          <h2 slot="title">Text colors</h2>
          <div slot="content">
            <p>
              You can combine any text colors with any background colors. Below
              are just some examples.
            </p>
          </div>
          <div slot="code">
            <tini-message textColor="primary"
              >Default background / Primary text</tini-message
            >
            <tini-message background="warning" textColor="primary"
              >Warning background / Primary text</tini-message
            >
          </div>
        </app-section>

        <app-section class="text-sizes">
          <h2 slot="title">Text sizes</h2>
          <div slot="content">
            <p>Text size from 0.1x to 10x.</p>
          </div>
          <div slot="code">
            <tini-message textSize="0_5x" background="primary">Text size 0.5x</tini-message>
            <tini-message background="primary">Text size 1x</tini-message>
            <tini-message textSize="3x" background="primary">Text size 3x</tini-message>
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-flow: column nowrap;
      gap: var(--size-space);
    }
  `;
}
