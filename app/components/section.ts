import {LitElement, html, css, nothing} from 'lit';
import {property, state} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';
import {Subscribe} from '../vendors/store';
import {UseComponents} from '../vendors/components';
import {Theming} from '../vendors/theming';

import coreStyle from '../../styles/bootstrap/base/core';

import mainStore from '../stores/main';
import {ConsumerPlatforms} from '../stores/consts';
import {TabItem} from '../components/tabs';

import {APP_TABS, AppTabs} from '../components/tabs';
import {APP_CODE, AppCode} from '../components/code';

export const APP_SECTION = 'app-section';

@UseComponents({
  [APP_TABS]: AppTabs,
  [APP_CODE]: AppCode,
})
@Theming({
  styling: {
    bootstrap: [coreStyle],
  },
})
export class AppSection extends LitElement {
  static styles = css`
    :host {
      margin-top: 3rem;
    }

    .usage-tabs {
      margin-top: 2rem;
    }
  `;

  @property({type: Boolean}) declare readonly noUsageTabs?: boolean;
  @property({type: Array}) declare readonly codeBuilders?: Record<
    string,
    (code?: string) => string
  >;

  @Subscribe(mainStore) @state() private readonly referPlatform = mainStore.referPlatform;
  private readonly usageTabItems: TabItem[] = [
    {name: ConsumerPlatforms.Lit, icon: 'lit',},
    {name: ConsumerPlatforms.HTML, icon: 'html'},
    {name: ConsumerPlatforms.Vue, icon: 'vue'},
    {name: ConsumerPlatforms.React, icon: 'react'},
    {name: ConsumerPlatforms.Angular, icon: 'angular'},
  ];

  private originalCode?: string;

  connectedCallback() {
    super.connectedCallback();
    const content = this.querySelector('[slot="code"]')
      ?.innerHTML.split('\n')
      .map(item => item.replace(/\s\s+/g, ''))
      .filter(item => !!item)
      .join('\n');
    if (content) {
      const [trimSpaces] = content.split('<');
      this.originalCode = content
        .split('\n')
        .map(line => line.replace(trimSpaces, ''))
        .join('\n');
    }
  }

  protected render() {
    return html`
      <section>
        <slot name="content"></slot>
        <slot name="code"></slot>
        ${this.noUsageTabs || !this.originalCode
          ? nothing
          : html`
              <div class="usage-tabs">
                <app-tabs
                  .tabItems=${this.usageTabItems}
                  .activeName=${this.referPlatform}
                  @change=${
                    ({detail}: CustomEvent<{name: string}>) =>
                      mainStore.commit('referPlatform', detail.name)
                  }
                >
                  ${repeat(
                    this.usageTabItems,
                    item => item.name,
                    ({name}) => html`
                      <div data-tab=${name}>
                        ${name === ConsumerPlatforms.Lit
                          ? html`<app-code
                              .code=${this.originalCode}
                            ></app-code>`
                          : this.codeBuilders?.[name]
                          ? html`<app-code
                              .code=${this.codeBuilders[name](this.originalCode)}
                            ></app-code>`
                          : html`No support for <strong>${name}</strong> yet!`}
                      </div>
                    `
                  )}
                </app-tabs>
              </div>
            `}
      </section>
    `;
  }
}
