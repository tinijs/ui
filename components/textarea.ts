import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {partMap, PartInfo, Colors, Sizes} from '@tinijs/core';

import {InputEventDetail} from './input';

export type TextareaEventDetail = InputEventDetail;

export const TINI_TEXTAREA = 'tini-textarea';

/* UseBases(common) */
export class TiniTextareaComponent extends LitElement {
  static readonly defaultTagName = TINI_TEXTAREA;

  @property({type: String, reflect: true}) declare label?: string;
  @property({type: String, reflect: true}) declare placeholder?: string;
  @property({type: String, reflect: true}) declare name?: string;
  @property({type: String, reflect: true}) declare value?: string;
  @property({type: Boolean, reflect: true}) declare disabled?: boolean;
  @property({type: Boolean, reflect: true}) declare readonly?: boolean;
  @property({type: String, reflect: true}) declare color?: Colors;
  @property({type: String, reflect: true}) declare size?: Sizes;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      disabled: !!this.disabled,
      readonly: !!this.readonly,
      [`color-${this.color}`]: !!this.color,
      [`size-${this.size}`]: !!this.size,
    };
  }

  private buildEventDetail(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    const {name, value} = target;
    return {
      target,
      name,
      value,
    } as TextareaEventDetail;
  }

  private onChange(e: InputEvent) {
    e.stopPropagation();
    return this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.buildEventDetail(e),
      })
    );
  }

  private onInput(e: InputEvent) {
    e.stopPropagation();
    return this.dispatchEvent(
      new CustomEvent('input', {
        detail: this.buildEventDetail(e),
      })
    );
  }

  protected render() {
    return html`
      <label
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      >
        ${!this.label ? nothing : html`<span part="label">${this.label}</span>`}
        <textarea
          part="textarea"
          class="textarea"
          name=${ifDefined(this.name)}
          placeholder=${ifDefined(this.placeholder)}
          .value=${this.value || ''}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${this.onChange}
          @input=${this.onInput}
        ></textarea>
      </label>
    `;
  }
}
