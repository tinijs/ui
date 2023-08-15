import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const TEXTAREA = 'textarea';
export const TINI_TEXTAREA = `tini-${TEXTAREA}`;

/* UseBases(common) */
export class TiniTextareaComponent extends LitElement {
  static readonly defaultTagName = TINI_TEXTAREA;

  // @property({type: String}) declare prop?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [TEXTAREA]: true,
    };
  }

  protected render() {
    return html`
      <textarea part=${TEXTAREA} class=${classMap(this.rootClasses)} />
    `;
  }
}
