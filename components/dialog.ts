import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const DIALOG = 'dialog';
export const TINI_DIALOG = `tini-${DIALOG}`;

/* UseBases(common) */
export class TiniDialogComponent extends LitElement {
  static readonly defaultTagName = TINI_DIALOG;

  // @property({type: String}) declare prop?: string;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [DIALOG]: true,
    };
  }

  protected render() {
    return html`
      <dialog
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      ></dialog>
    `;
  }
}
