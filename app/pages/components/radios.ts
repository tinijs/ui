import {Page, TiniComponent, html, stylingWithBases, ColorsAndGradients} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniRadiosComponent,
  RadiosItem,
  RadiosOnChangeDetail,
} from '@tinijs/ui';

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
  private readonly PART_LIST = [['radios', 'The root part']];

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
    code.replace(
      /\<tini\-radios/g,
      "<tini-radios .items=${[{color: '...'}]}"
    );
  private readonly PREPROCESS_CODE_SIZES = (code: string) =>
    code.replace(
      /\<tini\-radios/g,
      "<tini-radios .items=${[{size: '...'}]}"
    );

  private DEFAULT_LIST: RadiosItem[] = [
    {value: '', label: 'Default checkbox'},
    {value: '', label: 'Default checkbox (checked)', checked: true},
  ];

  private buildCustomList(
    modifier: (item: RadiosItem, i: number) => RadiosItem
  ) {
    return this.DEFAULT_LIST.map((item, i) => modifier({...item}, i));
  }

  private buildColorList(baseColor: string): RadiosItem[] {
    return [
      '',
      'shade',
      'shade-2',
      'shade-3',
      'shade-4',
      'shade-5',
      'tint',
      'tint-2',
      'tint-3',
      'tint-4',
      'tint-5',
    ].map(suffix => {
      const color = `${baseColor}${
        !suffix ? '' : `-${suffix}`
      }` as ColorsAndGradients;
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
            <tini-radios name="default" .items=${this.DEFAULT_LIST}></tini-radios>
          </div>
        </app-section>

      </app-component-page>
    `;
  }
}
