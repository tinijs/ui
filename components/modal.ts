import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const MODAL = 'modal';
export const TINI_MODAL = `tini-${MODAL}`;

/* UseBases(common) */
export class TiniModalComponent extends LitElement {
  static readonly defaultTagName = TINI_MODAL;

  // @property({type: String}) declare prop?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [MODAL]: true,
    };
  }

  protected render() {
    return html`
      <modal part=${MODAL} class=${classMap(this.rootClasses)}></modal>
    `;
  }
}
