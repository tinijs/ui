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
  color?: Colors;
  size?: Sizes;
}

export interface CheckboxesEventDetail extends InputEventDetail {
  checked: boolean;
}

export const CHECKBOXES = 'checkboxes';
export const TINI_CHECKBOXES = `tini-${CHECKBOXES}`;

/* UseBases(common) */
export class TiniCheckboxesComponent extends LitElement {
  static readonly defaultTagName = TINI_CHECKBOXES;

  @property({type: Array}) declare items?: CheckboxesItem[];
  @property({type: Boolean}) declare wrap?: boolean;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [CHECKBOXES]: true,
      wrap: !!this.wrap,
    };
  }

  private onChange(e: InputEvent) {
    e.stopPropagation();
    const target = e.target as HTMLInputElement;
    const {name, value, checked} = target;
    const detail: CheckboxesEventDetail = {
      target,
      name,
      value,
      checked,
    };
    return this.dispatchEvent(new CustomEvent('change', {detail}));
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
    color,
    size,
  }: CheckboxesItem) {
    const itemClassesParts: ClassInfo | PartInfo = {
      checkbox: true,
      [`bg-${color}`]: !!color,
      [`size-${size}`]: !!size,
      disabled: !!disabled,
    };
    return html`
      <label
        class=${classMap(itemClassesParts)}
        part=${partMap(itemClassesParts)}
      >
        <input
          part="input"
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
