import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';

import {Colors, Sizes} from '../styles/bootstrap/types';

export const TINI_ICON = 'tini-icon';

/* UseBase(core) */
export class TiniIconComponent extends LitElement {
  @property({type: String}) declare readonly src?: string;
  @property({type: String}) declare readonly size?: Sizes;
  @property({type: String}) declare readonly color?: Colors;

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
