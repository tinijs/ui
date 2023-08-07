import {
  Component,
  TiniComponent,
  Input,
  Reactive,
  html,
  css,
  nothing,
  repeat,
} from '@tinijs/core';
import {Subscribe} from '@tinijs/store';
import {commonBases} from '@tinijs/ui/bases';

import {ConsumerPlatforms} from '../consts/main';
import {mainStore} from '../stores/main';

import {AppTabsComponent, TabItem} from '../components/tabs';
import {AppCodeComponent} from '../components/code';

type CodeBuilder = (code?: string, context?: any) => string;

export const APP_SECTION = 'app-section';
@Component({
  components: [
    AppTabsComponent,
    AppCodeComponent,
  ],
  theming: {
    styling: {
      bootstrap: [commonBases.bootstrap],
      material: [commonBases.material],
    },
  },
})
export class AppSectionComponent extends TiniComponent {
  static readonly defaultTagName = APP_SECTION;

  static styles = css`
    :host {
      margin-top: 3rem;
    }

    ::slotted([slot='code']) {
      padding: 1rem;
      border-radius: var(--size-radius);
      background: var(--color-background-tint);
    }

    .usage-tabs {
      margin-top: 2rem;
    }
  `;

  private readonly USAGE_TAB_ITEMS: TabItem[] = [
    {name: ConsumerPlatforms.Tini, icon: 'tini'},
    {name: ConsumerPlatforms.Vue, icon: 'vue'},
    {name: ConsumerPlatforms.React, icon: 'react'},
    {name: ConsumerPlatforms.Angular, icon: 'angular'},
    {name: ConsumerPlatforms.Svelte, icon: 'svelte'},
    {name: ConsumerPlatforms.HTML, icon: 'html'},
  ];

  @Input({type: Boolean}) declare noUsageTabs?: boolean;
  @Input({type: Object}) declare preprocessCode?: CodeBuilder;
  @Input({type: Object}) declare codeBuilders?: Record<string, CodeBuilder>;
  @Input({type: Object}) declare codeBuildContext?: unknown;

  @Subscribe(mainStore) @Reactive() private readonly referPlatform =
    mainStore.referPlatform;

  private originalCode?: string;

  onCreate() {
    let content = this.querySelector('[slot="code"]')
      ?.innerHTML.split('\n')
      .map(item => item.replace(/\s\s+/g, ''))
      .filter(item => !!item)
      .join('\n');
    if (content) {
      const [trimSpaces] = content.split('<');
      content = content
        .split('\n')
        .map(line => line.replace(trimSpaces, ''))
        .join('\n');
      this.originalCode = !this.preprocessCode
        ? content
        : this.preprocessCode(content, this.codeBuildContext);
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
                  .tabItems=${this.USAGE_TAB_ITEMS}
                  .activeName=${this.referPlatform}
                  @change=${({detail}: CustomEvent<{name: string}>) =>
                    mainStore.commit('referPlatform', detail.name)}
                >
                  ${repeat(
                    this.USAGE_TAB_ITEMS,
                    item => item.name,
                    ({name}) => html`
                      <div data-tab=${name}>
                        ${name === ConsumerPlatforms.Tini ||
                        !this.codeBuilders?.[name]
                          ? html`<app-code
                              .code=${this.originalCode}
                            ></app-code>`
                          : html`<app-code
                              .code=${this.codeBuilders[name](
                                this.originalCode,
                                this.codeBuildContext
                              )}
                            ></app-code>`}
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
