import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '../../../dev/bases';

@Page({
  name: 'app-page-components-icon',
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

  protected render() {
    return html` <h1>Component Icon</h1> `;
  }
}
