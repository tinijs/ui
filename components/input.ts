import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const INPUT = 'input';
export const TINI_INPUT = `tini-${INPUT}`;

/* UseBases(common) */
export class TiniInputComponent extends LitElement {
  static readonly defaultTagName = TINI_INPUT;

  // @property({type: String}) declare prop?: string;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [INPUT]: true,
    };
  }

  protected render() {
    return html`
      <input
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      />
    `;
  }
}
