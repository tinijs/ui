import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from 'tinijs';

export interface PaginationItem {
  text: string;
  href?: string;
}

/* UseBases(common) */
export class TiniPaginationComponent extends LitElement {
  static readonly defaultTagName = 'tini-pagination';

  /* eslint-disable prettier/prettier */
  @property({type: Number, reflect: true}) declare totalPage: number;
  @property({type: Number, reflect: true}) declare currentPage: number;
  @property({type: String, reflect: true}) declare scheme?: ColorsAndGradients;
  @property({type: String, reflect: true}) declare size?: Sizes;
  @property({type: Object}) declare hrefBuilder?: (pageNum: number) => string;
  /* eslint-enable prettier/prettier */

  private validateProperties() {
    // default values
    if (!this.currentPage || this.currentPage < 1) {
      this.currentPage = 1;
    }
    // validations
    if (!this.totalPage || this.totalPage < 1) {
      throw new Error(
        'Property "totalPage" is required and must be greater than 0'
      );
    }
  }

  private rootClassesParts: ClassInfo | PartInfo = {};
  private previousClassesParts: ClassInfo | PartInfo = {};
  private nextClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.validateProperties();
    // root classes parts
    this.rootClassesParts = {
      root: true,
      [`scheme-${this.scheme}`]: !!this.scheme,
      [`size-${this.size}`]: !!this.size,
    };
    // previous classes parts
    this.previousClassesParts = {
      previous: true,
      'previous-disabled': this.currentPage === 1,
    };
    // next classes parts
    this.nextClassesParts = {
      next: true,
      'next-disabled': this.currentPage === this.totalPage,
    };
  }

  private defaultHrefBuilder() {
    return 'javascript:void(0);';
  }

  private buildHref(pageNum: number) {
    return !this.hrefBuilder
      ? this.defaultHrefBuilder()
      : this.hrefBuilder(pageNum);
  }

  private onChange(pageNum: number) {
    this.currentPage = pageNum;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          pageNum,
        },
      })
    );
  }

  protected render() {
    return html`
      <ul
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      >
        ${this.renderPrevious()} ${this.renderItems()} ${this.renderNext()}
      </ul>
    `;
  }

  private renderPrevious() {
    const prevPageNum = this.currentPage - 1;
    const href = this.previousClassesParts.disabled
      ? this.defaultHrefBuilder()
      : this.buildHref(prevPageNum);
    return html`
      <li
        part=${partMap(this.previousClassesParts)}
        class=${classMap(this.previousClassesParts)}
      >
        <a
          href=${href}
          @click=${(e: Event) =>
            this.previousClassesParts.disabled
              ? e.preventDefault()
              : this.onChange(prevPageNum)}
        ></a>
      </li>
    `;
  }

  private renderNext() {
    const nextPageNum = this.currentPage + 1;
    const href = this.nextClassesParts.disabled
      ? this.defaultHrefBuilder()
      : this.buildHref(nextPageNum);
    return html`
      <li
        part=${partMap(this.nextClassesParts)}
        class=${classMap(this.nextClassesParts)}
      >
        <a
          href=${href}
          @click=${(e: Event) =>
            this.nextClassesParts.disabled
              ? e.preventDefault()
              : this.onChange(nextPageNum)}
        ></a>
      </li>
    `;
  }

  private renderItems() {
    return Array.from({length: this.totalPage}).map((_, i) => {
      const pageNum = i + 1;
      const itemClassesParts: ClassInfo | PartInfo = {
        item: true,
        'item-active': pageNum === this.currentPage,
      };
      const href = itemClassesParts.active
        ? this.defaultHrefBuilder()
        : this.buildHref(pageNum);
      return html`
        <li
          part=${partMap(itemClassesParts)}
          class=${classMap(itemClassesParts)}
        >
          <a
            href=${href}
            @click=${(e: Event) =>
              itemClassesParts.active
                ? e.preventDefault()
                : this.onChange(pageNum)}
            >${pageNum}</a
          >
        </li>
      `;
    });
  }
}
