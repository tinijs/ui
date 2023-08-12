function i(i,t,s,e){Object.defineProperty(i,t,{get:s,set:e,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire2169;t.register("2dbyt",function(s,e){i(s.exports,"AppPageIconsAntFilled",function(){return r});var o=t("l73V3"),n=t("5B3HT"),a=t("aPFYP"),c=t("kf8SB");let r=class extends n.TiniComponent{render(){return(0,n.html)`
      <app-icon-page
        titleText="Ant Filled Icons"
        name="ant-filled"
        packageName="@tinijs/ant-filled-icons"
        homepage="https://ant.design/components/icon"
      ></app-icon-page>
    `}};r=(0,o.__decorate)([(0,n.Page)({name:"app-page-icons-ant-filled",components:[c.AppIconPageComponent],theming:{styling:(0,n.stylingWithBases)([a.commonBases,a.headingsBases,a.linkBases,a.textBases])}})],r)}),t.register("8L1cM",function(s,e){i(s.exports,"AppSectionComponent",function(){return u});var o=t("l73V3"),n=t("5B3HT"),a=t("aPFYP"),c=t("i1M1E"),r=t("ZHozn"),M=t("ed9Am"),L=t("fWxFe"),d=t("90HH7"),l=t("iDR9r");let u=class extends n.TiniComponent{static #i=(()=>{this.defaultTagName="app-section"})();onCreate(){let i=this.querySelector('[slot="code"]')?.innerHTML.split("\n").map(i=>i.trimEnd()).filter(i=>!!i).join("\n");if(i){let[t]=i.split("<");i=i.split("\n").map(i=>i.replace(t,"").replace(/<!--\?lit\$([\s\S]*?)\$-->/g,"").replace(/(<!---->){2}/g,"\n").replace(/<!---->/g,"").replace(/<!-- \/ -->/g,"").replace(/<!--/g,"\n<!--")).join("\n"),this.originalCode=this.preprocessCode?this.preprocessCode(i,this.codeBuildContext):i}}render(){return(0,n.html)`
      <section>
        <slot name="content"></slot>
        <slot name="code"></slot>
        ${this.noUsageTabs||!this.originalCode?n.nothing:(0,n.html)`
              <app-tabs
                class="usage-tabs"
                .tabItems=${this.USAGE_TAB_ITEMS}
                @change=${({detail:i})=>(0,L.mainStore).commit("referPlatform",i.name)}
              >
                <div slot="title">
                  <icon-code size="sm"></icon-code>
                  <span>Code</span>
                </div>
                ${(0,n.repeat)(this.USAGE_TAB_ITEMS,i=>i.name,({name:i})=>(0,n.html)`
                    <div data-tab=${i}>
                      ${i!==r.ConsumerPlatforms.Tini&&this.codeBuilders?.[i]?(0,n.html)`<app-code
                            .code=${this.codeBuilders[i](this.originalCode,this.codeBuildContext)}
                          ></app-code>`:(0,n.html)`<app-code .code=${this.originalCode}></app-code>`}
                    </div>
                  `)}
              </app-tabs>
            `}
      </section>
    `}static #t=(()=>{this.styles=(0,n.css)`:host{margin-top:3rem}::slotted([slot=code]){padding:1rem;border-radius:var(--size-radius);background:var(--color-background-tint)}.usage-tabs{margin-top:2rem}.usage-tabs [slot=title]{display:flex;align-items:center}.usage-tabs [slot=title] span{margin-left:var(--size-space-0_5x)}.usage-tabs::part(head){background:var(--color-background);border:var(--size-border) solid var(--color-background-shade);border-radius:var(--size-radius);padding:var(--size-space-0_3x);padding-right:var(--size-space)}.usage-tabs::part(head-expanded){border-bottom-right-radius:none;border-bottom-left-radius:none}.usage-tabs::part(tablinks){align-items:center}.usage-tabs::part(tablink){font-size:var(--size-text-0_8x);padding:var(--size-space-0_4x) var(--size-space-0_8x);border-radius:var(--size-radius);border:var(--size-border) solid rgba(0,0,0,0);opacity:.8}.usage-tabs::part(tablink):hover{background:var(--color-background-tint);border-color:var(--color-background-shade);opacity:1}.usage-tabs::part(tablink-active){border:var(--size-border) solid var(--color-medium-tint) !important;opacity:1}.usage-tabs::part(body){border-color:var(--color-background-shade);background:var(--color-background)}`})();constructor(...i){super(...i),this.USAGE_TAB_ITEMS=[{name:r.ConsumerPlatforms.Tini,icon:M.TINI_ICON},{name:r.ConsumerPlatforms.Vue,icon:M.VUE_ICON},{name:r.ConsumerPlatforms.React,icon:M.REACT_ICON},{name:r.ConsumerPlatforms.Angular,icon:M.ANGULAR_ICON},{name:r.ConsumerPlatforms.Svelte,icon:M.SVELTE_ICON},{name:r.ConsumerPlatforms.HTML,icon:M.HTML_ICON}]}};(0,o.__decorate)([(0,n.Input)({type:Boolean})],u.prototype,"noUsageTabs",void 0),(0,o.__decorate)([(0,n.Input)({type:Object})],u.prototype,"preprocessCode",void 0),(0,o.__decorate)([(0,n.Input)({type:Object})],u.prototype,"codeBuilders",void 0),(0,o.__decorate)([(0,n.Input)({type:Object})],u.prototype,"codeBuildContext",void 0),u=(0,o.__decorate)([(0,n.Component)({components:[c.IconCodeComponent,d.AppTabsComponent,l.AppCodeComponent],theming:{styling:(0,n.stylingWithBases)([a.commonBases])}})],u)}),t.register("ed9Am",function(s,e){i(s.exports,"TINI_ICON",function(){return o}),i(s.exports,"VUE_ICON",function(){return n}),i(s.exports,"REACT_ICON",function(){return a}),i(s.exports,"ANGULAR_ICON",function(){return c}),i(s.exports,"SVELTE_ICON",function(){return r}),i(s.exports,"HTML_ICON",function(){return M});let o=new URL(t("caSrT")).toString(),n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwb2x5Z29uIHBvaW50cz0iMS4wMjYsMjMuNTY3IDEuMDI1LDIzLjU1OSAxLjAyNCwyMy41NTYiLz48cGF0aCBmaWxsPSIjNDFCODgzIiBkPSJNMCwxLjY1bDEyLDIwLjdsMTItMjAuN2gtNC44TDEyLDE0LjA3TDQuNzQsMS42NUgweiIvPjxwYXRoIGZpbGw9IiMzNTQ5NUUiIGQ9Ik00Ljc0LDEuNjVMMTIsMTQuMTNsNy4yLTEyLjQ4aC00LjQ0TDEyLDYuNDVsLTIuODItNC44SDQuNzR6Ii8+PC9zdmc+",a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGZpbGw9IiM4MGRlZWEiIGQ9Ik0yNCwzNEMxMS4xLDM0LDEsMjkuNiwxLDI0YzAtNS42LDEwLjEtMTAsMjMtMTBjMTIuOSwwLDIzLDQuNCwyMywxMEM0NywyOS42LDM2LjksMzQsMjQsMzR6IE0yNCwxNgljLTEyLjYsMC0yMSw0LjEtMjEsOGMwLDMuOSw4LjQsOCwyMSw4czIxLTQuMSwyMS04QzQ1LDIwLjEsMzYuNiwxNiwyNCwxNnoiLz48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMTUuMSw0NC42Yy0xLDAtMS44LTAuMi0yLjYtMC43QzcuNiw0MS4xLDguOSwzMC4yLDE1LjMsMTlsMCwwYzMtNS4yLDYuNy05LjYsMTAuMy0xMi40YzMuOS0zLDcuNC0zLjksOS44LTIuNQljMi41LDEuNCwzLjQsNC45LDIuOCw5LjhjLTAuNiw0LjYtMi42LDEwLTUuNiwxNS4yYy0zLDUuMi02LjcsOS42LTEwLjMsMTIuNEMxOS43LDQzLjUsMTcuMiw0NC42LDE1LjEsNDQuNnogTTMyLjksNS40CWMtMS42LDAtMy43LDAuOS02LDIuN2MtMy40LDIuNy02LjksNi45LTkuOCwxMS45bDAsMGMtNi4zLDEwLjktNi45LDIwLjMtMy42LDIyLjJjMS43LDEsNC41LDAuMSw3LjYtMi4zYzMuNC0yLjcsNi45LTYuOSw5LjgtMTEuOQljMi45LTUsNC44LTEwLjEsNS40LTE0LjRjMC41LTQtMC4xLTYuOC0xLjgtNy44QzM0LDUuNiwzMy41LDUuNCwzMi45LDUuNHoiLz48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMzMsNDQuNmMtNSwwLTEyLjItNi4xLTE3LjYtMTUuNkM4LjksMTcuOCw3LjYsNi45LDEyLjUsNC4xbDAsMEMxNy40LDEuMywyNi4yLDcuOCwzMi43LDE5CWMzLDUuMiw1LDEwLjYsNS42LDE1LjJjMC43LDQuOS0wLjMsOC4zLTIuOCw5LjhDMzQuNyw0NC40LDMzLjksNDQuNiwzMyw0NC42eiBNMTMuNSw1LjhjLTMuMywxLjktMi43LDExLjMsMy42LDIyLjIJYzYuMywxMC45LDE0LjEsMTYuMSwxNy40LDE0LjJjMS43LTEsMi4zLTMuOCwxLjgtNy44Yy0wLjYtNC4zLTIuNS05LjQtNS40LTE0LjRDMjQuNiw5LjEsMTYuOCwzLjksMTMuNSw1LjhMMTMuNSw1Ljh6Ii8+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iNCIgZmlsbD0iIzgwZGVlYSIvPjwvc3ZnPg==",c="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGZpbGw9IiNGNDQzMzYiIGQ9Ik0yMS4zMTYsMTguNzU1TDIzLDMuOTg2TDEyLDBMMSwzLjk4NmwxLjY4NCwxNC43NjlMMTIsMjRMMjEuMzE2LDE4Ljc1NXogTTcuNjkyLDE4LjMxMUg1LjExNEwxMiwyLjY1MQlsNi44OTIsMTUuNjU5aC0yLjU3M2wtMS4zODctMy41MDRIOS4wNzlMNy42OTIsMTguMzExeiIvPjxwb2x5Z29uIGZpbGw9IiNGNDQzMzYiIHBvaW50cz0iOS45ODMsMTIuNjQ4IDE0LjAxNywxMi42NDggMTIsNy43NDEiLz48L3N2Zz4=",r="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIzNC4yMjggMjkuMjY3IDE0Ny42NjcgMTc3LjQwOCIgd2lkdGg9IjE0Ny42NjciIGhlaWdodD0iMTc3LjQwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8c3ltYm9sIGlkPSJhIiB2aWV3Qm94PSIwIDAgOTMuMjI0IDExMiI+CiAgICAgIDxwYXRoIGNsYXNzPSJhIiBkPSJNODcuMjY5LDE0LjgxOUM3Ni44NjktLjA2Niw1Ni4zMjgtNC40NzgsNDEuNDc3LDQuOTg0TDE1LjQsMjEuNjA4QTI5LjkyMSwyOS45MjEsMCwwLDAsMS44NzYsNDEuNjUxLDMxLjUxNCwzMS41MTQsMCwwLDAsNC45ODQsNjEuODgyLDMwLjAwNiwzMC4wMDYsMCwwLDAsLjUwNyw3My4wNjUsMzEuODkyLDMxLjg5MiwwLDAsMCw1Ljk1NSw5Ny4xODFjMTAuNCwxNC44ODcsMzAuOTQyLDE5LjMsNDUuNzkxLDkuODM1TDc3LjgyOSw5MC4zOTJBMjkuOTE1LDI5LjkxNSwwLDAsMCw5MS4zNDcsNzAuMzQ5YTMxLjUyMiwzMS41MjIsMCwwLDAtMy4xLTIwLjIzMiwzMC4wMTksMzAuMDE5LDAsMCwwLDQuNDc0LTExLjE4MiwzMS44NzgsMzEuODc4LDAsMCwwLTUuNDQ3LTI0LjExNiIvPgogICAgICA8cGF0aCBjbGFzcz0iYiIgZD0iTTM4LjkyOSw5OC41ODJhMjAuNzIsMjAuNzIsMCwwLDEtMjIuMjM3LTguMjQzLDE5LjE3NiwxOS4xNzYsMCwwLDEtMy4yNzYtMTQuNSwxOC4xNDMsMTguMTQzLDAsMCwxLC42MjMtMi40MzVsLjQ5MS0xLjUsMS4zMzcuOTgxYTMzLjYzMywzMy42MzMsMCwwLDAsMTAuMiw1LjFsLjk2OS4yOTQtLjA4OS45NjhBNS44NDQsNS44NDQsMCwwLDAsMjgsODMuMTIyYTYuMjQsNi4yNCwwLDAsMCw2LjcsMi40ODUsNS43NDgsNS43NDgsMCwwLDAsMS42LS43TDYyLjM4Miw2OC4yODFhNS40Myw1LjQzLDAsMCwwLDIuNDUxLTMuNjMxLDUuNzk0LDUuNzk0LDAsMCwwLS45ODgtNC4zNzEsNi4yNDQsNi4yNDQsMCwwLDAtNi43LTIuNDg3LDUuNzU1LDUuNzU1LDAsMCwwLTEuNi43bC05Ljk1Myw2LjM0NWExOS4wNiwxOS4wNiwwLDAsMS01LjMsMi4zMjYsMjAuNzE5LDIwLjcxOSwwLDAsMS0yMi4yMzctOC4yNDMsMTkuMTcxLDE5LjE3MSwwLDAsMS0zLjI3Ny0xNC41QTE3Ljk5MiwxNy45OTIsMCwwLDEsMjIuOTE1LDMyLjM3TDQ5LDE1Ljc0N2ExOS4wMywxOS4wMywwLDAsMSw1LjMtMi4zMjksMjAuNzIsMjAuNzIsMCwwLDEsMjIuMjM3LDguMjQzLDE5LjE3NiwxOS4xNzYsMCwwLDEsMy4yNzcsMTQuNSwxOC40NTMsMTguNDUzLDAsMCwxLS42MjQsMi40MzVsLS40OTEsMS41LTEuMzM2LS45NzlhMzMuNjE2LDMzLjYxNiwwLDAsMC0xMC4yLTUuMWwtLjk3LS4yOTQuMDktLjk2OGE1Ljg1OSw1Ljg1OSwwLDAsMC0xLjA1Mi0zLjg3OCw2LjI0MSw2LjI0MSwwLDAsMC02LjctMi40ODUsNS43NDgsNS43NDgsMCwwLDAtMS42LjdMMzAuODQyLDQzLjcxOWE1LjQyMSw1LjQyMSwwLDAsMC0yLjQ0OSwzLjYzLDUuNzksNS43OSwwLDAsMCwuOTg2LDQuMzcyLDYuMjQ1LDYuMjQ1LDAsMCwwLDYuNywyLjQ4Nyw1Ljc3Myw1Ljc3MywwLDAsMCwxLjYtLjdsOS45NTItNi4zNDJhMTguOTc4LDE4Ljk3OCwwLDAsMSw1LjMtMi4zMjgsMjAuNzE4LDIwLjcxOCwwLDAsMSwyMi4yMzYsOC4yNDMsMTkuMTcxLDE5LjE3MSwwLDAsMSwzLjI3NywxNC41LDE4LDE4LDAsMCwxLTguMTMsMTIuMDU0TDQ0LjIyOSw5Ni4yNTNhMTkuMDE3LDE5LjAxNywwLDAsMS01LjMsMi4zMjkiLz4KICAgIDwvc3ltYm9sPgogICAgPHN0eWxlPi5he2ZpbGw6I2ZmM2UwMDt9LmJ7ZmlsbDojZmZmO30uY3tmaWxsOiMxMjczZmY7fS5ke2ZpbGw6I2ZmZDgxNTt9PC9zdHlsZT4KICA8L2RlZnM+CiAgPHVzZSB3aWR0aD0iOTMuMjI0IiBoZWlnaHQ9IjExMiIgdHJhbnNmb3JtPSJtYXRyaXgoMS41ODQsIDAsIDAsIDEuNTg0LCAzNC4yMjgwMDEsIDI5LjI2NykiIHhsaW5rOmhyZWY9IiNhIi8+Cjwvc3ZnPg==",M="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGZpbGw9IiNFNjUxMDAiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiIvPjxwYXRoIGZpbGw9IiNGRjZEMDAiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQsMjV2LTRoOC42bC0wLjcsMTEuNUwyNCwzNS4xdi00LjJsNC4xLTEuNGwwLjMtNC41SDI0eiBNMzIuOSwxN2wwLjMtNEgyNHY0SDMyLjl6Ii8+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDMwLjl2NC4ybC03LjktMi42TDE1LjcsMjdoNGwwLjIsMi41TDI0LDMwLjl6IE0xOS4xLDE3SDI0di00aC05LjFsMC43LDEySDI0di00aC00LjZMMTkuMSwxN3oiLz48L3N2Zz4="}),t.register("caSrT",function(i,s){i.exports=new URL(t("kyEFX").resolve("hFSsm"),import.meta.url).toString()}),t.register("90HH7",function(s,e){i(s.exports,"AppTabsComponent",function(){return c});var o=t("l73V3"),n=t("5B3HT"),a=t("aPFYP");let c=class extends n.TiniComponent{static #i=(()=>{this.defaultTagName="app-tabs"})();onCreate(){this.querySelectorAll("[data-tab]").forEach((i,t)=>{let s=this.tabItems?.[t];s&&i.style&&(i.style.display=s.name===this.activeName?"block":"none",this.containerRegistry[s.name]=i)})}onChanges(){this.activeName&&this.changeTabContent(this.activeName)}changeTabContent(i){let t=this.containerRegistry[i];t&&(Object.values(this.containerRegistry).forEach(i=>i.style.display="none"),t.style.display="block")}changeTab(i){this.activeName=i,this.dispatchEvent(new CustomEvent("change",{detail:{name:i}}))}render(){return(0,n.html)`
      <div part="head${this.activeName?" head-expanded":""}" class="head">
        <div
          part="title"
          class=${(0,n.classMap)({title:!0,"has-content":this.hasTitleContent})}
        >
          <slot
            name="title"
            @slotchange=${()=>this.hasTitleContent=!!this.titleSlotElems?.length}
          ></slot>
        </div>
        <div part="tablinks" class="tablinks">
          ${this.tabItems?.map(({name:i,icon:t,iconOnly:s})=>n.html`
              <button
                part="tablink${i!==this.activeName?"":" tablink-active"}"
                class=${n.classMap({tablink:!0,active:i===this.activeName})}
                @click=${()=>this.changeTab(i)}
              >
                ${t?n.html`<tini-icon src=${t} size="xs"></tini-icon>`:n.nothing}
                ${s?n.nothing:n.html`<span>${i}</span>`}
              </button>
            `)}
        </div>
      </div>
      <div
        part="body"
        class="${(0,n.classMap)({body:!0,expanded:!!this.activeName})}"
      >
        <slot></slot>
      </div>
    `}static #t=(()=>{this.styles=(0,n.css)`.head{transform:translateY(var(--size-border));justify-content:space-between}.head,.head .tablinks{display:flex;align-items:stretch;gap:var(--size-space-0_5x)}.head .title{display:none;font-weight:bold;padding:var(--size-space-0_5x) var(--size-space)}.head .title.has-content{display:block}.head .tablink{cursor:pointer;font-weight:bold;display:flex;align-items:center;border:var(--size-border) solid var(--color-medium-tint);border-radius:var(--size-radius) var(--size-radius) 0 0;padding:var(--size-space-0_5x) var(--size-space);background:var(--color-background);font-size:var(--size-text-0_9x)}.head .tablink.active{background:var(--color-background-tint);border-bottom-color:var(--color-background-tint)}.head .tablink tini-icon{width:var(--size-xs-2x);height:var(--size-xs-2x);margin-right:var(--size-space-0_25x)}.body{display:none;border:var(--size-border) solid var(--color-medium-tint);border-radius:0 0 var(--size-radius) var(--size-radius);padding:var(--size-space);background:var(--color-background-tint)}.body.expanded{display:block}`})();constructor(...i){super(...i),this.hasTitleContent=!1,this.containerRegistry={}}};(0,o.__decorate)([(0,n.queryAssignedElements)({slot:"title"})],c.prototype,"titleSlotElems",void 0),(0,o.__decorate)([(0,n.Reactive)()],c.prototype,"hasTitleContent",void 0),(0,o.__decorate)([(0,n.Input)({type:Array})],c.prototype,"tabItems",void 0),(0,o.__decorate)([(0,n.Input)({type:String})],c.prototype,"activeName",void 0),c=(0,o.__decorate)([(0,n.Component)({components:[a.TiniIconComponent],theming:{styling:(0,n.stylingWithBases)([a.commonBases,a.buttonBases])}})],c)}),t.register("3o4bj",function(s,e){i(s.exports,"AppIconPageContentComponent",function(){return c});var o=t("l73V3"),n=t("5B3HT"),a=t("aPFYP");let c=class extends n.TiniComponent{static #i=(()=>{this.defaultTagName="app-icon-page-content"})();render(){return(0,n.html)`
      <app-section
        class="default"
        .preprocessCode=${this.preprocessCode}
        .codeBuildContext=${this.codeBuildContext}
      >
        <div slot="content">
          <h2>Default</h2>
          <p>
            Default color is the <strong>original</strong> color, and default
            size is <code>md</code>.
          </p>
        </div>
        <div slot="code">
          <tini-icon .src=${this.src}></tini-icon>
        </div>
      </app-section>

      ${this.noVariants?n.nothing:(0,n.html)`
            ${(0,n.BASE_COLORS).map(i=>(0,n.html)`
                <app-section
                  class="colors"
                  .preprocessCode=${this.preprocessCode}
                  .codeBuildContext=${this.codeBuildContext}
                >
                  <div slot="content">
                    <h2>Color ${i}</h2>
                  </div>
                  <div slot="code">
                    <tini-icon .src=${this.src} color=${i}></tini-icon>
                    <div class="group">
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-shade`}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-shade-2`}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-shade-3`}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-shade-4`}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-shade-5`}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-tint`}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-tint-2`}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-tint-3`}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-tint-4`}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-tint-5`}
                      ></tini-icon>
                    </div>
                    <tini-box background=${i}>
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-contrast`}
                      ></tini-icon>
                    </tini-box>
                  </div>
                </app-section>
              `)}
            ${(0,n.BASE_GRADIENTS).map(i=>(0,n.html)`
                <app-section
                  class="gradients"
                  .preprocessCode=${this.preprocessCode}
                  .codeBuildContext=${this.codeBuildContext}
                >
                  <div slot="content">
                    <h2>${i.replace(/-/g," ")}</h2>
                  </div>
                  <div slot="code">
                    <tini-icon .src=${this.src} color=${i}></tini-icon>
                    <div class="group">
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-shade`}
                      ></tini-icon>
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-tint`}
                      ></tini-icon>
                    </div>
                    <tini-box background=${i}>
                      <tini-icon
                        .src=${this.src}
                        color=${`${i}-contrast`}
                      ></tini-icon>
                    </tini-box>
                  </div>
                </app-section>
              `)}
          `}

      <app-section
        class="sizes"
        .preprocessCode=${this.preprocessCode}
        .codeBuildContext=${this.codeBuildContext}
      >
        <div slot="content">
          <h2>Sizes</h2>
        </div>
        <div slot="code">
          <tini-icon size="xxxs" .src=${this.src}></tini-icon>
          <tini-icon size="xxs" .src=${this.src}></tini-icon>
          <tini-icon size="xs" .src=${this.src}></tini-icon>
          <tini-icon size="ss" .src=${this.src}></tini-icon>
          <tini-icon size="sm" .src=${this.src}></tini-icon>
          <tini-icon size="md" .src=${this.src}></tini-icon>
          <tini-icon size="ml" .src=${this.src}></tini-icon>
          <tini-icon size="lg" .src=${this.src}></tini-icon>
          <tini-icon size="sl" .src=${this.src}></tini-icon>
          <tini-icon size="xl" .src=${this.src}></tini-icon>
          <tini-icon size="xxl" .src=${this.src}></tini-icon>
          <tini-icon size="xxxl" .src=${this.src}></tini-icon>
        </div>
      </app-section>
    `}static #t=(()=>{this.styles=(0,n.css)`app-section [slot=content] h2{text-transform:capitalize}app-section [slot=code]{display:flex;flex-flow:column;gap:var(--size-space)}app-section [slot=code] tini-box{width:65px}.sizes [slot=code]{display:block}`})();constructor(...i){super(...i),this.noVariants=!1}};(0,o.__decorate)([(0,n.Input)({type:String})],c.prototype,"src",void 0),(0,o.__decorate)([(0,n.Input)({type:Boolean})],c.prototype,"noVariants",void 0),(0,o.__decorate)([(0,n.Input)({type:Object})],c.prototype,"preprocessCode",void 0),(0,o.__decorate)([(0,n.Input)({type:Object})],c.prototype,"codeBuildContext",void 0),c=(0,o.__decorate)([(0,n.Component)({components:[a.TiniBoxComponent,a.TiniIconComponent],theming:{styling:(0,n.stylingWithBases)([a.commonBases,a.headingsBases,a.linkBases,a.textBases,a.codeBases])}})],c)});
//# sourceMappingURL=ant-filled.f3de3f80.js.map
