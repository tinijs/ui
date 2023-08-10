import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

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
  protected render() {
    return html`
      <h1>Customization</h1>
      <p>// TODO</p>
    `;
  }
}
