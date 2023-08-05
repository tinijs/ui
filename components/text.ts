import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {ColorsWithoutDynamics} from '@tinijs/core';

export const TINI_TEXT = 'tini-text';

/* UseBases(common) */
export class TiniTextComponent extends LitElement {
  @property({type: String}) declare color?: ColorsWithoutDynamics;

  protected render() {
    return html`
      <span
        part="text"
        class=${classMap({
          [this.color as string]: !!this.color
        })}
      >
        <slot></slot>
      </span>
    `;
  }
}
