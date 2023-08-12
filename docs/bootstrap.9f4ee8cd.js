function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire2169;t.register("kf8SB",function(o,a){e(o.exports,"AppIconPageComponent",function(){return l});var i=t("l73V3"),n=t("5B3HT"),s=t("aPFYP"),r=t("5GozN"),p=t("dJr09"),d=t("iDR9r"),c=t("cRCDF");let l=class extends n.TiniComponent{static #e=(()=>{this.defaultTagName="app-icon-page"})();buildUrl([e,t]){let o=e.split(".").pop();return`data:${({svg:"image/svg+xml",webp:"image/webp",png:"image/png",jpg:"image/jpeg"})[o]};base64,${t}`}async onCreate(){this.data=await (0,p.get)(`https://unpkg.com/${this.packageName}@latest/index.json`),this.totalPages=Math.ceil(this.data.items.length/this.SIZE)}onChanges(){if(this.installCode=this.buildInstallCode(),this.changelogsUrl=this.buildChangelogsUrl(),this.data&&this.totalPages&&this.currentPage>=1&&this.currentPage<=this.totalPages){let e=this.filterQuery?.trim().toLowerCase();this.displayedItems=(e?this.data.items.filter(([t])=>t.includes(e)):this.data.items).slice((this.currentPage-1)*this.SIZE,this.SIZE*this.currentPage)}}buildInstallCode(){return`npm i ${this.packageName}`}buildChangelogsUrl(){return`${this.ICONS_REPO_URL}/blob/main/changelogs/${this.packageName}`}async showModal(e){this.modalRef.value&&(this.modalRef.value.iconDef=e,this.modalRef.value.show())}render(){return(0,n.html)`
      <div class="head">
        <h1 class="title">${this.titleText||"Icons"}</h1>
        <ul>
          <li>
            Install: <code><strong>${this.installCode}</strong></code>
          </li>
          <li>Version: <code>${this.data?.version||"?"}</code></li>
          <li>
            <a href=${this.ICONS_REPO_URL} target="_blank">Icons Repo</a>
          </li>
          <li>
            <a href=${this.changelogsUrl} target="_blank">Changelogs</a>
          </li>
          ${this.homepage?(0,n.html)`
                <li>
                  <a href=${this.homepage} target="_blank">Homepage</a>
                </li>
              `:n.nothing}
        </ul>
      </div>

      <div class="body">
        <div class="nav">
          <div class="summary">
            Display <strong>${this.displayedItems?.length||"-"}</strong> /
            ${this.data?.items.length||"-"} icons.
          </div>
          <div class="pagination">
            <button
              ?disabled=${1===this.currentPage}
              @click=${()=>this.currentPage--}
            >
              Prev
            </button>
            <div class="page-no">
              <input
                type="number"
                .value=${""+this.currentPage}
                @input=${e=>this.currentPage=Number(e.target.value)}
                min="1"
                max=${this.totalPages||1}
              />
              <span>/ ${this.totalPages||"?"}</span>
            </div>
            <button
              ?disabled=${this.currentPage===this.totalPages}
              @click=${()=>this.currentPage++}
            >
              Next
            </button>
          </div>
          <input
            class="filter"
            type="search"
            placeholder="Search icons ..."
            @input=${e=>{1!==this.currentPage&&(this.currentPage=1),this.filterQuery=e.target.value}}
          />
        </div>

        <div class="content">
          ${this.displayedItems?.length?(0,n.html)`
                <div class="icons">
                  ${(0,n.repeat)(this.displayedItems,e=>e[0],e=>(0,n.html)`
                      <button
                        class="icon"
                        title=${e[0]}
                        @click=${()=>this.showModal(e)}
                      >
                        <img src=${this.buildUrl(e)} alt=${e[0]} />
                      </button>
                    `)}
                </div>
              `:this.filterQuery?(0,n.html)`<div class="empty">No icon found!</div>`:(0,n.html)`<div class="loading">Fetching icons list ...</div>`}
        </div>
      </div>

      <app-icon-modal
        ${(0,n.ref)(this.modalRef)}
        .packageName=${this.packageName}
        .packageVersion=${this.data?.version}
        ?noVariants=${this.noVariants}
      ></app-icon-modal>
    `}static #t=(()=>{this.styles=(0,n.css)`:host{--icon-size: 3.5rem}.head ul{list-style:none;margin:0;padding:0;display:flex;gap:2rem}.body{margin-top:2rem;padding:2rem 0;border-top:var(--size-border) solid var(--color-background-shade)}.nav{display:flex;align-items:center;justify-content:space-between}.pagination{display:flex;align-items:center}.filter,.pagination input,.pagination button{padding:.5rem .25rem .5rem .5rem;border:var(--size-border) solid var(--color-background-shade);border-radius:var(--size-radius);background:var(--color-background);color:var(--color-foreground)}.pagination button{cursor:pointer;border-color:var(--color-medium);padding:.5rem}.pagination button:disabled{cursor:not-allowed;opacity:.3}.pagination .page-no{margin:0 .75rem}.filter{width:30%}.content{margin-top:2rem}.icons{display:grid;grid-template-columns:repeat(auto-fill, var(--icon-size));gap:.75rem}.icon{cursor:pointer;display:flex;align-items:center;justify-content:center;width:var(--icon-size);height:var(--icon-size);border:1px solid var(--color-background-shade);border-radius:5px;background:var(--color-background-tint)}.icon:hover{border-color:var(--color-medium);background-color:var(--color-background-tint-2)}.icon img{width:calc(var(--icon-size) - 1.5rem);height:calc(var(--icon-size) - 1.5rem)}.loading,.empty{text-align:center;padding:2rem 0;color:var(--color-medium)}`})();constructor(...e){super(...e),this.ICONS_REPO_URL=(0,r.Configurable).getOption("iconsRepoUrl"),this.SIZE=200,this.currentPage=1,this.modalRef=(0,n.createRef)()}};(0,i.__decorate)([(0,n.Input)({type:String})],l.prototype,"name",void 0),(0,i.__decorate)([(0,n.Input)({type:String})],l.prototype,"packageName",void 0),(0,i.__decorate)([(0,n.Input)({type:String})],l.prototype,"titleText",void 0),(0,i.__decorate)([(0,n.Input)({type:String})],l.prototype,"homepage",void 0),(0,i.__decorate)([(0,n.Input)({type:Boolean})],l.prototype,"noVariants",void 0),(0,i.__decorate)([(0,n.Reactive)()],l.prototype,"currentPage",void 0),(0,i.__decorate)([(0,n.Reactive)()],l.prototype,"filterQuery",void 0),(0,i.__decorate)([(0,n.Reactive)()],l.prototype,"data",void 0),l=(0,i.__decorate)([(0,n.Component)({components:[d.AppCodeComponent,c.AppIconModalComponent],theming:{styling:(0,n.stylingWithBases)([s.commonBases,s.headingsBases,s.linkBases,s.textBases,s.buttonBases,s.codeBases,s.formBases])}})],l)}),t.register("cRCDF",function(o,a){e(o.exports,"AppIconModalComponent",function(){return g});var i=t("l73V3"),n=t("5B3HT"),s=t("aPFYP"),r=t("ZHozn"),p=t("fWxFe"),d=t("8L1cM"),c=t("90HH7"),l=t("iDR9r"),m=t("pUtW5"),h=t("3o4bj");let g=class extends n.TiniComponent{static #e=(()=>{this.defaultTagName="app-icon-modal"})();extractContentValues(e){let[t,o]=e,a=t.split("."),i=a.pop(),n=a.join(".").replace(/\./g,"-"),s=n.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),r=`icon${s}`,p=`icon-${n}`,d=`Icon${s}Component`,c=this.packageName||"@tinijs/ui-icons",l=this.packageVersion||"latest",m=`data:${{svg:"image/svg+xml",webp:"image/webp",png:"image/png",jpg:"image/jpeg"}[i]};base64,${o}`,h=`import {Component} from '@tinijs/core';

// 1. import the component
import {${d}} from '${c}';

@Component({
  components: [
    ${d}, // 2. register the component
  ]
});
export class MyComponent extends TiniComponent {}`,g=`/*
 * Option I: include in your component
 */
import '${c}/${n}.include';

/*
 * Option II: import as a shared bundle (if your bundler supports it)
 */
import {useComponents} from '@tinijs/core';

// 1. import the component
import {${d}} from '${c}';

useComponents([
  ${d}, // 2. register the component
]);
`,u=`<script src="https://unpkg.com/${c}@${l}/${n}.bundle.js"></script>`,v=`import {html} from 'lit';

// 1. import the data URI
import {dataURI as ${r}URI} from '${c}/${n}.source';

// 2. use it as background image or image src
html\`
  <i style="background-image: url($\{${r}URI})"></i>
  <img src=$\{${r}URI} />
\`;
`,b=`import {html} from 'lit';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';

// 1. import the code
import {code as ${r}Code} from '${c}/${n}.source';

// 2a. render
html\`<div class="container">$\{unsafeSVG(${r}Code)}</div>\`;

// 2b. or inject
containerEl.innerHTML = ${r}Code;
`,$=window.atob(o),f=`<img src="https://unpkg.com/${c}@${l}/${n}.svg" />`;return{iconSRC:m,tiniJSCode:h,othersCode:g,standaloneCode:u,dataURICode:v,svgCode:b,svgPreviewCode:$,urlCode:f,names:{nameTag:p}}}onChanges(){this.contentValues=this.iconDef?this.extractContentValues(this.iconDef):{}}show(){this.modalRef.value?.show()}hideModal(){this.modalRef.value?.hide(),this.iconDef=void 0}render(){let{iconSRC:e,tiniJSCode:t,othersCode:o,standaloneCode:a,dataURICode:i,svgCode:s,svgPreviewCode:d,urlCode:c,names:l}=this.contentValues;return(0,n.html)`
      <app-modal
        ${(0,n.ref)(this.modalRef)}
        .titleText=${this.iconDef?.[0]}
        .backdropClosed=${!0}
        @no=${this.hideModal}
      >
        ${this.iconDef?(0,n.html)`
              <div class="modal-body">
                <app-section .noUsageTabs=${!0} style="margin-top: 1rem;">
                  <div slot="content" class="imports">
                    <h2 style="margin-top: 0;">Imports</h2>
                    <p>
                      After installing the respective icons pack, you can import
                      and use the component, data URI, SVG code or URL anywhere
                      in your project:
                    </p>

                    <app-tabs
                      .tabItems=${this.ICONS_IMPORT_TAB_ITEMS}
                      .activeName=${p.mainStore.referIconsImport}
                      @change=${({detail:e})=>(0,p.mainStore).commit("referIconsImport",e.name)}
                    >
                      <div data-tab=${r.IconsImportMethods.Tini}>
                        <p>For the Tini framework.</p>
                        <app-code .code=${t}></app-code>
                      </div>

                      <div data-tab=${r.IconsImportMethods.Others}>
                        <p>For Vue, React, Angular, Svelte, ...</p>
                        <app-code .code=${o}></app-code>
                      </div>

                      <div data-tab=${r.IconsImportMethods.Standalone}>
                        <p>
                          Include the standalone version in any HTML page from a
                          public CDN:
                        </p>
                        <app-code .code=${a}></app-code>
                        <p>
                          <strong>Note that</strong>: this method is
                          <em>not recommended</em> because the standalone
                          component is usually bigger in size compares to the
                          TS/ESM version.
                        </p>
                      </div>

                      <div data-tab=${r.IconsImportMethods.DataURI}>
                        <p>Use the data URI</p>
                        <app-code .code=${i}></app-code>
                      </div>

                      <div data-tab=${r.IconsImportMethods.SVG}>
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
                        <app-code .code=${s}></app-code>
                        <p>For security review and direct copy.</p>
                        <app-code .code=${d}></app-code>
                      </div>

                      <div data-tab=${r.IconsImportMethods.URL}>
                        <p>Use the direct link.</p>
                        <app-code .code=${c}></app-code>
                      </div>
                    </app-tabs>
                  </div>
                </app-section>

                <app-icon-page-content
                  .src=${e}
                  .preprocessCode=${this.PREPROCESS_CODE}
                  .codeBuildContext=${l}
                  ?noVariants=${this.noVariants}
                ></app-icon-page-content>
              </div>
            `:n.nothing}
      </app-modal>
    `}static #t=(()=>{this.styles=(0,n.css)`.modal-body{display:block;width:100%;padding:0 2rem}.modal-body app-icon-page-content{padding-bottom:3rem}`})();constructor(...e){super(...e),this.ICONS_IMPORT_TAB_ITEMS=[{name:r.IconsImportMethods.Tini},{name:r.IconsImportMethods.Others},{name:r.IconsImportMethods.Standalone},{name:r.IconsImportMethods.DataURI},{name:r.IconsImportMethods.SVG},{name:r.IconsImportMethods.URL}],this.PREPROCESS_CODE=(e,t)=>t?e.replace(/tini-icon/g,t.nameTag):e,this.modalRef=(0,n.createRef)(),this.contentValues={}}};(0,i.__decorate)([(0,n.Input)({type:String})],g.prototype,"packageName",void 0),(0,i.__decorate)([(0,n.Input)({type:String})],g.prototype,"packageVersion",void 0),(0,i.__decorate)([(0,n.Input)({type:Boolean})],g.prototype,"noVariants",void 0),(0,i.__decorate)([(0,n.Input)({type:Object})],g.prototype,"iconDef",void 0),g=(0,i.__decorate)([(0,n.Component)({components:[d.AppSectionComponent,c.AppTabsComponent,l.AppCodeComponent,m.AppModalComponent,h.AppIconPageContentComponent],theming:{styling:(0,n.stylingWithBases)([s.commonBases,s.headingsBases,s.linkBases,s.textBases,s.codeBases])}})],g)});
//# sourceMappingURL=bootstrap.9f4ee8cd.js.map
