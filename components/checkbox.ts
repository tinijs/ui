import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const CHECKBOX = 'checkbox';
export const TINI_CHECKBOX = `tini-${CHECKBOX}`;

/* UseBases(common) */
export class TiniCheckboxComponent extends LitElement {
  static readonly defaultTagName = TINI_CHECKBOX;

  // @property({type: String}) declare prop?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [CHECKBOX]: true,
    };
  }

  protected render() {
    return html`
      <checkbox part=${CHECKBOX} class=${classMap(this.rootClasses)}></checkbox>
    `;
  }
}
