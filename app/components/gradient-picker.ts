import {Component, TiniComponent, Reactive, html, css, ref, Ref, createRef, classMap} from '@tinijs/core';
// @ts-ignore
import * as Grapick from 'grapick';

export const APP_GRADIENT_PICKER = 'app-gradient-picker';

@Component()
export class AppGradientPickerComponent extends TiniComponent {
  static styles = css`

    /*
     * Grapick
     */

    .grp-wrapper {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==");
    }
    .grp-preview {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: crosshair;
    }
    .grp-handler {
      width: 4px;
      margin-left: -2px;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      height: 100%;
    }
    .grp-handler-close {
      color: rgba(0, 0, 0, 0.4);
      border-radius: 100%;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      background-color: #fff;
      text-align: center;
      width: 15px;
      height: 15px;
      margin-left: -5px;
      line-height: 10px;
      font-size: 21px;
      cursor: pointer;
    }
    .grp-handler-close-c {
      position: absolute;
      top: -17px;
    }
    .grp-handler-drag {
      background-color: rgba(0, 0, 0, 0.5);
      cursor: col-resize;
      width: 100%;
      height: 100%;
    }
    .grp-handler-selected .grp-handler-drag {
      background-color: rgba(255, 255, 255, 0.5);
    }
    .grp-handler-cp-c {
      display: none;
    }
    .grp-handler-selected .grp-handler-cp-c {
      display: block;
    }
    .grp-handler-cp-wrap {
      width: 15px;
      height: 15px;
      margin-left: -8px;
      border: 3px solid #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      overflow: hidden;
      border-radius: 100%;
      cursor: pointer;
    }
    .grp-handler-cp-wrap input[type="color"] {
      opacity: 0;
      cursor: pointer;
    }

    /*
     * Main
     */

    .host {
      position: relative;
    }

    .preview {
      width: 16px;
      height: 16px;
      background: red;
    }

    .picker-container {
      box-sizing: border-box;
      display: none;
      position: absolute;
      top: 20px;
      right: 0;
      background: var(--color-background);
      padding: 2rem 1rem 1rem;
      width: 300px;
      height: 140px;
      border: 1px solid red;
      border-radius: var(--size-border);
      z-index: 3;
    }

    .picker-container.showed {
      display: block;
    }

    .picker-container .foot {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
    }

    .picker-container .foot .options {}

    .picker-container .foot .actions {}
  `;

  @Reactive() private showed = false;
  private pickerRef: Ref<HTMLDivElement> = createRef();
  private grapickInstance: any;

  onReady() {
    if (!this.pickerRef.value) return;
    this.grapickInstance = new Grapick({
      el: this.pickerRef.value,
    });
    this.grapickInstance.addHandler(0, 'red');
    this.grapickInstance.addHandler(100, 'blue');
  }

  protected render() {
    return html`
      <div class="host">
        <button class="preview" @click=${() => this.showed = !this.showed}></button>
        <div class=${classMap({ 'picker-container': true, showed: this.showed })}>
          <div ${ref(this.pickerRef)}></div>
          <div class="foot">
            <div class="options">
              <select>
                <option value="linear">Linear</option>
                <option value="radial">Radial</option>
              </select>
              <select>
                <option value="top">Top</option>
                <option value="right">Right</option>
              </select>
            </div>
            <div class="actions">
              <button @click=${() => this.showed = false}>Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
