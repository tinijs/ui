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
import {
  TiniTextareaComponent,
  TextareaEventDetail,
} from '@tinijs/ui/components/textarea';

import {
  renderSection,
  renderDefaultSection,
  renderColorsSection,
  renderScalesSection,
  RenderSectionOptions,
} from '../../helpers/varies';
import {ConsumerPlatforms} from '../../consts/main';
import {CodeBuilder, ReactCommonProps} from '../../helpers/code-builder';

import {AppComponentPageComponent} from '../../components/component-page';
import {
  AppSectionComponent,
  FLEX_COLUMN_STYLES,
} from '../../components/section';

@Page({
  name: 'app-page-components-textarea',
  components: [
    TiniBoxComponent,
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
    ['root', 'The root part'],
    ['textarea', 'The textarea element'],
    ['label', 'The label'],
  ];

  private readonly PREPROCESS_CODE: CodeBuilder = builder => builder;

  private readonly CODE_BUILDERS: Record<string, CodeBuilder> = {
    [ConsumerPlatforms.React]: builder =>
      builder.reactConverter(
        [/* tini-box, */ TiniTextareaComponent.defaultTagName],
        [
          /* scheme, */ ReactCommonProps.SchemeButColorsOnly,
          ReactCommonProps.Scale,
        ]
      ),
  };

  private renderSectionOptions?: RenderSectionOptions;
  onChanges() {
    this.renderSectionOptions = {
      preprocessCode: this.PREPROCESS_CODE,
      codeBuilders: this.CODE_BUILDERS,
      styleRecord: {
        common: FLEX_COLUMN_STYLES,
      },
    };
  }

  protected render() {
    return html`
      <app-component-page
        titleText="Textarea"
        name="textarea"
        path="components/textarea"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Textarea description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`
            <p>
              Default color is <code>primary</code>, default size is
              <code>md</code>.
            </p>
          `,
          html`<tini-textarea
            label="Content"
            placeholder="Lorem ipsum ..."
          ></tini-textarea>`,
          this.renderSectionOptions
        )}

        <!-- disabled -->
        ${renderSection(
          'disabled',
          'Disabled',
          null,
          html`<tini-textarea
            disabled
            placeholder="Lorem ipsum ..."
          ></tini-textarea>`,
          this.renderSectionOptions
        )}

        <!-- events -->
        ${renderSection(
          'events',
          'Events',
          html`
            <p>
              Use the <code>input</code> and <code>change</code> event to
              capture changes (open the console to see the event log).
            </p>
          `,
          html`
            <tini-textarea
              label="Event"
              name="textarea-with-event"
              placeholder="Change my content"
              @input=${({detail}: CustomEvent<TextareaEventDetail>) =>
                console.log('Textarea "input" event: ', detail)}
              @change=${({detail}: CustomEvent<TextareaEventDetail>) =>
                console.log('Textarea "change" event: ', detail)}
            ></tini-textarea>
          `,
          this.renderSectionOptions
        )}

        <!-- colors -->
        ${renderColorsSection(
          color =>
            html`<tini-textarea
              scheme=${color}
              placeholder="Focus me to see"
            ></tini-textarea>`,
          this.renderSectionOptions
        )}

        <!-- scales -->
        ${renderScalesSection(
          scale =>
            html`<tini-textarea
              scale=${scale}
              placeholder=${scale}
            ></tini-textarea>`,
          this.renderSectionOptions
        )}
      </app-component-page>
    `;
  }
}
