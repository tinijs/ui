import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const RADIO = 'radio';
export const TINI_RADIO = `tini-${RADIO}`;

/* UseBases(common) */
export class TiniRadioComponent extends LitElement {
  static readonly defaultTagName = TINI_RADIO;

  // @property({type: String}) declare prop?: string;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [RADIO]: true,
    };
  }

  protected render() {
    return html`
      <radio
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      ></radio>
    `;
  }
}
