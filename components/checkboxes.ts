import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {partMap, PartInfo, Colors, Sizes} from '@tinijs/core';

import {InputEventDetail} from './input';

export interface CheckboxesItem {
  value: string;
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  scheme?: Colors;
  size?: Sizes;
}

export interface CheckboxesEventDetail extends InputEventDetail {
  checked: boolean;
}

export const TINI_CHECKBOXES = 'tini-checkboxes';

/* UseBases(common) */
export class TiniCheckboxesComponent extends LitElement {
  static readonly defaultTagName = TINI_CHECKBOXES;

  /* eslint-disable prettier/prettier */
  @property({type: Array}) declare items?: CheckboxesItem[];
  @property({type: Boolean, reflect: true}) declare wrap?: boolean;
  /* eslint-enable prettier/prettier */

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      wrap: !!this.wrap,
    };
  }

  private onChange(e: InputEvent) {
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
    return !this.items?.length
      ? nothing
      : html`
          <div
            part=${partMap(this.rootClassesParts)}
            class=${classMap(this.rootClassesParts)}
          >
            ${this.items.map(item => this.renderItem(item))}
          </div>
        `;
  }

  private renderItem({
    value,
    name,
    label,
    checked,
    disabled,
    scheme,
    size,
  }: CheckboxesItem) {
    const itemClassesParts: ClassInfo | PartInfo = {
      item: true,
      disabled: !!disabled,
      [`scheme-${scheme}`]: !!scheme,
      [`size-${size}`]: !!size,
    };
    return html`
      <label
        class=${classMap(itemClassesParts)}
        part=${partMap(itemClassesParts)}
      >
        <input
          part="input"
          class="input"
          type="checkbox"
          name=${ifDefined(name)}
          value=${value}
          ?checked=${checked}
          ?disabled=${disabled}
          @change=${this.onChange}
        />
        ${!label ? nothing : html`<span>${label}</span>`}
      </label>
    `;
  }
}
