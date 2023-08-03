import {
  Page,
  TiniComponent,
  html,
  css,
  stylingWithBaseStyles,
} from '@tinijs/core';
import {
  commonStyles,
  headingsStyles,
  linkStyles,
  textStyles,
} from '../../dev/styles';

@Page({
  name: 'app-page-get-started',
  theming: {
    styling: stylingWithBaseStyles([
      commonStyles,
      headingsStyles,
      linkStyles,
      textStyles,
    ]),
  },
})
export class AppPageGetStarted extends TiniComponent {
  static styles = css``;

  protected render() {
    return html`<h1>Get started</h1>`;
  }
}
