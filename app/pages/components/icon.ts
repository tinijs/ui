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
  name: 'app-page-components-icon',
  theming: {
    styling: stylingWithBaseStyles([
      commonStyles,
      headingsStyles,
      linkStyles,
      textStyles,
    ]),
  },
})
export class AppPageComponentsIcon extends TiniComponent {
  static styles = css``;

  protected render() {
    return html` <h1>Component Icon</h1> `;
  }
}
