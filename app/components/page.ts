import {LitElement, html, css, nothing} from 'lit';
import {property, state} from 'lit/decorators.js';
import {cache} from 'lit/directives/cache.js';
import {Subscribe} from '../vendors/store';
import {UseComponents} from '../vendors/components';
import {Theming} from '../vendors/theming';

import coreStyle from '../../styles/bootstrap/base/core';
import headingsStyle from '../../styles/bootstrap/base/headings';
import linkStyle from '../../styles/bootstrap/base/link';
import textStyle from '../../styles/bootstrap/base/text';
import codeStyle from '../../styles/bootstrap/base/code';

import {
  LIB_VERSION,
  GITHUB_REPO_URL,
  GITHUB_RAW_URL,
} from '../configs/development';
import {getText} from '../services/http';
import {
  extractCSSVariables,
  SoulVariable,
  extractComponentProperties,
} from '../services/source';
import {ImportMethods} from '../stores/consts';
import mainStore from '../stores/main';

import {APP_SECTION, AppSection} from '../components/section';
import {APP_TABS, AppTabs, TabItem} from '../components/tabs';
import {APP_CODE, AppCode} from '../components/code';

interface Quicklink {
  href: string;
  title: string;
}

export const APP_PAGE = 'app-page';

@UseComponents({
  [APP_SECTION]: AppSection,
  [APP_TABS]: AppTabs,
  [APP_CODE]: AppCode,
})
@Theming({
  styling: {
    bootstrap: [coreStyle, headingsStyle, linkStyle, textStyle, codeStyle],
  },
})
export class AppPage extends LitElement {
  static styles = css`
    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }

    table thead tr th {
      border-bottom: calc(var(--size-border) + 1px) solid
        var(--color-background-shade);
    }

    table tbody tr td {
      border-bottom: 1px solid var(--color-background-shade);
    }

    table th,
    table td {
      padding: calc(var(--size-space) / 2);
      text-align: left;
    }
  `;

  @property({type: String}) declare readonly name: string;
  @property({type: String}) declare readonly titleText?: string;
  @property({type: Object}) declare readonly prevPage?: Quicklink;
  @property({type: Object}) declare readonly nextPage?: Quicklink;

  @state() private declare contentMode?: 'article' | 'code';
  @state() private declare pageSourceCode?: string;
  @state() private declare soulVariables?: SoulVariable[];
  @state() private declare componentProperties?: any[];

  @Subscribe(mainStore) @state() private readonly soulName = mainStore.soulName;
  
  @Subscribe(mainStore) @state() private readonly referImport = mainStore.referImport;
  private importTabItems: TabItem[] = [
    { name: ImportMethods.TiniJS },
    { name: ImportMethods.Others },
    { name: ImportMethods.Standalone },
  ];

  constructor() {
    super();
    this.name = 'unknown';
  }

  private get nameVariants() {
    const nameCapitalized = this.name
      .split('-')
      .map(item => item.charAt(0).toUpperCase() + item.slice(1));
    const nameConst = this.name.replace(/-/g, '_').toUpperCase();
    const tagName = `TINI_${nameConst}`;
    const className = `Tini${nameCapitalized}Component`;
    return {nameCapitalized, nameConst, tagName, className};
  }

  private get importTiniJSCode() {
    const {tagName, className} = this.nameVariants;
    return `import {Page} from '@tinijs/core';

import {${tagName}, ${className}} from '@tinijs/ui/components/${this.name}.js';

@Page({
  components: {
    [${tagName}]: ${className}
  }
});
export class MyPage extends TiniComponent {}`;
  }

  private get importOthersCode() {
    const {tagName, className} = this.nameVariants;
    return `/*
 * Option 1: include in your component
 */
import '@tinijs/ui-${this.soulName}/components/${this.name}.import.js';

/*
 * Option 2: import as a shared bundle (if your bundler supports it)
 */
import {useComponents} from '@tinijs/core';

import {${tagName}, ${className}} from '@tinijs/ui-${this.soulName}/components/${this.name}.js';

useComponents({
  [${tagName}]: ${className}
});
`;
  }

  private get cdnCode() {
    return `<script src="https://cdn.jsdelivr.net/npm/@tinijs/ui-${this.soulName}@${LIB_VERSION}/components/${this.name}.bundle.js"></script>`;
  }

  private get githubPageLink() {
    return `${GITHUB_REPO_URL}/blob/main/app/pages/${this.name}.ts`;
  }

  private get githubPageUrl() {
    return `${GITHUB_RAW_URL}/main/app/pages/${this.name}.ts`;
  }

  private get githubComponentUrl() {
    return `${GITHUB_RAW_URL}/main/components/${this.name}.ts`;
  }

  private get githubSoulUrl() {
    return `${GITHUB_RAW_URL}/main/styles/${this.soulName}/soul/${this.name}.ts`;
  }

  async connectedCallback() {
    super.connectedCallback();
    // extract soul variables
    this.soulVariables = await extractCSSVariables(this.githubSoulUrl, [
      ':host {',
      '}',
    ]);
    // extract component properties
    this.componentProperties = await extractComponentProperties(
      this.githubComponentUrl
    );
  }

  protected async switchMode(mode: AppPage['contentMode']) {
    // set mode
    this.contentMode = mode;
    // load source code
    if (this.contentMode === 'code' && !this.pageSourceCode) {
      this.pageSourceCode = await getText(this.githubPageUrl);
    }
  }

  private renderArticle() {
    return html`
      <div class="body article">
        <app-section .noUsageTabs=${true}>
          <div slot="content" class="imports">
            <h2>Imports</h2>
            <p>
              After the
              <a href="/get-started">initial setup</a>, you can import and use
              the component anywhere in your project. There are several way of
              including the component:
            </p>

            <app-tabs
              .tabItems=${this.importTabItems}
              .activeName=${this.referImport}
              @change=${
                ({detail}: CustomEvent<{name: string}>) =>
                  mainStore.commit('referImport', detail.name)
              }
            >

              <div data-tab=${ImportMethods.TiniJS}>
                <p><strong>Use with TiniJS framework</strong></p>
                <p>
                  The TiniJS framework supports
                  <tini-link
                    href="https://parceljs.org/features/code-splitting/#shared-bundles"
                    target="_blank"
                    >shared bundles</tini-link
                  >, multiple runtime souls and theme management via the CLI.
                </p>
                <app-code .code=${this.importTiniJSCode}></app-code>
              </div>

              <div data-tab=${ImportMethods.Others}>
                <p><strong>Use with Vue, React, Angualr, ...</strong></p>
                <p>The specific package only supports one soul at a time.</p>
                <app-code .code=${this.importOthersCode}></app-code>
              </div>

              <div data-tab=${ImportMethods.Standalone}>
                <p><strong>Use the standalone package</strong></p>
                <p>
                  Include the standalone version in any HTML page from a public
                  CDN, but this method is <strong>not recommended</strong> because
                  the standalone component has the soul baked in and is usually
                  bigger in size compares to the TS/ESM version.
                </p>
                <app-code .code=${this.cdnCode}></app-code>
              </div>

            </app-tabs>

          </div>
        </app-section>

        <slot></slot>

        <app-section .noUsageTabs=${true}>
          <div slot="content" class="api">
            <h2>API</h2>
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Required</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                ${!this.componentProperties?.length
                  ? nothing
                  : this.componentProperties.map(
                      prop => html`
                        <tr>
                          <td><code>${prop.name}</code></td>
                          <td><code>${prop.type}</code></td>
                          <td>${prop.isOptional ? '' : '✓'}</td>
                          <td><code>${prop.defaultValue}</code></td>
                        </tr>
                      `
                    )}
              </tbody>
            </table>
          </div>
        </app-section>

        <app-section .noUsageTabs=${true}>
          <div slot="content" class="styles">
            <h2>Variables</h2>
            <p>Please see the Customization guide for more info.</p>
            <table>
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Description</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                ${!this.soulVariables?.length
                  ? nothing
                  : this.soulVariables.map(
                      variable => html`
                        <tr>
                          <td><code>${variable.key}</code></td>
                          <td>${variable.description}</td>
                          <td><code>${variable.value}</code></td>
                        </tr>
                      `
                    )}
              </tbody>
            </table>
          </div>
        </app-section>
      </div>

      ${!this.prevPage && !this.nextPage
        ? nothing
        : html`
            <div class="foot">
              ${!this.prevPage
                ? nothing
                : html`
                    <tini-link .href=${this.prevPage.href}
                      >${this.prevPage.title}</tini-link
                    >
                  `}
              ${!this.nextPage
                ? nothing
                : html`
                    <tini-link .href=${this.nextPage.href}
                      >${this.nextPage.title}</tini-link
                    >
                  `}
            </div>
          `}
    `;
  }

  private renderCode() {
    return html`
      <div class="body code">
        ${!this.pageSourceCode
          ? nothing
          : html`<app-code .code=${this.pageSourceCode}></app-code>`}
      </div>
    `;
  }

  protected render() {
    return html`
      <div class="head">
        <h1 class="title">${this.titleText || 'Page'}</h1>
        <ul class="links">
          <li>
            <tini-link href=${this.githubPageLink} target="_blank"
              >Icon</tini-link
            >
          </li>
        </ul>
        <div class="switch-mode">
          <button @click=${() => this.switchMode('article')}>Article</button>
          <button @click=${() => this.switchMode('code')}>Source</button>
        </div>
        <slot name="description"></slot>
      </div>

      ${cache(
        this.contentMode === 'code' ? this.renderCode() : this.renderArticle()
      )}
    `;
  }
}
