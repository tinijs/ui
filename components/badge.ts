import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const BADGE = 'badge';
export const TINI_BADGE = `tini-${BADGE}`;

/* UseBases(common) */
export class TiniBadgeComponent extends LitElement {
  static readonly defaultTagName = TINI_BADGE;

  // @property({type: String}) declare prop?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [BADGE]: true,
    };
  }

  protected render() {
    return html`
      <badge part=${BADGE} class=${classMap(this.rootClasses)}></badge>
    `;
  }
}
