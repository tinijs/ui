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
import {IconGithubComponent} from '@tinijs/bootstrap-icons/github';

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
  Article = 'article',
  Component = 'component',
  Soul = 'soul',
}

export const APP_COMPONENT_PAGE = 'app-component-page';
@Component({
  components: [
    IconGithubComponent,
    AppSectionComponent,
    AppTabsComponent,
    AppCodeComponent,
  ],
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

  private readonly PACKAGE_PREFIX = Configurable.getOption('packagePrefix');
  private readonly REPO_URL = Configurable.getOption('repoUrl');

  private readonly IMPORT_TAB_ITEMS: TabItem[] = [
    {name: ImportMethods.Tini},
    {name: ImportMethods.Specific},
    {name: ImportMethods.Standalone},
  ];

  @Input({type: String}) name!: string;
  @Input({type: String}) path!: string;
  @Input({type: String}) titleText?: string;
  @Input({type: Boolean}) customArticle?: boolean;
  @Input({type: Boolean}) customComponent?: boolean;
  @Input({type: Object}) prevPage?: Quicklink;
  @Input({type: Object}) nextPage?: Quicklink;

  @Reactive() private contentMode: Modes = Modes.Article;
  @Reactive() private componentSourceCode?: string;
  @Reactive() private soulSourceCode?: string;
  @Reactive() private soulVariablesMap?: Map<string, VariableDef>;
  @Reactive() private componentProperties?: any[];

  @Subscribe(mainStore) @Reactive() private readonly activeSoulId =
    mainStore.activeSoulId;
  @Subscribe(mainStore) @Reactive() private readonly referImport =
    mainStore.referImport;

  private readonly referArticleRepoUrl = this.customArticle
    ? this.REPO_URL
    : OFFICIAL_REPO_URL;
  private readonly referComponentRepoUrl = this.customComponent
    ? this.REPO_URL
    : OFFICIAL_REPO_URL;

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

// 1. import the component
import {${nameClass}} from '${
      !this.customComponent ? '@tinijs/ui' : this.PACKAGE_PREFIX
    }';

@Page({
  components: [
    ${nameClass}, // 2. register the component
  ]
});
export class MyPage extends TiniComponent {}`;
  }

  private get importOthersCode() {
    const {nameClass} = this.nameVariants;
    return `/*
 * Option I: include in your component
 */
import '${this.PACKAGE_PREFIX}-${this.activeSoulId}/components/${this.name}.include';

/*
 * Option II: import as a shared bundle (if your bundler supports it)
 */
import {useComponents} from '@tinijs/core';

// 1. import the component
import {${nameClass}} from '${this.PACKAGE_PREFIX}-${this.activeSoulId}';

useComponents([
  ${nameClass}, // 2. register the component
]);
`;
  }

  private get standaloneCode() {
    return `<script src="https://cdn.jsdelivr.net/npm/${this.PACKAGE_PREFIX}-${this.activeSoulId}/components/${this.name}.bundle.js"></script>`;
  }

  private get articleLink() {
    return `${this.referArticleRepoUrl}/blob/main/app/pages/${this.path}.ts`;
  }

  private get componentLink() {
    return `${this.referComponentRepoUrl}/blob/main/components/${this.name}.ts`;
  }

  private get componentUrl() {
    return `${buildGithubRawUrl(this.referComponentRepoUrl)}/main/components/${
      this.name
    }.ts`;
  }

  private get soulLink() {
    return `${this.REPO_URL}/blob/main/styles/${this.activeSoulId}/soul/${this.name}.ts`;
  }

  private get soulUrl() {
    return `${buildGithubRawUrl(this.REPO_URL)}/main/styles/${
      this.activeSoulId
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
    if (this.contentMode === Modes.Component && !this.componentSourceCode) {
      this.componentSourceCode = await getText(this.componentUrl);
    } else if (this.contentMode === Modes.Soul && !this.soulSourceCode) {
      this.soulSourceCode = await getText(this.soulUrl);
    }
  }

  protected render() {
    return html`
      <div class="head">
        <div class="title-bar">
          <h1 class="title">
            <span>${this.titleText || 'Untitled page'}</span>
            <a class="github-link" href=${this.articleLink} target="_blank">
              <icon-github size="sm"></icon-github>
            </a>
          </h1>
          <div class="switch-mode">
            <button
              class=${classMap({active: this.contentMode === Modes.Article})}
              @click=${this.switchMode.bind(this, Modes.Article)}
            >
              Documentation
            </button>
            <button
              class=${classMap({
                active: this.contentMode === Modes.Component,
              })}
              @click=${this.switchMode.bind(this, Modes.Component)}
            >
              Component source
            </button>
            <button
              class=${classMap({active: this.contentMode === Modes.Soul})}
              @click=${this.switchMode.bind(this, Modes.Soul)}
            >
              Soul source
            </button>
          </div>
        </div>
        <slot name="description"></slot>
      </div>

      ${cache(
        this.contentMode === Modes.Component
          ? this.renderComponentSource()
          : this.contentMode === Modes.Soul
          ? this.renderSoulSource()
          : this.renderArticle()
      )}
    `;
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
              <div data-tab=${ImportMethods.Tini}>
                <p>
                  The official
                  <tini-link
                    href="https://parceljs.org/features/code-splitting/#shared-bundles"
                    target="_blank"
                    >CLI</tini-link
                  >
                  provides the <code>tini use</code> command. It helps you to
                  manage <strong>components</strong>, <strong>souls</strong> and
                  <strong>skins</strong> under a single importing endpoint.
                </p>
                <app-code .code=${this.importTiniJSCode}></app-code>
              </div>

              <div data-tab=${ImportMethods.Specific}>
                <p>The specific package only supports one soul at a time.</p>
                <app-code .code=${this.importOthersCode}></app-code>
              </div>

              <div data-tab=${ImportMethods.Standalone}>
                <p>
                  Include the standalone version in any HTML page from a public
                  CDN:
                </p>
                <app-code .code=${this.standaloneCode}></app-code>
                <p>
                  <strong>Note that</strong>: this method is
                  <em>not recommended</em> because the standalone component has
                  the soul baked in and is usually bigger in size compares to
                  the TS/ESM version.
                </p>
              </div>
            </app-tabs>
          </div>
        </app-section>

        <slot></slot>

        <app-section .noUsageTabs=${true}>
          <div slot="content" class="api">
            <h2>API</h2>
            <p>
              For implementation detail, please see the
              <a
                href="javascript:void(0)"
                @click=${this.switchMode.bind(this, Modes.Component)}
                >component source code</a
              >.
            </p>
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
            <h2>Variables & parts</h2>
            <p>
              Please see the
              <a href="/guides/customization">Customization</a> guide for more
              info on how to customize a component.
            </p>
            <p>
              For implementation detail, please see the
              <a
                href="javascript:void(0)"
                @click=${this.switchMode.bind(this, Modes.Soul)}
                >soul source code</a
              >.
            </p>
            <h3>Variables</h3>
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
            <h3>Parts</h3>
            <p>// TODO: add the list of parts</p>
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

  private renderComponentSource() {
    return html`
      <div class="body component-source">
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
      <div class="body soul-source">
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

  static styles = css`
    .title-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title .github-link {
        margin-left: var(--size-space);
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
      }

      .switch-mode {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          cursor: pointer;
          padding: var(--size-space-0_4x) var(--size-space-0_8x);
          font-size: var(--size-text-0_9x);
          border: var(--size-border) solid var(--color-primary-tint);
          border-right: none;
          color: var(--color-primary);

          &:first-child {
            border-radius: var(--size-radius) 0 0 var(--size-radius);
          }
          &:last-child {
            border-radius: 0 var(--size-radius) var(--size-radius) 0;
            border-right: var(--size-border) solid var(--color-primary-tint);
          }
          &.active {
            background: var(--color-primary);
            color: var(--color-primary-contrast);
          }
        }
      }
    }

    .body {
      padding-bottom: 2rem;

      &.article,
      &.component-source,
      &.soul-source {
        margin-top: var(--size-space-4x);
      }
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;

      thead tr th {
        border-bottom: var(--size-border-2x) solid var(--color-background-shade);
      }

      tbody tr td {
        border-bottom: 1px solid var(--color-background-shade);
      }

      th,
      td {
        padding: var(--size-space-0_5x);
        text-align: left;
      }
    }
  `;
}
