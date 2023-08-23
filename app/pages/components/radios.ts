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
  TiniRadiosComponent,
  RadiosItem,
  RadiosEventDetail,
} from '@tinijs/ui/components/radios';

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
  name: 'app-page-components-radios',
  components: [
    TiniBoxComponent,
    TiniRadiosComponent,
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
export class AppPageComponentsRadios extends TiniComponent {
  private readonly PART_LIST = [
    ['root', 'The root part'],
    ['item', 'Item container'],
    ['input', 'An input element'],
    ['label', 'A label'],
  ];

  private readonly TAG_NAME = TiniRadiosComponent.defaultTagName;
  private TAG_REGEX = new RegExp(`<${this.TAG_NAME}`, 'g');

  private readonly PREPROCESS_CODE_DEFAULT = (code: string) =>
    code.replace(this.TAG_REGEX, `<${this.TAG_NAME} .items=\${...}`);
  private readonly PREPROCESS_CODE_EVENTS = (code: string) =>
    code.replace(this.TAG_REGEX, `<${this.TAG_NAME} @change=\${HANDLER}`);

  private DEFAULT_LIST: RadiosItem[] = [
    {value: '', label: 'Default radio'},
    {value: '', label: 'Default radio (checked)', checked: true},
  ];

  private buildCustomList(
    modifier: (item: RadiosItem, i: number) => RadiosItem
  ) {
    return this.DEFAULT_LIST.map((item, i) => modifier({...item}, i));
  }

  protected render() {
    return html`
      <app-component-page
        titleText="Radios"
        name="radios"
        path="components/radios"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Radios description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default active color is <code>primary</code>, default size is
              <code>md</code>.
            </p>
          `,
          html`<tini-radios
            name="default"
            .items=${this.DEFAULT_LIST}
          ></tini-radios>`,
          {
            preprocessCode: this.PREPROCESS_CODE_DEFAULT,
          }
        )}

        <!-- no label -->
        ${renderSection(
          'no-label',
          'No label',
          html`<p>Omit the <code>label</code> from the items.</p>`,
          html`<tini-radios
            name="no-label"
            .items=${this.buildCustomList(item => !(item.label = '') && item)}
          ></tini-radios>`,
          {
            preprocessCode: this.PREPROCESS_CODE_DEFAULT,
          }
        )}

        <!-- wrap -->
        ${renderSection(
          'wrap',
          'Wrap',
          null,
          html`<tini-radios
            wrap
            name="wrap"
            .items=${this.DEFAULT_LIST}
          ></tini-radios>`,
          {
            preprocessCode: this.PREPROCESS_CODE_DEFAULT,
          }
        )}

        <!-- disabled -->
        ${renderSection(
          'disabled',
          'Disabled',
          html`<p>Add <code>{disable: true}</code> to the items.</p>`,
          html`<tini-radios
            name="disabled"
            .items=${this.buildCustomList(
              item => (item.disabled = true) && item
            )}
          ></tini-radios>`,
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
          html`
            <tini-radios
              name="events"
              .items=${this.buildCustomList((item, i) => {
                const no = i + 1;
                item.value = `value-${no}`;
                item.label = `Checkbox ${no}`;
                return item;
              })}
              @change=${({detail}: CustomEvent<RadiosEventDetail>) =>
                console.log('Radios "change" event: ', detail)}
            ></tini-radios>
          `,
          {
            preprocessCode: this.PREPROCESS_CODE_EVENTS,
          }
        )}

        <!-- colors -->
        ${renderBaseColorsSection(
          baseName =>
            html`<tini-radios
              name=${`${baseName}`}
              wrap
              .items=${[
                {
                  value: '',
                  label: `Checkbox color ${baseName}`,
                  checked: true,
                  scheme: baseName,
                },
              ]}
            ></tini-radios>`,
          {
            preprocessCode: this.PREPROCESS_CODE_DEFAULT,
            content: html`<p>Add <code>{color: '...'}</code> to the items.</p>`,
          }
        )}

        <!-- sizes -->
        ${renderSizesSection(
          size =>
            html`<tini-radios
              name="sizes"
              wrap
              .items=${[
                {
                  value: '',
                  label: `Checkbox size ${size}`,
                  size,
                },
              ]}
            ></tini-radios>`,
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
