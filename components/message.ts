import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const MESSAGE = 'message';
export const TINI_MESSAGE = `tini-${MESSAGE}`;

/* UseBases(common) */
export class TiniMessageComponent extends LitElement {
  static readonly defaultTagName = TINI_MESSAGE;

  // @property({type: String}) declare prop?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [MESSAGE]: true,
    };
  }

  protected render() {
    return html`
      <message part=${MESSAGE} class=${classMap(this.rootClasses)}></message>
    `;
  }
}
