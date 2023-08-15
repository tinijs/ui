import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const DIALOG = 'dialog';
export const TINI_DIALOG = `tini-${DIALOG}`;

/* UseBases(common) */
export class TiniDialogComponent extends LitElement {
  static readonly defaultTagName = TINI_DIALOG;

  // @property({type: String}) declare prop?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [DIALOG]: true,
    };
  }

  protected render() {
    return html`
      <dialog part=${DIALOG} class=${classMap(this.rootClasses)}></dialog>
    `;
  }
}
