import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {ref, Ref, createRef} from 'lit/directives/ref.js';
import {
  ColorsAndGradients,
  FontTypes,
  FontSizeFactors,
  FontWeights,
  TextTransforms,
} from '@tinijs/core';

export const LINK = 'link';
export const TINI_LINK = `tini-${LINK}`;

/* UseBases(common) */
export class TiniLinkComponent extends LitElement {
  static readonly defaultTagName = TINI_LINK;

  private anchorRef: Ref<HTMLAnchorElement> = createRef();

  @property({type: String}) declare href?: string;
  @property({type: String}) declare rel?: string;
  @property({type: String}) declare target?:
    | '_blank'
    | '_self'
    | '_parent'
    | '_top';
  @property({type: String}) declare active?: string;
  @property({type: String}) declare color?: ColorsAndGradients;
  @property({type: String}) declare font?: FontTypes;
  @property({type: String}) declare size?: FontSizeFactors;
  @property({type: String}) declare weight?: FontWeights;
  @property({type: String}) declare transform?: TextTransforms;

  private mainClasses: ClassInfo = {};
  willUpdate() {
    this.mainClasses = {
      [LINK]: true,
      [`color-${this.color}`]: !!this.color,
      [`font-${this.font}`]: !!this.font,
      [`size-${this.size}`]: !!this.size,
      [`weight-${this.weight}`]: !!this.weight,
      [`transform-${this.transform}`]: !!this.transform,
    };
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.active) window.addEventListener('route', this.updateActiveStatus);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.active)
      window.removeEventListener('route', this.updateActiveStatus);
  }

  updated() {
    if (this.active) this.updateActiveStatus();
  }

  private updateActiveStatus = (e?: Event) => {
    if (!this.active || !this.anchorRef.value) return;
    const currentUrl = new URL(
      !this.href ? '/' : this.href,
      window.location.origin
    );
    const eventUrl = (e as CustomEvent)?.detail.url;
    const currentActive = e
      ? currentUrl.href === `${eventUrl.origin}${eventUrl.pathname}`
      : currentUrl.href ===
        `${window.location.origin}${window.location.pathname}`;
    // anchor tag
    const partList = this.anchorRef.value.getAttribute('part') || '';
    this.anchorRef.value.setAttribute(
      'part',
      (currentActive
        ? `${partList} ${this.active}`
        : partList.replace(this.active, '')
      ).trim()
    );
    // the host
    this.classList[currentActive ? 'add' : 'remove'](this.active);
  };

  private clickLink(e: Event) {
    if (!this.anchorRef.value) return;
    // navigate
    if (this.anchorRef.value.href !== window.location.href) {
      const url = new URL(this.anchorRef.value.href);
      history.pushState({}, '', url.href);
      dispatchEvent(new PopStateEvent('popstate'));
    }
    // default
    e.preventDefault();
    window.scrollTo(0, 0);
  }

  protected render() {
    return html`
      <a
        router-ignore
        ${ref(this.anchorRef)}
        part=${LINK}
        class=${classMap(this.mainClasses)}
        href=${this.href || '/'}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel)}
        @click=${this.clickLink}
      >
        <slot></slot>
      </a>
    `;
  }
}
