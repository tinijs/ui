import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ColorsAndGradients} from '@tinijs/core';

export const TINI_TEXT = 'tini-text';

/* UseBases(common) */
export class TiniTextComponent extends LitElement {
  @property({type: String}) declare color?: ColorsAndGradients;

  private mainClasses: ClassInfo = {};
  protected willUpdate() {
    this.mainClasses = {
      [`color-${this.color}`]: !!this.color,
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
