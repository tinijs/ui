import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {partMap, PartInfo, Colors, Sizes} from '@tinijs/core';

export enum InputTypes {
  Text = 'text',
  Password = 'password',
  Email = 'email',
  Number = 'number',
  Tel = 'tel',
  Url = 'url',
  Search = 'search',
}

export interface InputEventDetail {
  target: HTMLInputElement;
  name: string;
  value: string;
}

export const INPUT = 'input';
export const TINI_INPUT = `tini-${INPUT}`;

/* UseBases(common) */
export class TiniInputComponent extends LitElement {
  static readonly defaultTagName = TINI_INPUT;

  @property({type: String}) declare label?: string;
  @property({type: String}) declare placeholder?: string;
  @property({type: String}) declare name?: string;
  @property({type: String}) declare type?: InputTypes;
  @property({type: String}) declare value?: string;
  @property({type: Boolean}) declare wrap?: boolean;
  @property({type: Boolean}) declare disabled?: boolean;
  @property({type: Boolean}) declare readonly?: boolean;
  @property({type: String}) declare color?: Colors;
  @property({type: String}) declare size?: Sizes;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      [INPUT]: true,
      wrap: !!this.wrap,
      disabled: !!this.disabled,
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
    } as InputEventDetail;
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
        <input
          part="native-input"
          type=${ifDefined(this.type)}
          name=${ifDefined(this.name)}
          placeholder=${ifDefined(this.placeholder)}
          value=${ifDefined(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${this.onChange}
          @input=${this.onInput}
        />
      </label>
    `;
  }
}
