import {
  Component,
  TiniComponent,
  Input,
  Reactive,
  html,
  css,
  render,
  nothing,
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

import {GITHUB_ICONS_REPO_URL, IconsImportMethods} from '../consts/main';
import {get} from '../helpers/http';
import mainStore from '../stores/main';

import {TINI_BUTTON, TiniButtonComponent} from '../../dev/button';
import {TINI_ICON, TiniIconComponent} from '../../dev/icon';
import {APP_SECTION, AppSectionComponent} from '../components/section';
import {APP_TABS, AppTabsComponent, TabItem} from '../components/tabs';
import {APP_CODE, AppCodeComponent} from '../components/code';
import {APP_MODAL, AppModalComponent} from '../components/modal';

type IconDef = [string, string];

export const APP_PAGE_ICON = 'app-page-icon';
@Component({
  components: {
    [TINI_BUTTON]: TiniButtonComponent,
    [TINI_ICON]: TiniIconComponent,
    [APP_SECTION]: AppSectionComponent,
    [APP_TABS]: AppTabsComponent,
    [APP_CODE]: AppCodeComponent,
    [APP_MODAL]: AppModalComponent,
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

    .modal-body {
      display: block;
      width: 100%;
      padding: 0 2rem;
    }

    .colors [slot='code'],
    .gradients [slot='code'],
    .sizes [slot='code'] {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .sizes [slot='code'] {
      align-items: flex-end;
    }
  `;

  private readonly SIZE = 200;

  private readonly ICONS_IMPORT_TAB_ITEMS: TabItem[] = [
    {name: IconsImportMethods.TiniJS},
    {name: IconsImportMethods.Others},
    {name: IconsImportMethods.Standalone},
    {name: IconsImportMethods.DataURI},
    {name: IconsImportMethods.SVG},
    {name: IconsImportMethods.URL},
  ];

  private readonly PREPROCESS_CODE = (code: string, {nameTag}: any) =>
    code.replace(/tini-icon/g, nameTag);
  private readonly CODE_BUILDERS = {};

  @Input({type: String}) declare readonly name: string;
  @Input({type: Boolean}) declare readonly noVariants?: boolean;
  @Input({type: String}) declare readonly titleText?: string;

  @Reactive() private currentPage = 1;
  @Reactive() private filterQuery?: string;

  private modalRef: Ref<AppModalComponent> = createRef();
  private modalContentRef: Ref<HTMLDivElement> = createRef();

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
    this.modalRef.value.titleText = def[0];
    this.renderModalBody(def);
    // show modal
    this.modalRef.value.show();
  }

  private hideModal() {
    if (!this.modalRef.value) return;
    // hide modal
    this.modalRef.value.hide();
    // reset content
    if (this.modalContentRef.value) {
      render(nothing, this.modalContentRef.value);
    }
  }

  private buildModalData([fileName, base64Content]: IconDef) {
    const nameArr = fileName.split('.');
    const ext = nameArr.pop() as string;
    const iconName = nameArr.join('.').replace(/\./g, '-');
    const nameCapitalized = iconName
      .split('-')
      .map(item => item.charAt(0).toUpperCase() + item.slice(1))
      .join('');
    const nameConst = `ICON_${iconName.replace(/-/g, '_').toUpperCase()}`;
    const nameVar = `icon${nameCapitalized}`;
    const nameTag = `icon-${iconName}`;
    const nameClass = `Icon${nameCapitalized}Component`;
    const packageName = `@tinijs/${this.name}-icons`;
    const packageVersion = this.data?.version || 'latest';

    const tiniJSCode = `import {Component} from '@tinijs/core';

import {${nameConst}, ${nameClass}} from '${packageName}/${iconName}.js';

@Component({
  components: {
    [${nameConst}]: ${nameClass}
  }
});
export class MyComponent extends TiniComponent {}`;

    const othersCode = `/*
 * Option 1: include in your component
 */
import '${packageName}/${iconName}.include.js';

/*
 * Option 2: import as a shared bundle (if your bundler supports it)
 */
import {useComponents} from '@tinijs/core';

import {${nameConst}, ${nameClass}} from '${packageName}/${iconName}.js';

useComponents({
  [${nameConst}]: ${nameClass}
});
`;

    const standaloneCode = `<script src="https://unpkg.com/${packageName}@${packageVersion}/${iconName}.bundle.js"></script>`;

    const dataURICode = `import {html} from 'lit';

import {dataURI as ${nameVar}URI} from '${packageName}/${iconName}.source.js';

html\`
  <i style="background-image: url(\$\{${nameVar}URI\})"></i>
  <img src=\$\{${nameVar}URI\} />
\`;
`;

    const svgCode = `import {html} from 'lit';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
  
import {code as ${nameVar}Code} from '${packageName}/${iconName}.source.js';

// render
html\`<div class="container">\$\{unsafeSVG(${nameVar}Code)\}</div>\`;

// inject
containerEl.innerHTML = ${nameVar}Code;
`;
    const svgPreviewCode = window.atob(base64Content);

    const urlCode = `<img src="https://unpkg.com/${packageName}@${packageVersion}/${iconName}.svg" />`;

    return {
      tiniJSCode,
      othersCode,
      standaloneCode,
      dataURICode,
      svgCode,
      svgPreviewCode,
      urlCode,
      names: {
        nameTag,
      },
    };
  }

  private renderModalBody(def: IconDef) {
    if (!this.modalContentRef.value) return;
    const iconSRC = this.buildUrl(def);
    const {
      tiniJSCode,
      othersCode,
      standaloneCode,
      dataURICode,
      svgCode,
      svgPreviewCode,
      urlCode,
      names,
    } = this.buildModalData(def);
    const code = html`
      <app-section .noUsageTabs=${true} style="margin-top: 0;">
        <div slot="content" class="imports">
          <h2 style="margin-top: 0;">Imports</h2>
          <p>
            After installing the respective icons pack, you can import and use
            the component, data URI, SVG code or URL anywhere in your project:
          </p>

          <app-tabs
            .tabItems=${this.ICONS_IMPORT_TAB_ITEMS}
            .activeName=${mainStore.referIconsImport}
            @change=${({detail}: CustomEvent<{name: string}>) =>
              mainStore.commit('referIconsImport', detail.name)}
          >
            <div data-tab=${IconsImportMethods.TiniJS}>
              <p><strong>Use with TiniJS framework</strong></p>
              <app-code .code=${tiniJSCode}></app-code>
            </div>

            <div data-tab=${IconsImportMethods.Others}>
              <p><strong>Use with Vue, React, Angular, ...</strong></p>
              <app-code .code=${othersCode}></app-code>
            </div>

            <div data-tab=${IconsImportMethods.Standalone}>
              <p><strong>Use the standalone package</strong></p>
              <app-code .code=${standaloneCode}></app-code>
              <p>
                Include the standalone version in any HTML page from a public
                CDN, but this method is
                <strong>not recommended</strong> because the standalone
                component has the soul baked in and is usually bigger in size
                compares to the TS/ESM version.
              </p>
            </div>

            <div data-tab=${IconsImportMethods.DataURI}>
              <p><strong>Use the data URI</strong></p>
              <app-code .code=${dataURICode}></app-code>
            </div>

            <div data-tab=${IconsImportMethods.SVG}>
              <p><strong>Use the code</strong> (SVG icons only)</p>
              <p>
                SVG codes built using the <a href="#">@tinijs/cli</a> are
                <strong>sanitized</strong> and <strong>optimized</strong>,
                please always review the code before inject into your HTML.
              </p>
              <app-code .code=${svgCode}></app-code>
              <p>For security review and direct copy.</p>
              <app-code .code=${svgPreviewCode}></app-code>
            </div>

            <div data-tab=${IconsImportMethods.URL}>
              <p><strong>Use the direct link</strong></p>
              <app-code .code=${urlCode}></app-code>
            </div>
          </app-tabs>
        </div>
      </app-section>

      <app-section
        class="default"
        .codeBuilders=${this.CODE_BUILDERS}
        .preprocessCode=${this.PREPROCESS_CODE}
        .codeBuildContext=${names}
      >
        <div slot="content">
          <h2>Default</h2>
          <p>
            Default color is the <strong>original</strong> color, and default
            size is <code>md</code>.
          </p>
        </div>
        <div slot="code">
          <tini-icon .src=${iconSRC}></tini-icon>
        </div>
      </app-section>

      ${this.noVariants
        ? nothing
        : html`
            <app-section
              class="dynamic"
              .codeBuilders=${this.CODE_BUILDERS}
              .preprocessCode=${this.PREPROCESS_CODE}
              .codeBuildContext=${names}
            >
              <div slot="content">
                <h2>Dynamic</h2>
                <p>The color is the current <code>foreground</code> color.</p>
              </div>
              <div slot="code">
                <tini-icon color="dynamic" .src=${iconSRC}></tini-icon>
              </div>
            </app-section>

            <app-section
              class="colors"
              .codeBuilders=${this.CODE_BUILDERS}
              .preprocessCode=${this.PREPROCESS_CODE}
              .codeBuildContext=${names}
            >
              <div slot="content">
                <h2>Colors</h2>
              </div>
              <div slot="code">
                <tini-icon color="primary" .src=${iconSRC}></tini-icon>
                <tini-icon color="secondary" .src=${iconSRC}></tini-icon>
                <tini-icon color="tertiary" .src=${iconSRC}></tini-icon>
                <tini-icon color="success" .src=${iconSRC}></tini-icon>
                <tini-icon color="warning" .src=${iconSRC}></tini-icon>
                <tini-icon color="danger" .src=${iconSRC}></tini-icon>
                <tini-icon color="light" .src=${iconSRC}></tini-icon>
                <tini-icon color="medium" .src=${iconSRC}></tini-icon>
                <tini-icon color="dark" .src=${iconSRC}></tini-icon>
              </div>
            </app-section>

            <app-section
              class="gradients"
              .codeBuilders=${this.CODE_BUILDERS}
              .preprocessCode=${this.PREPROCESS_CODE}
              .codeBuildContext=${names}
            >
              <div slot="content">
                <h2>Gradients</h2>
              </div>
              <div slot="code">
                <tini-icon color="gradient-primary" .src=${iconSRC}></tini-icon>
                <tini-icon
                  color="gradient-secondary"
                  .src=${iconSRC}
                ></tini-icon>
                <tini-icon
                  color="gradient-tertiary"
                  .src=${iconSRC}
                ></tini-icon>
                <tini-icon color="gradient-success" .src=${iconSRC}></tini-icon>
                <tini-icon color="gradient-warning" .src=${iconSRC}></tini-icon>
                <tini-icon color="gradient-danger" .src=${iconSRC}></tini-icon>
                <tini-icon color="gradient-light" .src=${iconSRC}></tini-icon>
                <tini-icon color="gradient-medium" .src=${iconSRC}></tini-icon>
                <tini-icon color="gradient-dark" .src=${iconSRC}></tini-icon>
              </div>
            </app-section>
          `}

      <app-section
        class="sizes"
        .codeBuilders=${this.CODE_BUILDERS}
        .preprocessCode=${this.PREPROCESS_CODE}
        .codeBuildContext=${names}
      >
        <div slot="content">
          <h2>Sizes</h2>
        </div>
        <div slot="code">
          <tini-icon size="xs" .src=${iconSRC}></tini-icon>
          <tini-icon size="sm" .src=${iconSRC}></tini-icon>
          <tini-icon size="md" .src=${iconSRC}></tini-icon>
          <tini-icon size="lg" .src=${iconSRC}></tini-icon>
          <tini-icon size="xl" .src=${iconSRC}></tini-icon>
          <tini-icon size="xxl" .src=${iconSRC}></tini-icon>
        </div>
      </app-section>
    `;
    return render(code, this.modalContentRef.value);
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

      <app-modal
        ${ref(this.modalRef)}
        .backdropClosed=${true}
        @no=${this.hideModal}
      >
        <div ${ref(this.modalContentRef)} class="modal-body"></div>
      </app-modal>
    `;
  }
}
