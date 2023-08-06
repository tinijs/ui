import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ColorsAndGradients, FontTypes, FontSizeFactors} from '@tinijs/core';

export const TINI_TEXT = 'tini-text';

/* UseBases(common) */
export class TiniTextComponent extends LitElement {
  @property({type: String}) declare color?: ColorsAndGradients;
  @property({type: String}) declare font?: FontTypes;
  @property({type: String}) declare size?: FontSizeFactors;

  private mainClasses: ClassInfo = {};
  protected willUpdate() {
    this.mainClasses = {
      [`color-${this.color}`]: !!this.color,
      [`font-${this.font}`]: !!this.font,
      [`size-${this.size}`]: !!this.size,
    };
  }

  protected render() {
    return html`
      <span part="text" class=${classMap(this.mainClasses)}>
        <slot></slot>
      </span>
    `;
  }
}
