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
import {TINI_ICON, TiniIconComponent} from '@tinijs/ui/components/icon';

import {IconsImportMethods} from '../consts/main';
import {mainStore} from '../stores/main';

import {APP_SECTION, AppSectionComponent} from '../components/section';
import {APP_TABS, AppTabsComponent, TabItem} from '../components/tabs';
import {APP_CODE, AppCodeComponent} from '../components/code';
import {APP_MODAL, AppModalComponent} from '../components/modal';

export type IconDef = [string, string];

export const APP_PAGE_ICON_MODAL = 'app-page-icon-modal';
@Component({
  components: {
    [TINI_ICON]: TiniIconComponent,
    [APP_SECTION]: AppSectionComponent,
    [APP_TABS]: AppTabsComponent,
    [APP_CODE]: AppCodeComponent,
    [APP_MODAL]: AppModalComponent,
  },
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
  static styles = css`
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

    .sizes {
      padding-bottom: 2rem;
    }
    .sizes [slot='code'] {
      align-items: flex-end;
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
    const nameConst = `ICON_${iconName.replace(/-/g, '_').toUpperCase()}`;
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

import {${nameConst}, ${nameClass}} from '${packName}/${iconName}';

@Component({
  components: {
    [${nameConst}]: ${nameClass}
  }
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

import {${nameConst}, ${nameClass}} from '${packName}/${iconName}';

useComponents({
  [${nameConst}]: ${nameClass}
});
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
                          <strong>Use with Vue, React, Angular, Svelte, ...</strong>
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

                <app-section
                  class="default"
                  .preprocessCode=${this.PREPROCESS_CODE}
                  .codeBuildContext=${names}
                >
                  <div slot="content">
                    <h2>Default</h2>
                    <p>
                      Default color is the <strong>original</strong> color, and
                      default size is <code>md</code>.
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
                        .preprocessCode=${this.PREPROCESS_CODE}
                        .codeBuildContext=${names}
                      >
                        <div slot="content">
                          <h2>Dynamic</h2>
                          <p>
                            The color is the current
                            <code>foreground</code> color.
                          </p>
                        </div>
                        <div slot="code">
                          <tini-icon
                            color="dynamic"
                            .src=${iconSRC}
                          ></tini-icon>
                        </div>
                      </app-section>

                      <app-section
                        class="colors"
                        .preprocessCode=${this.PREPROCESS_CODE}
                        .codeBuildContext=${names}
                      >
                        <div slot="content">
                          <h2>Colors</h2>
                        </div>
                        <div slot="code">
                          <tini-icon
                            color="primary"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon
                            color="secondary"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon
                            color="tertiary"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon
                            color="success"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon
                            color="warning"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon color="danger" .src=${iconSRC}></tini-icon>
                          <tini-icon color="light" .src=${iconSRC}></tini-icon>
                          <tini-icon color="medium" .src=${iconSRC}></tini-icon>
                          <tini-icon color="dark" .src=${iconSRC}></tini-icon>
                        </div>
                      </app-section>

                      <app-section
                        class="gradients"
                        .preprocessCode=${this.PREPROCESS_CODE}
                        .codeBuildContext=${names}
                      >
                        <div slot="content">
                          <h2>Gradients</h2>
                        </div>
                        <div slot="code">
                          <tini-icon
                            color="gradient-primary"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon
                            color="gradient-secondary"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon
                            color="gradient-tertiary"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon
                            color="gradient-success"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon
                            color="gradient-warning"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon
                            color="gradient-danger"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon
                            color="gradient-light"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon
                            color="gradient-medium"
                            .src=${iconSRC}
                          ></tini-icon>
                          <tini-icon
                            color="gradient-dark"
                            .src=${iconSRC}
                          ></tini-icon>
                        </div>
                      </app-section>
                    `}

                <app-section
                  class="sizes"
                  .preprocessCode=${this.PREPROCESS_CODE}
                  .codeBuildContext=${names}
                >
                  <div slot="content">
                    <h2>Sizes</h2>
                  </div>
                  <div slot="code">
                    <tini-icon size="xxxs" .src=${iconSRC}></tini-icon>
                    <tini-icon size="xxs" .src=${iconSRC}></tini-icon>
                    <tini-icon size="xs" .src=${iconSRC}></tini-icon>
                    <tini-icon size="ss" .src=${iconSRC}></tini-icon>
                    <tini-icon size="sm" .src=${iconSRC}></tini-icon>
                    <tini-icon size="md" .src=${iconSRC}></tini-icon>
                    <tini-icon size="ml" .src=${iconSRC}></tini-icon>
                    <tini-icon size="lg" .src=${iconSRC}></tini-icon>
                    <tini-icon size="sl" .src=${iconSRC}></tini-icon>
                    <tini-icon size="xl" .src=${iconSRC}></tini-icon>
                    <tini-icon size="xxl" .src=${iconSRC}></tini-icon>
                    <tini-icon size="xxxl" .src=${iconSRC}></tini-icon>
                  </div>
                </app-section>
              </div>
            `}
      </app-modal>
    `;
  }
}
