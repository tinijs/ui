import {LitElement, html, css, nothing} from 'lit';
import {property, state} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat';
import {Subscribe} from '../vendors/store';
import {UseComponents} from '../vendors/components';
import {Theming} from '../vendors/theming';
import coreStyle from '../../styles/bootstrap/base/core';
import headingsStyle from '../../styles/bootstrap/base/headings';
import linkStyle from '../../styles/bootstrap/base/link';
import textStyle from '../../styles/bootstrap/base/text';
import codeStyle from '../../styles/bootstrap/base/code';

import {
  GITHUB_ICONS_REPO_URL,
  GITHUB_ICONS_RAW_URL,
} from '../configs/development';
import {get} from '../services/http';
import {IconsImportMethods} from '../stores/consts';
import mainStore from '../stores/main';

import {APP_SECTION, AppSection} from '../components/section';
import {APP_TABS, AppTabs, TabItem} from '../components/tabs';
import {APP_CODE, AppCode} from '../components/code';

export const APP_PAGE_ICON = 'app-page-icon';

@UseComponents({
  [APP_SECTION]: AppSection,
  [APP_TABS]: AppTabs,
  [APP_CODE]: AppCode,
})
@Theming({
  styling: {
    bootstrap: [coreStyle, headingsStyle, linkStyle, textStyle, codeStyle],
  },
})
export class AppPageIcon extends LitElement {
  static styles = css`
    :host {
      --icon-size: 3.5rem;
    }

    .icons {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, var(--icon-size));
      gap: .75rem;
    }

    .icon {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--icon-size);
      height: var(--icon-size);
      border: 1px solid #eee;
      border-radius: 5px;
    }

    .icon:hover {
      border-color: #ccc;
      background-color: #f5f5f5;
    }

    .icon img {
      width: calc(var(--icon-size) - 1.5rem);
      height: calc(var(--icon-size) - 1.5rem);
    }
  `;

  @property({type: String}) declare readonly name: string;
  @property({type: String}) declare readonly titleText?: string;

  @state() private data?: {version: string, items: Array<[string, string]>};
  @Subscribe(mainStore) @state() private readonly referIconsImport = mainStore.referIconsImport;

  private importTabItems: TabItem[] = [
    { name: IconsImportMethods.TiniJS },
    { name: IconsImportMethods.Others },
    { name: IconsImportMethods.Standalone },
    { name: IconsImportMethods.DataURI },
    { name: IconsImportMethods.Code },
  ];

  private get installCode() {
    return `npm i @tinijs/${this.name}-icons`;
  }

  private get indexJsonPath() {
    return `https://unpkg.com/@tinijs/${this.name}-icons@latest/index.json`;
  }

  private get changelogsUrl() {
    return `${GITHUB_ICONS_REPO_URL}/blob/main/changelogs/@tinijs/${this.name}-icons`;
  }

  private url([fileName, base64Content]: [string, string]) {
    const fileExt = fileName.split('.').pop() as string;
    const mimeType = {
      svg: 'image/svg+xml',
      webp: 'image/webp',
      png: 'image/png',
      jpg: 'image/jpeg',
    }[fileExt];
    return `data:${mimeType};base64,${base64Content}`;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.data = await get(this.indexJsonPath);
  }

  protected render() {
    return html`
      <div class="head">
        <h1 class="title">${this.titleText || 'Icons'}</h1>
        <ul>
          <li>
            Version: <code><strong>${this.data?.version || '?'}</strong></code>
          </li>
          <li>
            <a href=${this.changelogsUrl} target="_blank">Changelogs</a>
          </li>
          <li>
            <a href=${GITHUB_ICONS_REPO_URL} target="_blank">Github</a>
          </li>
        </ul>
      </div>
      <div class="body">

        <div class="install">
          <h2>Install</h2>
          <app-code .code=${this.installCode}></app-code>
        </div>

        <div class="filter">
          <input type="search" placeholder="TODO: filter ..." />
        </div>

        <div class="content">
          ${!this.data ? nothing : html`
            <ul class="icons">
              ${repeat(this.data.items, item => item, def => html`
                <li class="icon" title=${def[0]}>
                  <img src=${this.url(def)} alt=${def[0]} />
                </li>
              `)}
            </ul>
          `}
        </div>

      </div>
    `;
  }
}
