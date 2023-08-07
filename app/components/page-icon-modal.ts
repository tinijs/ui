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

import {AppSectionComponent} from '../components/section';
import {AppTabsComponent, TabItem} from '../components/tabs';
import {AppCodeComponent} from '../components/code';
import {AppModalComponent} from '../components/modal';
import {AppIconContentComponent} from '../components/icon-content';

export type IconDef = [string, string];

export const APP_PAGE_ICON_MODAL = 'app-page-icon-modal';
@Component({
  components: [
    AppSectionComponent,
    AppTabsComponent,
    AppCodeComponent,
    AppModalComponent,
    AppIconContentComponent,
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
export class AppPageIconModalComponent extends TiniComponent {
  static readonly defaultTagName = APP_PAGE_ICON_MODAL;

  static styles = css`
    .modal-body {
      display: block;
      width: 100%;
      padding: 0 2rem;
    }
  `;

  private readonly ICONS_IMPORT_TAB_ITEMS: TabItem[] = [
    {name: IconsImportMethods.TiniJS},
    {name: IconsImportMethods.Others},
    {name: IconsImportMethods.Standalone},
    {name: IconsImportMethods.DataURI},
    {name: IconsImportMethods.SVG},
    {name: IconsImportMethods.URL},
  ];

  private readonly PREPROCESS_CODE = (code: string, context: any) =>
    !context ? code : code.replace(/tini-icon/g, context.nameTag);

  @Input({type: String}) declare packName?: string;
  @Input({type: String}) declare packVersion?: string;
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
    const packName = `@tinijs/${this.packName}-icons`;
    const packVersion = this.packVersion || 'latest';
    const mimeType = {
      svg: 'image/svg+xml',
      webp: 'image/webp',
      png: 'image/png',
      jpg: 'image/jpeg',
    }[ext];

    const iconSRC = `data:${mimeType};base64,${base64Content}`;

    const tiniJSCode = `import {Component} from '@tinijs/core';

import {${nameClass}} from '${packName}/${iconName}';

@Component({
  components: [
    ${nameClass}
  ]
});
export class MyComponent extends TiniComponent {}`;

    const othersCode = `/*
 * Option 1: include in your component
 */
import '${packName}/${iconName}.include';

/*
 * Option 2: import as a shared bundle (if your bundler supports it)
 */
import {useComponents} from '@tinijs/core';

import {${nameClass}} from '${packName}/${iconName}';

useComponents([
  ${nameClass}
]);
`;

    const standaloneCode = `<script src="https://unpkg.com/${packName}@${packVersion}/${iconName}.bundle.js"></script>`;

    const dataURICode = `import {html} from 'lit';

import {dataURI as ${nameVar}URI} from '${packName}/${iconName}.source';

html\`
  <i style="background-image: url(\$\{${nameVar}URI\})"></i>
  <img src=\$\{${nameVar}URI\} />
\`;
`;

    const svgCode = `import {html} from 'lit';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
  
import {code as ${nameVar}Code} from '${packName}/${iconName}.source';

// render
html\`<div class="container">\$\{unsafeSVG(${nameVar}Code)\}</div>\`;

// inject
containerEl.innerHTML = ${nameVar}Code;
`;
    const svgPreviewCode = window.atob(base64Content);

    const urlCode = `<img ${'src'}="https://unpkg.com/${packName}@${packVersion}/${iconName}.svg" />`;

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
                <app-section .noUsageTabs=${true} style="margin-top: 1rem;">
                  <div slot="content" class="imports">
                    <h2 style="margin-top: 0;">Imports</h2>
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
                      <div data-tab=${IconsImportMethods.TiniJS}>
                        <p><strong>Use with TiniJS framework</strong></p>
                        <app-code .code=${tiniJSCode}></app-code>
                      </div>

                      <div data-tab=${IconsImportMethods.Others}>
                        <p>
                          <strong
                            >Use with Vue, React, Angular, Svelte, ...</strong
                          >
                        </p>
                        <app-code .code=${othersCode}></app-code>
                      </div>

                      <div data-tab=${IconsImportMethods.Standalone}>
                        <p><strong>Use the standalone package</strong></p>
                        <app-code .code=${standaloneCode}></app-code>
                        <p>
                          Include the standalone version in any HTML page from a
                          public CDN, but this method is
                          <strong>not recommended</strong> because the
                          standalone component has the soul baked in and is
                          usually bigger in size compares to the TS/ESM version.
                        </p>
                      </div>

                      <div data-tab=${IconsImportMethods.DataURI}>
                        <p><strong>Use the data URI</strong></p>
                        <app-code .code=${dataURICode}></app-code>
                      </div>

                      <div data-tab=${IconsImportMethods.SVG}>
                        <p><strong>Use the code</strong> (SVG icons only)</p>
                        <p>
                          SVG codes built using the
                          <a href="#">@tinijs/cli</a> are
                          <strong>sanitized</strong> and
                          <strong>optimized</strong>, please always review the
                          code before inject into your HTML.
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

                <app-icon-content
                  .src=${iconSRC}
                  .preprocessCode=${this.PREPROCESS_CODE}
                  .codeBuildContext=${names}
                ></app-icon-content>
              </div>
            `}
      </app-modal>
    `;
  }
}
