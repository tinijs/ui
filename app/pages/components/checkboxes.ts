import {
  Page,
  TiniComponent,
  html,
  css,
  stylingWithBases,
  SIZES,
  BASE_COLORS,
  Colors,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniCheckboxesComponent,
  CheckboxesItem,
  CheckboxesEventDetail,
} from '@tinijs/ui';

import {COLOR_SUFFIXES} from '../../consts/varies';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-checkboxes',
  components: [
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
    ['item', 'Checkbox item container'],
    ['input', 'The input element'],
  ];

  private readonly PREPROCESS_CODE = (code: string) =>
    code.replace(/\<tini\-checkboxes/g, '<tini-checkboxes .items=${[...]}');
  private readonly PREPROCESS_CODE_DISABLED = (code: string) =>
    code.replace(
      /\<tini\-checkboxes/g,
      '<tini-checkboxes .items=${[{disabled: true}]}'
    );
  private readonly PREPROCESS_CODE_EVENTS = (code: string) =>
    code.replace(
      /\<tini\-checkboxes/g,
      '<tini-checkboxes .items=${[...]} @change=${HANDLER}'
    );
  private readonly PREPROCESS_CODE_COLORS = (code: string) =>
    code.replace(
      /\<tini\-checkboxes/g,
      "<tini-checkboxes .items=${[{color: '...'}]}"
    );
  private readonly PREPROCESS_CODE_SIZES = (code: string) =>
    code.replace(
      /\<tini\-checkboxes/g,
      "<tini-checkboxes .items=${[{size: '...'}]}"
    );

  private DEFAULT_LIST: CheckboxesItem[] = [
    {value: '', label: 'Default checkbox'},
    {value: '', label: 'Default checkbox (checked)', checked: true},
  ];

  private buildCustomList(
    modifier: (item: CheckboxesItem, i: number) => CheckboxesItem
  ) {
    return this.DEFAULT_LIST.map((item, i) => modifier({...item}, i));
  }

  private buildColorList(baseColor: string): CheckboxesItem[] {
    return COLOR_SUFFIXES.map(suffix => {
      const color = `${baseColor}${!suffix ? '' : `-${suffix}`}` as Colors;
      return {
        value: '',
        label: `Checkbox ${color}`,
        checked: true,
        color,
      };
    });
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

        <app-section class="default" .preprocessCode=${this.PREPROCESS_CODE}>
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default active color is <code>primary</code>, default size is
              <code>md</code>.
            </p>
          </div>
          <div slot="code">
            <tini-checkboxes .items=${this.DEFAULT_LIST}></tini-checkboxes>
          </div>
        </app-section>

        <app-section class="no-label" .preprocessCode=${this.PREPROCESS_CODE}>
          <h2 slot="title">No label</h2>
          <div slot="content">
            <p>Omit the <code>label</code> from the items.</p>
          </div>
          <div slot="code">
            <tini-checkboxes
              .items=${this.buildCustomList(item => !(item.label = '') && item)}
            ></tini-checkboxes>
          </div>
        </app-section>

        <app-section class="wrap" .preprocessCode=${this.PREPROCESS_CODE}>
          <h2 slot="title">Wrap</h2>
          <div slot="code">
            <tini-checkboxes wrap .items=${this.DEFAULT_LIST}></tini-checkboxes>
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
            <tini-checkboxes
              .items=${this.buildCustomList(
                item => (item.disabled = true) && item
              )}
            ></tini-checkboxes>
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
            <tini-checkboxes
              .items=${this.buildCustomList((item, i) => {
                const no = i + 1;
                item.value = `value-${no}`;
                item.name = `checkbox-${no}`;
                item.label = `Checkbox ${no}`;
                return item;
              })}
              @change=${({detail}: CustomEvent<CheckboxesEventDetail>) =>
                console.log('Checkboxes "change" event: ', detail)}
            ></tini-checkboxes>
          </div>
        </app-section>

        ${BASE_COLORS.map(
          color => html`
            <app-section
              class="colors"
              .preprocessCode=${this.PREPROCESS_CODE_COLORS}
            >
              <h2 slot="title">Color ${color}</h2>
              <div slot="content">
                <p>Add <code>{color: '${color}[-...]'}</code> to the items.</p>
              </div>
              <div slot="code">
                <tini-checkboxes
                  wrap
                  .items=${this.buildColorList(color)}
                ></tini-checkboxes>
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
            <tini-checkboxes
              wrap
              .items=${SIZES.map(size => ({
                value: '',
                label: `Checkbox size ${size}`,
                size,
              }))}
            ></tini-checkboxes>
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
