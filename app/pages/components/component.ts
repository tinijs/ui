import {html} from 'lit';
import {Page, TiniComponent, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniComponentComponent} from '@tinijs/ui/components/component';
import {TiniComponentLightComponent} from '@tinijs/ui/components/component-light';

import {renderSection, RenderSectionOptions} from '../../helpers/varies';
import {ConsumerPlatforms} from '../../consts/main';
import {CodeBuilder} from '../../helpers/code-builder';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-component',
  components: [
    TiniComponentComponent,
    TiniComponentLightComponent,
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
export class AppPageComponentsComponent extends TiniComponent {
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
        titleText="Component"
        name="component"
        path="components/component"
        .partList=${this.PART_LIST}
      >
        <div slot="description">
          Generic <code>tini-component</code> and
          <code>tini-component-light</code> for component composition.
        </div>

        ${renderSection(
          'usage',
          'Usage',
          html`<p>
            You can style the component using supported attributes or any CSS
            via <code>hostStyles</code> and <code>rootStyles</code> property.
          </p>`,
          html`
            <tini-component
              xPadding="1rem"
              xBorder="2px solid blue"
              xBorderRadius="0.5rem"
              xColor="green"
              xBackground="#ccc"
            >
              <tini-component-light
                xDisplay="flex"
                xAlignItems="center"
                xJustifyContent="space-between"
              >
                <p>Left content</p>
                <p>Right content</p>
              </tini-component-light>
            </tini-component>
          `,
          this.renderSectionOptions
        )}
      </app-component-page>
    `;
  }
}
