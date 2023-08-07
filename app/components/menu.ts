import {
  Component,
  TiniComponent,
  html,
  css,
  nothing,
  stylingWithBases,
} from '@tinijs/core';
import {Route} from '@tinijs/router';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '@tinijs/ui/bases';
import {TiniLinkComponent} from '@tinijs/ui/components/link';

import routes from '../routes';

export const APP_MENU = 'app-menu';
@Component({
  components: [TiniLinkComponent],
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
    ]),
  },
})
export class AppMenuComponent extends TiniComponent {
  static readonly defaultTagName = APP_MENU;

  static styles = css`
    :host {
      padding: 1rem;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul > li > ul {
      margin-left: 1rem;
    }

    li {
      padding: 0.75rem 1rem;
    }

    li .title {
      display: block;
      margin-bottom: 0.5rem;
    }

    tini-link::part(link) {
      color: var(--color-medium);
    }

    tini-link::part(link):hover {
      color: var(--color-foreground);
    }
  `;

  private GROUP_NAMES = ['guides', 'components', 'icons'];

  private guides: Array<{title: string; href: string}> = [];
  private components: Array<{title: string; href: string}> = [];
  private icons: Array<{title: string; href: string}> = [];

  private buildMenu() {
    const handleRoute = ({path}: Route) => {
      for (const groupName of this.GROUP_NAMES) {
        if (~path.indexOf(`${groupName}/`)) {
          const pageName = path.split('/').pop() as string;
          (this as any)[groupName]?.push({
            title:
              pageName[0].toUpperCase() + pageName.slice(1).replace(/-/g, ' '),
            href: path,
          });
          break;
        }
      }
    };
    routes.forEach(route => {
      if (!route.children?.length) {
        handleRoute(route);
      } else {
        route.children.forEach(child => handleRoute(child));
      }
    });
  }

  onCreate() {
    this.buildMenu();
  }

  protected render() {
    return html`
      <h4>Documentation</h4>
      <ul>
        <li><tini-link href="/">Introduction</tini-link></li>
        <li><tini-link href="/get-started">Get started</tini-link></li>
        ${!this.guides.length
          ? nothing
          : html`
              <li>
                <strong class="title">Guides</strong>
                <ul>
                  ${this.guides.map(
                    ({title, href}) => html`
                      <li><tini-link href=${href}>${title}</tini-link></li>
                    `
                  )}
                </ul>
              </li>
            `}
        ${!this.components.length
          ? nothing
          : html`
              <li>
                <strong class="title">Components</strong>
                <ul>
                  ${this.components.map(
                    ({title, href}) => html`
                      <li><tini-link href=${href}>${title}</tini-link></li>
                    `
                  )}
                </ul>
              </li>
            `}
        ${!this.icons.length
          ? nothing
          : html`
              <li>
                <strong class="title">Icons</strong>
                <ul>
                  ${this.icons.map(
                    ({title, href}) => html`
                      <li><tini-link href=${href}>${title}</tini-link></li>
                    `
                  )}
                </ul>
              </li>
            `}
      </ul>
    `;
  }
}
