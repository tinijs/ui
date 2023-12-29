import {html, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {TiniElement, partMap, VaryGroups, Colors, Gradients} from 'tinijs';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/* UseBases(common) */
/* UseComponents(link) */
export class TiniBreadcrumbComponent extends TiniElement {
  static readonly defaultTagName = 'tini-breadcrumb';
  static readonly componentName = 'breadcrumb';

  /* eslint-disable prettier/prettier */
  @property({type: String}) declare items?: BreadcrumbItem[];
  @property({type: String, reflect: true}) declare linkColor?: Colors | Gradients;
  /* eslint-enable prettier/prettier */

  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // root classes parts
    this.extendRootClasses({
      overridable: {
        [`link-${VaryGroups.Color}`]: this.linkColor,
      },
    });
  }

  protected render() {
    return html`
      <ol class=${classMap(this.rootClasses)} part=${partMap(this.rootClasses)}>
        ${this.items?.map(item => this.renderItem(item))}
      </ol>
    `;
  }

  private renderItem(item: BreadcrumbItem) {
    const itemClasses: ClassInfo = {
      item: true,
      'item-active': !item.href,
    };
    return html`
      <li class=${classMap(itemClasses)} part=${partMap(itemClasses)}>
        ${!item.href
          ? html`${item.label}`
          : html`
              <tini-link
                exportparts="root:link-root"
                href=${item.href}
                color=${ifDefined(this.linkColor)}
                >${item.label}</tini-link
              >
            `}
      </li>
    `;
  }
}
