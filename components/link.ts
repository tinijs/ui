import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined';

export const TINI_LINK = 'tini-link';

/* UseBase(core) */
export class TiniLinkComponent extends LitElement {
  @property({type: String}) readonly href = '#';
  @property({type: String}) readonly rel?: string;
  @property({type: String}) readonly target?:
    | '_blank'
    | '_self'
    | '_parent'
    | '_top';

  protected render() {
    return html`
      <a
        part="link"
        href=${this.href}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel)}
      >
        <slot></slot>
      </a>
    `;
  }
}
