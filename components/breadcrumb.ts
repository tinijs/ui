import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, ColorsAndGradients} from '@tinijs/core';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const BREADCRUMB = 'breadcrumb';
export const TINI_BREADCRUMB = `tini-${BREADCRUMB}`;

/* UseBases(common) */
/* UseComponents(link) */
export class TiniBreadcrumbComponent extends LitElement {
  static readonly defaultTagName = TINI_BREADCRUMB;

  @property({type: String}) declare items?: BreadcrumbItem[];
  @property({type: String}) declare linkColor?: ColorsAndGradients;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [BREADCRUMB]: true,
    };
  }

  protected render() {
    return html`
      <ol part=${BREADCRUMB} class=${classMap(this.rootClasses)}>
        ${this.items?.map(
          item => html`
            <li class="item" part=${partMap({item: true, active: !item.href})}>
              ${!item.href
                ? html`${item.label}`
                : html`
                    <tini-link
                      exportparts="link"
                      href=${item.href}
                      .color=${this.linkColor}
                      >${item.label}</tini-link
                    >
                  `}
            </li>
          `
        )}
      </ol>
    `;
  }
}
