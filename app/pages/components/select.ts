import {
  Page,
  TiniComponent,
  html,
  css,
  stylingWithBases,
  BASE_COLORS,
  SIZES,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
  TiniSelectComponent,
  SelectOption,
  SelectOptgroup,
  SelectEventDetail,
} from '@tinijs/ui';

import {renderColorVaries} from '../../helpers/varies';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-select',
  components: [
    TiniBoxComponent,
    TiniSelectComponent,
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
export class AppPageComponentsSelect extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];

  private OPTIONS: SelectOption[] = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
  ];

  private OPTGROUPS: SelectOptgroup[] = [
    {
      label: 'Group 1',
      children: this.OPTIONS,
    },
    {
      label: 'Group 2',
      children: this.OPTIONS,
    },
  ];

  protected render() {
    return html`
      <app-component-page
        titleText="Select"
        name="select"
        path="components/select"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Select description.</div>

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="code">
            <tini-select
              label="Select an option"
              .items=${this.OPTIONS}
            ></tini-select>
            <tini-select
              label="Using optgroup"
              .items=${this.OPTGROUPS}
            ></tini-select>
          </div>
        </app-section>

        <app-section class="wrap">
          <h2 slot="title">Wrap</h2>
          <div slot="code">
            <tini-select
              wrap
              label="Select an option"
              .items=${this.OPTIONS}
            ></tini-select>
            <tini-select
              wrap
              label="Using optgroup"
              .items=${this.OPTGROUPS}
            ></tini-select>
          </div>
        </app-section>

        <app-section class="disabled">
          <h2 slot="title">Disabled</h2>
          <div slot="code">
            <tini-select
              wrap
              label="Disabled option"
              .items=${[
                this.OPTIONS[0],
                {...this.OPTIONS[1], disabled: true},
                this.OPTIONS[2],
              ]}
            ></tini-select>
            <tini-select
              wrap
              disabled
              label="Disabled select"
              .items=${this.OPTIONS}
            ></tini-select>
          </div>
        </app-section>

        <app-section class="events">
          <h2 slot="title">Events</h2>
          <div slot="content">
            <p>
              Use the <code>change</code> event to capture changes (open the
              console to see the event log).
            </p>
          </div>
          <div slot="code">
            <tini-select
              label="Event"
              name="input-with-event"
              .items=${this.OPTIONS}
              @change=${({detail}: CustomEvent<SelectEventDetail>) =>
                console.log('Select "change" event: ', detail)}
            ></tini-select>
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
                    html`<tini-select
                      scheme="${fullName}"
                      .items=${this.OPTIONS}
                    ></tini-select>`
                )}
              </div>
            </app-section>
          `
        )}

        <app-section class="sizes">
          <h2 slot="title">Sizes</h2>
          <div slot="code">
            ${SIZES.map(
              size =>
                html`<tini-select
                  size=${size}
                  .items=${this.OPTIONS}
                ></tini-select>`
            )}
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    .wrap [slot='code'],
    .disabled [slot='code'],
    .colors [slot='code'],
    .sizes [slot='code'] {
      display: flex;
      flex-flow: column;
      gap: 1rem;
    }
  `;
}
