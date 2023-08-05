import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {Colors, Sizes} from '@tinijs/core';

export const TINI_ICON = 'tini-icon';

/* UseBases(common) */
export class TiniIconComponent extends LitElement {
  @property({type: String}) declare src?: string;
  @property({type: String}) declare size?: Sizes;
  @property({type: String}) declare color?: Colors;

  protected render() {
    return html`
      <i
        part="icon"
        class=${classMap({
          recolor: !!this.color,
          [this.color as string]: !!this.color,
          [this.size as string]: !!this.size,
        })}
        style=${styleMap({'--icon-image': `url(${this.src})`})}
      ></i>
    `;
  }
}
