import {Theming} from '@tinijs/core';
import {LitElement, html, css, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {classMap} from 'lit/directives/class-map.js';

import coreStyle from '../../styles/bootstrap/base/core';

export interface TabItem {
  name: string;
  active?: boolean;
  icon?: string;
  iconOnly?: boolean;
}

export const APP_TABS = 'app-tabs';

@Theming({
  styling: {
    bootstrap: [coreStyle],
  },
})
export class AppTabs extends LitElement {
  static styles = css`
    .head {
      transform: translateY(1px);
    }

    .tablink {
      cursor: pointer;
      display: inline-block;
      border: var(--size-border) solid var(--color-medium-tint);
      border-radius: var(--size-radius) var(--size-radius) 0 0;
      padding: 0.5rem 1rem;
      background-color: var(--color-background-shade);
    }

    .tablink.active {
      background-color: var(--color-background);
      border-bottom-color: var(--color-background);
    }

    .body {
      border: var(--size-border) solid var(--color-medium-tint);
      border-radius: 0 0 var(--size-radius) var(--size-radius);
      padding: 1rem;
    }
  `;

  @property({type: Array}) declare readonly tabItems?: TabItem[];
  @property({type: String}) declare activeName?: string;

  private containerRegistry: Record<string, HTMLElement> = {};

  connectedCallback() {
    super.connectedCallback();
    // containers
    this.querySelectorAll('[data-tab]').forEach((node, i) => {
      const tabItem = this.tabItems?.[i];
      const container = node as HTMLElement;
      if (!tabItem || !container.style) return;
      container.style.display = tabItem.active ? 'block' : 'none';
      this.containerRegistry[tabItem.name] = container;
    });
  }

  protected willUpdate() {
    if (this.activeName) {
      this.changeTabContent(this.activeName);
    }
  }

  private changeTabContent(name: string) {
    const container = this.containerRegistry[name];
    if (!container) return;
    Object.values(this.containerRegistry).forEach(
      node => (node.style.display = 'none')
    );
    container.style.display = 'block';
  }

  private changeTab(name: string) {
    this.activeName = name;
    this.dispatchEvent(new CustomEvent('change', {detail: {name}}));
  }

  protected render() {
    return html`
      <div class="head">
        ${this.tabItems?.map(
          ({name, icon, iconOnly}) => html`
            <button
              class=${classMap({
                tablink: true,
                active: name === this.activeName,
              })}
              @click=${() => this.changeTab(name)}
            >
              ${!icon
                ? nothing
                : unsafeHTML(`<app-icon-${icon}></app-icon-${icon}>`)}
              ${iconOnly ? nothing : html`<strong>${name}</strong>`}
            </button>
          `
        )}
      </div>
      <div class="body">
        <slot></slot>
      </div>
    `;
  }
}
