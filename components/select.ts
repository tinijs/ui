import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const SELECT = 'select';
export const TINI_SELECT = `tini-${SELECT}`;

/* UseBases(common) */
export class TiniSelectComponent extends LitElement {
  static readonly defaultTagName = TINI_SELECT;

  // @property({type: String}) declare prop?: string;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [SELECT]: true,
    };
  }

  protected render() {
    return html`
      <select
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      ></select>
    `;
  }
}
