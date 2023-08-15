import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const CHECKBOX = 'checkbox';
export const TINI_CHECKBOX = `tini-${CHECKBOX}`;

/* UseBases(common) */
export class TiniCheckboxComponent extends LitElement {
  static readonly defaultTagName = TINI_CHECKBOX;

  // @property({type: String}) declare prop?: string;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [CHECKBOX]: true,
    };
  }

  protected render() {
    return html`
      <checkbox
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      ></checkbox>
    `;
  }
}
