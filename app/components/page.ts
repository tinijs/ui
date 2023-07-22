import {
  Component,
  TiniComponent,
  Input,
  Reactive,
  html,
  css,
  nothing,
  cache,
} from '@tinijs/core';
import {Subscribe} from '@tinijs/store';

import coreStyle from '../../styles/bootstrap/base/core';
import headingsStyle from '../../styles/bootstrap/base/headings';
import linkStyle from '../../styles/bootstrap/base/link';
import textStyle from '../../styles/bootstrap/base/text';
import codeStyle from '../../styles/bootstrap/base/code';

import {
  LIB_VERSION,
  GITHUB_REPO_URL,
  GITHUB_RAW_URL,
  ImportMethods,
} from '../consts/main';
import {
  extractCSSVariables,
  SoulVariable,
  extractComponentProperties,
} from '../helpers/source';
import {getText} from '../helpers/http';
import mainStore from '../stores/main';

import {APP_SECTION, AppSectionComponent} from '../components/section';
import {APP_TABS, AppTabsComponent, TabItem} from '../components/tabs';
import {APP_CODE, AppCodeComponent} from '../components/code';

interface Quicklink {
  href: string;
  title: string;
}

export const APP_PAGE = 'app-page';

@Component({
  components: {
    [APP_SECTION]: AppSectionComponent,
    [APP_TABS]: AppTabsComponent,
    [APP_CODE]: AppCodeComponent,
  },
  theming: {
    styling: {
      bootstrap: [coreStyle, headingsStyle, linkStyle, textStyle, codeStyle],
    },
  },
})
export class AppPageComponent extends TiniComponent {
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

  private readonly IMPORT_TAB_ITEMS: TabItem[] = [
    {name: ImportMethods.TiniJS},
    {name: ImportMethods.Others},
    {name: ImportMethods.Standalone},
  ];

  @Input({type: String}) declare readonly name: string;
  @Input({type: String}) declare readonly titleText?: string;
  @Input({type: Object}) declare readonly prevPage?: Quicklink;
  @Input({type: Object}) declare readonly nextPage?: Quicklink;

  @Reactive() private declare contentMode?: 'article' | 'code';
  @Reactive() private declare pageSourceCode?: string;
  @Reactive() private declare soulVariables?: SoulVariable[];
  @Reactive() private declare componentProperties?: any[];

  @Subscribe(mainStore) @Reactive() private readonly soulName =
    mainStore.soulName;

  @Subscribe(mainStore) @Reactive() private readonly referImport =
    mainStore.referImport;

  constructor() {
    super();
    this.name = 'unknown';
  }

  private get nameVariants() {
    const nameCapitalized = this.name
      .split('-')
      .map(item => item.charAt(0).toUpperCase() + item.slice(1))
      .join('');
    const nameConst = `TINI_${this.name.replace(/-/g, '_').toUpperCase()}`;
    const nameTag = `tini-${this.name}`;
    const nameClass = `Tini${nameCapitalized}Component`;
    return {nameCapitalized, nameConst, nameTag, nameClass};
  }

  private get importTiniJSCode() {
    const {nameConst, nameClass} = this.nameVariants;
    return `import {Page} from '@tinijs/core';

import {${nameConst}, ${nameClass}} from '@tinijs/ui/${this.name}.js';

@Page({
  components: {
    [${nameConst}]: ${nameClass}
  }
});
export class MyPage extends TiniComponent {}`;
  }

  private get importOthersCode() {
    const {nameConst, nameClass} = this.nameVariants;
    return `/*
 * Option 1: include in your component
 */
import '@tinijs/ui-${this.soulName}/components/${this.name}.include.js';

/*
 * Option 2: import as a shared bundle (if your bundler supports it)
 */
import {useComponents} from '@tinijs/core';

import {${nameConst}, ${nameClass}} from '@tinijs/ui-${this.soulName}/components/${this.name}.js';

useComponents({
  [${nameConst}]: ${nameClass}
});
`;
  }

  private get standaloneCode() {
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

  protected async switchMode(mode: AppPageComponent['contentMode']) {
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
              .tabItems=${this.IMPORT_TAB_ITEMS}
              .activeName=${this.referImport}
              @change=${({detail}: CustomEvent<{name: string}>) =>
                mainStore.commit('referImport', detail.name)}
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
                <p><strong>Use with Vue, React, Angular, ...</strong></p>
                <p>The specific package only supports one soul at a time.</p>
                <app-code .code=${this.importOthersCode}></app-code>
              </div>

              <div data-tab=${ImportMethods.Standalone}>
                <p><strong>Use the standalone package</strong></p>
                <p>
                  Include the standalone version in any HTML page from a public
                  CDN, but this method is
                  <strong>not recommended</strong> because the standalone
                  component has the soul baked in and is usually bigger in size
                  compares to the TS/ESM version.
                </p>
                <app-code .code=${this.standaloneCode}></app-code>
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
