import {
  Page,
  TiniComponent,
  html,
  css,
  stylingWithBases,
  SIZES,
  BASE_COLORS,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
  TiniInputComponent,
  InputEventDetail,
} from '@tinijs/ui';

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

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default color is <code>primary</code>, default size is
              <code>md</code>.
            </p>
          </div>
          <div slot="code">
            <tini-input label="Name" placeholder="Enter your name"></tini-input>
            <tini-input
              label="Email address"
              type="email"
              placeholder="name@example.com"
            ></tini-input>
          </div>
        </app-section>

        <app-section class="wrap">
          <h2 slot="title">Wrap</h2>
          <div slot="code">
            <tini-input
              wrap
              label="Name"
              placeholder="Enter your name"
            ></tini-input>
          </div>
        </app-section>

        <app-section class="disabled">
          <h2 slot="title">Disabled</h2>
          <div slot="code">
            <tini-input disabled value="John Doe"></tini-input>
          </div>
        </app-section>

        <app-section class="events">
          <h2 slot="title">Events</h2>
          <div slot="content">
            <p>
              Use the <code>input</code> and <code>change</code> event to
              capture changes (open the console to see the event log).
            </p>
          </div>
          <div slot="code">
            <tini-input
              label="Event"
              name="input-with-event"
              @input=${({detail}: CustomEvent<InputEventDetail>) =>
                console.log('Input "input" event: ', detail)}
              @change=${({detail}: CustomEvent<InputEventDetail>) =>
                console.log('Input "change" event: ', detail)}
            ></tini-input>
          </div>
        </app-section>

        <app-section class="colors">
          <h2 slot="title">Colors</h2>
          <div slot="code">
            ${BASE_COLORS.map(
              baseName =>
                html`<tini-input
                  scheme="${baseName}"
                  placeholder="Focus on me to see"
                ></tini-input>`
            )}
          </div>
        </app-section>

        <app-section class="sizes">
          <h2 slot="title">Sizes</h2>
          <div slot="code">
            ${SIZES.map(
              size =>
                html`<tini-input size=${size} placeholder=${size}></tini-input>`
            )}
          </div>
        </app-section>
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
