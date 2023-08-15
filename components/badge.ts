import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ColorsAndGradients, Colors, Sizes} from '@tinijs/core';

export const BADGE = 'badge';
export const TINI_BADGE = `tini-${BADGE}`;

/* UseBases(common) */
export class TiniBadgeComponent extends LitElement {
  static readonly defaultTagName = TINI_BADGE;

  @property({type: String}) declare color?: ColorsAndGradients;
  @property({type: String}) declare textColor?: Colors;
  @property({type: String}) declare size?: Sizes;
  @property({type: Boolean}) declare pilled?: boolean;
  @property({type: Boolean}) declare rounded?: boolean;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [BADGE]: true,
      [`bg-${this.color}`]: !!this.color,
      [`color-${this.textColor}`]: !!this.textColor,
      [`size-${this.size}`]: !!this.size,
      pilled: !!this.pilled,
      rounded: !!this.rounded,
    };
  }

  protected render() {
    return html`
      <span part=${BADGE} class=${classMap(this.rootClasses)}>
        <slot></slot>
      </span>
    `;
  }
}
