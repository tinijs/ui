import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {
  partMap,
  PartInfo,
  ColorsAndGradients,
  Colors,
  Sizes,
  FontSizeFactors,
  JustifyContents,
} from '@tinijs/core';

export const TINI_BUTTON = 'tini-button';

/* UseBases(common) */
export class TiniButtonComponent extends LitElement {
  static readonly defaultTagName = TINI_BUTTON;

  @property({type: Boolean, reflect: true}) declare disabled?: boolean;
  @property({type: String, reflect: true}) declare justify?: JustifyContents;
  @property({type: String, reflect: true}) declare scheme?: ColorsAndGradients;
  @property({type: String, reflect: true}) declare size?: Sizes;
  @property({type: String, reflect: true, attribute: 'text-color'})
  declare textColor?: Colors;
  @property({type: String, reflect: true, attribute: 'text-size'})
  declare textSize?: FontSizeFactors;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      disabled: !!this.disabled,
      [`justify-${this.justify}`]: !!this.justify,
      [`scheme-${this.scheme}`]: !!this.scheme,
      [`size-${this.size}`]: !!this.size,
      [`text-color-${this.textColor}`]: !!this.textColor,
      [`text-size-${this.textSize}`]: !!this.textSize,
    };
  }

  protected render() {
    return html`<button
      part=${partMap(this.rootClassesParts)}
      class=${classMap(this.rootClassesParts)}
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`;
  }
}
