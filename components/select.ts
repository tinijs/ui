import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {partMap, PartInfo, Colors, Sizes} from '@tinijs/core';
import {InputEventDetail} from './input';

export interface SelectItem extends SelectOption {
  children?: SelectOption[];
}

export interface SelectOption {
  label: string;
  value?: string;
  disabled?: boolean;
  selected?: boolean;
}

export type SelectOptgroup = SelectOption & {
  children: SelectOption[];
};

export type SelectEventDetail = InputEventDetail;

export const TINI_SELECT = 'tini-select';

/* UseBases(common) */
export class TiniSelectComponent extends LitElement {
  static readonly defaultTagName = TINI_SELECT;

  /* eslint-disable prettier/prettier */
  @property({type: String}) declare items?: SelectItem[];
  @property({type: String, reflect: true}) declare label?: string;
  @property({type: String, reflect: true}) declare name?: string;
  @property({type: Boolean, reflect: true}) declare wrap?: boolean;
  @property({type: Boolean, reflect: true}) declare disabled?: boolean;
  @property({type: String, reflect: true}) declare scheme?: Colors;
  @property({type: String, reflect: true}) declare size?: Sizes;
  /* eslint-enable prettier/prettier */

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      wrap: !!this.wrap,
      disabled: !!this.disabled,
      [`scheme-${this.scheme}`]: !!this.scheme,
      [`size-${this.size}`]: !!this.size,
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
        },
      })
    );
  }

  protected render() {
    return html`
      <label
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      >
        ${!this.label
          ? nothing
          : html`<span part="label" class="label">${this.label}</span>`}
        <select
          part="select"
          class="select"
          name=${ifDefined(this.name)}
          ?disabled=${this.disabled}
          @change=${this.onChange}
        >
          ${!this.items?.length
            ? nothing
            : this.items.map(option =>
                !option.children?.length
                  ? this.renderOption(option as SelectOption)
                  : this.renderOptgroup(option as SelectOptgroup)
              )}
        </select>
      </label>
    `;
  }

  private renderOptgroup({label, children}: SelectOptgroup) {
    return html`
      <optgroup class="optgroup" part="optgroup" label=${label}>
        ${children.map(option => this.renderOption(option))}
      </optgroup>
    `;
  }

  private renderOption({label, value, disabled, selected}: SelectOption) {
    return html`
      <option
        part="option"
        class="option"
        value=${ifDefined(value)}
        ?disabled=${disabled}
        ?selected=${selected}
      >
        ${label}
      </option>
    `;
  }
}
