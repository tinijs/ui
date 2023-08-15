import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export const CHECKBOX = 'checkbox';
export const TINI_CHECKBOX = `tini-${CHECKBOX}`;

/* UseBases(common) */
export class TiniCheckboxComponent extends LitElement {
  static readonly defaultTagName = TINI_CHECKBOX;

  @property({type: String}) declare name?: string;
  @property({type: String}) declare label?: string;
  @property({type: Boolean}) declare checked?: boolean;
  @property({type: Boolean}) declare disabled?: boolean;
  @property({type: String}) declare color?: ColorsAndGradients;
  @property({type: String}) declare size?: Sizes;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [CHECKBOX]: true,
      [`bg-${this.color}`]: !!this.color,
      [`size-${this.size}`]: !!this.size,
      disabled: !!this.disabled,
    };
  }

  protected render() {
    return html`
      <label
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      >
        <input
          type="checkbox"
          name=${ifDefined(this.name)}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
        />
        ${!this.label ? nothing : html`<span>${this.label}</span>`}
      </label>
    `;
  }
}
