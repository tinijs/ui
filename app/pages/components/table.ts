import {html} from 'lit';
import {Page, TiniComponent, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniBoxComponent} from '@tinijs/ui/components/box';
import {TiniTableComponent} from '@tinijs/ui/components/table';

import {
  renderSection,
  renderDefaultSection,
  RenderSectionOptions,
} from '../../helpers/varies';
import {ConsumerPlatforms} from '../../consts/main';
import {CodeBuilder, ReactCommonProps} from '../../helpers/code-builder';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-table',
  components: [
    TiniBoxComponent,
    TiniTableComponent,
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
export class AppPageComponentsTable extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];

  private readonly PREPROCESS_CODE: CodeBuilder = builder => builder;

  private readonly CODE_BUILDERS: Record<string, CodeBuilder> = {
    [ConsumerPlatforms.React]: builder => builder,
  };

  private renderSectionOptions?: RenderSectionOptions;
  onChanges() {
    this.renderSectionOptions = {
      preprocessCode: this.PREPROCESS_CODE,
      codeBuilders: this.CODE_BUILDERS,
    };
  }

  protected render() {
    return html`
      <app-component-page
        titleText="Table"
        name="table"
        path="components/table"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Table description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html` <p>Lorem ipsum.</p> `,
          html`
            <tini-table>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Alex</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Bob</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Chris</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
            </tini-table>
          `,
          this.renderSectionOptions
        )}

        <!-- slots -->
        ${renderSection(
          'slots',
          'Slots',
          html` <p>Use slots instead of attributes.</p> `,
          html`
            <tini-table>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Alex</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Bob</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Chris</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
            </tini-table>
          `,
          this.renderSectionOptions
        )}
      </app-component-page>
    `;
  }
}
