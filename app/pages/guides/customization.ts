import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '@tinijs/ui/bases';

@Page({
  name: 'app-page-guides-customization',
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
    ]),
  },
})
export class AppPageGuidesCustomization extends TiniComponent {
  static styles = css``;

  protected render() {
    return html`
      <h1>Customization</h1>
      <p>// TODO</p>
    `;
  }
}
