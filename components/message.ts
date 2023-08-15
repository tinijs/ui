import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const MESSAGE = 'message';
export const TINI_MESSAGE = `tini-${MESSAGE}`;

/* UseBases(common) */
export class TiniMessageComponent extends LitElement {
  static readonly defaultTagName = TINI_MESSAGE;

  // @property({type: String}) declare prop?: string;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [MESSAGE]: true,
    };
  }

  protected render() {
    return html`
      <message
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      ></message>
    `;
  }
}
