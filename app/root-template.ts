import {TiniComponent, html} from '@tinijs/core';
import {createRouter} from '@tinijs/router';

import {Configurable} from './configurable';
import {initTheme} from './helpers/theme';

import './layouts/default';

export class AppRootTemplate extends TiniComponent {
  public readonly $router = createRouter(Configurable.getOption('routes'), {
    linkTrigger: true,
  });

  onCreate() {
    initTheme();
  }

  protected render() {
    return html`<router-outlet .router=${this.$router}></router-outlet>`;
  }
}
