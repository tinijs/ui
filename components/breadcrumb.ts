import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {partMap, PartInfo, ColorsAndGradients} from '@tinijs/core';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/* UseBases(common) */
/* UseComponents(link) */
export class TiniBreadcrumbComponent extends LitElement {
  static readonly defaultTagName = 'tini-breadcrumb';

  /* eslint-disable prettier/prettier */
  @property({type: String}) declare items?: BreadcrumbItem[];
  @property({type: String, reflect: true}) declare linkColor?: ColorsAndGradients;
  /* eslint-enable prettier/prettier */

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      [`link-color-${this.linkColor}`]: !!this.linkColor,
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
                color=${ifDefined(this.linkColor)}
                >${item.label}</tini-link
              >
            `}
      </li>
    `;
  }
}
