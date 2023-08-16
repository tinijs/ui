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
  TiniTextareaComponent,
  TextareaEventDetail,
} from '@tinijs/ui';

import {COLOR_SUFFIXES} from '../../consts/varies';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-textarea',
  components: [
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
    ['textarea', 'The root part'],
    ['native-textarea', 'The textarea element'],
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

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default color is <code>primary</code>, default size is
              <code>md</code>.
            </p>
          </div>
          <div slot="code">
            <tini-textarea
              label="Content"
              placeholder="Lorem ipsum ..."
            ></tini-textarea>
          </div>
        </app-section>

        <app-section class="disabled">
          <h2 slot="title">Disabled</h2>
          <div slot="code">
            <tini-textarea disabled value="Lorem ipsum ..."></tini-textarea>
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
            <tini-textarea
              label="Event"
              name="textarea-with-event"
              @input=${({detail}: CustomEvent<TextareaEventDetail>) =>
                console.log('Textarea "input" event: ', detail)}
              @change=${({detail}: CustomEvent<TextareaEventDetail>) =>
                console.log('Textarea "change" event: ', detail)}
            ></tini-textarea>
          </div>
        </app-section>

        ${BASE_COLORS.map(
          baseColor => html`
            <app-section class="colors">
              <h2 slot="title">Color ${baseColor}</h2>
              <div slot="code">
                ${COLOR_SUFFIXES.map(suffix => {
                  const color = `${baseColor}${!suffix ? '' : `-${suffix}`}`;
                  return html`<tini-textarea .color=${color}></tini-textarea>`;
                })}
              </div>
            </app-section>
          `
        )}

        <app-section class="sizes">
          <h2 slot="title">Sizes</h2>
          <div slot="code">
            ${SIZES.map(
              size =>
                html`<tini-textarea size=${size} value=${size}></tini-textarea>`
            )}
          </div>
        </app-section>
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
