import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients} from '@tinijs/core';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const TINI_BREADCRUMB = 'tini-breadcrumb';

/* UseBases(common) */
/* UseComponents(link) */
export class TiniBreadcrumbComponent extends LitElement {
  static readonly defaultTagName = TINI_BREADCRUMB;

  @property({type: String}) declare items?: BreadcrumbItem[];
  @property({type: String}) declare linkColor?: ColorsAndGradients;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
    };
  }

  protected render() {
    return html`
      <ol
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      >
        ${this.items?.map(item => this.renderItem(item))}
      </ol>
    `;
  }

  private renderItem(item: BreadcrumbItem) {
    const itemClassesParts: ClassInfo | PartInfo = {
      item: true,
      'item-active': !item.href,
    };
    return html`
      <li class=${classMap(itemClassesParts)} part=${partMap(itemClassesParts)}>
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
    `;
  }
}
