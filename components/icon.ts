import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const TINI_ICON = 'tini-icon';
/* UseBases(common) */
export class TiniIconComponent extends LitElement {
  static readonly defaultTagName = TINI_ICON;

  @property({type: String}) declare src?: string;
  @property({type: String}) declare color?: ColorsAndGradients;
  @property({type: String}) declare size?: Sizes;

  private mainClasses: ClassInfo = {};
  protected willUpdate() {
    this.mainClasses = {
      recolor: !!this.color,
      [`color-${this.color}`]: !!this.color,
      [`size-${this.size}`]: !!this.size,
    };
  }

  protected render() {
    return html`
      <i
        part="icon"
        class=${classMap(this.mainClasses)}
        style=${styleMap({'--icon-image': `url(${this.src})`})}
      ></i>
    `;
  }
}
