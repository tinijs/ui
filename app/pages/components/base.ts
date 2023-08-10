import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui';

@Page({
  name: 'app-page-components-base',
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
export class AppPageComponentsBase extends TiniComponent {
  protected render() {
    return html`
      <h1>Bases</h1>
      <p>// TODO: write docs ...</p>
    `;
  }
}
