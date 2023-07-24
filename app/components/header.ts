import {
  Component,
  TiniComponent,
  html,
  css,
  stylingWithBaseStyles,
} from '@tinijs/core';
import {commonStyles, linkStyles} from '../../dev/styles';

import {GITHUB_REPO_URL} from '../consts/main';

export const APP_HEADER = 'app-header';
@Component({
  theming: {
    styling: stylingWithBaseStyles([commonStyles, linkStyles]),
  },
})
export class AppHeaderComponent extends TiniComponent {
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      padding: var(--size-space);
      background-color: var(--color-primary);
      color: var(--color-light);
      box-shadow: var(--box-shadow);
    }

    .brand a {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      color: var(--color-light);
      text-decoration: none;
    }

    .brand a img {
      width: 1.5rem;
      height: auto;
    }

    .brand a h1 {
      margin: 0 0 0 0.5rem;
      font-size: 1.25rem;
    }

    .menu a {
      color: var(--color-light);
      text-decoration: none;
    }

    .menu a:hover {
      text-decoration: underline;
    }
  `;

  private LOGO_URL = new URL('../assets/logo.svg', import.meta.url).toString();

  protected render() {
    return html`
      <header>
        <div class="brand">
          <a href="/">
            <img src=${this.LOGO_URL} alt="Tini UI" />
            <h1>Tini UI</h1>
          </a>
        </div>
        <div class="menu">
          <a href=${GITHUB_REPO_URL} target="_blank">Source code</a>
        </div>
      </header>
    `;
  }
}
