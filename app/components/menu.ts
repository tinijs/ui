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
  TiniLinkComponent,
} from '@tinijs/ui';

import {Configurable} from '../configurable';

type NavItem = {title: string; href: string};

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

  private readonly ROUTES = Configurable.getOption('routes');
  private readonly GROUP_NAMES = ['top', 'guides', 'components', 'icons'];

  private topGroup: NavItem[] = [];
  private guidesGroup: NavItem[] = [];
  private componentsGroup: NavItem[] = [];
  private iconsGroup: NavItem[] = [];

  private buildMenu() {
    const processRoute = ({path, title}: Route) => {
      const pathSegments = path.split('/').filter(Boolean);
      const linkTitle =
        title ||
        (pathSegments[pathSegments.length - 1] || 'untitled')
          .replace(/-|_/g, ' ')
          .split(' ')
          .map(word => word[0].toUpperCase() + word.slice(1))
          .join(' ');
      for (const groupName of this.GROUP_NAMES) {
        if (
          path !== '**' &&
          (~path.indexOf(`${groupName}/`) ||
            (groupName === 'top' && pathSegments.length < 2))
        ) {
          (this as any)[`${groupName}Group`]?.push({
            title: linkTitle,
            href: path || '/',
          });
          break;
        }
      }
    };
    this.ROUTES.forEach(route => {
      if (!route.children?.length) {
        processRoute(route);
      } else {
        route.children.forEach(child => processRoute(child));
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
        ${!this.topGroup.length
          ? nothing
          : html`
              ${this.topGroup.map(
                ({title, href}) => html`
                  <li><tini-link href=${href}>${title}</tini-link></li>
                `
              )}
            `}
        ${!this.guidesGroup.length
          ? nothing
          : html`
              <li>
                <strong class="title">Guides</strong>
                <ul>
                  ${this.guidesGroup.map(
                    ({title, href}) => html`
                      <li><tini-link href=${href}>${title}</tini-link></li>
                    `
                  )}
                </ul>
              </li>
            `}
        ${!this.componentsGroup.length
          ? nothing
          : html`
              <li>
                <strong class="title">Components</strong>
                <ul>
                  ${this.componentsGroup.map(
                    ({title, href}) => html`
                      <li><tini-link href=${href}>${title}</tini-link></li>
                    `
                  )}
                </ul>
              </li>
            `}
        ${!this.iconsGroup.length
          ? nothing
          : html`
              <li>
                <strong class="title">Icons</strong>
                <ul>
                  ${this.iconsGroup.map(
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

  static styles = css`
    :host {
      padding: 1rem;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      padding: 0.75rem 1rem;

      .title {
        display: block;
        margin-bottom: 0.5rem;
      }
    }

    tini-link::part(link) {
      color: var(--color-medium);
    }

    tini-link::part(link):hover {
      color: var(--color-foreground);
    }
  `;
}
