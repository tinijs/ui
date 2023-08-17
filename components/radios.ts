import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo} from '@tinijs/core';
import {CheckboxesItem, CheckboxesEventDetail} from './checkboxes';

export type RadiosItem = Omit<CheckboxesItem, 'name'>;
export type RadiosEventDetail = Omit<CheckboxesEventDetail, 'name'>;

export const RADIOS = 'radios';
export const TINI_RADIOS = `tini-${RADIOS}`;

/* UseBases(common) */
export class TiniRadiosComponent extends LitElement {
  static readonly defaultTagName = TINI_RADIOS;

  @property({type: String}) declare name: string;
  @property({type: Array}) declare items?: RadiosItem[];
  @property({type: Boolean}) declare wrap?: boolean;

  private validateProperties() {
    if (!this.name) throw new Error('Property "name" is required.');
  }

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.validateProperties();
    // root classes parts
    this.rootClassesParts = {
      [RADIOS]: true,
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
    label,
    checked,
    disabled,
    color,
    size,
  }: RadiosItem) {
    const itemClassesParts: ClassInfo | PartInfo = {
      radio: true,
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
          type="radio"
          name=${this.name}
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
