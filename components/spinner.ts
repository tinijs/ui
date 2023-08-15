import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const SPINNER = 'spinner';
export const TINI_SPINNER = `tini-${SPINNER}`;

/* UseBases(common) */
export class TiniSpinnerComponent extends LitElement {
  static readonly defaultTagName = TINI_SPINNER;

  // @property({type: String}) declare prop?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [SPINNER]: true,
    };
  }

  protected render() {
    return html`
      <spinner part=${SPINNER} class=${classMap(this.rootClasses)}></spinner>
    `;
  }
}
