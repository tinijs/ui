import {
  Component,
  TiniComponent,
  Input,
  Reactive,
  classMap,
  html,
  css,
  nothing,
  stylingWithBases,
  queryAssignedElements,
} from '@tinijs/core';
import {commonBases, buttonBases, TiniIconComponent} from '@tinijs/ui';

export interface TabItem {
  name: string;
  icon?: string;
  iconOnly?: boolean;
}

export const APP_TABS = 'app-tabs';
@Component({
  components: [TiniIconComponent],
  theming: {
    styling: stylingWithBases([commonBases, buttonBases]),
  },
})
export class AppTabsComponent extends TiniComponent {
  static readonly defaultTagName = APP_TABS;

  @queryAssignedElements({slot: 'title'})
  private readonly titleSlotElems?: HTMLElement[];
  @Reactive() private hasTitleContent = false;

  @Input({type: Array}) declare tabItems?: TabItem[];
  @Input({type: String}) declare activeName?: string;

  private containerRegistry: Record<string, HTMLElement> = {};

  onCreate() {
    this.querySelectorAll('[data-tab]').forEach((node, i) => {
      const tabItem = this.tabItems?.[i];
      const container = node as HTMLElement;
      if (!tabItem || !container.style) return;
      container.style.display =
        tabItem.name === this.activeName ? 'block' : 'none';
      this.containerRegistry[tabItem.name] = container;
    });
  }

  onChanges() {
    if (this.activeName) {
      this.changeTabContent(this.activeName);
    }
  }

  private changeTabContent(name: string) {
    const container = this.containerRegistry[name];
    if (!container) return;
    Object.values(this.containerRegistry).forEach(
      node => (node.style.display = 'none')
    );
    container.style.display = 'block';
  }

  private changeTab(name: string) {
    this.activeName = name;
    this.dispatchEvent(new CustomEvent('change', {detail: {name}}));
  }

  protected render() {
    return html`
      <div part="head${!this.activeName ? '' : ' head-expanded'}" class="head">
        <div
          part="title"
          class=${classMap({title: true, 'has-content': this.hasTitleContent})}
        >
          <slot
            name="title"
            @slotchange=${() =>
              (this.hasTitleContent = !!this.titleSlotElems?.length)}
          ></slot>
        </div>
        <div part="tablinks" class="tablinks">
          ${this.tabItems?.map(
            ({name, icon, iconOnly}) => html`
              <button
                part="tablink${name !== this.activeName
                  ? ''
                  : ' tablink-active'}"
                class=${classMap({
                  tablink: true,
                  active: name === this.activeName,
                })}
                @click=${() => this.changeTab(name)}
              >
                ${!icon
                  ? nothing
                  : html`<tini-icon src=${icon} size="xs"></tini-icon>`}
                ${iconOnly ? nothing : html`<span>${name}</span>`}
              </button>
            `
          )}
        </div>
      </div>
      <div
        part="body"
        class="${classMap({body: true, expanded: !!this.activeName})}"
      >
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    .head {
      transform: translateY(1px);
      justify-content: space-between;

      &,
      .tablinks {
        display: flex;
        align-items: stretch;
        gap: var(--size-space-0_5x);
      }

      .title {
        display: none;
        font-weight: bold;
        padding: var(--size-space-0_5x) var(--size-space);

        &.has-content {
          display: block;
        }
      }

      .tablink {
        cursor: pointer;
        font-weight: bold;
        display: flex;
        align-items: center;
        border: var(--size-border) solid var(--color-medium-tint);
        border-radius: var(--size-radius) var(--size-radius) 0 0;
        padding: var(--size-space-0_5x) var(--size-space);
        background: var(--color-background);
        font-size: var(--size-text-0_9x);

        &.active {
          background: var(--color-background-tint);
          border-bottom-color: var(--color-background-tint);
        }

        tini-icon {
          width: var(--size-xs-2x);
          height: var(--size-xs-2x);
          margin-right: var(--size-space-0_25x);
        }
      }
    }

    .body {
      display: none;
      border: var(--size-border) solid var(--color-medium-tint);
      border-radius: 0 0 var(--size-radius) var(--size-radius);
      padding: var(--size-space);
      background: var(--color-background-tint);

      &.expanded {
        display: block;
      }
    }
  `;
}
