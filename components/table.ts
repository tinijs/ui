import {html, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

import {TiniElement, partAttrMap, Colors, Scales} from 'tinijs';

/* UseBases(common) */
export class TiniTableComponent extends TiniElement {
  static readonly defaultTagName = 'tini-table';
  static readonly componentName = 'table';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare prop?: string;
  /* eslint-enable prettier/prettier */

  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // root classes parts
    this.extendRootClasses({});
  }

  protected render() {
    return html`
      <div
        class=${classMap(this.rootClasses)}
        part=${partAttrMap(this.rootClasses)}
      >
        <slot></slot>
      </div>
    `;
  }
}
