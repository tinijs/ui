import {Page, TiniComponent, html, stylingWithBaseStyles} from '@tinijs/core';
import {
  commonStyles,
  headingsStyles,
  linkStyles,
  textStyles,
} from '../../dev/styles';

@Page({
  name: 'app-page-home',
  theming: {
    styling: stylingWithBaseStyles([
      commonStyles,
      headingsStyles,
      linkStyles,
      textStyles,
    ]),
  },
})
export class AppPageHome extends TiniComponent {
  protected render() {
    return html`
      <h1>Tini UI</h1>
      <p>
        The UI system of the TiniJS Framework. All components can be used inside
        a TiniJS app or with other frameworks like Vue, React, Angular, ... or
        without any framework at all.
      </p>

      <h2>Components</h2>
      <p>
        Tini UI components are web components. Please see detail page of each
        component for detail usage.
      </p>

      <h2>Styles</h2>
      <p>
        Tini UI supports many interface flavors: Bootstrap,
        Material, Fluent, ... and more to come.
      </p>

      <h2>Icons</h2>
      <p>There are over 25,000 icons to choose from, new packs will be added all the time. Your project can have one icon or thousands, the experience will remain the same, just install the package and use any icon you like.</p>
    `;
  }
}
