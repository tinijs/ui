import {html, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {
  TiniElement,
  partMap,
  PartInfo,
  VaryGroups,
  Colors,
  Gradients,
} from 'tinijs';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/* UseBases(common) */
/* UseComponents(link) */
export class TiniBreadcrumbComponent extends TiniElement {
  static readonly defaultTagName = 'tini-breadcrumb';

  /* eslint-disable prettier/prettier */
  @property({type: String}) declare items?: BreadcrumbItem[];
  @property({type: String, reflect: true}) declare linkColor?: Colors | Gradients;
  /* eslint-enable prettier/prettier */

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root classes parts
    this.extendRootClassesParts({
      [`link-${VaryGroups.Color}-${this.linkColor}`]: !!this.linkColor,
    });
  }

  protected render() {
    return html`
      <ol
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
        style=${styleMap(this.rootStyles)}
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
