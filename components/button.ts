import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ColorsAndGradients, Colors, Sizes, JustifyContents} from '@tinijs/core';

export const TINI_BUTTON = 'tini-button';
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

  private mainClasses: ClassInfo = {};
  protected willUpdate() {
    this.mainClasses = {
      button: true,
      [`bg-${this.color}`]: !!this.color,
      [`color-${this.textColor}`]: !!this.textColor,
      [`size-${this.size}`]: !!this.size,
      [`justify-${this.justify}`]: !!this.justify,
    };
  }

  protected render() {
    return html`<button
      part="button"
      class=${classMap(this.mainClasses)}
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`;
  }
}
