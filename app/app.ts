import {App, TiniComponent, html} from '@tinijs/core';
import {createRouter} from '@tinijs/router';

import configs from './configs/development';
import routes from './routes';
import providers from './providers';

import './layouts/default';

@App({providers})
export class AppRoot extends TiniComponent {
  public readonly $configs = configs;
  public readonly $router = createRouter(routes, {linkTrigger: true});

  protected render() {
    return html`<router-outlet .router=${this.$router}></router-outlet>`;
  }
}
