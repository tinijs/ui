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
} from '../../../dev/styles';

@Page({
  name: 'app-page-components-base',
  theming: {
    styling: stylingWithBaseStyles([
      commonStyles,
      headingsStyles,
      linkStyles,
      textStyles,
    ]),
  },
})
export class AppPageComponentsBase extends TiniComponent {
  static styles = css``;

  protected render() {
    return html` <h1>Base</h1> `;
  }
}
