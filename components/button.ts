import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

import {Colors, Sizes} from '../styles/bootstrap/types';

export const TINI_BUTTON = 'tini-button';

/* UseBases(common) */
export class TiniButtonComponent extends LitElement {
  @property({type: String}) declare color?: Colors;
  @property({type: String}) declare size?: Sizes;
  @property({type: Boolean, reflect: true}) declare disabled?: boolean;

  constructor() {
    super();
    this.disabled = false;
  }

  protected render() {
    return html`<button
      part="button"
      class=${classMap({
        [this.color as string]: !!this.color,
        [this.size as string]: !!this.size,
      })}
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`;
  }
}
