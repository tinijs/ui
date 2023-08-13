import {
  Component,
  TiniComponent,
  Input,
  html,
  css,
  nothing,
  repeat,
  stylingWithBases,
} from '@tinijs/core';
import {commonBases} from '@tinijs/ui';
import {IconCodeComponent} from '@tinijs/bootstrap-icons';

import {ConsumerPlatforms} from '../consts/main';
import {
  TINI_ICON,
  VUE_ICON,
  REACT_ICON,
  ANGULAR_ICON,
  SVELTE_ICON,
  HTML_ICON,
} from '../consts/platform-icons';
import {mainStore} from '../stores/main';

import {AppTabsComponent, TabItem} from '../components/tabs';
import {AppCodeComponent} from '../components/code';

type CodeBuilder = (code?: string, context?: any) => string;

export const APP_SECTION = 'app-section';
@Component({
  components: [IconCodeComponent, AppTabsComponent, AppCodeComponent],
  theming: {
    styling: stylingWithBases([commonBases]),
  },
})
export class AppSectionComponent extends TiniComponent {
  static readonly defaultTagName = APP_SECTION;

  private readonly USAGE_TAB_ITEMS: TabItem[] = [
    {name: ConsumerPlatforms.Tini, icon: TINI_ICON},
    {name: ConsumerPlatforms.Vue, icon: VUE_ICON},
    {name: ConsumerPlatforms.React, icon: REACT_ICON},
    {name: ConsumerPlatforms.Angular, icon: ANGULAR_ICON},
    {name: ConsumerPlatforms.Svelte, icon: SVELTE_ICON},
    {name: ConsumerPlatforms.HTML, icon: HTML_ICON},
  ];

  @Input({type: Boolean}) noUsageTabs?: boolean;
  @Input({type: Object}) preprocessCode?: CodeBuilder;
  @Input({type: Object}) codeBuilders?: Record<string, CodeBuilder>;
  @Input({type: Object}) codeBuildContext?: unknown;

  private originalCode?: string;

  onCreate() {
    let content = this.querySelector('[slot="code"]')
      ?.innerHTML.split('\n')
      .map(item => item.trimEnd())
      .filter(item => !!item)
      .join('\n');
    if (content) {
      const [trimSpaces] = content.split('<');
      content = content
        .split('\n')
        .map(line =>
          line
            .replace(trimSpaces, '')
            .replace(/<!--\?lit\$([\s\S]*?)\$-->/g, '')
            .replace(/(<!---->){2}/g, '\n')
            .replace(/<!---->/g, '')
            .replace(/<!-- \/ -->/g, '')
            .replace(/<!--/g, '\n<!--')
        )
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
              <app-tabs
                class="usage-tabs"
                .tabItems=${this.USAGE_TAB_ITEMS}
                @change=${({detail}: CustomEvent<{name: string}>) =>
                  mainStore.commit('referPlatform', detail.name)}
              >
                <div slot="title">
                  <icon-code size="sm"></icon-code>
                  <span>Code</span>
                </div>
                ${repeat(
                  this.USAGE_TAB_ITEMS,
                  item => item.name,
                  ({name}) => html`
                    <div data-tab=${name}>
                      ${name === ConsumerPlatforms.Tini ||
                      !this.codeBuilders?.[name]
                        ? html`<app-code .code=${this.originalCode}></app-code>`
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
            `}
      </section>
    `;
  }

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

      [slot='title'] {
        display: flex;
        align-items: center;

        span {
          margin-left: var(--size-space-0_5x);
        }
      }

      &::part(head) {
        background: var(--color-background);
        border: var(--size-border) solid var(--color-background-shade);
        border-radius: var(--size-radius);
        padding: var(--size-space-0_3x);
        padding-right: var(--size-space);
      }

      &::part(head-expanded) {
        border-bottom-right-radius: none;
        border-bottom-left-radius: none;
      }

      &::part(tablinks) {
        align-items: center;
      }

      &::part(tablink) {
        font-size: var(--size-text-0_8x);
        padding: var(--size-space-0_4x) var(--size-space-0_8x);
        border-radius: var(--size-radius);
        border: var(--size-border) solid transparent;
        opacity: 0.8;
      }

      &::part(tablink):hover {
        background: var(--color-background-tint);
        border-color: var(--color-background-shade);
        opacity: 1;
      }

      &::part(tablink-active) {
        border: var(--size-border) solid var(--color-medium-tint) !important;
        opacity: 1;
      }

      &::part(body) {
        border-color: var(--color-background-shade);
        background: var(--color-background);
      }
    }
  `;
}
