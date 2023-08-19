import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, Colors, Sizes} from '@tinijs/core';

export const TINI_LABEL = 'tini-label';

/* UseBases(common) */
export class TiniLabelComponent extends LitElement {
  static readonly defaultTagName = TINI_LABEL;

  /* eslint-disable prettier/prettier */
  @property({type: Boolean, reflect: true}) declare pilled?: boolean;
  @property({type: String, reflect: true}) declare scheme?: Colors;
  @property({type: String, reflect: true}) declare size?: Sizes;
  @property({type: String, reflect: true}) declare color?: Colors;
  /* eslint-enable prettier/prettier */

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      pilled: !!this.pilled,
      [`scheme-${this.scheme}`]: !!this.scheme,
      [`size-${this.size}`]: !!this.size,
      [`color-${this.color}`]: !!this.color,
    };
  }

  protected render() {
    return html`
      <span
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      >
        <slot></slot>
      </span>
    `;
  }
}
