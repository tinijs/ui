import {
  Component,
  TiniComponent,
  Input,
  html,
  css,
  nothing,
  ref,
  createRef,
  Ref,
  stylingWithBases,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';

import {IconsImportMethods} from '../consts/main';
import {mainStore} from '../stores/main';

import {AppSectionComponent} from './section';
import {AppTabsComponent, TabItem} from './tabs';
import {AppCodeComponent} from './code';
import {AppModalComponent} from './modal';
import {AppIconPageContentComponent} from './icon-page-content';

export type IconDef = [string, string];

@Component({
  components: [
    AppSectionComponent,
    AppTabsComponent,
    AppCodeComponent,
    AppModalComponent,
    AppIconPageContentComponent,
  ],
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
      codeBases,
    ]),
  },
})
export class AppIconModalComponent extends TiniComponent {
  static readonly defaultTagName = 'app-icon-modal';

  private readonly ICONS_IMPORT_TAB_ITEMS: TabItem[] = [
    {name: IconsImportMethods.Tini},
    {name: IconsImportMethods.Others},
    {name: IconsImportMethods.Standalone},
    {name: IconsImportMethods.DataURI},
    {name: IconsImportMethods.SVG},
    {name: IconsImportMethods.URL},
  ];

  private readonly PREPROCESS_CODE = (code: string, context: any) =>
    !context ? code : code.replace(/tini-icon/g, context.nameTag);

  @Input({type: String}) declare packageName?: string;
  @Input({type: String}) declare packageVersion?: string;
  @Input({type: Boolean}) declare noVariants?: boolean;
  @Input({type: Object}) declare iconDef?: IconDef;

  private modalRef: Ref<AppModalComponent> = createRef();
  private contentValues: Record<string, string> = {};

  private extractContentValues(def: IconDef) {
    const [fileName, base64Content] = def;
    const nameArr = fileName.split('.');
    const ext = nameArr.pop() as string;
    const iconName = nameArr.join('.').replace(/\./g, '-');
    const nameCapitalized = iconName
      .split('-')
      .map(item => item.charAt(0).toUpperCase() + item.slice(1))
      .join('');
    const nameVar = `icon${nameCapitalized}`;
    const nameTag = `icon-${iconName}`;
    const nameClass = `Icon${nameCapitalized}Component`;
    const packName = this.packageName || '@tinijs/ui-icons';
    const packageVersion = this.packageVersion || 'latest';
    const mimeType = {
      svg: 'image/svg+xml',
      webp: 'image/webp',
      png: 'image/png',
      jpg: 'image/jpeg',
    }[ext];

    const iconSRC = `data:${mimeType};base64,${base64Content}`;

    const tiniJSCode = `import {Component} from '@tinijs/core';

// 1. import the component
import {${nameClass}} from '${packName}/${iconName}';

@Component({
  components: [
    ${nameClass}, // 2. register the component
  ]
});
export class MyComponent extends TiniComponent {}`;

    const othersCode = `/*
 * Option I: include in your component
 */
import '${packName}/${iconName}.include';

/*
 * Option II: import as a shared bundle (if your bundler supports it)
 */
import {useComponents} from '@tinijs/core';

// 1. import the component
import {${nameClass}} from '${packName}/${iconName}';

useComponents([
  ${nameClass}, // 2. register the component
]);
`;

    const standaloneCode = `<script src="https://unpkg.com/${packName}@${packageVersion}/${iconName}.bundle.js"></script>`;

    const dataURICode = `import {html} from 'lit';

// 1. import the data URI
import {dataURI as ${nameVar}URI} from '${packName}/${iconName}.source';

// 2. use it as background image or image src
html\`
  <i style="background-image: url(\$\{${nameVar}URI\})"></i>
  <img src=\$\{${nameVar}URI\} />
\`;
`;

    const svgCode = `import {html} from 'lit';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';

// 1. import the code
import {code as ${nameVar}Code} from '${packName}/${iconName}.source';

// 2a. render
html\`<div class="container">\$\{unsafeSVG(${nameVar}Code)\}</div>\`;

// 2b. or inject
containerEl.innerHTML = ${nameVar}Code;
`;
    const svgPreviewCode = window.atob(base64Content);

    const urlCode = `<img ${'src'}="https://unpkg.com/${packName}@${packageVersion}/${iconName}.svg" />`;

    return {
      iconSRC,
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

  onChanges() {
    this.contentValues = !this.iconDef
      ? ({} as any)
      : this.extractContentValues(this.iconDef);
  }

  show() {
    this.modalRef.value?.show();
  }

  private hideModal() {
    this.modalRef.value?.hide();
    this.iconDef = undefined;
  }

  protected render() {
    const {
      iconSRC,
      tiniJSCode,
      othersCode,
      standaloneCode,
      dataURICode,
      svgCode,
      svgPreviewCode,
      urlCode,
      names,
    } = this.contentValues;
    return html`
      <app-modal
        ${ref(this.modalRef)}
        .titleText=${this.iconDef?.[0]}
        .backdropClosed=${true}
        @no=${this.hideModal}
      >
        ${!this.iconDef
          ? nothing
          : html`
              <div class="modal-body">
                <app-section noUsageTabs style="margin-top: 1rem;">
                  <h2 slot="title" style="margin-top: 0;">Imports</h2>
                  <div slot="content" class="imports">
                    <p>
                      After installing the respective icons pack, you can import
                      and use the component, data URI, SVG code or URL anywhere
                      in your project:
                    </p>

                    <app-tabs
                      .tabItems=${this.ICONS_IMPORT_TAB_ITEMS}
                      .activeName=${mainStore.referIconsImport}
                      @change=${({detail}: CustomEvent<{name: string}>) =>
                        mainStore.commit('referIconsImport', detail.name)}
                    >
                      <div data-tab=${IconsImportMethods.Tini}>
                        <p>For the Tini framework.</p>
                        <app-code .code=${tiniJSCode}></app-code>
                      </div>

                      <div data-tab=${IconsImportMethods.Others}>
                        <p>For Vue, React, Angular, Svelte, ...</p>
                        <app-code .code=${othersCode}></app-code>
                      </div>

                      <div data-tab=${IconsImportMethods.Standalone}>
                        <p>
                          Include the standalone version in any HTML page from a
                          public CDN:
                        </p>
                        <app-code .code=${standaloneCode}></app-code>
                        <p>
                          <strong>Note that</strong>: this method is
                          <em>not recommended</em> because the standalone
                          component is usually bigger in size compares to the
                          TS/ESM version.
                        </p>
                      </div>

                      <div data-tab=${IconsImportMethods.DataURI}>
                        <p>Use the data URI</p>
                        <app-code .code=${dataURICode}></app-code>
                      </div>

                      <div data-tab=${IconsImportMethods.SVG}>
                        <p>Use the code (SVG icons only).</p>
                        <p>
                          SVG codes built using the
                          <a
                            href="https://github.com/tinijs/cli"
                            target="_blank"
                            >official CLI</a
                          >
                          are <strong>sanitized</strong> and
                          <strong>optimized</strong>, please always review the
                          code before inject into your HTML.
                        </p>
                        <app-code .code=${svgCode}></app-code>
                        <p>For security review and direct copy.</p>
                        <app-code .code=${svgPreviewCode}></app-code>
                      </div>

                      <div data-tab=${IconsImportMethods.URL}>
                        <p>Use the direct link.</p>
                        <app-code .code=${urlCode}></app-code>
                      </div>
                    </app-tabs>
                  </div>
                </app-section>

                <app-icon-page-content
                  .src=${iconSRC}
                  .preprocessCode=${this.PREPROCESS_CODE}
                  .codeBuildContext=${names}
                  ?noVariants=${this.noVariants}
                ></app-icon-page-content>
              </div>
            `}
      </app-modal>
    `;
  }

  static styles = css`
    .modal-body {
      display: block;
      width: 100%;
      padding: 0 2rem;

      app-icon-page-content {
        padding-bottom: 3rem;
      }
    }
  `;
}
