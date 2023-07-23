import {
  Component,
  TiniComponent,
  Input,
  Reactive,
  html,
  css,
  repeat,
  ref,
  createRef,
  Ref,
} from '@tinijs/core';

import coreStyle from '../../styles/bootstrap/base/core';
import headingsStyle from '../../styles/bootstrap/base/headings';
import linkStyle from '../../styles/bootstrap/base/link';
import textStyle from '../../styles/bootstrap/base/text';
import codeStyle from '../../styles/bootstrap/base/code';

import {GITHUB_ICONS_REPO_URL} from '../consts/main';
import {get} from '../helpers/http';

import {APP_CODE, AppCodeComponent} from './code';
import {
  APP_PAGE_ICON_MODAL,
  AppPageIconModalComponent,
  IconDef,
} from './page-icon-modal';

export const APP_PAGE_ICON = 'app-page-icon';
@Component({
  components: {
    [APP_CODE]: AppCodeComponent,
    [APP_PAGE_ICON_MODAL]: AppPageIconModalComponent,
  },
  theming: {
    styling: {
      bootstrap: [coreStyle, headingsStyle, linkStyle, textStyle, codeStyle],
    },
  },
})
export class AppPageIconComponent extends TiniComponent {
  static styles = css`
    :host {
      --icon-size: 3.5rem;
    }

    .icons {
      display: grid;
      grid-template-columns: repeat(auto-fill, var(--icon-size));
      gap: 0.75rem;
    }

    .icon {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--icon-size);
      height: var(--icon-size);
      border: 1px solid var(--color-background-shade);
      border-radius: 5px;
      background: none;
    }

    .icon:hover {
      border-color: var(--color-medium-tint);
      background-color: var(--color-background-shade);
    }

    .icon img {
      width: calc(var(--icon-size) - 1.5rem);
      height: calc(var(--icon-size) - 1.5rem);
    }
  `;

  private readonly SIZE = 200;

  @Input({type: String}) declare readonly name: string;
  @Input({type: String}) declare readonly titleText?: string;
  @Input({type: Boolean}) declare readonly noVariants?: boolean;

  @Reactive() private currentPage = 1;
  @Reactive() private filterQuery?: string;

  private modalRef: Ref<AppPageIconModalComponent> = createRef();

  private get installCode() {
    return `npm i @tinijs/${this.name}-icons`;
  }

  private get indexJsonPath() {
    return `https://unpkg.com/@tinijs/${this.name}-icons@latest/index.json`;
  }

  private get changelogsUrl() {
    return `${GITHUB_ICONS_REPO_URL}/blob/main/changelogs/@tinijs/${this.name}-icons`;
  }

  private buildUrl([fileName, base64Content]: IconDef) {
    const fileExt = fileName.split('.').pop() as string;
    const mimeType = {
      svg: 'image/svg+xml',
      webp: 'image/webp',
      png: 'image/png',
      jpg: 'image/jpeg',
    }[fileExt];
    return `data:${mimeType};base64,${base64Content}`;
  }

  @Reactive() private data?: {version: string; items: Array<IconDef>};
  private totalPages?: number;
  async connectedCallback() {
    super.connectedCallback();
    // fetch data
    this.data = await get(this.indexJsonPath);
    this.totalPages = Math.ceil(this.data.items.length / this.SIZE);
  }

  private displayedItems?: Array<IconDef>;
  protected willUpdate() {
    if (
      !this.data ||
      !this.totalPages ||
      this.currentPage < 1 ||
      this.currentPage > this.totalPages
    )
      return;
    const query = this.filterQuery?.trim().toLowerCase();
    this.displayedItems = (
      !query
        ? this.data.items
        : this.data.items.filter(([name]) => name.includes(query))
    ).slice((this.currentPage - 1) * this.SIZE, this.SIZE * this.currentPage);
  }

  private async showModal(def: IconDef) {
    if (!this.modalRef.value) return;
    // update title and content
    this.modalRef.value.iconDef = def;
    // show modal
    this.modalRef.value.show();
  }

  protected render() {
    return html`
      <div class="head">
        <h1 class="title">${this.titleText || 'Icons'}</h1>
        <ul>
          <li>
            Version: <code><strong>${this.data?.version || '?'}</strong></code>
          </li>
          <li>
            <a href=${this.changelogsUrl} target="_blank">Changelogs</a>
          </li>
          <li>
            <a href=${GITHUB_ICONS_REPO_URL} target="_blank">Github</a>
          </li>
        </ul>
      </div>

      <div class="body">
        <div class="install">
          <h2>Install</h2>
          <app-code .code=${this.installCode}></app-code>
        </div>

        <div class="nav">
          <div class="summary">
            Display <strong>${this.displayedItems?.length}</strong> /
            ${this.data?.items.length || '?'} icons.
          </div>
          <div class="pagination">
            <button
              ?disabled=${this.currentPage === 1}
              @click=${() => this.currentPage--}
            >
              Prev
            </button>
            <div>
              <input
                type="number"
                .value=${'' + this.currentPage}
                @input=${(e: InputEvent) =>
                  (this.currentPage = Number(
                    (e.target as HTMLInputElement).value
                  ))}
                min="1"
                max=${this.totalPages || 1}
              />
              <span>/ ${this.totalPages || '?'}</span>
            </div>
            <button
              ?disabled=${this.currentPage === this.totalPages}
              @click=${() => this.currentPage++}
            >
              Next
            </button>
          </div>
          <input
            class="filter"
            type="search"
            placeholder="Search icons ..."
            @input=${(e: InputEvent) => {
              if (this.currentPage !== 1) this.currentPage = 1;
              this.filterQuery = (e.target as HTMLInputElement).value;
            }}
          />
        </div>

        <div class="content">
          ${!this.displayedItems?.length
            ? !this.filterQuery
              ? html`<div>Fetching icons ...</div>`
              : html`<div>No icons found!</div>`
            : html`
                <div class="icons">
                  ${repeat(
                    this.displayedItems,
                    def => def[0],
                    def => html`
                      <button
                        class="icon"
                        title=${def[0]}
                        @click=${() => this.showModal(def)}
                      >
                        <img src=${this.buildUrl(def)} alt=${def[0]} />
                      </button>
                    `
                  )}
                </div>
              `}
        </div>
      </div>

      <app-page-icon-modal
        ${ref(this.modalRef)}
        .packName=${this.name}
        .packVersion=${this.data?.version}
        .noVariants=${this.noVariants}
      ></app-page-icon-modal>
    `;
  }
}
