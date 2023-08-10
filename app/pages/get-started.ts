import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

@Page({
  name: 'app-page-get-started',
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
    ]),
  },
})
export class AppPageGetStarted extends TiniComponent {
  protected render() {
    return html`
      <h1>Get started</h1>
      <p>// TODO: write docs ...</p>
    `;
  }
}
