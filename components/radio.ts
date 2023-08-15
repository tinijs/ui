import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const RADIO = 'radio';
export const TINI_RADIO = `tini-${RADIO}`;

/* UseBases(common) */
export class TiniRadioComponent extends LitElement {
  static readonly defaultTagName = TINI_RADIO;

  // @property({type: String}) declare prop?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [RADIO]: true,
    };
  }

  protected render() {
    return html`
      <radio part=${RADIO} class=${classMap(this.rootClasses)}></radio>
    `;
  }
}
