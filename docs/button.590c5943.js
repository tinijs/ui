!function(){function t(t,i,e,o){Object.defineProperty(t,i,{get:e,set:o,enumerable:!0,configurable:!0})}var i=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire2169;i.register("kgvNV",function(e,o){t(e.exports,"AppPageComponentsButton",function(){return M});var n=i("4tSb9"),s=i("1mUAS"),a=i("j09cH"),r=i("5hZ7T"),c=i("1PhAm"),l=i("d9bek"),d=i("jLKyn"),u=i("h2glW");let M=class extends s.TiniComponent{render(){return(0,s.html)`
      <app-component-page
        titleText="Buttons"
        name="button"
        path="components/button"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Use buttons to trigger actions.</div>

        <app-section class="default">
          <div slot="content">
            <h2>Default</h2>
            <p>
              Default color is <code>medium</code>, default size is
              <code>md</code>.
            </p>
          </div>
          <div slot="code">
            <tini-button>Default</tini-button>
          </div>
        </app-section>

        ${(0,s.BASE_COLORS).map(t=>(0,s.html)`
            <app-section class="colors">
              <div slot="content">
                <h2>Color ${t}</h2>
              </div>
              <div slot="code">
                <tini-button color=${t}>Button ${t}</tini-button>
                <tini-button color=${`${t}-shade`}
                  >Button ${t}-shade</tini-button
                >
                <tini-button color=${`${t}-shade-2`}
                  >Button ${t}-shade-2</tini-button
                >
                <tini-button color=${`${t}-shade-3`}
                  >Button ${t}-shade-3</tini-button
                >
                <tini-button color=${`${t}-shade-4`}
                  >Button ${t}-shade-4</tini-button
                >
                <tini-button color=${`${t}-shade-5`}
                  >Button ${t}-shade-5</tini-button
                >
                <tini-button color=${`${t}-tint`}
                  >Button ${t}-tint</tini-button
                >
                <tini-button color=${`${t}-tint-2`}
                  >Button ${t}-tint-2</tini-button
                >
                <tini-button color=${`${t}-tint-3`}
                  >Button ${t}-tint-3</tini-button
                >
                <tini-button color=${`${t}-tint-4`}
                  >Button ${t}-tint-4</tini-button
                >
                <tini-button color=${`${t}-tint-5`}
                  >Button ${t}-tint-5</tini-button
                >
                <tini-box background=${t}>
                  <tini-button color=${`${t}-contrast`}
                    >Button ${t}-contrast</tini-button
                  >
                </tini-box>
              </div>
            </app-section>
          `)}
        ${(0,s.BASE_GRADIENTS).map(t=>(0,s.html)`
            <app-section class="gradients">
              <div slot="content">
                <h2>${t.replace(/-/g," ")}</h2>
              </div>
              <div slot="code">
                <tini-button color=${t}>Button ${t}</tini-button>
                <tini-button color=${`${t}-shade`}
                  >Button ${t}-shade</tini-button
                >
                <tini-button color=${`${t}-tint`}
                  >Button ${t}-tint</tini-button
                >
                <tini-box background=${t}>
                  <tini-button color=${`${t}-contrast`}
                    >Button ${t}-contrast</tini-button
                  >
                </tini-box>
              </div>
            </app-section>
          `)}

        <app-section class="disabled-colors">
          <div slot="content"><h2>Disabled colors</h2></div>
          <div slot="code">
            <tini-button color="primary" disabled>Primary</tini-button>
            <tini-button color="secondary" disabled>Secondary</tini-button>
            <tini-button color="tertiary" disabled>Tertiary</tini-button>
            <tini-button color="success" disabled>Success</tini-button>
            <tini-button color="danger" disabled>Danger</tini-button>
            <tini-button color="warning" disabled>Warning</tini-button>
            <tini-button color="light" disabled>Light</tini-button>
            <tini-button color="medium" disabled>Medium</tini-button>
            <tini-button color="dark" disabled>Dark</tini-button>
          </div>
        </app-section>

        <app-section class="disabled-gradients">
          <div slot="content"><h2>Disabled gradients</h2></div>
          <div slot="code">
            <tini-button color="gradient-primary" disabled
              >Gradient Primary</tini-button
            >
            <tini-button color="gradient-secondary" disabled
              >Gradient Secondary</tini-button
            >
            <tini-button color="gradient-tertiary" disabled
              >Gradient Tertiary</tini-button
            >
            <tini-button color="gradient-success" disabled
              >Gradient Success</tini-button
            >
            <tini-button color="gradient-danger" disabled
              >Gradient Danger</tini-button
            >
            <tini-button color="gradient-warning" disabled
              >Gradient Warning</tini-button
            >
            <tini-button color="gradient-light" disabled
              >Gradient Light</tini-button
            >
            <tini-button color="gradient-medium" disabled
              >Gradient Medium</tini-button
            >
            <tini-button color="gradient-dark" disabled
              >Gradient Dark</tini-button
            >
          </div>
        </app-section>

        <app-section class="text-colors">
          <div slot="content">
            <h2>Text colors</h2>
            <p>
              You can combine any text colors with any background colors. Below
              are just some examples.
            </p>
          </div>
          <div slot="code">
            <tini-button textColor="primary"
              >Default background / Primary text</tini-button
            >
            <tini-button color="warning" textColor="primary"
              >Warning background / Primary text</tini-button
            >
            <tini-button color="gradient-danger" textColor="primary"
              >Gradient Danger background / Primary text</tini-button
            >
          </div>
        </app-section>

        <app-section class="sizes">
          <div slot="content"><h2>Sizes</h2></div>
          <div slot="code">
            <tini-button size="xxxs" color="primary">XXXS</tini-button>
            <tini-button size="xxs" color="primary">XXS</tini-button>
            <tini-button size="xs" color="primary">XS</tini-button>
            <tini-button size="ss" color="primary">SS</tini-button>
            <tini-button size="sm" color="primary">SM</tini-button>
            <tini-button size="md" color="primary">MD</tini-button>
            <tini-button size="ml" color="primary">ML</tini-button>
            <tini-button size="lg" color="primary">LG</tini-button>
            <tini-button size="sl" color="primary">SL</tini-button>
            <tini-button size="xl" color="primary">XL</tini-button>
            <tini-button size="xxl" color="primary">XXL</tini-button>
            <tini-button size="xxxl" color="primary">XXXL</tini-button>
          </div>
        </app-section>

        <app-section class="icons-and-justifications">
          <div slot="content"><h2>Icons and Justifications</h2></div>
          <div slot="code">
            <tini-button color="primary">
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
              <span>Left</span>
            </tini-button>
            <!-- / -->
            <tini-button color="primary">
              <span>Right</span>
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
            </tini-button>
            <!-- / -->
            <tini-button color="primary">
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
              <span>Left Right</span>
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
            </tini-button>
            <!-- / -->
            <tini-button justify="space-between" color="primary">
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
              <span>Far Left</span>
            </tini-button>
            <!-- / -->
            <tini-button justify="space-between" color="primary">
              <span>Far Right</span>
              <icon-heart-fill
                size="ss"
                color="primary-contrast"
              ></icon-heart-fill>
            </tini-button>
            <!-- / -->
            <tini-button justify="space-between" color="primary">
              <icon-chevron-left
                size="ss"
                color="primary-contrast"
              ></icon-chevron-left>
              <span>Far Left Right</span>
              <icon-chevron-right
                size="ss"
                color="primary-contrast"
              ></icon-chevron-right>
            </tini-button>
            <!-- / -->
            <tini-button justify="space-between" color="primary">
              <span class="content-group">
                <icon-heart-fill
                  size="ss"
                  color="primary-contrast"
                ></icon-heart-fill>
                <span>Content Group</span>
              </span>
              <icon-chevron-right
                size="ss"
                color="primary-contrast"
              ></icon-chevron-right>
            </tini-button>
          </div>
        </app-section>
      </app-component-page>
    `}static #t=(()=>{this.styles=(0,s.css)`app-section [slot=content] h2{text-transform:capitalize}app-section [slot=code]{display:flex;flex-flow:column;gap:var(--size-space)}app-section [slot=code] tini-box{width:325px}.sizes [slot=code]{display:block}.icons-and-justifications [slot=code] tini-button::part(button){width:var(--wide-xs)}`})();constructor(...t){super(...t),this.PART_LIST=[["button","The root part"]]}};M=(0,n.__decorate)([(0,s.Page)({name:"app-page-components-button",components:[r.IconChevronLeftComponent,c.IconChevronRightComponent,l.IconHeartFillComponent,a.TiniBoxComponent,a.TiniButtonComponent,d.AppComponentPageComponent,u.AppSectionComponent],theming:{styling:(0,s.stylingWithBases)([a.commonBases,a.headingsBases,a.linkBases,a.textBases,a.codeBases])}})],M)}),i.register("5hZ7T",function(e,o){t(e.exports,"IconChevronLeftComponent",function(){return l});var n=i("lYoPT"),s=i("4MDiX"),a=i("3IANd"),r=i("1mUAS"),c=function(t,i,e,o){var n,s=arguments.length,a=s<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,i,e,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(s<3?n(a):s>3?n(i,e,a):n(i,e))||a);return s>3&&a&&Object.defineProperty(i,e,a),a};class l extends n.LitElement{static #t=(()=>{this.defaultTagName="icon-chevron-left"})();static #i=(()=>{this.styles=(0,n.css)`:host{--icon-width:var(--size-md-2x);--icon-height:var(--size-md-2x);--icon-color:none;--icon-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgY2xhc3M9ImJpIGJpLWNoZXZyb24tbGVmdCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4zNTQgMS42NDZhLjUuNSAwIDAgMSAwIC43MDhMNS43MDcgOGw1LjY0NyA1LjY0NmEuNS41IDAgMCAxLS43MDguNzA4bC02LTZhLjUuNSAwIDAgMSAwLS43MDhsNi02YS41LjUgMCAwIDEgLjcwOCAweiIvPjwvc3ZnPg==');display:inline-block}i{display:flex;align-items:center;justify-content:center;background-image:var(--icon-image);background-repeat:no-repeat;background-size:contain;background-position:center;width:var(--icon-width);height:var(--icon-height)}.recolor{background:var(--icon-color);-webkit-mask-image:var(--icon-image);-webkit-mask-size:var(--icon-width) var(--icon-height);-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;mask-image:var(--icon-image);mask-size:var(--icon-width) var(--icon-height);mask-repeat:no-repeat;mask-position:center}${(0,r.generateColorVaries)(({name:t,color:i})=>`.${t} {--icon-color: ${i};}`)}${(0,r.generateGradientVaries)(({name:t,gradient:i})=>`.gradient-${t} {--icon-color: ${i};}`)}${(0,r.generateSizeVaries)(t=>`.${t} {--icon-width: var(--size-${t}-2x);--icon-height: var(--size-${t}-2x);}`)}
  `})();render(){return(0,n.html)`<i part="icon" class=${(0,a.classMap)({recolor:!!this.color,[this.color]:!!this.color,[this.size]:!!this.size})}></i>`}}c([(0,s.property)({type:String})],l.prototype,"size",void 0),c([(0,s.property)({type:String})],l.prototype,"color",void 0)}),i.register("1PhAm",function(e,o){t(e.exports,"IconChevronRightComponent",function(){return l});var n=i("lYoPT"),s=i("4MDiX"),a=i("3IANd"),r=i("1mUAS"),c=function(t,i,e,o){var n,s=arguments.length,a=s<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,i,e,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(s<3?n(a):s>3?n(i,e,a):n(i,e))||a);return s>3&&a&&Object.defineProperty(i,e,a),a};class l extends n.LitElement{static #t=(()=>{this.defaultTagName="icon-chevron-right"})();static #i=(()=>{this.styles=(0,n.css)`:host{--icon-width:var(--size-md-2x);--icon-height:var(--size-md-2x);--icon-color:none;--icon-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgY2xhc3M9ImJpIGJpLWNoZXZyb24tcmlnaHQiIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NDYgMS42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEgMCAuNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTAuMjkzIDggNC42NDYgMi4zNTRhLjUuNSAwIDAgMSAwLS43MDh6Ii8+PC9zdmc+');display:inline-block}i{display:flex;align-items:center;justify-content:center;background-image:var(--icon-image);background-repeat:no-repeat;background-size:contain;background-position:center;width:var(--icon-width);height:var(--icon-height)}.recolor{background:var(--icon-color);-webkit-mask-image:var(--icon-image);-webkit-mask-size:var(--icon-width) var(--icon-height);-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;mask-image:var(--icon-image);mask-size:var(--icon-width) var(--icon-height);mask-repeat:no-repeat;mask-position:center}${(0,r.generateColorVaries)(({name:t,color:i})=>`.${t} {--icon-color: ${i};}`)}${(0,r.generateGradientVaries)(({name:t,gradient:i})=>`.gradient-${t} {--icon-color: ${i};}`)}${(0,r.generateSizeVaries)(t=>`.${t} {--icon-width: var(--size-${t}-2x);--icon-height: var(--size-${t}-2x);}`)}
  `})();render(){return(0,n.html)`<i part="icon" class=${(0,a.classMap)({recolor:!!this.color,[this.color]:!!this.color,[this.size]:!!this.size})}></i>`}}c([(0,s.property)({type:String})],l.prototype,"size",void 0),c([(0,s.property)({type:String})],l.prototype,"color",void 0)}),i.register("d9bek",function(e,o){t(e.exports,"IconHeartFillComponent",function(){return l});var n=i("lYoPT"),s=i("4MDiX"),a=i("3IANd"),r=i("1mUAS"),c=function(t,i,e,o){var n,s=arguments.length,a=s<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,i,e,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(s<3?n(a):s>3?n(i,e,a):n(i,e))||a);return s>3&&a&&Object.defineProperty(i,e,a),a};class l extends n.LitElement{static #t=(()=>{this.defaultTagName="icon-heart-fill"})();static #i=(()=>{this.styles=(0,n.css)`:host{--icon-width:var(--size-md-2x);--icon-height:var(--size-md-2x);--icon-color:none;--icon-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgY2xhc3M9ImJpIGJpLWhlYXJ0LWZpbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAxLjMxNEMxMi40MzgtMy4yNDggMjMuNTM0IDQuNzM1IDggMTUtNy41MzQgNC43MzYgMy41NjItMy4yNDggOCAxLjMxNHoiLz48L3N2Zz4=');display:inline-block}i{display:flex;align-items:center;justify-content:center;background-image:var(--icon-image);background-repeat:no-repeat;background-size:contain;background-position:center;width:var(--icon-width);height:var(--icon-height)}.recolor{background:var(--icon-color);-webkit-mask-image:var(--icon-image);-webkit-mask-size:var(--icon-width) var(--icon-height);-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;mask-image:var(--icon-image);mask-size:var(--icon-width) var(--icon-height);mask-repeat:no-repeat;mask-position:center}${(0,r.generateColorVaries)(({name:t,color:i})=>`.${t} {--icon-color: ${i};}`)}${(0,r.generateGradientVaries)(({name:t,gradient:i})=>`.gradient-${t} {--icon-color: ${i};}`)}${(0,r.generateSizeVaries)(t=>`.${t} {--icon-width: var(--size-${t}-2x);--icon-height: var(--size-${t}-2x);}`)}
  `})();render(){return(0,n.html)`<i part="icon" class=${(0,a.classMap)({recolor:!!this.color,[this.color]:!!this.color,[this.size]:!!this.size})}></i>`}}c([(0,s.property)({type:String})],l.prototype,"size",void 0),c([(0,s.property)({type:String})],l.prototype,"color",void 0)}),i.register("h2glW",function(e,o){t(e.exports,"AppSectionComponent",function(){return p});var n=i("4tSb9"),s=i("1mUAS"),a=i("j09cH"),r=i("8108p"),c=i("5kxRk"),l=i("5hSsq"),d=i("laxZI"),u=i("2de06"),M=i("10mzZ");let p=class extends s.TiniComponent{static #t=(()=>{this.defaultTagName="app-section"})();onCreate(){let t=this.querySelector('[slot="code"]')?.innerHTML.split("\n").map(t=>t.trimEnd()).filter(t=>!!t).join("\n");if(t){let[i]=t.split("<");t=t.split("\n").map(t=>t.replace(i,"").replace(/<!--\?lit\$([\s\S]*?)\$-->/g,"").replace(/(<!---->){2}/g,"\n").replace(/<!---->/g,"").replace(/<!-- \/ -->/g,"").replace(/<!--/g,"\n<!--")).join("\n"),this.originalCode=this.preprocessCode?this.preprocessCode(t,this.codeBuildContext):t}}render(){return(0,s.html)`
      <section>
        <slot name="content"></slot>
        <slot name="code"></slot>
        ${this.noUsageTabs||!this.originalCode?s.nothing:(0,s.html)`
              <app-tabs
                class="usage-tabs"
                .tabItems=${this.USAGE_TAB_ITEMS}
                @change=${({detail:t})=>(0,d.mainStore).commit("referPlatform",t.name)}
              >
                <div slot="title">
                  <icon-code size="sm"></icon-code>
                  <span>Code</span>
                </div>
                ${(0,s.repeat)(this.USAGE_TAB_ITEMS,t=>t.name,({name:t})=>(0,s.html)`
                    <div data-tab=${t}>
                      ${t!==c.ConsumerPlatforms.Tini&&this.codeBuilders?.[t]?(0,s.html)`<app-code
                            .code=${this.codeBuilders[t](this.originalCode,this.codeBuildContext)}
                          ></app-code>`:(0,s.html)`<app-code .code=${this.originalCode}></app-code>`}
                    </div>
                  `)}
              </app-tabs>
            `}
      </section>
    `}static #i=(()=>{this.styles=(0,s.css)`:host{margin-top:3rem}::slotted([slot=code]){padding:1rem;border-radius:var(--size-radius);background:var(--color-background-tint)}.usage-tabs{margin-top:2rem}.usage-tabs [slot=title]{display:flex;align-items:center}.usage-tabs [slot=title] span{margin-left:var(--size-space-0_5x)}.usage-tabs::part(head){background:var(--color-background);border:var(--size-border) solid var(--color-background-shade);border-radius:var(--size-radius);padding:var(--size-space-0_3x);padding-right:var(--size-space)}.usage-tabs::part(head-expanded){border-bottom-right-radius:none;border-bottom-left-radius:none}.usage-tabs::part(tablinks){align-items:center}.usage-tabs::part(tablink){font-size:var(--size-text-0_8x);padding:var(--size-space-0_4x) var(--size-space-0_8x);border-radius:var(--size-radius);border:var(--size-border) solid rgba(0,0,0,0);opacity:.8}.usage-tabs::part(tablink):hover{background:var(--color-background-tint);border-color:var(--color-background-shade);opacity:1}.usage-tabs::part(tablink-active){border:var(--size-border) solid var(--color-medium-tint) !important;opacity:1}.usage-tabs::part(body){border-color:var(--color-background-shade);background:var(--color-background)}`})();constructor(...t){super(...t),this.USAGE_TAB_ITEMS=[{name:c.ConsumerPlatforms.Tini,icon:l.TINI_ICON},{name:c.ConsumerPlatforms.Vue,icon:l.VUE_ICON},{name:c.ConsumerPlatforms.React,icon:l.REACT_ICON},{name:c.ConsumerPlatforms.Angular,icon:l.ANGULAR_ICON},{name:c.ConsumerPlatforms.Svelte,icon:l.SVELTE_ICON},{name:c.ConsumerPlatforms.HTML,icon:l.HTML_ICON}]}};(0,n.__decorate)([(0,s.Input)({type:Boolean})],p.prototype,"noUsageTabs",void 0),(0,n.__decorate)([(0,s.Input)({type:Object})],p.prototype,"preprocessCode",void 0),(0,n.__decorate)([(0,s.Input)({type:Object})],p.prototype,"codeBuilders",void 0),(0,n.__decorate)([(0,s.Input)({type:Object})],p.prototype,"codeBuildContext",void 0),p=(0,n.__decorate)([(0,s.Component)({components:[r.IconCodeComponent,u.AppTabsComponent,M.AppCodeComponent],theming:{styling:(0,s.stylingWithBases)([a.commonBases])}})],p)}),i.register("5hSsq",function(e,o){t(e.exports,"TINI_ICON",function(){return n}),t(e.exports,"VUE_ICON",function(){return s}),t(e.exports,"REACT_ICON",function(){return a}),t(e.exports,"ANGULAR_ICON",function(){return r}),t(e.exports,"SVELTE_ICON",function(){return c}),t(e.exports,"HTML_ICON",function(){return l});let n=new URL(i("4qcut")).toString(),s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwb2x5Z29uIHBvaW50cz0iMS4wMjYsMjMuNTY3IDEuMDI1LDIzLjU1OSAxLjAyNCwyMy41NTYiLz48cGF0aCBmaWxsPSIjNDFCODgzIiBkPSJNMCwxLjY1bDEyLDIwLjdsMTItMjAuN2gtNC44TDEyLDE0LjA3TDQuNzQsMS42NUgweiIvPjxwYXRoIGZpbGw9IiMzNTQ5NUUiIGQ9Ik00Ljc0LDEuNjVMMTIsMTQuMTNsNy4yLTEyLjQ4aC00LjQ0TDEyLDYuNDVsLTIuODItNC44SDQuNzR6Ii8+PC9zdmc+",a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGZpbGw9IiM4MGRlZWEiIGQ9Ik0yNCwzNEMxMS4xLDM0LDEsMjkuNiwxLDI0YzAtNS42LDEwLjEtMTAsMjMtMTBjMTIuOSwwLDIzLDQuNCwyMywxMEM0NywyOS42LDM2LjksMzQsMjQsMzR6IE0yNCwxNgljLTEyLjYsMC0yMSw0LjEtMjEsOGMwLDMuOSw4LjQsOCwyMSw4czIxLTQuMSwyMS04QzQ1LDIwLjEsMzYuNiwxNiwyNCwxNnoiLz48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMTUuMSw0NC42Yy0xLDAtMS44LTAuMi0yLjYtMC43QzcuNiw0MS4xLDguOSwzMC4yLDE1LjMsMTlsMCwwYzMtNS4yLDYuNy05LjYsMTAuMy0xMi40YzMuOS0zLDcuNC0zLjksOS44LTIuNQljMi41LDEuNCwzLjQsNC45LDIuOCw5LjhjLTAuNiw0LjYtMi42LDEwLTUuNiwxNS4yYy0zLDUuMi02LjcsOS42LTEwLjMsMTIuNEMxOS43LDQzLjUsMTcuMiw0NC42LDE1LjEsNDQuNnogTTMyLjksNS40CWMtMS42LDAtMy43LDAuOS02LDIuN2MtMy40LDIuNy02LjksNi45LTkuOCwxMS45bDAsMGMtNi4zLDEwLjktNi45LDIwLjMtMy42LDIyLjJjMS43LDEsNC41LDAuMSw3LjYtMi4zYzMuNC0yLjcsNi45LTYuOSw5LjgtMTEuOQljMi45LTUsNC44LTEwLjEsNS40LTE0LjRjMC41LTQtMC4xLTYuOC0xLjgtNy44QzM0LDUuNiwzMy41LDUuNCwzMi45LDUuNHoiLz48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMzMsNDQuNmMtNSwwLTEyLjItNi4xLTE3LjYtMTUuNkM4LjksMTcuOCw3LjYsNi45LDEyLjUsNC4xbDAsMEMxNy40LDEuMywyNi4yLDcuOCwzMi43LDE5CWMzLDUuMiw1LDEwLjYsNS42LDE1LjJjMC43LDQuOS0wLjMsOC4zLTIuOCw5LjhDMzQuNyw0NC40LDMzLjksNDQuNiwzMyw0NC42eiBNMTMuNSw1LjhjLTMuMywxLjktMi43LDExLjMsMy42LDIyLjIJYzYuMywxMC45LDE0LjEsMTYuMSwxNy40LDE0LjJjMS43LTEsMi4zLTMuOCwxLjgtNy44Yy0wLjYtNC4zLTIuNS05LjQtNS40LTE0LjRDMjQuNiw5LjEsMTYuOCwzLjksMTMuNSw1LjhMMTMuNSw1Ljh6Ii8+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iNCIgZmlsbD0iIzgwZGVlYSIvPjwvc3ZnPg==",r="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGZpbGw9IiNGNDQzMzYiIGQ9Ik0yMS4zMTYsMTguNzU1TDIzLDMuOTg2TDEyLDBMMSwzLjk4NmwxLjY4NCwxNC43NjlMMTIsMjRMMjEuMzE2LDE4Ljc1NXogTTcuNjkyLDE4LjMxMUg1LjExNEwxMiwyLjY1MQlsNi44OTIsMTUuNjU5aC0yLjU3M2wtMS4zODctMy41MDRIOS4wNzlMNy42OTIsMTguMzExeiIvPjxwb2x5Z29uIGZpbGw9IiNGNDQzMzYiIHBvaW50cz0iOS45ODMsMTIuNjQ4IDE0LjAxNywxMi42NDggMTIsNy43NDEiLz48L3N2Zz4=",c="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIzNC4yMjggMjkuMjY3IDE0Ny42NjcgMTc3LjQwOCIgd2lkdGg9IjE0Ny42NjciIGhlaWdodD0iMTc3LjQwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8c3ltYm9sIGlkPSJhIiB2aWV3Qm94PSIwIDAgOTMuMjI0IDExMiI+CiAgICAgIDxwYXRoIGNsYXNzPSJhIiBkPSJNODcuMjY5LDE0LjgxOUM3Ni44NjktLjA2Niw1Ni4zMjgtNC40NzgsNDEuNDc3LDQuOTg0TDE1LjQsMjEuNjA4QTI5LjkyMSwyOS45MjEsMCwwLDAsMS44NzYsNDEuNjUxLDMxLjUxNCwzMS41MTQsMCwwLDAsNC45ODQsNjEuODgyLDMwLjAwNiwzMC4wMDYsMCwwLDAsLjUwNyw3My4wNjUsMzEuODkyLDMxLjg5MiwwLDAsMCw1Ljk1NSw5Ny4xODFjMTAuNCwxNC44ODcsMzAuOTQyLDE5LjMsNDUuNzkxLDkuODM1TDc3LjgyOSw5MC4zOTJBMjkuOTE1LDI5LjkxNSwwLDAsMCw5MS4zNDcsNzAuMzQ5YTMxLjUyMiwzMS41MjIsMCwwLDAtMy4xLTIwLjIzMiwzMC4wMTksMzAuMDE5LDAsMCwwLDQuNDc0LTExLjE4MiwzMS44NzgsMzEuODc4LDAsMCwwLTUuNDQ3LTI0LjExNiIvPgogICAgICA8cGF0aCBjbGFzcz0iYiIgZD0iTTM4LjkyOSw5OC41ODJhMjAuNzIsMjAuNzIsMCwwLDEtMjIuMjM3LTguMjQzLDE5LjE3NiwxOS4xNzYsMCwwLDEtMy4yNzYtMTQuNSwxOC4xNDMsMTguMTQzLDAsMCwxLC42MjMtMi40MzVsLjQ5MS0xLjUsMS4zMzcuOTgxYTMzLjYzMywzMy42MzMsMCwwLDAsMTAuMiw1LjFsLjk2OS4yOTQtLjA4OS45NjhBNS44NDQsNS44NDQsMCwwLDAsMjgsODMuMTIyYTYuMjQsNi4yNCwwLDAsMCw2LjcsMi40ODUsNS43NDgsNS43NDgsMCwwLDAsMS42LS43TDYyLjM4Miw2OC4yODFhNS40Myw1LjQzLDAsMCwwLDIuNDUxLTMuNjMxLDUuNzk0LDUuNzk0LDAsMCwwLS45ODgtNC4zNzEsNi4yNDQsNi4yNDQsMCwwLDAtNi43LTIuNDg3LDUuNzU1LDUuNzU1LDAsMCwwLTEuNi43bC05Ljk1Myw2LjM0NWExOS4wNiwxOS4wNiwwLDAsMS01LjMsMi4zMjYsMjAuNzE5LDIwLjcxOSwwLDAsMS0yMi4yMzctOC4yNDMsMTkuMTcxLDE5LjE3MSwwLDAsMS0zLjI3Ny0xNC41QTE3Ljk5MiwxNy45OTIsMCwwLDEsMjIuOTE1LDMyLjM3TDQ5LDE1Ljc0N2ExOS4wMywxOS4wMywwLDAsMSw1LjMtMi4zMjksMjAuNzIsMjAuNzIsMCwwLDEsMjIuMjM3LDguMjQzLDE5LjE3NiwxOS4xNzYsMCwwLDEsMy4yNzcsMTQuNSwxOC40NTMsMTguNDUzLDAsMCwxLS42MjQsMi40MzVsLS40OTEsMS41LTEuMzM2LS45NzlhMzMuNjE2LDMzLjYxNiwwLDAsMC0xMC4yLTUuMWwtLjk3LS4yOTQuMDktLjk2OGE1Ljg1OSw1Ljg1OSwwLDAsMC0xLjA1Mi0zLjg3OCw2LjI0MSw2LjI0MSwwLDAsMC02LjctMi40ODUsNS43NDgsNS43NDgsMCwwLDAtMS42LjdMMzAuODQyLDQzLjcxOWE1LjQyMSw1LjQyMSwwLDAsMC0yLjQ0OSwzLjYzLDUuNzksNS43OSwwLDAsMCwuOTg2LDQuMzcyLDYuMjQ1LDYuMjQ1LDAsMCwwLDYuNywyLjQ4Nyw1Ljc3Myw1Ljc3MywwLDAsMCwxLjYtLjdsOS45NTItNi4zNDJhMTguOTc4LDE4Ljk3OCwwLDAsMSw1LjMtMi4zMjgsMjAuNzE4LDIwLjcxOCwwLDAsMSwyMi4yMzYsOC4yNDMsMTkuMTcxLDE5LjE3MSwwLDAsMSwzLjI3NywxNC41LDE4LDE4LDAsMCwxLTguMTMsMTIuMDU0TDQ0LjIyOSw5Ni4yNTNhMTkuMDE3LDE5LjAxNywwLDAsMS01LjMsMi4zMjkiLz4KICAgIDwvc3ltYm9sPgogICAgPHN0eWxlPi5he2ZpbGw6I2ZmM2UwMDt9LmJ7ZmlsbDojZmZmO30uY3tmaWxsOiMxMjczZmY7fS5ke2ZpbGw6I2ZmZDgxNTt9PC9zdHlsZT4KICA8L2RlZnM+CiAgPHVzZSB3aWR0aD0iOTMuMjI0IiBoZWlnaHQ9IjExMiIgdHJhbnNmb3JtPSJtYXRyaXgoMS41ODQsIDAsIDAsIDEuNTg0LCAzNC4yMjgwMDEsIDI5LjI2NykiIHhsaW5rOmhyZWY9IiNhIi8+Cjwvc3ZnPg==",l="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGZpbGw9IiNFNjUxMDAiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiIvPjxwYXRoIGZpbGw9IiNGRjZEMDAiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQsMjV2LTRoOC42bC0wLjcsMTEuNUwyNCwzNS4xdi00LjJsNC4xLTEuNGwwLjMtNC41SDI0eiBNMzIuOSwxN2wwLjMtNEgyNHY0SDMyLjl6Ii8+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDMwLjl2NC4ybC03LjktMi42TDE1LjcsMjdoNGwwLjIsMi41TDI0LDMwLjl6IE0xOS4xLDE3SDI0di00aC05LjFsMC43LDEySDI0di00aC00LjZMMTkuMSwxN3oiLz48L3N2Zz4="}),i.register("4qcut",function(t,e){t.exports=i("aNJCr").getBundleURL("7Cy2v")+i("iE7OH").resolve("67bfj")}),i.register("2de06",function(e,o){t(e.exports,"AppTabsComponent",function(){return r});var n=i("4tSb9"),s=i("1mUAS"),a=i("j09cH");let r=class extends s.TiniComponent{static #t=(()=>{this.defaultTagName="app-tabs"})();onCreate(){this.querySelectorAll("[data-tab]").forEach((t,i)=>{let e=this.tabItems?.[i];e&&t.style&&(t.style.display=e.name===this.activeName?"block":"none",this.containerRegistry[e.name]=t)})}onChanges(){this.activeName&&this.changeTabContent(this.activeName)}changeTabContent(t){let i=this.containerRegistry[t];i&&(Object.values(this.containerRegistry).forEach(t=>t.style.display="none"),i.style.display="block")}changeTab(t){this.activeName=t,this.dispatchEvent(new CustomEvent("change",{detail:{name:t}}))}render(){return(0,s.html)`
      <div part="head${this.activeName?" head-expanded":""}" class="head">
        <div
          part="title"
          class=${(0,s.classMap)({title:!0,"has-content":this.hasTitleContent})}
        >
          <slot
            name="title"
            @slotchange=${()=>this.hasTitleContent=!!this.titleSlotElems?.length}
          ></slot>
        </div>
        <div part="tablinks" class="tablinks">
          ${this.tabItems?.map(({name:t,icon:i,iconOnly:e})=>s.html`
              <button
                part="tablink${t!==this.activeName?"":" tablink-active"}"
                class=${s.classMap({tablink:!0,active:t===this.activeName})}
                @click=${()=>this.changeTab(t)}
              >
                ${i?s.html`<tini-icon src=${i} size="xs"></tini-icon>`:s.nothing}
                ${e?s.nothing:s.html`<span>${t}</span>`}
              </button>
            `)}
        </div>
      </div>
      <div
        part="body"
        class="${(0,s.classMap)({body:!0,expanded:!!this.activeName})}"
      >
        <slot></slot>
      </div>
    `}static #i=(()=>{this.styles=(0,s.css)`.head{transform:translateY(var(--size-border));justify-content:space-between}.head,.head .tablinks{display:flex;align-items:stretch;gap:var(--size-space-0_5x)}.head .title{display:none;font-weight:bold;padding:var(--size-space-0_5x) var(--size-space)}.head .title.has-content{display:block}.head .tablink{cursor:pointer;font-weight:bold;display:flex;align-items:center;border:var(--size-border) solid var(--color-medium-tint);border-radius:var(--size-radius) var(--size-radius) 0 0;padding:var(--size-space-0_5x) var(--size-space);background:var(--color-background);font-size:var(--size-text-0_9x)}.head .tablink.active{background:var(--color-background-tint);border-bottom-color:var(--color-background-tint)}.head .tablink tini-icon{width:var(--size-xs-2x);height:var(--size-xs-2x);margin-right:var(--size-space-0_25x)}.body{display:none;border:var(--size-border) solid var(--color-medium-tint);border-radius:0 0 var(--size-radius) var(--size-radius);padding:var(--size-space);background:var(--color-background-tint)}.body.expanded{display:block}`})();constructor(...t){super(...t),this.hasTitleContent=!1,this.containerRegistry={}}};(0,n.__decorate)([(0,s.queryAssignedElements)({slot:"title"})],r.prototype,"titleSlotElems",void 0),(0,n.__decorate)([(0,s.Reactive)()],r.prototype,"hasTitleContent",void 0),(0,n.__decorate)([(0,s.Input)({type:Array})],r.prototype,"tabItems",void 0),(0,n.__decorate)([(0,s.Input)({type:String})],r.prototype,"activeName",void 0),r=(0,n.__decorate)([(0,s.Component)({components:[a.TiniIconComponent],theming:{styling:(0,s.stylingWithBases)([a.commonBases,a.buttonBases])}})],r)})}();
//# sourceMappingURL=button.590c5943.js.map
