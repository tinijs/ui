import {
  Component,
  TiniComponent,
  Reactive,
  html,
  css,
  classMap,
  stylingWithBaseStyles,
} from '@tinijs/core';
import {Subscribe} from '@tinijs/store';
import {commonStyles, linkStyles} from '../../dev/styles';
import {
  ICON_PALETTE,
  IconPaletteComponent,
} from '@tinijs/bootstrap-icons/palette.js';

import {APP_SKIN_EDITOR, AppSkinEditorComponent} from './skin-editor';

import {GITHUB_REPO_URL} from '../consts/main';
import {mainStore} from '../stores/main';

export const APP_HEADER = 'app-header';
@Component({
  components: {
    [ICON_PALETTE]: IconPaletteComponent,
    [APP_SKIN_EDITOR]: AppSkinEditorComponent,
  },
  theming: {
    styling: stylingWithBaseStyles([commonStyles, linkStyles]),
  },
})
export class AppHeaderComponent extends TiniComponent {
  static styles = css`
    :host {
      --header-height: 60px;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--header-height);
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

    .skin-editor-toggler {
      cursor: pointer;
      background: none;
      border: none;
      color: var(--color-primary-contrast);
    }

    .skin-editor-container {
      display: none;
      box-sizing: border-box;
      position: fixed;
      /* top: var(--header-height);
      right: 0; */
      top: 0;
      left: 100px;
      width: 310px;
      height: calc(100vh - var(--header-height));
      height: calc(100dvh - var(--header-height));
      background: var(--color-background);
      border-left: var(--size-border) solid var(--color-background-shade);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    }

    .skin-editor-container.showed {
      display: block;
    }
  `;

  private LOGO_URL = new URL('../assets/logo.svg', import.meta.url).toString();

  @Subscribe(mainStore) @Reactive() private skinEditorShown =
    mainStore.skinEditorShown;

  private toggleSkinEditor() {
    return mainStore.commit('skinEditorShown', !mainStore.skinEditorShown);
  }

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
          <button class="skin-editor-toggler" @click=${this.toggleSkinEditor}>
            <icon-palette color="light"></icon-palette>
            <span>Skin Editor</span>
          </button>
          <a href=${GITHUB_REPO_URL} target="_blank">Source code</a>
        </div>
      </header>

      <div
        class=${classMap({
          'skin-editor-container': true,
          showed: this.skinEditorShown,
        })}
      >
        <app-skin-editor></app-skin-editor>
      </div>
    `;
  }
}
