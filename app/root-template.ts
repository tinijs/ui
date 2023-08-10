import {TiniComponent, html} from '@tinijs/core';
import {createRouter} from '@tinijs/router';

import {initTheme} from './helpers/theme';
import routes from './routes';

import './layouts/default';

export class AppRootTemplate extends TiniComponent {
  public readonly $router = createRouter(routes, {linkTrigger: true});

  onCreate() {
    initTheme();
  }

  protected render() {
    return html`<router-outlet .router=${this.$router}></router-outlet>`;
  }
}
