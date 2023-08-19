import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const TINI_ICON = 'tini-icon';

/* UseBases(common) */
export class TiniIconComponent extends LitElement {
  static readonly defaultTagName = TINI_ICON;

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare src?: string;
  @property({type: String, reflect: true}) declare size?: Sizes;
  @property({type: String, reflect: true}) declare scheme?: ColorsAndGradients;
  /* eslint-enable prettier/prettier */

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      recolor: !!this.scheme,
      [`size-${this.size}`]: !!this.size,
      [`scheme-${this.scheme}`]: !!this.scheme,
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
