import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniBoxComponent} from '@tinijs/ui/components/box';
import {
  TiniInputComponent,
  InputEventDetail,
} from '@tinijs/ui/components/input';

import {
  renderSection,
  renderDefaultSection,
  renderBaseColorsSection,
  renderSizesSection,
} from '../../helpers/varies';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-input',
  components: [
    TiniBoxComponent,
    TiniInputComponent,
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
export class AppPageComponentsInput extends TiniComponent {
  private readonly PART_LIST = [
    ['root', 'The root part'],
    ['input', 'The input element'],
    ['label', 'The label'],
  ];

  protected render() {
    return html`
      <app-component-page
        titleText="Input"
        name="input"
        path="components/input"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Input description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default color is <code>primary</code>, default size is
              <code>md</code>.
            </p>
          `,
          html`
            <tini-input label="Name" placeholder="Enter your name"></tini-input>
            <tini-input
              label="Email address"
              type="email"
              placeholder="name@example.com"
            ></tini-input>
          `
        )}

        <!-- wrap -->
        ${renderSection(
          'wrap',
          'Wrap',
          null,
          html`<tini-input
            wrap
            label="Name"
            placeholder="Enter your name"
          ></tini-input>`
        )}

        <!-- disabled -->
        ${renderSection(
          'disabled',
          'Disabled',
          null,
          html`<tini-input disabled value="John Doe"></tini-input>`
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
            <tini-input
              label="Event"
              name="input-with-event"
              @input=${({detail}: CustomEvent<InputEventDetail>) =>
                console.log('Input "input" event: ', detail)}
              @change=${({detail}: CustomEvent<InputEventDetail>) =>
                console.log('Input "change" event: ', detail)}
            ></tini-input>
          `
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-input
              scheme="${baseName}"
              placeholder="Focus on me to see"
            ></tini-input>`
        )}

        <!-- sizes -->
        ${renderSizesSection(
          size =>
            html`<tini-input size=${size} placeholder=${size}></tini-input>`
        )}
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      tini-box {
        width: 250px;
      }
    }

    .colors [slot='code'],
    .sizes [slot='code'] {
      display: flex;
      flex-flow: column;
      gap: 1rem;
    }
  `;
}
