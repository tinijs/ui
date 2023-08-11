import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined';
import {ColorsAndGradients} from '@tinijs/core';

export const LINK = 'link';
export const TINI_LINK = `tini-${LINK}`;

/* UseBases(common) */
export class TiniLinkComponent extends LitElement {
  static readonly defaultTagName = TINI_LINK;

  @property({type: String}) declare color?: ColorsAndGradients;
  @property({type: String}) declare href?: string;
  @property({type: String}) declare rel?: string;
  @property({type: String}) declare target?:
    | '_blank'
    | '_self'
    | '_parent'
    | '_top';

  private mainClasses: ClassInfo = {};
  protected willUpdate() {
    this.mainClasses = {
      [LINK]: true,
      [`color-${this.color}`]: !!this.color,
    };
  }

  protected render() {
    return html`
      <a
        part=${LINK}
        class=${classMap(this.mainClasses)}
        href=${this.href || '#'}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel)}
      >
        <slot></slot>
      </a>
    `;
  }
}
