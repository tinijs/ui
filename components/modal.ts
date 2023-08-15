import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const MODAL = 'modal';
export const TINI_MODAL = `tini-${MODAL}`;

/* UseBases(common) */
export class TiniModalComponent extends LitElement {
  static readonly defaultTagName = TINI_MODAL;

  // @property({type: String}) declare prop?: string;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [MODAL]: true,
    };
  }

  protected render() {
    return html`
      <modal
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      ></modal>
    `;
  }
}
