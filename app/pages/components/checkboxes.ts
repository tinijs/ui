import {html, css} from 'lit';
import {Page, TiniComponent, stylingWithBases, Colors} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniBoxComponent} from '@tinijs/ui/components/box';
import {
  TiniCheckboxesComponent,
  CheckboxesItem,
  CheckboxesEventDetail,
} from '@tinijs/ui/components/checkboxes';

import {
  renderSection,
  renderDefaultSection,
  renderBaseColorsSection,
  renderSizesSection,
} from '../../helpers/varies';
import {CodeBuilder} from '../../components/section';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-checkboxes',
  components: [
    TiniBoxComponent,
    TiniCheckboxesComponent,
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
export class AppPageComponentsCheckboxes extends TiniComponent {
  private readonly PART_LIST = [
    ['root', 'The root part'],
    ['item', 'Item container'],
    ['input', 'An input element'],
    ['label', 'A label'],
  ];

  private readonly TAG_NAME = TiniCheckboxesComponent.defaultTagName;
  private TAG_REGEX = new RegExp(`<${this.TAG_NAME}`, 'g');

  private readonly PREPROCESS_CODE_DEFAULT = ((code: string) =>
    code.replace(
      this.TAG_REGEX,
      `<${this.TAG_NAME} .items=\${...}`
    )) as CodeBuilder;
  private readonly PREPROCESS_CODE_EVENTS = ((code: string) =>
    code.replace(
      this.TAG_REGEX,
      `<${this.TAG_NAME} @change=\${HANDLER}`
    )) as CodeBuilder;

  private DEFAULT_LIST: CheckboxesItem[] = [
    {value: '', label: 'Default checkbox'},
    {value: '', label: 'Default checkbox (checked)', checked: true},
  ];

  private buildCustomList(
    modifier: (item: CheckboxesItem, i: number) => CheckboxesItem
  ) {
    return this.DEFAULT_LIST.map((item, i) => modifier({...item}, i));
  }

  protected render() {
    return html`
      <app-component-page
        titleText="Checkboxes"
        name="checkboxes"
        path="components/checkboxes"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Checkboxes description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default active color is <code>primary</code>, default size is
              <code>md</code>.
            </p>
          `,
          html`<tini-checkboxes .items=${this.DEFAULT_LIST}></tini-checkboxes>`,
          {
            preprocessCode: this.PREPROCESS_CODE_DEFAULT,
          }
        )}

        <!-- no label -->
        ${renderSection(
          'no-label',
          'No label',
          html`<p>Omit the <code>label</code> from the items.</p>`,
          html`<tini-checkboxes
            .items=${this.buildCustomList(item => !(item.label = '') && item)}
          ></tini-checkboxes>`,
          {
            preprocessCode: this.PREPROCESS_CODE_DEFAULT,
          }
        )}

        <!-- wrap -->
        ${renderSection(
          'wrap',
          'Wrap',
          null,
          html`<tini-checkboxes
            wrap
            .items=${this.DEFAULT_LIST}
          ></tini-checkboxes>`,

          {
            preprocessCode: this.PREPROCESS_CODE_DEFAULT,
          }
        )}

        <!-- disabled -->
        ${renderSection(
          'disabled',
          'Disabled',
          html`<p>Add <code>{disable: true}</code> to the items.</p>`,
          html`<tini-checkboxes
            .items=${this.buildCustomList(
              item => (item.disabled = true) && item
            )}
          ></tini-checkboxes>`,

          {
            preprocessCode: this.PREPROCESS_CODE_DEFAULT,
          }
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
          html`<tini-checkboxes
            .items=${this.buildCustomList((item, i) => {
              const no = i + 1;
              item.value = `value-${no}`;
              item.name = `checkbox-${no}`;
              item.label = `Checkbox ${no}`;
              return item;
            })}
            @change=${({detail}: CustomEvent<CheckboxesEventDetail>) =>
              console.log('Checkboxes "change" event: ', detail)}
          ></tini-checkboxes>`,
          {
            preprocessCode: this.PREPROCESS_CODE_EVENTS,
          }
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-checkboxes
              wrap
              .items=${[
                {
                  value: '',
                  label: `Checkbox ${baseName}`,
                  checked: true,
                  scheme: baseName as Colors,
                },
              ]}
            ></tini-checkboxes>`,
          {
            preprocessCode: this.PREPROCESS_CODE_DEFAULT,
            content: html`<p>Add <code>{color: '...'}</code> to the items.</p>`,
          }
        )}

        <!-- sizes -->
        ${renderSizesSection(
          size =>
            html`<tini-checkboxes
              wrap
              .items=${[
                {
                  value: '',
                  label: `Checkbox size ${size}`,
                  size,
                },
              ]}
            ></tini-checkboxes>`,
          {
            preprocessCode: this.PREPROCESS_CODE_DEFAULT,
          }
        )}
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-flow: column;
    }
  `;
}
