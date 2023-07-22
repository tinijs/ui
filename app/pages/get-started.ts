import {Page, TiniComponent, changeTheme, html, css} from '@tinijs/core';

import coreStyle from '../../styles/bootstrap/base/core';
import headingsStyle from '../../styles/bootstrap/base/headings';
import linkStyle from '../../styles/bootstrap/base/link';
import textStyle from '../../styles/bootstrap/base/text';

import {TINI_BUTTON, TiniButtonComponent} from '../../dev/button';
import {APP_TEST, AppTestComponent} from '../components/test-theming';

@Page({
  name: 'app-page-get-started',
  components: {
    [TINI_BUTTON]: TiniButtonComponent,
    [APP_TEST]: AppTestComponent,
  },
  theming: {
    styling: {
      bootstrap: [coreStyle, headingsStyle, linkStyle, textStyle],
    },
  },
})
export class AppPageGetStarted extends TiniComponent {
  static styles = css`
    tini-button {
      margin-top: 1rem;
    }
  `;

  private switchTheme(data: any) {
    changeTheme(data);
  }

  protected render() {
    return html`
      <h1>Get started</h1>
      <p>...</p>

      <tini-button
        @click=${() => this.switchTheme({soul: 'bootstrap', skin: 'light'})}
        >Bootstrap (light)</tini-button
      >
      <tini-button
        @click=${() => this.switchTheme({soul: 'bootstrap', skin: 'dark'})}
        >Bootstrap (dark)</tini-button
      >

      <tini-button
        @click=${() => this.switchTheme({soul: 'material', skin: 'light'})}
        size="xxl"
        >Material (light)</tini-button
      >
      <tini-button
        @click=${() => this.switchTheme({soul: 'material', skin: 'dark'})}
        size="xxl"
        >Material (dark)</tini-button
      >

      <app-test></app-test>
    `;
  }
}
