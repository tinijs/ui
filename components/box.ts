import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {ColorsAndGradients, Colors} from '@tinijs/core';

export const BOX = 'box';
export const TINI_BOX = `tini-${BOX}`;

/* UseBases(common) */
export class TiniBoxComponent extends LitElement {
  static readonly defaultTagName = TINI_BOX;

  @property({type: String}) declare background?: ColorsAndGradients;
  @property({type: String}) declare textColor?: Colors;
  // @property({type: String}) declare padding?: Multipliers;
  // @property({type: String}) declare margin?: Multipliers;

  private rootClasses = {};
  protected willUpdate() {
    this.rootClasses = {
      [BOX]: true,
      [`bg-${this.background}`]: !!this.background,
      [`color-${this.textColor}`]: !!this.textColor,
    };
  }

  protected render() {
    return html`
      <div part=${BOX} class=${classMap(this.rootClasses)}>
        <slot></slot>
      </div>
    `;
  }
}
