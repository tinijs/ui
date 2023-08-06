import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ColorsAndGradientsWithDynamics, Colors, Sizes} from '@tinijs/core';

export const TINI_BUTTON = 'tini-button';

/* UseBases(common) */
export class TiniButtonComponent extends LitElement {
  @property({type: String}) declare color?: ColorsAndGradientsWithDynamics;
  @property({type: String}) declare textColor?: Colors;
  @property({type: String}) declare size?: Sizes;
  @property({type: Boolean, reflect: true}) declare disabled?: boolean;

  constructor() {
    super();
    this.disabled = false;
  }

  private mainClasses: ClassInfo = {};
  protected willUpdate() {
    this.mainClasses = {
      [`bg-${this.color}`]: !!this.color,
      [`color-${this.textColor}`]: !!this.textColor,
      [`size-${this.size}`]: !!this.size,
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
