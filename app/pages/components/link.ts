import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '@tinijs/ui/bases';

@Page({
  name: 'app-page-components-link',
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
    ]),
  },
})
export class AppPageComponentsLink extends TiniComponent {
  static styles = css``;

  protected render() {
    return html` <h1>Component Link</h1> `;
  }
}
