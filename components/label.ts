import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, Colors, Sizes} from '@tinijs/core';

export const LABEL = 'label';
export const TINI_LABEL = `tini-${LABEL}`;

/* UseBases(common) */
export class TiniLabelComponent extends LitElement {
  static readonly defaultTagName = TINI_LABEL;

  @property({type: String}) declare color?: Colors;
  @property({type: String}) declare textColor?: Colors;
  @property({type: String}) declare size?: Sizes;
  @property({type: Boolean}) declare pilled?: boolean;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [LABEL]: true,
      [`bg-${this.color}`]: !!this.color,
      [`color-${this.textColor}`]: !!this.textColor,
      [`size-${this.size}`]: !!this.size,
      pilled: !!this.pilled,
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
