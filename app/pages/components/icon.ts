import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniIconComponent,
} from '@tinijs/ui';
import {dataURI as iconSRC} from '@tinijs/bootstrap-icons/heart-fill.source';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';
import {AppIconPageContentComponent} from '../../components/icon-page-content';

@Page({
  name: 'app-page-components-icon',
  components: [
    TiniIconComponent,
    AppComponentPageComponent,
    AppSectionComponent,
    AppIconPageContentComponent,
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
export class AppPageComponentsIcon extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];
  private readonly PREPROCESS_CODE = (code: string) =>
    code.replace(/\<tini\-icon/g, '<tini-icon src="URI/URL"');

  protected render() {
    return html`
      <app-component-page
        titleText="Icons"
        name="icon"
        path="components/icon"
        .partList=${this.PART_LIST}
      >
        <div slot="description">A generic icon component.</div>

        <app-icon-page-content
          .src=${iconSRC}
          .preprocessCode=${this.PREPROCESS_CODE}
        ></app-icon-page-content>
      </app-component-page>
    `;
  }
}
