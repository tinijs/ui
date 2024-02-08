import {html, nothing, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';

import {TiniElement, partAttrMap} from 'tinijs';

export interface Source {
  srcset: string;
  type?: string;
  media?: string;
  sizes?: string;
  width?: number;
  height?: number;
}

export enum CaptionAlign {
  Start = 'start',
  Center = 'center',
  End = 'end',
}

/* UseBases(common) */
export class TiniImageComponent extends TiniElement {
  static readonly defaultTagName = 'tini-image';
  static readonly componentName = 'image';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare src?: string;
  @property({type: String, reflect: true}) declare alt?: string;
  @property({type: Number, reflect: true}) declare width?: number;
  @property({type: Number, reflect: true}) declare height?: number;
  @property({type: String, reflect: true}) declare srcset?: string;
  @property({type: String, reflect: true}) declare sizes?: string;
  @property({type: String, reflect: true}) declare loading?: string;
  @property({type: String, reflect: true}) declare decoding?: string;
  @property({type: String, reflect: true}) declare fetchpriority?: string;
  @property({type: String, reflect: true}) declare crossorigin?: string;
  @property({type: String, reflect: true}) declare referrerpolicy?: string;

  @property({type: Array}) declare sources?: Source[];

  @property({type: String, reflect: true}) declare captionTop?: string;
  @property({type: String, reflect: true}) declare captionTopAlign?: CaptionAlign;
  @property({type: String, reflect: true}) declare captionBottom?: string;
  @property({type: String, reflect: true}) declare captionBottomAlign?: CaptionAlign;
  /* eslint-enable prettier/prettier */

  private captionTopClasses: ClassInfo = {};
  private captionBottomClasses: ClassInfo = {};
  private bodyClasses: ClassInfo = {};
  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // set role
    this.setAttribute('role', 'img');
    // root classes parts
    this.extendRootClasses({
      overridable: {
        'caption-top-align': this.captionTopAlign,
        'caption-bottom-align': this.captionBottomAlign,
      },
    });
    // caption top classes parts
    this.captionTopClasses = {
      'caption-top': true,
    };
    // caption bottom classes parts
    this.captionBottomClasses = {
      'caption-bottom': true,
    };
    // body classes parts
    this.bodyClasses = {
      body: true,
    };
  }

  protected render() {
    return html`
      <figure
        class=${classMap(this.rootClasses)}
        part=${partAttrMap(this.rootClasses)}
      >
        ${!this.captionTop
          ? html`<slot name="caption-top"></slot>`
          : html`
              <figcaption
                class=${classMap(this.captionTopClasses)}
                part=${partAttrMap(this.captionTopClasses)}
              >
                ${this.captionTop}
              </figcaption>
            `}
        ${!this.src && !this.sources
          ? html`<slot></slot>`
          : html`
              <div
                class=${classMap(this.bodyClasses)}
                part=${partAttrMap(this.bodyClasses)}
              >
                ${!this.sources
                  ? this.imgTemplate
                  : html`
                      <picture>
                        ${this.sources.map(
                          source => html`
                            <source
                              srcset=${source.srcset}
                              type=${ifDefined(source.type)}
                              sizes=${ifDefined(source.sizes)}
                              media=${ifDefined(source.media)}
                              width=${ifDefined(source.width)}
                              height=${ifDefined(source.height)}
                            />
                          `
                        )}
                        ${this.imgTemplate}
                      </picture>
                    `}
              </div>
            `}
        ${!this.captionBottom
          ? html`<slot name="caption-bottom"></slot>`
          : html`
              <figcaption
                class=${classMap(this.captionBottomClasses)}
                part=${partAttrMap(this.captionBottomClasses)}
              >
                ${this.captionBottom}
              </figcaption>
            `}
      </figure>
    `;
  }

  private get imgTemplate() {
    return !this.src
      ? nothing
      : html`
          <img
            src=${this.src}
            alt=${ifDefined(this.alt)}
            width=${ifDefined(this.width)}
            height=${ifDefined(this.height)}
            srcset=${ifDefined(this.srcset)}
            sizes=${ifDefined(this.sizes)}
            loading=${ifDefined(this.loading as any)}
            decoding=${ifDefined(this.decoding as any)}
            fetchpriority=${ifDefined(this.fetchpriority)}
            crossorigin=${ifDefined(this.crossorigin as any)}
            referrerpolicy=${ifDefined(this.referrerpolicy as any)}
          />
        `;
  }
}
