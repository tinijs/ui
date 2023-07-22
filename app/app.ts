import {createRouter} from '@tinijs/router';
import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import {routes} from './routes';

import coreStyle from '../styles/bootstrap/base/core';

import './layouts/default';

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = [coreStyle];

  public readonly router = createRouter(routes, {linkTrigger: true});

  protected render() {
    return html`<router-outlet .router=${this.router}></router-outlet>`;
  }
}
