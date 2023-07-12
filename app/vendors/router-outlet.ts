import {LitElement} from 'lit';
import {property} from 'lit/decorators.js';

import {TiniRouter, MatchResult} from './router';

export class TiniRouterOutlet extends LitElement {
  @property({type: Object}) declare readonly router?: TiniRouter;
  private currentLayout?: string;
  private currentPage?: string;

  connectedCallback() {
    super.connectedCallback();
    if (!this.router) throw new Error('Missing the TiniRouter instance.');
    (this.router as any).setOutletCallback(this.handleRoute.bind(this));
    this.handleRoute(this.router.match(new URL(location.href)));
  }

  private async handleRoute({layoutRoute, pageRoute}: MatchResult) {
    if (layoutRoute?.action) await layoutRoute.action();
    if (pageRoute?.action) await pageRoute.action();
    const layout = layoutRoute?.component;
    const page = pageRoute?.component;
    return layout === this.currentLayout && page === this.currentPage
      ? false
      : layout === this.currentLayout
      ? this.renderPage(page)
      : this.renderFull(page, layout);
  }

  private renderPage(page?: string) {
    this.currentPage = page;
    const containerEl = !this.currentLayout
      ? this.renderRoot
      : this.renderRoot.querySelector(this.currentLayout);
    if (!containerEl) return;
    if (!this.currentPage) return (containerEl.innerHTML = '');
    const pageEl = document.createElement(this.currentPage);
    return (containerEl.innerHTML = pageEl.outerHTML);
  }

  protected renderFull(page?: string, layout?: string) {
    this.currentLayout = layout;
    this.currentPage = page;
    if (!this.currentPage) return (this.renderRoot.innerHTML = '');
    const pageEl = document.createElement(this.currentPage);
    if (this.currentLayout) {
      const layoutEl = document.createElement(this.currentLayout);
      layoutEl.appendChild(pageEl);
      return (this.renderRoot.innerHTML = layoutEl.outerHTML);
    }
    return (this.renderRoot.innerHTML = pageEl.outerHTML);
  }
}
