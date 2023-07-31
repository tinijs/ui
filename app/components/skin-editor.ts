import {Component, TiniComponent, Reactive, html, css, stylingWithBaseStyles, changeTheme} from '@tinijs/core';
import {ICON_ARROW_CLOCKWISE, IconArrowClockwiseComponent} from '@tinijs/bootstrap-icons/arrow-clockwise.js';
import {commonStyles} from '../../dev/styles';

import {APP_GRADIENT_PICKER, AppGradientPickerComponent} from './gradient-picker';

import {GITHUB_RAW_URL} from '../consts/main';
import {SOULS, FONTS} from '../consts/theme';
import {
  extractCSSVariables,
  VariableDef,
} from '../helpers/source';

export const APP_SKIN_EDITOR = 'app-skin-editor';

@Component({
  components: {
    [ICON_ARROW_CLOCKWISE]: IconArrowClockwiseComponent,
    [APP_GRADIENT_PICKER]: AppGradientPickerComponent,
  },
  theming: {
    styling: stylingWithBaseStyles([commonStyles]),
  }
})
export class AppSkinEditorComponent extends TiniComponent {
  static styles = css`
    :host {
      --head-height: 50px;      
    }

    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--head-height);
      padding: calc(var(--size-space) * .75);
      border-bottom: var(--size-border) solid var(--color-background-shade);
    }

    .head button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-background);
      border: none;
      font-size: var(--size-text);
    }

    .body {
      height: calc(100vh - var(--head-height));
      height: calc(100dvh - var(--head-height));
      overflow-x: hidden;
      overflow-y: scroll
    }
    
    section strong {
      display: block;
      padding: calc(var(--size-space) * .5);
      border: var(--size-border) solid var(--color-background-shade);
      border-left: none;
      border-right: none;
      text-align: center;
    }

    section .content {
      padding: calc(var(--size-space) * .5);
    }
  `;

  @Reactive() private skinVariables: VariableDef[] = [];
  private groupedSkinVariables: Array<{ name: string, items: VariableDef[] }> = [];

  get currentTheme() {
    const {theme} = document.body.dataset;
    if (!theme) throw new Error('Invalid theme setup.');
    const [soul, skin] = theme.split('/');
    return {soul, skin};
  }

  async onCreate() {
    await this.fetchSkinVariables();
  }

  async onChanges() {
    this.groupedSkinVariables = this.skinVariables
      .reduce((result, item) => {
        if (item.key.startsWith('--font-')) {
          result[0].items.push(item);
        } else if (item.key.startsWith('--size-')) {
          result[1].items.push(item);
        } else if (item.key.startsWith('--wide-')) {
          result[2].items.push(item);
        } else if (item.key.startsWith('--color-')) {
          if (
            !~item.key.indexOf('-background') &&
            !~item.key.indexOf('-foreground') &&
            !~item.key.indexOf('-contrast') &&
            !~item.key.indexOf('-rgb') &&
            !~item.key.indexOf('-shade') &&
            !~item.key.indexOf('-tint')
          ) {
            result[3].items.push(item);
          }
        } else if (item.key.startsWith('--gradient-')) {
          result[4].items.push(item);
        } else {
          result[5].items.push(item);
        }
        return result;
      }, [
        { name: 'Fonts', items: [] },
        { name: 'Sizes', items: [] },
        { name: 'Wides', items: [] },
        { name: 'Colors', items: [] },
        { name: 'Gradients', items: [] },
        { name: 'Miscs', items: [] },
      ] as AppSkinEditorComponent['groupedSkinVariables']);
  }
  
  private async fetchSkinVariables() {
    const {soul, skin} = this.currentTheme;
    this.skinVariables = await extractCSSVariables(`${GITHUB_RAW_URL}/main/styles/${soul}/skins/${skin}.scss`);
  }

  private changeTheme(e: InputEvent) {
    const {value} = e.target as HTMLSelectElement;
    const soul = SOULS.find(soul => soul.id === value);
    if (!soul) return;
    changeTheme({ soul: soul.id, skin: soul.skins[0].id });
    return this.fetchSkinVariables();
  }

  private resetSkin() {
    if (!confirm('All values will be reset?')) return
  }

  protected render() {
    return html`
      <div class="head">
        <strong>Skin Editor</strong>
        <button @click=${this.resetSkin}>
          <icon-arrow-clockwise color="dynamic" size="sm"></icon-arrow-clockwise>
          <span>Reset</span>
        </button>
      </div>

      <div class="body">

        <section class="tutorial">
          <div class="content">
            <p>Create a skin for:</p>
            <select @change=${this.changeTheme}>
              ${SOULS.map(soul => html`<option value=${soul.id}>${soul.name}</option>`)}
            </select>
            <p>Randomly generate a palette, then fine tune it further as you wish.</p>
            <p><button>I'm feeling lucky :)</button></p>
          </div>
        </section>

        <section class="manual">
          <strong>Edit manually</strong>
          <ul class="content">
            ${this.groupedSkinVariables.map(group => html`
              <li>
                <strong>${group.name}</strong>
                <ul>
                  ${group.items.map(item => html`
                    <li>
                      <div class="key">
                        <em>${item.title}</em>
                        <span>${item.key}</span>
                      </div>
                      <div class="value">
                        ${group.name === 'Fonts'
                          ? html`
                              <select>
                                ${FONTS.map(([fontFamily]) => html`
                                  <option value=${fontFamily}>${fontFamily}</option>
                                `)}
                              </select>
                            `
                          : group.name === 'Colors'
                            ? html`<input type="color" value=${item.value}>`
                            : group.name === 'Gradients'
                              ? html`<app-gradient-picker></app-gradient-picker>`
                              : html`<input type="text" value=${item.value}>`}
                      </div>
                    </li>
                  `)}
                </ul>
              </li>
            `)}
          </ul>
        </section>

      </div>
    `;
  }
}
