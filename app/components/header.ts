import {
  Component,
  TiniComponent,
  Reactive,
  html,
  css,
  classMap,
  stylingWithBases,
} from '@tinijs/core';
import {Subscribe} from '@tinijs/store';
import {commonBases, linkBases} from '../../dev/bases';
import {ICON_GITHUB, IconGithubComponent} from '@tinijs/bootstrap-icons/github';
import {
  ICON_PALETTE,
  IconPaletteComponent,
} from '@tinijs/bootstrap-icons/palette';

import {APP_SKIN_EDITOR, AppSkinEditorComponent} from './skin-editor';

import {GITHUB_REPO_URL} from '../consts/main';
import {mainStore} from '../stores/main';

export const APP_HEADER = 'app-header';
@Component({
  components: {
    [ICON_GITHUB]: IconGithubComponent,
    [ICON_PALETTE]: IconPaletteComponent,
    [APP_SKIN_EDITOR]: AppSkinEditorComponent,
  },
  theming: {
    styling: stylingWithBases([commonBases, linkBases]),
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
      box-shadow: var(--shadow-box);
    }

    .brand a {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      color: var(--color-light);
      text-decoration: none;
      font-family: var(--font-head);
    }

    .brand a img {
      width: 1.5rem;
      height: auto;
    }

    .brand a h1 {
      margin: 0 0 0 0.5rem;
      font-size: 1.25rem;
    }

    .menu {
      display: flex;
      align-items: center;
      gap: calc(var(--size-space) * 1.5);
    }

    .menu > * {
      color: var(--color-light);
      text-decoration: none;
      background: none;
      padding: calc(var(--size-space) / 2);
      border-radius: var(--size-radius);
    }

    .menu > *:hover {
      background: var(--color-primary-shade);
    }

    .skin-editor-toggler {
      display: flex;
      align-items: center;
      cursor: pointer;
      background: none;
      border: none;
      color: var(--color-primary-contrast);
      font-size: 1rem;

      span {
        margin-left: calc(var(--size-space) / 2);
      }
    }

    .skin-editor-container {
      display: none;
      box-sizing: border-box;
      position: fixed;
      top: var(--header-height);
      right: 0;
      width: 310px;
      height: calc(100vh - var(--header-height));
      height: calc(100dvh - var(--header-height));
      background: var(--color-background);
      border: var(--size-border) solid var(--color-background-shade);
      box-shadow: var(--shadow-box);
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
            <icon-palette color="light" size="sm"></icon-palette>
            <span>Skin Editor</span>
          </button>
          <a href=${GITHUB_REPO_URL} target="_blank">
            <icon-github color="light" size="sm"></icon-github>
          </a>
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
