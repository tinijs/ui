import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const INPUT = 'input';
export const TINI_INPUT = `tini-${INPUT}`;

/* UseBases(common) */
export class TiniInputComponent extends LitElement {
  static readonly defaultTagName = TINI_INPUT;

  // @property({type: String}) declare prop?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [INPUT]: true,
    };
  }

  protected render() {
    return html` <input part=${INPUT} class=${classMap(this.rootClasses)} /> `;
  }
}
