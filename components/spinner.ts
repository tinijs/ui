import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const SPINNER = 'spinner';
export const TINI_SPINNER = `tini-${SPINNER}`;

/* UseBases(common) */
export class TiniSpinnerComponent extends LitElement {
  static readonly defaultTagName = TINI_SPINNER;

  // @property({type: String}) declare prop?: string;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [SPINNER]: true,
    };
  }

  protected render() {
    return html`
      <spinner
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      ></spinner>
    `;
  }
}
