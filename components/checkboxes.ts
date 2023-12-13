import {html, nothing, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {TiniElement, partMap, VaryGroups, Colors, Scales} from 'tinijs';

import {InputEventDetail} from './input';

export interface CheckboxesItem {
  value: string;
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  scheme?: Colors;
  scale?: Scales;
}

export interface CheckboxesEventDetail extends InputEventDetail {
  checked: boolean;
}

/* UseBases(common) */
export class TiniCheckboxesComponent extends TiniElement {
  static readonly defaultTagName = 'tini-checkboxes';
  readonly componentName = 'checkboxes';

  /* eslint-disable prettier/prettier */
  @property({type: Array}) declare items?: CheckboxesItem[];
  @property({type: Boolean, reflect: true}) declare wrap?: boolean;
  /* eslint-enable prettier/prettier */

  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // root classes parts
    this.extendRootClasses({
      raw: {
        wrap: !!this.wrap,
      },
    });
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
            class=${classMap(this.rootClasses)}
            part=${partMap(this.rootClasses)}
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
    scale,
  }: CheckboxesItem) {
    const itemClasses: ClassInfo = {
      item: true,
      'item-disabled': !!disabled,
      [`${VaryGroups.Scheme}-${scheme}`]: !!scheme,
      [`${VaryGroups.Scale}-${scale}`]: !!scale,
    };
    return html`
      <label class=${classMap(itemClasses)} part=${partMap(itemClasses)}>
        <input
          class="input"
          part="input"
          type="checkbox"
          name=${ifDefined(name)}
          value=${value}
          ?checked=${checked}
          ?disabled=${disabled}
          @change=${this.onChange}
        />
        ${!label
          ? nothing
          : html`<span class="label" part="label">${label}</span>`}
      </label>
    `;
  }
}
