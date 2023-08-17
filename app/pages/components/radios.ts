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
  TiniRadiosComponent,
  RadiosItem,
  RadiosEventDetail,
} from '@tinijs/ui';

import {COLOR_SUFFIXES} from '../../consts/varies';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-radios',
  components: [
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
    ['item', 'Radio item container'],
    ['input', 'The input element'],
  ];

  private readonly PREPROCESS_CODE = (code: string) =>
    code.replace(/\<tini\-radios/g, '<tini-radios .items=${[...]}');
  private readonly PREPROCESS_CODE_DISABLED = (code: string) =>
    code.replace(
      /\<tini\-radios/g,
      '<tini-radios .items=${[{disabled: true}]}'
    );
  private readonly PREPROCESS_CODE_EVENTS = (code: string) =>
    code.replace(
      /\<tini\-radios/g,
      '<tini-radios .items=${[...]} @change=${HANDLER}'
    );
  private readonly PREPROCESS_CODE_COLORS = (code: string) =>
    code.replace(/\<tini\-radios/g, "<tini-radios .items=${[{color: '...'}]}");
  private readonly PREPROCESS_CODE_SIZES = (code: string) =>
    code.replace(/\<tini\-radios/g, "<tini-radios .items=${[{size: '...'}]}");

  private DEFAULT_LIST: RadiosItem[] = [
    {value: '', label: 'Default checkbox'},
    {value: '', label: 'Default checkbox (checked)', checked: true},
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

        <app-section class="default" .preprocessCode=${this.PREPROCESS_CODE}>
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default active color is <code>primary</code>, default size is
              <code>md</code>.
            </p>
          </div>
          <div slot="code">
            <tini-radios
              name="default"
              .items=${this.DEFAULT_LIST}
            ></tini-radios>
          </div>
        </app-section>

        <app-section class="no-label" .preprocessCode=${this.PREPROCESS_CODE}>
          <h2 slot="title">No label</h2>
          <div slot="content">
            <p>Omit the <code>label</code> from the items.</p>
          </div>
          <div slot="code">
            <tini-radios
              name="no-label"
              .items=${this.buildCustomList(item => !(item.label = '') && item)}
            ></tini-radios>
          </div>
        </app-section>

        <app-section class="wrap" .preprocessCode=${this.PREPROCESS_CODE}>
          <h2 slot="title">Wrap</h2>
          <div slot="code">
            <tini-radios
              wrap
              name="wrap"
              .items=${this.DEFAULT_LIST}
            ></tini-radios>
          </div>
        </app-section>

        <app-section
          class="disabled"
          .preprocessCode=${this.PREPROCESS_CODE_DISABLED}
        >
          <h2 slot="title">Disabled</h2>
          <div slot="content">
            <p>Add <code>{disable: true}</code> to the items.</p>
          </div>
          <div slot="code">
            <tini-radios
              name="disabled"
              .items=${this.buildCustomList(
                item => (item.disabled = true) && item
              )}
            ></tini-radios>
          </div>
        </app-section>

        <app-section
          class="events"
          .preprocessCode=${this.PREPROCESS_CODE_EVENTS}
        >
          <h2 slot="title">Events</h2>
          <div slot="content">
            <p>
              Use the <code>change</code> event to capture changes (open the
              console to see the event log).
            </p>
          </div>
          <div slot="code">
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
          </div>
        </app-section>

        ${BASE_COLORS.map(
          baseColor => html`
            <app-section
              class="colors"
              .preprocessCode=${this.PREPROCESS_CODE_COLORS}
            >
              <h2 slot="title">Color ${baseColor}</h2>
              <div slot="content">
                <p>
                  Add <code>{color: '${baseColor}[-...]'}</code> to the items.
                </p>
              </div>
              <div slot="code">
                ${COLOR_SUFFIXES.map(suffix => {
                  const color = `${baseColor}${!suffix ? '' : `-${suffix}`}`;
                  return html`<tini-radios
                    name=${`${color}`}
                    wrap
                    .items=${[
                      {
                        value: '',
                        label: `Checkbox color ${color}`,
                        checked: true,
                        color,
                      },
                    ]}
                  ></tini-radios>`;
                })}
              </div>
            </app-section>
          `
        )}

        <app-section
          class="sizes"
          .preprocessCode=${this.PREPROCESS_CODE_SIZES}
        >
          <h2 slot="title">Sizes</h2>
          <div slot="content">
            <p>Add <code>{size: '...'}</code> to the items.</p>
          </div>
          <div slot="code">
            <tini-radios
              name="sizes"
              wrap
              .items=${SIZES.map(size => ({
                value: '',
                label: `Checkbox size ${size}`,
                size,
              }))}
            ></tini-radios>
          </div>
        </app-section>
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
