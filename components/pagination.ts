import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const PAGINATION = 'pagination';
export const TINI_PAGINATION = `tini-${PAGINATION}`;

/* UseBases(common) */
export class TiniPaginationComponent extends LitElement {
  static readonly defaultTagName = TINI_PAGINATION;

  // @property({type: String}) declare prop?: string;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [PAGINATION]: true,
    };
  }

  protected render() {
    return html`
      <pagination
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      ></pagination>
    `;
  }
}
