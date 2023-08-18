import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, Colors, SizeFactors} from '@tinijs/core';

export const TINI_MESSAGE = 'tini-message';

/* UseBases(common) */
export class TiniMessageComponent extends LitElement {
  static readonly defaultTagName = TINI_MESSAGE;

  @property({type: String, reflect: true}) declare background?: Colors;
  @property({type: String, reflect: true, attribute: 'text-color'})
  declare textColor?: Colors;
  @property({type: String, reflect: true, attribute: 'text-size'})
  declare textSize?: SizeFactors;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      [`bg-${this.background}`]: !!this.background,
      [`text-color-${this.textColor}`]: !!this.textColor,
      [`text-size-${this.textSize}`]: !!this.textSize,
    };
  }

  protected render() {
    return html`
      <div
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      >
        <slot></slot>
      </div>
    `;
  }
}
