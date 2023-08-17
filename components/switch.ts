import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const SWITCH = 'switch';
export const TINI_SWITCH = `tini-${SWITCH}`;

/* UseBases(common) */
export class TiniSwitchComponent extends LitElement {
  static readonly defaultTagName = TINI_SWITCH;

  @property({type: String}) declare value?: string;
  @property({type: String}) declare name?: string;
  @property({type: String}) declare label?: string;
  @property({type: Boolean}) declare checked?: boolean;
  @property({type: Boolean}) declare disabled?: boolean;
  @property({type: String}) declare color?: ColorsAndGradients;
  @property({type: String}) declare size?: Sizes;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [SWITCH]: true,
      disabled: !!this.disabled,
      [`color-${this.color}`]: !!this.color,
      [`size-${this.size}`]: !!this.size,
    };
  }

  private onChange(e: Event) {
    e.stopPropagation();
    const target = e.target as HTMLInputElement;
    return this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          target,
          name: target.name,
          value: target.value,
          checked: target.checked,
        },
      })
    );
  }

  protected render() {
    return html`
      <label
        class=${classMap(this.rootClassesParts)}
        part=${partMap(this.rootClassesParts)}
      >
        <div class="switch-wrapper">
          <input
            part="input"
            type="checkbox"
            name=${ifDefined(this.name)}
            value=${ifDefined(this.value)}
            ?checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this.onChange}
          />
          <span class="slider"></span>
        </div>
        ${!this.label ? nothing : html`<span>${this.label}</span>`}
      </label>
    `;
  }
}
