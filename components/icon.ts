import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const TINI_ICON = 'tini-icon';

/* UseBases(common) */
export class TiniIconComponent extends LitElement {
  static readonly defaultTagName = TINI_ICON;

  @property({type: String, reflect: true}) declare src?: string;
  @property({type: String, reflect: true}) declare color?: ColorsAndGradients;
  @property({type: String, reflect: true}) declare size?: Sizes;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      recolor: !!this.color,
      [`color-${this.color}`]: !!this.color,
      [`size-${this.size}`]: !!this.size,
    };
  }

  protected render() {
    return html`
      <i
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
        style=${styleMap({'--icon-image': `url(${this.src})`})}
      ></i>
    `;
  }
}
