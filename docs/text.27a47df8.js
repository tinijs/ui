var t;(t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire2169).register("jLKyn",function(e,o){Object.defineProperty(e.exports,"AppComponentPageComponent",{get:function(){return C},set:void 0,enumerable:!0,configurable:!0});var i,n,s=t("4tSb9"),a=t("1mUAS"),r=t("pLkRZ"),p=t("j09cH"),d=t("6uvK4"),c=t("eoQhH"),l=t("5kxRk"),h=t("8u3xy"),m=t("9qEys"),u=t("apfSk"),b=t("laxZI"),g=t("h2glW"),v=t("2de06"),$=t("10mzZ");(i=n||(n={})).Article="article",i.Component="component",i.Soul="soul";let C=class extends a.TiniComponent{static #t=(()=>{this.defaultTagName="app-component-page"})();async onCreate(){this.soulVariablesMap=await (0,m.extractCSSVariables)(this.buildSoulUrl(),[":host {","}"]),this.componentProperties=await (0,m.extractComponentProperties)(this.buildComponentUrl())}onChanges(){this.nameVariants=this.buildNameVariants(),this.importTiniCode=this.buildImportTiniCode(),this.importSpecificCode=this.buildImportSpecificCode(),this.standaloneCode=this.buildStandaloneCode(),this.articleLink=this.buildArticleLink(),this.componentLink=this.buildComponentLink(),this.componentUrl=this.buildComponentUrl(),this.soulLink=this.buildSoulLink(),this.soulUrl=this.buildSoulUrl()}buildNameVariants(){let t=(this.customComponentPrefix||"tini").toLowerCase(),e=t.toUpperCase(),o=t[0].toUpperCase()+t.slice(1),i=this.name.split("-").map(t=>t[0].toUpperCase()+t.slice(1)).join(""),n=`${e}_${this.name.replace(/-/g,"_").toUpperCase()}`,s=`${t}-${this.name}`,a=`${o}${i}Component`;return{nameCapitalized:i,nameConst:n,nameTag:s,nameClass:a}}buildStandaloneCode(){return`<script src="https://cdn.jsdelivr.net/npm/${this.PACKAGE_PREFIX}-${this.activeSoulId}/components/${this.name}.bundle.js"></script>`}buildArticleLink(){return`${this.referArticleRepoUrl}/blob/main/app/pages/${this.path}.ts`}buildSoulLink(){return`${this.REPO_URL}/blob/main/styles/${this.activeSoulId}/soul/${this.name}.ts`}buildSoulUrl(){return`${(0,h.buildGithubRawUrl)(this.REPO_URL)}/main/styles/${this.activeSoulId}/soul/${this.name}.ts`}buildComponentLink(){return`${this.referComponentRepoUrl}/blob/main/components/${this.name}.ts`}buildComponentUrl(){return`${(0,h.buildGithubRawUrl)(this.referComponentRepoUrl)}/main/components/${this.name}.ts`}buildImportTiniCode(){let{nameClass:t}=this.nameVariants;return`import {Page} from '@tinijs/core';

// 1. import the component
import {${t}} from '${this.customComponentPrefix?this.PACKAGE_PREFIX:"@tinijs/ui"}';

@Page({
  components: [
    ${t}, // 2. register the component
  ]
});
export class MyPage extends TiniComponent {}`}buildImportSpecificCode(){let{nameClass:t}=this.nameVariants;return`/*
 * Option I: include in your component
 */
import '${this.PACKAGE_PREFIX}-${this.activeSoulId}/components/${this.name}.include';

/*
 * Option II: import as a shared bundle (if your bundler supports it)
 */
import {useComponents} from '@tinijs/core';

// 1. import the component
import {${t}} from '${this.PACKAGE_PREFIX}-${this.activeSoulId}';

useComponents([
  ${t}, // 2. register the component
]);
`}async switchMode(t){this.contentMode=t,this.contentMode!==n.Component||this.componentSourceCode?this.contentMode!==n.Soul||this.soulSourceCode||(this.soulSourceCode=await (0,u.getText)(this.soulUrl)):this.componentSourceCode=await (0,u.getText)(this.componentUrl)}render(){return(0,a.html)`
      <div class="head">
        <div class="title-bar">
          <h1 class="title">
            <span>${this.titleText||"Untitled page"}</span>
            <a class="github-link" href=${this.articleLink} target="_blank">
              <icon-github size="sm"></icon-github>
            </a>
          </h1>
          <div class="switch-mode">
            <button
              class=${(0,a.classMap)({active:this.contentMode===n.Article})}
              @click=${this.switchMode.bind(this,n.Article)}
            >
              Documentation
            </button>
            <button
              class=${(0,a.classMap)({active:this.contentMode===n.Component})}
              @click=${this.switchMode.bind(this,n.Component)}
            >
              Component source
            </button>
            <button
              class=${(0,a.classMap)({active:this.contentMode===n.Soul})}
              @click=${this.switchMode.bind(this,n.Soul)}
            >
              Soul source
            </button>
          </div>
        </div>
        <slot name="description"></slot>
      </div>

      ${(0,a.cache)(this.contentMode===n.Component?this.renderComponentSource():this.contentMode===n.Soul?this.renderSoulSource():this.renderArticle())}
    `}renderArticle(){return(0,a.html)`
      <div class="body article">
        <app-section .noUsageTabs=${!0}>
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
              @change=${({detail:t})=>(0,b.mainStore).commit("referImport",t.name)}
            >
              <div data-tab=${l.ImportMethods.Tini}>
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
                <app-code .code=${this.importTiniCode}></app-code>
              </div>

              <div data-tab=${l.ImportMethods.Specific}>
                <p>The specific package only supports one soul at a time.</p>
                <app-code .code=${this.importSpecificCode}></app-code>
              </div>

              <div data-tab=${l.ImportMethods.Standalone}>
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

        <app-section .noUsageTabs=${!0}>
          <div slot="content" class="api">
            <h2>API</h2>
            <p>
              For implementation detail, please see the
              <a
                href="javascript:void(0)"
                @click=${this.switchMode.bind(this,n.Component)}
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
                ${this.componentProperties?.length?this.componentProperties.map(t=>(0,a.html)`
                        <tr>
                          <td><code>${t.name}</code></td>
                          <td><code>${t.type}</code></td>
                          <td>${t.isOptional?"":"✓"}</td>
                          <td><code>${t.defaultValue}</code></td>
                        </tr>
                      `):a.nothing}
              </tbody>
            </table>
          </div>
        </app-section>

        <app-section .noUsageTabs=${!0}>
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
                @click=${this.switchMode.bind(this,n.Soul)}
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
                ${this.soulVariablesMap?.size?(0,a.repeat)(this.soulVariablesMap,([t])=>t,([,t])=>(0,a.html)`
                        <tr>
                          <td><code>${t.key}</code></td>
                          <td>${t.description}</td>
                          <td><code>${t.value}</code></td>
                        </tr>
                      `):a.nothing}
              </tbody>
            </table>
            ${this.partList?(0,a.html)`
                  <h3>Parts</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Template</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${this.partList.map(([t,e])=>(0,a.html)`
                          <tr>
                            <td><code>${t}</code></td>
                            <td>${e}</td>
                            <td>
                              <code
                                >${this.nameVariants.nameTag}::part(${t})
                                {}</code
                              >
                            </td>
                          </tr>
                        `)}
                    </tbody>
                  </table>
                `:a.nothing}
          </div>
        </app-section>
      </div>

      ${this.prevPage||this.nextPage?(0,a.html)`
            <div class="foot">
              ${this.prevPage?(0,a.html)`
                    <tini-link .href=${this.prevPage.href}
                      >${this.prevPage.title}</tini-link
                    >
                  `:a.nothing}
              ${this.nextPage?(0,a.html)`
                    <tini-link .href=${this.nextPage.href}
                      >${this.nextPage.title}</tini-link
                    >
                  `:a.nothing}
            </div>
          `:a.nothing}
    `}renderComponentSource(){return(0,a.html)`
      <div class="body component-source">
        ${this.componentSourceCode?(0,a.html)`
              <p>
                View on Github:
                <a href=${this.componentLink} target="_blank"
                  >${this.componentLink}</a
                >
              </p>
              <app-code .code=${this.componentSourceCode}></app-code>
            `:a.nothing}
      </div>
    `}renderSoulSource(){return(0,a.html)`
      <div class="body soul-source">
        ${this.soulSourceCode?(0,a.html)`
              <p>
                View on Github:
                <a href=${this.soulLink} target="_blank">${this.soulLink}</a>
              </p>
              <app-code .code=${this.soulSourceCode}></app-code>
            `:a.nothing}
      </div>
    `}static #e=(()=>{this.styles=(0,a.css)`.title-bar{display:flex;align-items:center;justify-content:space-between}.title-bar .title .github-link{margin-left:var(--size-space);opacity:.5}.title-bar .title .github-link:hover{opacity:1}.title-bar .switch-mode{display:flex;align-items:center;justify-content:center}.title-bar .switch-mode button{cursor:pointer;padding:var(--size-space-0_4x) var(--size-space-0_8x);font-size:var(--size-text-0_9x);border:var(--size-border) solid var(--color-primary-tint);border-right:none;color:var(--color-primary)}.title-bar .switch-mode button:first-child{border-radius:var(--size-radius) 0 0 var(--size-radius)}.title-bar .switch-mode button:last-child{border-radius:0 var(--size-radius) var(--size-radius) 0;border-right:var(--size-border) solid var(--color-primary-tint)}.title-bar .switch-mode button.active{background:var(--color-primary);color:var(--color-primary-contrast)}.body{padding-bottom:2rem}.body.article,.body.component-source,.body.soul-source{margin-top:var(--size-space-4x)}table{width:100%;border-collapse:collapse;border-spacing:0}table thead tr th{border-bottom:var(--size-border-2x) solid var(--color-background-shade)}table tbody tr td{border-bottom:1px solid var(--color-background-shade)}table th,table td{padding:var(--size-space-0_5x);text-align:left}`})();constructor(...t){super(...t),this.PACKAGE_PREFIX=(0,c.Configurable).getOption("packagePrefix"),this.REPO_URL=(0,c.Configurable).getOption("repoUrl"),this.IMPORT_TAB_ITEMS=[{name:l.ImportMethods.Tini},{name:l.ImportMethods.Specific},{name:l.ImportMethods.Standalone}],this.contentMode=n.Article,this.activeSoulId=b.mainStore.activeSoulId,this.referImport=b.mainStore.referImport,this.referArticleRepoUrl=this.customComponentPrefix?this.REPO_URL:l.OFFICIAL_REPO_URL,this.referComponentRepoUrl=this.customComponentPrefix?this.REPO_URL:l.OFFICIAL_REPO_URL}};(0,s.__decorate)([(0,a.Input)({type:String})],C.prototype,"name",void 0),(0,s.__decorate)([(0,a.Input)({type:String})],C.prototype,"path",void 0),(0,s.__decorate)([(0,a.Input)({type:String})],C.prototype,"titleText",void 0),(0,s.__decorate)([(0,a.Input)({type:Array})],C.prototype,"partList",void 0),(0,s.__decorate)([(0,a.Input)({type:String})],C.prototype,"customComponentPrefix",void 0),(0,s.__decorate)([(0,a.Input)({type:Object})],C.prototype,"prevPage",void 0),(0,s.__decorate)([(0,a.Input)({type:Object})],C.prototype,"nextPage",void 0),(0,s.__decorate)([(0,a.Reactive)()],C.prototype,"contentMode",void 0),(0,s.__decorate)([(0,a.Reactive)()],C.prototype,"componentSourceCode",void 0),(0,s.__decorate)([(0,a.Reactive)()],C.prototype,"soulSourceCode",void 0),(0,s.__decorate)([(0,a.Reactive)()],C.prototype,"soulVariablesMap",void 0),(0,s.__decorate)([(0,a.Reactive)()],C.prototype,"componentProperties",void 0),(0,s.__decorate)([(0,r.Subscribe)(b.mainStore),(0,a.Reactive)()],C.prototype,"activeSoulId",void 0),(0,s.__decorate)([(0,r.Subscribe)(b.mainStore),(0,a.Reactive)()],C.prototype,"referImport",void 0),C=(0,s.__decorate)([(0,a.Component)({components:[d.IconGithubComponent,g.AppSectionComponent,v.AppTabsComponent,$.AppCodeComponent],theming:{styling:(0,a.stylingWithBases)([p.codeBases,p.headingsBases,p.linkBases,p.textBases,p.buttonBases,p.commonBases])}})],C)});
//# sourceMappingURL=text.27a47df8.js.map
