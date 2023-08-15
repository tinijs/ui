import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const SWITCH = 'switch';
export const TINI_SWITCH = `tini-${SWITCH}`;

/* UseBases(common) */
export class TiniSwitchComponent extends LitElement {
  static readonly defaultTagName = TINI_SWITCH;

  // @property({type: String}) declare prop?: string;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [SWITCH]: true,
    };
  }

  protected render() {
    return html`
      <switch
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      ></switch>
    `;
  }
}
