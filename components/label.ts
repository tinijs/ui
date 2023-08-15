import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const LABEL = 'label';
export const TINI_LABEL = `tini-${LABEL}`;

/* UseBases(common) */
export class TiniLabelComponent extends LitElement {
  static readonly defaultTagName = TINI_LABEL;

  // @property({type: String}) declare prop?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [LABEL]: true,
    };
  }

  protected render() {
    return html`
      <label part=${LABEL} class=${classMap(this.rootClasses)}></label>
    `;
  }
}
