import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {UseComponents} from '../vendors/components';
import {Theming} from '../vendors/theming';

import coreStyle from '../../styles/bootstrap/base/core';

import {APP_HEADER, AppHeader} from '../components/header';
import {APP_MENU, AppMenu} from '../components/menu';

@customElement('app-layout-default')
@UseComponents({
  [APP_HEADER]: AppHeader,
  [APP_MENU]: AppMenu,
})
@Theming({
  styling: {
    bootstrap: [coreStyle],
  },
})
export class AppLayoutDefault extends LitElement {
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
    }

    .menu {
      grid-area: menu;
      border-right: 1px solid var(--color-light-shade);
    }

    .page {
      grid-area: page;
      padding: 1rem 5rem;
      overflow-x: hidden;
      overflow-y: scroll;

      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
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
