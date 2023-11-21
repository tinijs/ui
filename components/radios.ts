import {html, nothing, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {TiniElement, partMap, PartInfo, VaryGroups} from 'tinijs';

import {CheckboxesItem, CheckboxesEventDetail} from './checkboxes';

export type RadiosItem = Omit<CheckboxesItem, 'name'>;
export type RadiosEventDetail = Omit<CheckboxesEventDetail, 'name'>;

/* UseBases(common) */
export class TiniRadiosComponent extends TiniElement {
  static readonly defaultTagName = 'tini-radios';
  readonly componentName = 'radios';

  /* eslint-disable prettier/prettier */
  @property({type: Array}) declare items?: RadiosItem[];
  @property({type: String, reflect: true}) declare name: string;
  @property({type: Boolean, reflect: true}) declare wrap?: boolean;
  /* eslint-enable prettier/prettier */

  private validateProperties() {
    if (!this.name) throw new Error('Property "name" is required.');
  }

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // default and validations
    this.validateProperties();
    // root classes parts
    this.extendRootClassesParts({
      info: {
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
            style=${styleMap(this.rootStyles)}
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
    scheme,
    scale,
  }: RadiosItem) {
    const itemClassesParts: ClassInfo | PartInfo = {
      item: true,
      disabled: !!disabled,
      [`${VaryGroups.Scheme}-${scheme}`]: !!scheme,
      [`${VaryGroups.Scale}-${scale}`]: !!scale,
    };
    return html`
      <label
        class=${classMap(itemClassesParts)}
        part=${partMap(itemClassesParts)}
      >
        <input
          part="input"
          class="input"
          type="radio"
          name=${this.name}
          value=${value}
          ?checked=${checked}
          ?disabled=${disabled}
          @change=${this.onChange}
        />
        ${!label
          ? nothing
          : html`<span part="label" class="label">${label}</span>`}
      </label>
    `;
  }
}
