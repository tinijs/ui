import {
  Component,
  TiniComponent,
  Input,
  Reactive,
  html,
  css,
  nothing,
  cache,
  classMap,
  stylingWithBases,
  repeat,
} from '@tinijs/core';
import {Subscribe} from '@tinijs/store';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  buttonBases,
  codeBases,
} from '@tinijs/ui';

import {Configurable} from '../configurable';
import {OFFICIAL_REPO_URL, ImportMethods} from '../consts/main';
import {buildGithubRawUrl} from '../helpers/github';
import {
  extractCSSVariables,
  VariableDef,
  extractComponentProperties,
} from '../helpers/source';
import {getText} from '../helpers/http';
import {mainStore} from '../stores/main';

import {AppSectionComponent} from './section';
import {AppTabsComponent, TabItem} from './tabs';
import {AppCodeComponent} from './code';

interface Quicklink {
  href: string;
  title: string;
}

const enum Modes {
  Doc = 'doc',
  DocSrc = 'doc-src',
  ComponentSrc = 'component-src',
  SoulSrc = 'soul-src',
}

export const APP_COMPONENT_PAGE = 'app-component-page';
@Component({
  components: [AppSectionComponent, AppTabsComponent, AppCodeComponent],
  theming: {
    styling: stylingWithBases([
      codeBases,
      headingsBases,
      linkBases,
      textBases,
      buttonBases,
      commonBases,
    ]),
  },
})
export class AppComponentPageComponent extends TiniComponent {
  static readonly defaultTagName = APP_COMPONENT_PAGE;

  static styles = css`
    .title-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .switch-mode {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .switch-mode button {
        cursor: pointer;
        padding: var(--size-space-0_4x) var(--size-space-0_8x);
        font-size: var(--size-text-0_9x);
        border: var(--size-border) solid var(--color-medium-tint);
        border-right: none;
      }
      .switch-mode button:first-child {
        border-radius: var(--size-radius) 0 0 var(--size-radius);
      }
      .switch-mode button:last-child {
        border-radius: 0 var(--size-radius) var(--size-radius) 0;
        border-right: var(--size-border) solid var(--color-medium-tint);
      }
      .switch-mode button.active {
        background: var(--color-background-shade);
      }
    }

    .body {
      padding-bottom: 2rem;
    }

    .doc-src,
    .component-src,
    .soul-src {
      margin-top: var(--size-space-4x);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }

    table thead tr th {
      border-bottom: var(--size-border-2x) solid var(--color-background-shade);
    }

    table tbody tr td {
      border-bottom: 1px solid var(--color-background-shade);
    }

    table th,
    table td {
      padding: var(--size-space-0_5x);
      text-align: left;
    }
  `;

  private readonly REPO_URL = Configurable.getOption('repoUrl');

  private readonly IMPORT_TAB_ITEMS: TabItem[] = [
    {name: ImportMethods.TiniJS},
    {name: ImportMethods.Others},
    {name: ImportMethods.Standalone},
  ];

  @Input({type: String}) packageName!: string;
  @Input({type: String}) name!: string;
  @Input({type: String}) path!: string;
  @Input({type: String}) titleText?: string;
  @Input({type: Boolean}) customDoc?: boolean;
  @Input({type: Boolean}) customComponent?: boolean;
  @Input({type: Object}) prevPage?: Quicklink;
  @Input({type: Object}) nextPage?: Quicklink;

  @Reactive() private contentMode: Modes = Modes.Doc;
  @Reactive() private docSourceCode?: string;
  @Reactive() private componentSourceCode?: string;
  @Reactive() private soulSourceCode?: string;
  @Reactive() private soulVariablesMap?: Map<string, VariableDef>;
  @Reactive() private componentProperties?: any[];

  @Subscribe(mainStore) @Reactive() private readonly soulName =
    mainStore.soulName;
  @Subscribe(mainStore) @Reactive() private readonly referImport =
    mainStore.referImport;

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
    const {nameClass} = this.nameVariants;
    return `import {Page} from '@tinijs/core';

import {${nameClass}} from '${
      !this.customComponent ? '@tinijs/ui' : this.packageName
    }';

@Page({
  components: [
    ${nameClass}
  ]
});
export class MyPage extends TiniComponent {}`;
  }

  private get importOthersCode() {
    const {nameClass} = this.nameVariants;
    return `/*
 * Option 1: include in your component
 */
import '${this.packageName}-${this.soulName}/components/${this.name}.include';

/*
 * Option 2: import as a shared bundle (if your bundler supports it)
 */
import {useComponents} from '@tinijs/core';

import {${nameClass}} from '${this.packageName}-${this.soulName}';

useComponents([
  ${nameClass}
]);
`;
  }

  private get standaloneCode() {
    return `<script src="https://cdn.jsdelivr.net/npm/${this.packageName}-${this.soulName}/components/${this.name}.bundle.js"></script>`;
  }

  private get docLink() {
    return `${
      this.customDoc ? this.REPO_URL : OFFICIAL_REPO_URL
    }/blob/main/app/pages/${this.path}.ts`;
  }

  private get docUrl() {
    return `${buildGithubRawUrl(
      this.customDoc ? this.REPO_URL : OFFICIAL_REPO_URL
    )}/main/app/pages/${this.path}.ts`;
  }

  private get componentLink() {
    return `${
      this.customComponent ? this.REPO_URL : OFFICIAL_REPO_URL
    }/blob/main/components/${this.name}.ts`;
  }

  private get componentUrl() {
    return `${buildGithubRawUrl(
      this.customComponent ? this.REPO_URL : OFFICIAL_REPO_URL
    )}/main/components/${this.name}.ts`;
  }

  private get soulLink() {
    return `${this.REPO_URL}/blob/main/styles/${this.soulName}/soul/${this.name}.ts`;
  }

  private get soulUrl() {
    return `${buildGithubRawUrl(this.REPO_URL)}/main/styles/${
      this.soulName
    }/soul/${this.name}.ts`;
  }

  async onCreate() {
    // extract soul variables
    this.soulVariablesMap = await extractCSSVariables(this.soulUrl, [
      ':host {',
      '}',
    ]);
    // extract component properties
    this.componentProperties = await extractComponentProperties(
      this.componentUrl
    );
  }

  protected async switchMode(mode: AppComponentPageComponent['contentMode']) {
    // set mode
    this.contentMode = mode;
    // load source code
    if (this.contentMode === Modes.DocSrc && !this.docSourceCode) {
      this.docSourceCode = await getText(this.docUrl);
    } else if (
      this.contentMode === Modes.ComponentSrc &&
      !this.componentSourceCode
    ) {
      this.componentSourceCode = await getText(this.componentUrl);
    } else if (this.contentMode === Modes.SoulSrc && !this.soulSourceCode) {
      this.soulSourceCode = await getText(this.soulUrl);
    }
  }

  protected render() {
    return html`
      <div class="head">
        <div class="title-bar">
          <h1 class="title">${this.titleText || 'Page'}</h1>
          <div class="switch-mode">
            <button
              class=${classMap({active: this.contentMode === Modes.Doc})}
              @click=${() => this.switchMode(Modes.Doc)}
            >
              Documentation
            </button>
            <button
              class=${classMap({active: this.contentMode === Modes.DocSrc})}
              @click=${() => this.switchMode(Modes.DocSrc)}
            >
              Doc source
            </button>
            <button
              class=${classMap({
                active: this.contentMode === Modes.ComponentSrc,
              })}
              @click=${() => this.switchMode(Modes.ComponentSrc)}
            >
              Component source
            </button>
            <button
              class=${classMap({active: this.contentMode === Modes.SoulSrc})}
              @click=${() => this.switchMode(Modes.SoulSrc)}
            >
              Soul source
            </button>
          </div>
        </div>
        <slot name="description"></slot>
      </div>

      ${cache(
        this.contentMode === Modes.DocSrc
          ? this.renderDocSource()
          : this.contentMode === Modes.ComponentSrc
          ? this.renderComponentSource()
          : this.contentMode === Modes.SoulSrc
          ? this.renderSoulSource()
          : this.renderDoc()
      )}
    `;
  }

  private renderDoc() {
    return html`
      <div class="body doc">
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
                <p>
                  <strong>Use with Vue, React, Angular, Svelte, ...</strong>
                </p>
                <p>The specific package only supports one soul at a time.</p>
                <app-code .code=${this.importOthersCode}></app-code>
              </div>

              <div data-tab=${ImportMethods.Standalone}>
                <p><strong>Use the standalone package</strong></p>
                <app-code .code=${this.standaloneCode}></app-code>
                <p>
                  Include the standalone version in any HTML page from a public
                  CDN, but this method is
                  <strong>not recommended</strong> because the standalone
                  component has the soul baked in and is usually bigger in size
                  compares to the TS/ESM version.
                </p>
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
            <p>
              Please see the
              <a href="/guides/customization">Customization</a> guide for more
              info.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Description</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                ${!this.soulVariablesMap?.size
                  ? nothing
                  : repeat(
                      this.soulVariablesMap,
                      ([key]) => key,
                      ([, variable]) => html`
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

  private renderDocSource() {
    return html`
      <div class="body doc-src">
        ${!this.docSourceCode
          ? nothing
          : html`
              <p>
                View on Github:
                <a href=${this.docLink} target="_blank">${this.docLink}</a>
              </p>
              <app-code .code=${this.docSourceCode}></app-code>
            `}
      </div>
    `;
  }

  private renderComponentSource() {
    return html`
      <div class="body component-src">
        ${!this.componentSourceCode
          ? nothing
          : html`
              <p>
                View on Github:
                <a href=${this.componentLink} target="_blank"
                  >${this.componentLink}</a
                >
              </p>
              <app-code .code=${this.componentSourceCode}></app-code>
            `}
      </div>
    `;
  }

  private renderSoulSource() {
    return html`
      <div class="body soul-src">
        ${!this.soulSourceCode
          ? nothing
          : html`
              <p>
                View on Github:
                <a href=${this.soulLink} target="_blank">${this.soulLink}</a>
              </p>
              <app-code .code=${this.soulSourceCode}></app-code>
            `}
      </div>
    `;
  }
}
