import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, Colors, FontSizeFactors} from '@tinijs/core';

export const TINI_MESSAGE = 'tini-message';

/* UseBases(common) */
export class TiniMessageComponent extends LitElement {
  static readonly defaultTagName = TINI_MESSAGE;

  @property({type: String, reflect: true}) declare scheme?: Colors;
  @property({type: String, reflect: true}) declare color?: Colors;
  @property({type: String, reflect: true, attribute: 'font-size'})
  declare fontSize?: FontSizeFactors;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      [`scheme-${this.scheme}`]: !!this.scheme,
      [`color-${this.color}`]: !!this.color,
      [`font-size-${this.fontSize}`]: !!this.fontSize,
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
