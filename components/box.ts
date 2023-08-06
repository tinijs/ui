import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

import {ColorsAndGradientsWithDynamics} from '@tinijs/core';

export const TINI_BOX = 'tini-box';

/* UseBases(common) */
export class TiniBoxComponent extends LitElement {
  @property({type: String}) declare background?: ColorsAndGradientsWithDynamics;
  // @property({type: String}) declare textColor?: Colors;
  // @property({type: String}) declare padding?: Multipliers;
  // @property({type: String}) declare margin?: Multipliers;

  private mainClasses = {};
  protected willUpdate() {
    this.mainClasses = {
      [`bg-${this.background}`]: !!this.background,
    };
  }

  protected render() {
    return html`
      <div part="box" class=${classMap(this.mainClasses)}>
        <slot></slot>
      </div>
    `;
  }
}
