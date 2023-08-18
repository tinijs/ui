import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, Colors, Sizes} from '@tinijs/core';

export const TINI_SPINNER = 'tini-spinner';

/* UseBases(common) */
export class TiniSpinnerComponent extends LitElement {
  static readonly defaultTagName = TINI_SPINNER;

  @property({type: String, reflect: true}) declare scheme?: Colors;
  @property({type: String, reflect: true}) declare size?: Sizes;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      [`scheme-${this.scheme}`]: !!this.scheme,
      [`size-${this.size}`]: !!this.size,
    };
  }

  protected render() {
    return html`
      <div
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      ></div>
    `;
  }
}
