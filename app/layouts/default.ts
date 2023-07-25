import {Layout, TiniComponent, html, css} from '@tinijs/core';

import {commonStyles} from '../../dev/styles';

import {APP_HEADER, AppHeaderComponent} from '../components/header';
import {APP_MENU, AppMenuComponent} from '../components/menu';

@Layout({
  name: 'app-layout-default',
  components: {
    [APP_HEADER]: AppHeaderComponent,
    [APP_MENU]: AppMenuComponent,
  },
  theming: {
    styling: {
      bootstrap: [commonStyles.bootstrap],
      material: [commonStyles.material],
    },
  },
})
export class AppLayoutDefault extends TiniComponent {
  static styles = css`
    :host {
      --header-height: 60px;
      display: grid;
      grid:
        'header header header' var(--header-height)
        'menu page ads' auto
        / 1fr 4fr 1fr;
      column-gap: 2rem;
    }

    .header {
      grid-area: header;
      position: sticky;
      top: 0;
      left: 0;
      z-index: 1;
      height: 60px;
    }

    .menu,
    .page {
      height: calc(100vh - var(--header-height));
      height: calc(100dvh - var(--header-height));
      overflow-x: hidden;
      overflow-y: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .menu::-webkit-scrollbar,
    .page::-webkit-scrollbar {
      display: none;
    }

    .menu {
      grid-area: menu;
      border-right: 1px solid var(--color-light-shade);
    }

    .page {
      grid-area: page;
      padding: 1rem 5rem;
    }
  `;

  protected render() {
    return html`
      <header class="header">
        <app-header></app-header>
      </header>
      <nav class="menu">
        <app-menu></app-menu>
      </nav>
      <main class="page">
        <slot></slot>
      </main>
    `;
  }
}
