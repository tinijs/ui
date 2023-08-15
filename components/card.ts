import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const CARD = 'card';
export const TINI_CARD = `tini-${CARD}`;

/* UseBases(common) */
export class TiniCardComponent extends LitElement {
  static readonly defaultTagName = TINI_CARD;

  // @property({type: String}) declare prop?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [CARD]: true,
    };
  }

  protected render() {
    return html`
      <card part=${CARD} class=${classMap(this.rootClasses)}></card>
    `;
  }
}
