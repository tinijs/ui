import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';
import {CheckboxesItem, CheckboxesOnChangeDetail} from './checkboxes';

export type RadiosItem = Omit<CheckboxesItem, 'name'>;
export type RadiosOnChangeDetail = Omit<CheckboxesOnChangeDetail, 'name'>;

export const RADIOS = 'radios';
export const TINI_RADIOS = `tini-${RADIOS}`;

/* UseBases(common) */
export class TiniRadiosComponent extends LitElement {
  static readonly defaultTagName = TINI_RADIOS;

  @property({type: String}) declare name: string;
  @property({type: Array}) declare items?: RadiosItem[];
  @property({type: Boolean}) declare wrap?: boolean;

  connectedCallback() {
    super.connectedCallback();
    if (!this.name) throw new Error('Property "name" is required.');
  }

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [RADIOS]: true,
      wrap: !!this.wrap,
    };
  }

  private onChange(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    const {value, checked} = target;
    const detail: RadiosOnChangeDetail = {
      target,
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
