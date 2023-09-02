import {html, css} from 'lit';
import {Page, TiniComponent, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniBoxComponent} from '@tinijs/ui/components/box';
import {
  TiniSelectComponent,
  SelectOption,
  SelectOptgroup,
  SelectEventDetail,
} from '@tinijs/ui/components/select';

import {
  renderSection,
  renderDefaultSection,
  renderBaseColorsSection,
  renderScalesSection,
} from '../../helpers/varies';

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
  private readonly PART_LIST = [
    ['root', 'The root part'],
    ['label', 'The label'],
    ['select', 'The select element'],
    ['optgroup', 'An optgroup element'],
    ['option', 'An option element'],
  ];

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

        <!-- default -->
        ${renderDefaultSection(
          null,
          html`
            <tini-select
              label="Select an option"
              .items=${this.OPTIONS}
            ></tini-select>
            <tini-select
              label="Using optgroup"
              .items=${this.OPTGROUPS}
            ></tini-select>
          `
        )}

        <!-- wrap -->
        ${renderSection(
          'wrap',
          'Wrap',
          null,
          html`
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
          `
        )}

        <!-- disabled -->
        ${renderSection(
          'disabled',
          'Disabled',
          null,
          html`
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
          `
        )}

        <!-- events -->
        ${renderSection(
          'events',
          'Events',
          html`
            <p>
              Use the <code>change</code> event to capture changes (open the
              console to see the event log).
            </p>
          `,
          html`
            <tini-select
              label="Event"
              name="input-with-event"
              .items=${this.OPTIONS}
              @change=${({detail}: CustomEvent<SelectEventDetail>) =>
                console.log('Select "change" event: ', detail)}
            ></tini-select>
          `
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-select
              scheme="${baseName}"
              .items=${this.OPTIONS}
            ></tini-select>`
        )}

        <!-- scales -->
        ${renderScalesSection(
          scale =>
            html`<tini-select
              scale=${scale}
              .items=${this.OPTIONS}
            ></tini-select>`
        )}
      </app-component-page>
    `;
  }

  static styles = css`
    .wrap [slot='code'],
    .disabled [slot='code'],
    .colors [slot='code'],
    .scales [slot='code'] {
      display: flex;
      flex-flow: column;
      gap: 1rem;
    }
  `;
}
