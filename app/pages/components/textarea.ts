import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
  TiniTextareaComponent,
  TextareaEventDetail,
} from '@tinijs/ui';

import {
  renderSection,
  renderDefaultSection,
  renderBaseColorsSection,
  renderSizesSection,
} from '../../helpers/varies';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-textarea',
  components: [
    TiniBoxComponent,
    TiniTextareaComponent,
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
export class AppPageComponentsTextarea extends TiniComponent {
  private readonly PART_LIST = [
    ['root', 'The root part'],
    ['textarea', 'The textarea element'],
    ['label', 'The label'],
  ];

  protected render() {
    return html`
      <app-component-page
        titleText="Textarea"
        name="textarea"
        path="components/textarea"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Textarea description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default color is <code>primary</code>, default size is
              <code>md</code>.
            </p>
          `,
          html`<tini-textarea
            label="Content"
            placeholder="Lorem ipsum ..."
          ></tini-textarea>`
        )}

        <!-- disabled -->
        ${renderSection(
          'disabled',
          'Disabled',
          null,
          html`<tini-textarea
            disabled
            placeholder="Lorem ipsum ..."
          ></tini-textarea>`
        )}

        <!-- events -->
        ${renderSection(
          'events',
          'Events',
          html`
            <p>
              Use the <code>input</code> and <code>change</code> event to
              capture changes (open the console to see the event log).
            </p>
          `,
          html`
            <tini-textarea
              label="Event"
              name="textarea-with-event"
              placeholder="Change my content"
              @input=${({detail}: CustomEvent<TextareaEventDetail>) =>
                console.log('Textarea "input" event: ', detail)}
              @change=${({detail}: CustomEvent<TextareaEventDetail>) =>
                console.log('Textarea "change" event: ', detail)}
            ></tini-textarea>
          `
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-textarea
              scheme=${baseName}
              placeholder="Focus me to see"
            ></tini-textarea>`
        )}

        <!-- sizes -->
        ${renderSizesSection(
          size =>
            html`<tini-textarea
              size=${size}
              placeholder=${size}
            ></tini-textarea>`
        )}
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-flow: column;
      gap: 1rem;
    }
  `;
}
