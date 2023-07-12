import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {UseComponents} from '../vendors/components';
import {Theming, changeTheme} from '../vendors/theming';

import coreStyle from '../../styles/bootstrap/base/core';
import headingsStyle from '../../styles/bootstrap/base/headings';
import linkStyle from '../../styles/bootstrap/base/link';
import textStyle from '../../styles/bootstrap/base/text';

import {TINI_BUTTON, TiniButtonComponent} from '../../dev/button';
import {APP_TEST, AppTest} from '../components/test-theming';

@customElement('app-page-get-started')
@UseComponents({
  [TINI_BUTTON]: TiniButtonComponent,
  [APP_TEST]: AppTest,
})
@Theming({
  styling: {
    bootstrap: [coreStyle, headingsStyle, linkStyle, textStyle],
  },
})
export class AppPageGetStarted extends LitElement {
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
