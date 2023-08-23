import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniBoxComponent} from '@tinijs/ui/components/box';
import {TiniMessageComponent} from '@tinijs/ui/components/message';

import {
  renderDefaultSection,
  renderBaseColorsSection,
  renderContrastColorsSection,
  renderFontColorsSection,
  renderFontSizesSection,
} from '../../helpers/varies';

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

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default background is <code>none</code>, default color is the
              current <code>foreground</code>.
            </p>
          `,
          html`<tini-message>Here is a default message</tini-message>`
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-message scheme=${baseName}
              >Message with ${baseName} background</tini-message
            >`
        )}

        <!-- contrast colors -->
        ${renderContrastColorsSection(
          contrastName => html`
            <tini-message scheme=${contrastName}
              >Message with ${contrastName} background</tini-message
            >
          `
        )}

        <!-- font colors -->
        ${renderFontColorsSection(
          ['medium', 'warning'] as any,
          scheme =>
            html`<tini-message scheme=${scheme as any} color="primary"
              >Message with ${scheme} scheme / primary text</tini-message
            >`
        )}

        <!-- font sizes -->
        ${renderFontSizesSection(
          false,
          fontSize =>
            html`<tini-message fontSize=${fontSize} scheme="primary"
              >Message with ${fontSize} font size</tini-message
            >`
        )}
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
