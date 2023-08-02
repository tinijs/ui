import {
  Component,
  TiniComponent,
  Input,
  Output,
  EventEmitter,
  Reactive,
  html,
  css,
  ref,
  Ref,
  createRef,
  classMap,
  styleMap,
} from '@tinijs/core';
// @ts-ignore
import * as Grapick from 'grapick';

import {parseGradient} from '../helpers/gradient';

export const APP_GRADIENT_PICKER = 'app-gradient-picker';

@Component()
export class AppGradientPickerComponent extends TiniComponent {
  static styles = css`
    /*
     * Grapick
     */

    .grp-wrapper {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==');
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
      background-color: rgba(255, 255, 255, 0.35);
      cursor: col-resize;
      width: 100%;
      height: 100%;
    }
    .grp-handler-selected .grp-handler-drag {
      background-color: rgba(255, 255, 255, 0.7);
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
    .grp-handler-cp-wrap input[type='color'] {
      opacity: 0;
      cursor: pointer;
    }

    /*
     * Main
     */

    .host {
      position: relative;
    }

    .toggler {
      width: 50px;
      height: 25px;
    }

    .picker-container {
      box-sizing: border-box;
      display: none;
      position: absolute;
      top: 30px;
      left: 0;
      background: var(--color-foreground-tint);
      width: 230px;
      height: 150px;
      border: 1px solid var(--color-background-tint);
      border-radius: var(--size-border);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      z-index: 101;
    }

    .picker-container.showed {
      display: block;
    }

    .picker-container .grapick {
      padding: 2rem 1.5rem;
    }

    .picker-container .options {
      display: flex;
      padding: 1rem;
      background: var(--color-background-tint);
    }
  `;

  @Input() name!: string;
  @Input() value = 'none';

  @Output() change!: EventEmitter<string>;

  @Reactive() private showed = false;
  private togglerRef: Ref<HTMLButtonElement> = createRef();
  private containerRef: Ref<HTMLDivElement> = createRef();
  private grapickRef: Ref<HTMLDivElement> = createRef();
  private typeSelectRef: Ref<HTMLSelectElement> = createRef();
  private directionSelectRef: Ref<HTMLSelectElement> = createRef();
  private grapickInstance: any;

  private onGlobalClicked = (e: MouseEvent) => {
    const togglerNode = this.togglerRef.value;
    const containerNode = this.containerRef.value;
    if (!this.showed || !togglerNode || !containerNode) return;
    const togglerRange = togglerNode.getBoundingClientRect();
    const menuContainerRange = containerNode.getBoundingClientRect();
    const isInsideToggler =
      togglerRange.left <= e.clientX &&
      togglerRange.right >= e.clientX &&
      togglerRange.top <= e.clientY &&
      togglerRange.bottom >= e.clientY;
    const isInsideMenu =
      menuContainerRange.left <= e.clientX &&
      menuContainerRange.right >= e.clientX &&
      menuContainerRange.top <= e.clientY &&
      menuContainerRange.bottom >= e.clientY;
    this.showed = isInsideToggler || isInsideMenu;
  };

  onCreate() {
    addEventListener('click', this.onGlobalClicked);
  }

  onDestroy() {
    removeEventListener('click', this.onGlobalClicked);
  }

  onReady() {
    if (!this.grapickRef.value) return;
    this.grapickInstance = new Grapick({
      el: this.grapickRef.value,
    });
    const initial = parseGradient(this.value);
    if (initial) {
      const {type, direction, handlers} = initial;
      this.grapickInstance.setType(type);
      this.typeSelectRef.value!.value = type;
      this.grapickInstance.setDirection(direction);
      this.directionSelectRef.value!.value = direction;
      handlers.forEach(({color, position}) => {
        this.grapickInstance.addHandler(position, color);
      });
    }
    this.grapickInstance.on('change', () =>
      this.valueChanged(this.grapickInstance.getSafeValue())
    );
  }

  private valueChanged(value: string) {
    this.value = value;
    this.change.emit(value);
  }

  private changeType(e: InputEvent) {
    const value = (e.target as HTMLSelectElement).value;
    this.grapickInstance.setType(value);
  }

  private changeDirection(e: InputEvent) {
    const value = (e.target as HTMLSelectElement).value;
    this.grapickInstance.setDirection(value);
  }

  protected render() {
    return html`
      <div class="host">
        <button
          ${ref(this.togglerRef)}
          class="toggler"
          @click=${() => (this.showed = !this.showed)}
          style=${styleMap({background: this.value})}
        ></button>
        <div
          ${ref(this.containerRef)}
          class=${classMap({'picker-container': true, showed: this.showed})}
        >
          <div class="grapick">
            <div ${ref(this.grapickRef)}></div>
          </div>
          <div class="options">
            <select ${ref(this.typeSelectRef)} @change=${this.changeType}>
              <optgroup label="Type">
                <option value="linear">Linear</option>
                <option value="radial">Radial</option>
              </optgroup>
            </select>
            <select
              ${ref(this.directionSelectRef)}
              @change=${this.changeDirection}
            >
              <optgroup label="Direction">
                <option value="top">Top</option>
                <option value="right">Right</option>
                <option value="center">Center</option>
                <option value="bottom">Bottom</option>
                <option value="left">Left</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>
    `;
  }
}
