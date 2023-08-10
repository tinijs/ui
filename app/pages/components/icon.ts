import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  TiniIconComponent,
} from '@tinijs/ui';
import {dataURI as iconSRC} from '@tinijs/bootstrap-icons/heart-fill.source';

import {AppPageComponent} from '../../components/page';
import {AppSectionComponent} from '../../components/section';
import {AppIconContentComponent} from '../../components/icon-content';

@Page({
  name: 'app-page-components-icon',
  components: [
    TiniIconComponent,
    AppPageComponent,
    AppSectionComponent,
    AppIconContentComponent,
  ],
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
    ]),
  },
})
export class AppPageComponentsIcon extends TiniComponent {
  static styles = css``;

  private readonly PREPROCESS_CODE = (code: string) =>
    code.replace(/\<tini\-icon/g, '<tini-icon src="URI/URL"');

  protected render() {
    return html`
      <app-page titleText="Icons" name="icon" path="components/icon">
        <div slot="description">A generic icon component.</div>

        <app-icon-content
          .src=${iconSRC}
          .preprocessCode=${this.PREPROCESS_CODE}
        ></app-icon-content>
      </app-page>
    `;
  }
}
