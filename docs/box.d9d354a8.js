function t(t,i,e,s){Object.defineProperty(t,i,{get:e,set:s,enumerable:!0,configurable:!0})}var i=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire2169;i.register("NCQCN",function(e,s){t(e.exports,"AppPageComponentsBox",function(){return c});var o=i("l73V3"),a=i("5B3HT"),n=i("aPFYP"),M=i("bt64Z"),r=i("8L1cM");let c=class extends a.TiniComponent{render(){return(0,a.html)`
      <app-component-page
        titleText="Boxes"
        name="box"
        path="components/box"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Boxes are containers for any content.</div>

        <app-section class="default">
          <div slot="content">
            <h2>Default</h2>
            <p>
              Default background is the current <code>background</code>, default
              color is the current <code>foreground</code>.
            </p>
          </div>
          <div slot="code">
            <tini-box>Here is a default box</tini-box>
          </div>
        </app-section>

        ${(0,a.BASE_COLORS).map(t=>(0,a.html)`
            <app-section class="colors">
              <div slot="content">
                <h2>Color ${t}</h2>
              </div>
              <div slot="code">
                <tini-box background=${t}
                  >Box with ${t} background</tini-box
                >
                <tini-box background=${`${t}-shade`}
                  >Box with ${t}-shade background</tini-box
                >
                <tini-box background=${`${t}-shade-2`}
                  >Box with ${t}-shade-2 background</tini-box
                >
                <tini-box background=${`${t}-shade-3`}
                  >Box with ${t}-shade-3 background</tini-box
                >
                <tini-box background=${`${t}-shade-4`}
                  >Box with ${t}-shade-4 background</tini-box
                >
                <tini-box background=${`${t}-shade-5`}
                  >Box with ${t}-shade-5 background</tini-box
                >
                <tini-box background=${`${t}-tint`}
                  >Box with ${t}-tint background</tini-box
                >
                <tini-box background=${`${t}-tint-2`}
                  >Box with ${t}-tint-2 background</tini-box
                >
                <tini-box background=${`${t}-tint-3`}
                  >Box with ${t}-tint-3 background</tini-box
                >
                <tini-box background=${`${t}-tint-4`}
                  >Box with ${t}-tint-4 background</tini-box
                >
                <tini-box background=${`${t}-tint-5`}
                  >Box with ${t}-tint-5 background</tini-box
                >
                <tini-box background=${t}>
                  <tini-box background=${`${t}-contrast`}
                    >Box with ${t}-contrast background</tini-box
                  >
                </tini-box>
              </div>
            </app-section>
          `)}
        ${(0,a.BASE_GRADIENTS).map(t=>(0,a.html)`
            <app-section class="gradients">
              <div slot="content">
                <h2>${t.replace(/-/g," ")}</h2>
              </div>
              <div slot="code">
                <tini-box background=${t}
                  >Box with ${t} background</tini-box
                >
                <tini-box background=${`${t}-shade`}
                  >Box with ${t}-shade background</tini-box
                >
                <tini-box background=${`${t}-tint`}
                  >Box with ${t}-tint background</tini-box
                >
                <tini-box background=${t}>
                  <tini-box background=${`${t}-contrast`}
                    >Box with ${t}-contrast background</tini-box
                  >
                </tini-box>
              </div>
            </app-section>
          `)}

        <app-section class="text-colors">
          <div slot="content">
            <h2>Text colors</h2>
            <p>
              You can combine any text colors with any background colors. Below
              are just some examples.
            </p>
          </div>
          <div slot="code">
            <tini-box textColor="primary"
              >Default background / Primary text</tini-box
            >
            <tini-box background="warning" textColor="primary"
              >Warning background / Primary text</tini-box
            >
            <tini-box background="gradient-danger" textColor="primary"
              >Gradient Danger background / Primary text</tini-box
            >
          </div>
        </app-section>
      </app-component-page>
    `}static #t=(()=>{this.styles=(0,a.css)`app-section [slot=content] h2{text-transform:capitalize}app-section [slot=code]{display:flex;flex-flow:column nowrap;gap:var(--size-space)}`})();constructor(...t){super(...t),this.PART_LIST=[["box","The root part"]]}};c=(0,o.__decorate)([(0,a.Page)({name:"app-page-components-box",components:[n.TiniBoxComponent,M.AppComponentPageComponent,r.AppSectionComponent],theming:{styling:(0,a.stylingWithBases)([n.commonBases,n.headingsBases,n.linkBases,n.textBases,n.codeBases])}})],c)}),i.register("8L1cM",function(e,s){t(e.exports,"AppSectionComponent",function(){return N});var o=i("l73V3"),a=i("5B3HT"),n=i("aPFYP"),M=i("i1M1E"),r=i("ZHozn"),c=i("ed9Am"),L=i("fWxFe"),d=i("90HH7"),u=i("iDR9r");let N=class extends a.TiniComponent{static #t=(()=>{this.defaultTagName="app-section"})();onCreate(){let t=this.querySelector('[slot="code"]')?.innerHTML.split("\n").map(t=>t.trimEnd()).filter(t=>!!t).join("\n");if(t){let[i]=t.split("<");t=t.split("\n").map(t=>t.replace(i,"").replace(/<!--\?lit\$([\s\S]*?)\$-->/g,"").replace(/(<!---->){2}/g,"\n").replace(/<!---->/g,"").replace(/<!-- \/ -->/g,"").replace(/<!--/g,"\n<!--")).join("\n"),this.originalCode=this.preprocessCode?this.preprocessCode(t,this.codeBuildContext):t}}render(){return(0,a.html)`
      <section>
        <slot name="content"></slot>
        <slot name="code"></slot>
        ${this.noUsageTabs||!this.originalCode?a.nothing:(0,a.html)`
              <app-tabs
                class="usage-tabs"
                .tabItems=${this.USAGE_TAB_ITEMS}
                @change=${({detail:t})=>(0,L.mainStore).commit("referPlatform",t.name)}
              >
                <div slot="title">
                  <icon-code size="sm"></icon-code>
                  <span>Code</span>
                </div>
                ${(0,a.repeat)(this.USAGE_TAB_ITEMS,t=>t.name,({name:t})=>(0,a.html)`
                    <div data-tab=${t}>
                      ${t!==r.ConsumerPlatforms.Tini&&this.codeBuilders?.[t]?(0,a.html)`<app-code
                            .code=${this.codeBuilders[t](this.originalCode,this.codeBuildContext)}
                          ></app-code>`:(0,a.html)`<app-code .code=${this.originalCode}></app-code>`}
                    </div>
                  `)}
              </app-tabs>
            `}
      </section>
    `}static #i=(()=>{this.styles=(0,a.css)`:host{margin-top:3rem}::slotted([slot=code]){padding:1rem;border-radius:var(--size-radius);background:var(--color-background-tint)}.usage-tabs{margin-top:2rem}.usage-tabs [slot=title]{display:flex;align-items:center}.usage-tabs [slot=title] span{margin-left:var(--size-space-0_5x)}.usage-tabs::part(head){background:var(--color-background);border:var(--size-border) solid var(--color-background-shade);border-radius:var(--size-radius);padding:var(--size-space-0_3x);padding-right:var(--size-space)}.usage-tabs::part(head-expanded){border-bottom-right-radius:none;border-bottom-left-radius:none}.usage-tabs::part(tablinks){align-items:center}.usage-tabs::part(tablink){font-size:var(--size-text-0_8x);padding:var(--size-space-0_4x) var(--size-space-0_8x);border-radius:var(--size-radius);border:var(--size-border) solid rgba(0,0,0,0);opacity:.8}.usage-tabs::part(tablink):hover{background:var(--color-background-tint);border-color:var(--color-background-shade);opacity:1}.usage-tabs::part(tablink-active){border:var(--size-border) solid var(--color-medium-tint) !important;opacity:1}.usage-tabs::part(body){border-color:var(--color-background-shade);background:var(--color-background)}`})();constructor(...t){super(...t),this.USAGE_TAB_ITEMS=[{name:r.ConsumerPlatforms.Tini,icon:c.TINI_ICON},{name:r.ConsumerPlatforms.Vue,icon:c.VUE_ICON},{name:r.ConsumerPlatforms.React,icon:c.REACT_ICON},{name:r.ConsumerPlatforms.Angular,icon:c.ANGULAR_ICON},{name:r.ConsumerPlatforms.Svelte,icon:c.SVELTE_ICON},{name:r.ConsumerPlatforms.HTML,icon:c.HTML_ICON}]}};(0,o.__decorate)([(0,a.Input)({type:Boolean})],N.prototype,"noUsageTabs",void 0),(0,o.__decorate)([(0,a.Input)({type:Object})],N.prototype,"preprocessCode",void 0),(0,o.__decorate)([(0,a.Input)({type:Object})],N.prototype,"codeBuilders",void 0),(0,o.__decorate)([(0,a.Input)({type:Object})],N.prototype,"codeBuildContext",void 0),N=(0,o.__decorate)([(0,a.Component)({components:[M.IconCodeComponent,d.AppTabsComponent,u.AppCodeComponent],theming:{styling:(0,a.stylingWithBases)([n.commonBases])}})],N)}),i.register("ed9Am",function(e,s){t(e.exports,"TINI_ICON",function(){return o}),t(e.exports,"VUE_ICON",function(){return a}),t(e.exports,"REACT_ICON",function(){return n}),t(e.exports,"ANGULAR_ICON",function(){return M}),t(e.exports,"SVELTE_ICON",function(){return r}),t(e.exports,"HTML_ICON",function(){return c});let o=new URL(i("caSrT")).toString(),a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwb2x5Z29uIHBvaW50cz0iMS4wMjYsMjMuNTY3IDEuMDI1LDIzLjU1OSAxLjAyNCwyMy41NTYiLz48cGF0aCBmaWxsPSIjNDFCODgzIiBkPSJNMCwxLjY1bDEyLDIwLjdsMTItMjAuN2gtNC44TDEyLDE0LjA3TDQuNzQsMS42NUgweiIvPjxwYXRoIGZpbGw9IiMzNTQ5NUUiIGQ9Ik00Ljc0LDEuNjVMMTIsMTQuMTNsNy4yLTEyLjQ4aC00LjQ0TDEyLDYuNDVsLTIuODItNC44SDQuNzR6Ii8+PC9zdmc+",n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGZpbGw9IiM4MGRlZWEiIGQ9Ik0yNCwzNEMxMS4xLDM0LDEsMjkuNiwxLDI0YzAtNS42LDEwLjEtMTAsMjMtMTBjMTIuOSwwLDIzLDQuNCwyMywxMEM0NywyOS42LDM2LjksMzQsMjQsMzR6IE0yNCwxNgljLTEyLjYsMC0yMSw0LjEtMjEsOGMwLDMuOSw4LjQsOCwyMSw4czIxLTQuMSwyMS04QzQ1LDIwLjEsMzYuNiwxNiwyNCwxNnoiLz48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMTUuMSw0NC42Yy0xLDAtMS44LTAuMi0yLjYtMC43QzcuNiw0MS4xLDguOSwzMC4yLDE1LjMsMTlsMCwwYzMtNS4yLDYuNy05LjYsMTAuMy0xMi40YzMuOS0zLDcuNC0zLjksOS44LTIuNQljMi41LDEuNCwzLjQsNC45LDIuOCw5LjhjLTAuNiw0LjYtMi42LDEwLTUuNiwxNS4yYy0zLDUuMi02LjcsOS42LTEwLjMsMTIuNEMxOS43LDQzLjUsMTcuMiw0NC42LDE1LjEsNDQuNnogTTMyLjksNS40CWMtMS42LDAtMy43LDAuOS02LDIuN2MtMy40LDIuNy02LjksNi45LTkuOCwxMS45bDAsMGMtNi4zLDEwLjktNi45LDIwLjMtMy42LDIyLjJjMS43LDEsNC41LDAuMSw3LjYtMi4zYzMuNC0yLjcsNi45LTYuOSw5LjgtMTEuOQljMi45LTUsNC44LTEwLjEsNS40LTE0LjRjMC41LTQtMC4xLTYuOC0xLjgtNy44QzM0LDUuNiwzMy41LDUuNCwzMi45LDUuNHoiLz48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMzMsNDQuNmMtNSwwLTEyLjItNi4xLTE3LjYtMTUuNkM4LjksMTcuOCw3LjYsNi45LDEyLjUsNC4xbDAsMEMxNy40LDEuMywyNi4yLDcuOCwzMi43LDE5CWMzLDUuMiw1LDEwLjYsNS42LDE1LjJjMC43LDQuOS0wLjMsOC4zLTIuOCw5LjhDMzQuNyw0NC40LDMzLjksNDQuNiwzMyw0NC42eiBNMTMuNSw1LjhjLTMuMywxLjktMi43LDExLjMsMy42LDIyLjIJYzYuMywxMC45LDE0LjEsMTYuMSwxNy40LDE0LjJjMS43LTEsMi4zLTMuOCwxLjgtNy44Yy0wLjYtNC4zLTIuNS05LjQtNS40LTE0LjRDMjQuNiw5LjEsMTYuOCwzLjksMTMuNSw1LjhMMTMuNSw1Ljh6Ii8+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iNCIgZmlsbD0iIzgwZGVlYSIvPjwvc3ZnPg==",M="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGZpbGw9IiNGNDQzMzYiIGQ9Ik0yMS4zMTYsMTguNzU1TDIzLDMuOTg2TDEyLDBMMSwzLjk4NmwxLjY4NCwxNC43NjlMMTIsMjRMMjEuMzE2LDE4Ljc1NXogTTcuNjkyLDE4LjMxMUg1LjExNEwxMiwyLjY1MQlsNi44OTIsMTUuNjU5aC0yLjU3M2wtMS4zODctMy41MDRIOS4wNzlMNy42OTIsMTguMzExeiIvPjxwb2x5Z29uIGZpbGw9IiNGNDQzMzYiIHBvaW50cz0iOS45ODMsMTIuNjQ4IDE0LjAxNywxMi42NDggMTIsNy43NDEiLz48L3N2Zz4=",r="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIzNC4yMjggMjkuMjY3IDE0Ny42NjcgMTc3LjQwOCIgd2lkdGg9IjE0Ny42NjciIGhlaWdodD0iMTc3LjQwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8c3ltYm9sIGlkPSJhIiB2aWV3Qm94PSIwIDAgOTMuMjI0IDExMiI+CiAgICAgIDxwYXRoIGNsYXNzPSJhIiBkPSJNODcuMjY5LDE0LjgxOUM3Ni44NjktLjA2Niw1Ni4zMjgtNC40NzgsNDEuNDc3LDQuOTg0TDE1LjQsMjEuNjA4QTI5LjkyMSwyOS45MjEsMCwwLDAsMS44NzYsNDEuNjUxLDMxLjUxNCwzMS41MTQsMCwwLDAsNC45ODQsNjEuODgyLDMwLjAwNiwzMC4wMDYsMCwwLDAsLjUwNyw3My4wNjUsMzEuODkyLDMxLjg5MiwwLDAsMCw1Ljk1NSw5Ny4xODFjMTAuNCwxNC44ODcsMzAuOTQyLDE5LjMsNDUuNzkxLDkuODM1TDc3LjgyOSw5MC4zOTJBMjkuOTE1LDI5LjkxNSwwLDAsMCw5MS4zNDcsNzAuMzQ5YTMxLjUyMiwzMS41MjIsMCwwLDAtMy4xLTIwLjIzMiwzMC4wMTksMzAuMDE5LDAsMCwwLDQuNDc0LTExLjE4MiwzMS44NzgsMzEuODc4LDAsMCwwLTUuNDQ3LTI0LjExNiIvPgogICAgICA8cGF0aCBjbGFzcz0iYiIgZD0iTTM4LjkyOSw5OC41ODJhMjAuNzIsMjAuNzIsMCwwLDEtMjIuMjM3LTguMjQzLDE5LjE3NiwxOS4xNzYsMCwwLDEtMy4yNzYtMTQuNSwxOC4xNDMsMTguMTQzLDAsMCwxLC42MjMtMi40MzVsLjQ5MS0xLjUsMS4zMzcuOTgxYTMzLjYzMywzMy42MzMsMCwwLDAsMTAuMiw1LjFsLjk2OS4yOTQtLjA4OS45NjhBNS44NDQsNS44NDQsMCwwLDAsMjgsODMuMTIyYTYuMjQsNi4yNCwwLDAsMCw2LjcsMi40ODUsNS43NDgsNS43NDgsMCwwLDAsMS42LS43TDYyLjM4Miw2OC4yODFhNS40Myw1LjQzLDAsMCwwLDIuNDUxLTMuNjMxLDUuNzk0LDUuNzk0LDAsMCwwLS45ODgtNC4zNzEsNi4yNDQsNi4yNDQsMCwwLDAtNi43LTIuNDg3LDUuNzU1LDUuNzU1LDAsMCwwLTEuNi43bC05Ljk1Myw2LjM0NWExOS4wNiwxOS4wNiwwLDAsMS01LjMsMi4zMjYsMjAuNzE5LDIwLjcxOSwwLDAsMS0yMi4yMzctOC4yNDMsMTkuMTcxLDE5LjE3MSwwLDAsMS0zLjI3Ny0xNC41QTE3Ljk5MiwxNy45OTIsMCwwLDEsMjIuOTE1LDMyLjM3TDQ5LDE1Ljc0N2ExOS4wMywxOS4wMywwLDAsMSw1LjMtMi4zMjksMjAuNzIsMjAuNzIsMCwwLDEsMjIuMjM3LDguMjQzLDE5LjE3NiwxOS4xNzYsMCwwLDEsMy4yNzcsMTQuNSwxOC40NTMsMTguNDUzLDAsMCwxLS42MjQsMi40MzVsLS40OTEsMS41LTEuMzM2LS45NzlhMzMuNjE2LDMzLjYxNiwwLDAsMC0xMC4yLTUuMWwtLjk3LS4yOTQuMDktLjk2OGE1Ljg1OSw1Ljg1OSwwLDAsMC0xLjA1Mi0zLjg3OCw2LjI0MSw2LjI0MSwwLDAsMC02LjctMi40ODUsNS43NDgsNS43NDgsMCwwLDAtMS42LjdMMzAuODQyLDQzLjcxOWE1LjQyMSw1LjQyMSwwLDAsMC0yLjQ0OSwzLjYzLDUuNzksNS43OSwwLDAsMCwuOTg2LDQuMzcyLDYuMjQ1LDYuMjQ1LDAsMCwwLDYuNywyLjQ4Nyw1Ljc3Myw1Ljc3MywwLDAsMCwxLjYtLjdsOS45NTItNi4zNDJhMTguOTc4LDE4Ljk3OCwwLDAsMSw1LjMtMi4zMjgsMjAuNzE4LDIwLjcxOCwwLDAsMSwyMi4yMzYsOC4yNDMsMTkuMTcxLDE5LjE3MSwwLDAsMSwzLjI3NywxNC41LDE4LDE4LDAsMCwxLTguMTMsMTIuMDU0TDQ0LjIyOSw5Ni4yNTNhMTkuMDE3LDE5LjAxNywwLDAsMS01LjMsMi4zMjkiLz4KICAgIDwvc3ltYm9sPgogICAgPHN0eWxlPi5he2ZpbGw6I2ZmM2UwMDt9LmJ7ZmlsbDojZmZmO30uY3tmaWxsOiMxMjczZmY7fS5ke2ZpbGw6I2ZmZDgxNTt9PC9zdHlsZT4KICA8L2RlZnM+CiAgPHVzZSB3aWR0aD0iOTMuMjI0IiBoZWlnaHQ9IjExMiIgdHJhbnNmb3JtPSJtYXRyaXgoMS41ODQsIDAsIDAsIDEuNTg0LCAzNC4yMjgwMDEsIDI5LjI2NykiIHhsaW5rOmhyZWY9IiNhIi8+Cjwvc3ZnPg==",c="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGZpbGw9IiNFNjUxMDAiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiIvPjxwYXRoIGZpbGw9IiNGRjZEMDAiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQsMjV2LTRoOC42bC0wLjcsMTEuNUwyNCwzNS4xdi00LjJsNC4xLTEuNGwwLjMtNC41SDI0eiBNMzIuOSwxN2wwLjMtNEgyNHY0SDMyLjl6Ii8+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDMwLjl2NC4ybC03LjktMi42TDE1LjcsMjdoNGwwLjIsMi41TDI0LDMwLjl6IE0xOS4xLDE3SDI0di00aC05LjFsMC43LDEySDI0di00aC00LjZMMTkuMSwxN3oiLz48L3N2Zz4="}),i.register("caSrT",function(t,e){t.exports=new URL(i("kyEFX").resolve("hFSsm"),import.meta.url).toString()}),i.register("90HH7",function(e,s){t(e.exports,"AppTabsComponent",function(){return M});var o=i("l73V3"),a=i("5B3HT"),n=i("aPFYP");let M=class extends a.TiniComponent{static #t=(()=>{this.defaultTagName="app-tabs"})();onCreate(){this.querySelectorAll("[data-tab]").forEach((t,i)=>{let e=this.tabItems?.[i];e&&t.style&&(t.style.display=e.name===this.activeName?"block":"none",this.containerRegistry[e.name]=t)})}onChanges(){this.activeName&&this.changeTabContent(this.activeName)}changeTabContent(t){let i=this.containerRegistry[t];i&&(Object.values(this.containerRegistry).forEach(t=>t.style.display="none"),i.style.display="block")}changeTab(t){this.activeName=t,this.dispatchEvent(new CustomEvent("change",{detail:{name:t}}))}render(){return(0,a.html)`
      <div part="head${this.activeName?" head-expanded":""}" class="head">
        <div
          part="title"
          class=${(0,a.classMap)({title:!0,"has-content":this.hasTitleContent})}
        >
          <slot
            name="title"
            @slotchange=${()=>this.hasTitleContent=!!this.titleSlotElems?.length}
          ></slot>
        </div>
        <div part="tablinks" class="tablinks">
          ${this.tabItems?.map(({name:t,icon:i,iconOnly:e})=>a.html`
              <button
                part="tablink${t!==this.activeName?"":" tablink-active"}"
                class=${a.classMap({tablink:!0,active:t===this.activeName})}
                @click=${()=>this.changeTab(t)}
              >
                ${i?a.html`<tini-icon src=${i} size="xs"></tini-icon>`:a.nothing}
                ${e?a.nothing:a.html`<span>${t}</span>`}
              </button>
            `)}
        </div>
      </div>
      <div
        part="body"
        class="${(0,a.classMap)({body:!0,expanded:!!this.activeName})}"
      >
        <slot></slot>
      </div>
    `}static #i=(()=>{this.styles=(0,a.css)`.head{transform:translateY(var(--size-border));justify-content:space-between}.head,.head .tablinks{display:flex;align-items:stretch;gap:var(--size-space-0_5x)}.head .title{display:none;font-weight:bold;padding:var(--size-space-0_5x) var(--size-space)}.head .title.has-content{display:block}.head .tablink{cursor:pointer;font-weight:bold;display:flex;align-items:center;border:var(--size-border) solid var(--color-medium-tint);border-radius:var(--size-radius) var(--size-radius) 0 0;padding:var(--size-space-0_5x) var(--size-space);background:var(--color-background);font-size:var(--size-text-0_9x)}.head .tablink.active{background:var(--color-background-tint);border-bottom-color:var(--color-background-tint)}.head .tablink tini-icon{width:var(--size-xs-2x);height:var(--size-xs-2x);margin-right:var(--size-space-0_25x)}.body{display:none;border:var(--size-border) solid var(--color-medium-tint);border-radius:0 0 var(--size-radius) var(--size-radius);padding:var(--size-space);background:var(--color-background-tint)}.body.expanded{display:block}`})();constructor(...t){super(...t),this.hasTitleContent=!1,this.containerRegistry={}}};(0,o.__decorate)([(0,a.queryAssignedElements)({slot:"title"})],M.prototype,"titleSlotElems",void 0),(0,o.__decorate)([(0,a.Reactive)()],M.prototype,"hasTitleContent",void 0),(0,o.__decorate)([(0,a.Input)({type:Array})],M.prototype,"tabItems",void 0),(0,o.__decorate)([(0,a.Input)({type:String})],M.prototype,"activeName",void 0),M=(0,o.__decorate)([(0,a.Component)({components:[n.TiniIconComponent],theming:{styling:(0,a.stylingWithBases)([n.commonBases,n.buttonBases])}})],M)});
//# sourceMappingURL=box.d9d354a8.js.map
