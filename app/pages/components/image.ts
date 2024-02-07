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
import {TiniImageComponent} from '@tinijs/ui/components/image';

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
  name: 'app-page-components-image',
  components: [
    TiniBoxComponent,
    TiniImageComponent,
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
export class AppPageComponentsImage extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];

  private readonly PREPROCESS_CODE: CodeBuilder = builder => builder;

  private readonly CODE_BUILDERS: Record<string, CodeBuilder> = {
    [ConsumerPlatforms.React]: builder => builder,
  };

  private readonly SRC =
    'https://images.unsplash.com/photo-1488330890490-c291ecf62571?q=80&w=1920&auto=format&fit=crop';

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
        titleText="Image"
        name="image"
        path="components/image"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Image description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html` <p>Minimum usage.</p> `,
          html` <tini-image src=${this.SRC}></tini-image> `,
          this.renderSectionOptions
        )}

        <!-- captions -->
        ${renderSection(
          'captions',
          'Captions',
          html`<p>Image with captions (top, bottom or both).</p>`,
          html`
            <tini-image
              src=${this.SRC}
              captionBottom="Bottom caption"
            ></tini-image>
            <tini-image src=${this.SRC} captionTop="Top caption"></tini-image>
            <tini-image
              src=${this.SRC}
              captionTop="Top caption"
              captionBottom="Bottom caption"
            ></tini-image>
          `,
          this.renderSectionOptions
        )}

        <!-- slots -->
        ${renderSection(
          'slots',
          'Slots',
          html`<p>Use slots instead of attributes.</p>`,
          html`
            <tini-image>
              <figcaption slot="caption-top">
                <strong>Top caption</strong>
              </figcaption>
              <img src=${this.SRC} alt="Image alt" />
              <figcaption slot="caption-bottom">Bottom caption</figcaption>
            </tini-image>
          `,
          this.renderSectionOptions
        )}
      </app-component-page>
    `;
  }
}
