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

  private groups: Record<string, {title?: string; items: NavItem[]}> = {};

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
        if (!this.groups[groupName])
          this.groups[groupName] = {
            title: groupName === 'top' ? undefined : groupName.toUpperCase(),
            items: [],
          };
        if (
          path !== '**' &&
          (~path.indexOf(`${groupName}/`) ||
            (groupName === 'top' && pathSegments.length < 2))
        ) {
          this.groups[groupName]?.items.push({
            title: linkTitle,
            href: !path ? '/' : `/${path}`,
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
        ${Object.keys(this.groups).map(groupName => {
          const {title, items} = this.groups[groupName];
          return !title
            ? html`
                ${items.map(
                  ({title, href}) => html`
                    <li>
                      <tini-link href=${href} active="active"
                        >${title}</tini-link
                      >
                    </li>
                  `
                )}
              `
            : html`
                <li>
                  <strong class="title">${title}</strong>
                  <ul>
                    ${items.map(
                      ({title, href}) => html`
                        <li>
                          <tini-link href=${href} active="active"
                            >${title}</tini-link
                          >
                        </li>
                      `
                    )}
                  </ul>
                </li>
              `;
        })}
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
        color: var(--color-medium);
      }
    }

    tini-link {
      &::part(root) {
        color: var(--color-foreground);
      }

      &.active::part(root) {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  `;
}
