import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {
  partMap,
  PartInfo,
  ColorsAndGradients,
  Colors,
  Sizes,
  JustifyContents,
} from '@tinijs/core';

export const BUTTON = 'button';
export const TINI_BUTTON = `tini-${BUTTON}`;

/* UseBases(common) */
export class TiniButtonComponent extends LitElement {
  static readonly defaultTagName = TINI_BUTTON;

  @property({type: String}) declare color?: ColorsAndGradients;
  @property({type: String}) declare textColor?: Colors;
  @property({type: String}) declare size?: Sizes;
  @property({type: String}) declare justify?: JustifyContents;
  @property({type: Boolean, reflect: true}) declare disabled?: boolean;

  constructor() {
    super();
    this.disabled = false;
  }

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [BUTTON]: true,
      [`bg-${this.color}`]: !!this.color,
      [`color-${this.textColor}`]: !!this.textColor,
      [`size-${this.size}`]: !!this.size,
      [`justify-${this.justify}`]: !!this.justify,
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
