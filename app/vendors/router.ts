import {TiniRouterOutlet} from './router-outlet';

export interface Route {
  path: string;
  component: string;
  action?: () => Promise<unknown>;
  children?: Omit<Route, 'children'>[];
}

export interface RouterOptions {
  linkTrigger?: boolean;
}

export interface MatchResult {
  url: URL;
  pageRoute?: Route;
  layoutRoute?: Route;
}

export function go(to: string) {
  const url = new URL(to, location.origin);
  if (url.href !== location.href) {
    history.pushState({}, '', url.href);
    dispatchEvent(new PopStateEvent('popstate'));
  }
}

export class TiniRouter {
  private outletCallback?: (result: MatchResult) => void;
  private readonly flatRoutes: Record<string, {layout?: Route; page: Route}>;

  constructor(
    public readonly routes: Route[],
    public readonly options: RouterOptions = {}
  ) {
    this.flatRoutes = this.buildFlatRoutes(routes);
  }

  go(to: string) {
    return go(to);
  }

  init() {
    this.registerOutlet();
    this.registerTriggers();
    return this as TiniRouter;
  }

  match(url: URL): MatchResult {
    // TODO: fix this
    // FIX ME: this is a very naive implementation
    const pathSegments = url.pathname.split('/');
    const fallbackPath =
      (!pathSegments[1] ? '/' : `/${pathSegments[1]}/`) + '**';
    const {layout, page} =
      this.flatRoutes[url.pathname] ||
      this.flatRoutes[fallbackPath] ||
      this.flatRoutes['/**'] ||
      {};
    // result
    return {url, layoutRoute: layout, pageRoute: page};
  }

  private setOutletCallback(callback: (result: MatchResult) => void) {
    this.outletCallback = callback;
  }

  private registerOutlet() {
    const tagName = 'router-outlet';
    if (!customElements.get(tagName)) {
      customElements.define(tagName, TiniRouterOutlet);
    }
  }

  private registerTriggers() {
    // link trigger
    if (this.options.linkTrigger) {
      addEventListener('click', e => {
        let anchor: null | HTMLAnchorElement = null;
        const paths = e.composedPath() as HTMLElement[];
        for (let i = 0; i < paths.length; i++) {
          if (paths[i].tagName === 'A') {
            anchor = paths[i] as HTMLAnchorElement;
            break;
          }
        }
        if (
          anchor &&
          (!anchor.target || anchor.target.toLowerCase() === '_self')
        ) {
          const url = new URL(anchor.href);
          if (url.href !== location.href) {
            history.pushState({}, '', url.href);
            this.onRouteChanges(url);
          }
          e.preventDefault();
        }
      });
    }
    // popstate trigger
    addEventListener('popstate', e => {
      this.onRouteChanges(new URL(location.href));
      e.preventDefault();
    });
  }

  private onRouteChanges(url: URL) {
    const detail = this.match(url);
    dispatchEvent(new CustomEvent('route', {detail}));
    if (this.outletCallback) this.outletCallback(detail);
  }

  private buildFlatRoutes(routes: Route[]) {
    const processPath = (path: string) => path.replace(/^\/|\/$/g, '');
    return routes.reduce((result, route) => {
      if (!route.children?.length) {
        const id = `/${processPath(route.path)}`;
        result[id] = {page: route};
      } else {
        route.children.forEach(child => {
          const id =
            (!route.path ? '' : `/${processPath(route.path)}`) +
            (!child.path ? '' : `/${processPath(child.path)}`);
          result[id || '/'] = {layout: route, page: child};
        });
      }
      return result;
    }, {} as TiniRouter['flatRoutes']);
  }
}

export function createRouter(routes: Route[], options: RouterOptions = {}) {
  return new TiniRouter(routes, options).init();
}
