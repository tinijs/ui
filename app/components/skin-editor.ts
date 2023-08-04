import {
  Component,
  TiniComponent,
  Reactive,
  html,
  css,
  stylingWithBases,
  changeTheme,
  repeat,
  QueryAll,
  ref,
  createRef,
  Ref,
  render,
  nothing,
} from '@tinijs/core';
import {ICON_CODE, IconCodeComponent} from '@tinijs/bootstrap-icons/code';
import {commonBases, codeBases} from '../../dev/bases';
import {TINI_BUTTON, TiniButtonComponent} from '../../dev/components/button';

import {APP_CODE, AppCodeComponent} from './code';
import {APP_MODAL, AppModalComponent} from './modal';
import {
  APP_GRADIENT_PICKER,
  AppGradientPickerComponent,
} from './gradient-picker';

import {GITHUB_RAW_URL} from '../consts/main';
import {SOULS, FONTS} from '../consts/theme';
import {debouncer} from '../helpers/debouncer';
import {extractCSSVariables, VariableDef} from '../helpers/source';
import {buildColorVariants} from '../helpers/color';
import {buildGradientVariants} from '../helpers/gradient';
import {
  isGoogleFont,
  buildGoogleFontUrl,
  loadGoogleFont,
} from '../helpers/font';
import {mainStore} from '../stores/main';

export const APP_SKIN_EDITOR = 'app-skin-editor';

@Component({
  components: {
    [ICON_CODE]: IconCodeComponent,
    [TINI_BUTTON]: TiniButtonComponent,
    [APP_CODE]: AppCodeComponent,
    [APP_MODAL]: AppModalComponent,
    [APP_GRADIENT_PICKER]: AppGradientPickerComponent,
  },
  theming: {
    styling: stylingWithBases([commonBases, codeBases]),
  },
})
export class AppSkinEditorComponent extends TiniComponent {
  static styles = css`
    :host {
      --head-height: 50px;
      --foot-height: 50px;
      height: 100%;
    }

    .head {
      display: flex;
      align-items: center;
      height: var(--head-height);
      padding: calc(var(--size-space) * 0.75);
      border-bottom: var(--size-border) solid var(--color-background-shade);

      .title {
        flex: 1;
      }

      .reset {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: calc(var(--size-space) * 0.35) calc(var(--size-space) * 0.75);
        margin-right: calc(var(--size-space) * 2);
        background: var(--color-background);
        color: var(--color-foreground);
        border: var(--size-border) solid var(--color-foreground);
        border-radius: var(--size-radius);
        font-size: calc(var(--size-text) * 0.9);
        line-height: 1;

        &:hover {
          background: var(--color-background-shade);
        }
      }

      .close {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-background);
        border: none;
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
      }
    }

    .body {
      height: calc(100% - var(--head-height) - var(--foot-height));
      height: calc(100% - var(--head-height) - var(--foot-height));
      overflow-x: hidden;
      overflow-y: scroll;

      section {
        & > strong {
          display: block;
          padding: calc(var(--size-space) * 0.5);
          border: var(--size-border) solid var(--color-background-shade);
          border-left: none;
          border-right: none;
          text-align: center;
        }

        .content {
          padding: calc(var(--size-space) * 0.5);
        }
      }

      .naming {
        padding: calc(var(--size-space) * 0.5);
        padding-bottom: 0;

        label {
          display: block;
          margin-bottom: var(--size-space);

          span {
            color: var(--color-medium);
          }

          input,
          select {
            width: 100%;
            margin-top: calc(var(--size-space) * 0.25);
            background: var(--color-background-tint);
            border: var(--size-border) solid var(--color-medium);
            border-radius: var(--size-radius);
            padding: calc(var(--size-space) * 0.25)
              calc(var(--size-space) * 0.5);
          }
        }
      }

      .properties {
        .group {
          padding: calc(var(--size-space) * 0.5);
          margin-bottom: var(--size-space);

          .group-title {
            color: var(--color-medium);
            text-transform: uppercase;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: var(--size-space) 0 0;

            li {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-left: var(--size-space);
              margin-right: calc(var(--size-space) * 0.5);
              margin-bottom: calc(var(--size-space) * 0.5);
              padding: calc(var(--size-space) * 0.25) 0
                calc(var(--size-space) * 0.75);
              border-bottom: var(--size-border) solid
                var(--color-background-shade);

              .value {
                input,
                select {
                  background: var(--color-background-tint);
                  border: var(--size-border) solid var(--color-medium);
                  border-radius: var(--size-radius);
                  padding: calc(var(--size-space) * 0.25)
                    calc(var(--size-space) * 0.5);
                }

                input {
                  max-width: 100px;
                }

                select {
                  max-width: 150px;
                }

                input[type='color'] {
                  padding: 0 2px;
                }

                select,
                input[type='color'] {
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }

    .foot {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: var(--foot-height);
      position: absolute;
      bottom: 0;
      left: 0;
      border-top: var(--size-border) solid var(--color-background-shade);
      padding: calc(var(--size-space) * 0.5);

      .show-code {
        width: 100%;

        span {
          margin-left: calc(var(--size-space) * 0.5);
        }
      }
    }

    .modal-body {
      display: block;
      width: 100%;
      padding: 0 2rem;
    }
  `;

  private modalRef: Ref<AppModalComponent> = createRef();
  private modalContentRef: Ref<HTMLDivElement> = createRef();
  @Reactive() private variablesMap: Map<string, VariableDef> = new Map();
  @QueryAll('.field') private allInputs!: NodeListOf<HTMLElement>;
  private changedVariablesMap: Map<string, string> = new Map();
  private skinTitle = 'Untitled';

  private get currentTheme() {
    const {theme} = document.body.dataset;
    if (!theme) throw new Error('Invalid theme setup.');
    const [soul, skin] = theme.split('/');
    return {soul, skin};
  }

  private get groupedSkinVariables() {
    const result = [
      {name: 'Fonts', items: []},
      {name: 'Colors', items: []},
      {name: 'Gradients', items: []},
      {name: 'Sizes', items: []},
      {name: 'Wides', items: []},
      {name: 'Miscs', items: []},
    ] as Array<{name: string; items: VariableDef[]}>;
    // group variables
    for (const item of this.variablesMap) {
      const [key, def] = item;
      if (key.startsWith('--font-')) {
        result[0].items.push(def);
      } else if (key.startsWith('--color-')) {
        if (
          !~key.indexOf('-contrast') &&
          !~key.indexOf('-rgb') &&
          !~key.indexOf('-shade') &&
          !~key.indexOf('-tint')
        ) {
          result[1].items.push(def);
        }
      } else if (key.startsWith('--gradient-')) {
        if (
          !~key.indexOf('-contrast') &&
          !~key.indexOf('-shade') &&
          !~key.indexOf('-tint')
        ) {
          result[2].items.push(def);
        }
      } else if (key.startsWith('--size-')) {
        result[3].items.push(def);
      } else if (key.startsWith('--wide-')) {
        result[4].items.push(def);
      } else {
        result[5].items.push(def);
      }
    }
    // result
    return result;
  }

  async onCreate() {
    await this.fetchSkinVariables();
  }

  private async fetchSkinVariables() {
    const {soul, skin} = this.currentTheme;
    this.variablesMap = await extractCSSVariables(
      `${GITHUB_RAW_URL}/main/styles/${soul}/skins/${skin}.css`
    );
  }

  private async changeSoul(e: InputEvent) {
    const soul = SOULS.find(
      soul => soul.id === (e.target as HTMLSelectElement).value
    );
    if (soul) {
      document.body.style.cssText = '';
      changeTheme({soul: soul.id, skin: soul.skins[0].id});
      mainStore.commit('soulName', soul.id);
      await this.fetchSkinVariables();
      this.resetSkin();
    }
  }

  private resetSkin() {
    document.body.style.cssText = '';
    this.allInputs.forEach(item => {
      const input = item as HTMLInputElement;
      input.value = this.variablesMap.get(input.name)?.valueDirect || '';
    });
    this.changedVariablesMap.clear();
  }

  private resetSkinWithConfirmation() {
    if (!confirm('All values will be reset?')) return;
    return this.resetSkin();
  }

  private showModal() {
    const skinName = this.skinTitle.replace(/[\W_]+/g, '-').toLowerCase();
    const themeId = `${mainStore.soulName}/${skinName}`;
    // extract google fonts and code
    const googleFonts: Array<{font: string}> = [];
    const allVariables: string[] = [];
    for (const [key, def] of this.variablesMap) {
      const value = this.changedVariablesMap.get(key) || def.value;
      allVariables.push(`${key}: ${value};`);
      if (key.startsWith('--font-') && isGoogleFont(value)) {
        googleFonts.push({font: value});
      }
    }
    const googleFontCode = !googleFonts.length
      ? null
      : `<link rel="stylesheet" href="${buildGoogleFontUrl(googleFonts)}">`;
    const skinCode = `[data-theme="${themeId}"] {\n  ${allVariables.join(
      '\n  '
    )}\n}\n`;
    // render modal content
    render(
      html`
        ${!googleFontCode
          ? nothing
          : html`
              <p>Include Google Font stylesheet globally:</p>
              <app-code .code=${googleFontCode}></app-code>
            `}
        <p>
          Copy the code below and save as <code>${skinName}.css</code>. You can
          edit the values further if you wish.
        </p>
        <p>
          To make it the default theme, set the body:
          <code>&lt;body data-theme=&quot;${themeId}&quot;&gt;</code>
        </p>
        <app-code .code=${skinCode}></app-code>
      `,
      this.modalContentRef.value!
    );
    // show modal
    this.modalRef.value?.show();
  }

  private hideModal() {
    this.modalRef.value?.hide();
    render(nothing, this.modalContentRef.value!);
  }

  private updateVariables(values: Array<[string, string]>) {
    values.forEach(([key, value]) => {
      this.changedVariablesMap.set(key, value);
      document.body.style.setProperty(key, value);
    });
  }

  private async changeFont(e: InputEvent) {
    const input = e.target as HTMLSelectElement;
    const key = input.name;
    const value = input.value;
    if (isGoogleFont(value)) await loadGoogleFont(value);
    this.updateVariables([[key, value]]);
  }

  private changeColor(e: InputEvent) {
    const input = e.target as HTMLInputElement;
    const key = input.name;
    const value = input.value;
    return debouncer('AppSkinEditorComponent:change_color', 100, () => {
      const {base, baseRGB, contrast, contrastRGB, shade, tint} =
        buildColorVariants(value);
      this.updateVariables([
        [key, base],
        [`${key}-rgb`, baseRGB],
        [`${key}-contrast`, contrast],
        [`${key}-contrast-rgb`, contrastRGB],
        [`${key}-shade`, shade],
        [`${key}-tint`, tint],
      ]);
    });
  }

  private changeGradient(e: CustomEvent<string>) {
    const input = e.target as AppGradientPickerComponent;
    const key = input.name;
    const value = e.detail;
    return debouncer('AppSkinEditorComponent:change_gradient', 100, () => {
      const {base, contrast, shade, tint} = buildGradientVariants(value);
      this.updateVariables([
        [key, base],
        [`${key}-contrast`, contrast],
        [`${key}-shade`, shade],
        [`${key}-tint`, tint],
      ]);
    });
  }

  private changeValue(e: InputEvent) {
    const input = e.target as HTMLInputElement;
    const key = input.name;
    const value = input.value;
    return debouncer('AppSkinEditorComponent:change_value', 100, () =>
      this.updateVariables([[key, value]])
    );
  }

  protected render() {
    return html`
      <div class="head">
        <strong class="title">Skin Editor</strong>
        <button class="reset" @click=${this.resetSkinWithConfirmation}>
          Reset
        </button>
        <button
          class="close"
          @click=${() => mainStore.commit('skinEditorShown', false)}
        >
          ✕
        </button>
      </div>

      <div class="body">
        <section class="naming">
          <div class="content">
            <label>
              <span>Custom skin for soul:</span>
              <select @change=${this.changeSoul}>
                ${SOULS.map(
                  soul => html`<option value=${soul.id}>${soul.name}</option>`
                )}
              </select>
            </label>
            <label>
              <span>Name your skin:</span>
              <input
                type="text"
                value=${this.skinTitle}
                @input=${(e: InputEvent) =>
                  (this.skinTitle = (e.target as HTMLInputElement).value)}
              />
            </label>
          </div>
        </section>

        <section class="properties">
          <strong>Properties</strong>
          <ul class="content">
            ${repeat(
              this.groupedSkinVariables,
              item => item.name,
              group => html`
                <li class="group">
                  <strong class="group-title">${group.name}</strong>
                  <ul>
                    ${repeat(
                      group.items,
                      item => item.key,
                      item => {
                        return html`
                          <li>
                            <div class="key">${item.title}</div>
                            <div class="value">
                              ${group.name === 'Fonts'
                                ? html`
                                    <select
                                      class="field"
                                      name=${item.key}
                                      @change=${this.changeFont}
                                    >
                                      <optgroup label="Classic Fonts">
                                        ${FONTS.filter(
                                          ([, webSafe]) => webSafe
                                        ).map(
                                          ([font]) => html`
                                            <option
                                              .value=${font}
                                              .selected=${item.valueDirect ===
                                              font}
                                            >
                                              ${font.replace(/\'|\"/g, '')}
                                            </option>
                                          `
                                        )}
                                      </optgroup>
                                      <optgroup label="Google Fonts">
                                        ${FONTS.filter(
                                          ([, webSafe]) => !webSafe
                                        ).map(
                                          ([font]) => html`
                                            <option
                                              .value=${font}
                                              .selected=${item.valueDirect ===
                                              font}
                                            >
                                              ${font.replace(/\'|\"/g, '')}
                                            </option>
                                          `
                                        )}
                                      </optgroup>
                                    </select>
                                  `
                                : group.name === 'Colors'
                                ? html`<input
                                    type="color"
                                    class="field"
                                    name=${item.key}
                                    .value=${item.valueDirect}
                                    @input=${this.changeColor}
                                  />`
                                : group.name === 'Gradients'
                                ? html`<app-gradient-picker
                                    class="field"
                                    name=${item.key}
                                    .value=${item.valueDirect}
                                    @change=${this.changeGradient}
                                  ></app-gradient-picker>`
                                : html`<input
                                    type="text"
                                    class="field"
                                    name=${item.key}
                                    .value=${item.valueDirect}
                                    @input=${this.changeValue}
                                  />`}
                            </div>
                          </li>
                        `;
                      }
                    )}
                  </ul>
                </li>
              `
            )}
          </ul>
        </section>
      </div>

      <div class="foot">
        <tini-button class="show-code" color="primary" @click=${this.showModal}>
          <icon-code color="light" size="sm"></icon-code>
          <span>Show code</span>
        </tini-button>
      </div>

      <app-modal
        ${ref(this.modalRef)}
        titleText="Custom skin code"
        @no=${this.hideModal}
      >
        <div ${ref(this.modalContentRef)} class="modal-body"></div>
      </app-modal>
    `;
  }
}