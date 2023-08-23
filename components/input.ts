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

/* UseBases(common) */
export class TiniInputComponent extends LitElement {
  static readonly defaultTagName = 'tini-input';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare label?: string;
  @property({type: String, reflect: true}) declare placeholder?: string;
  @property({type: String, reflect: true}) declare type?: InputTypes;
  @property({type: String, reflect: true}) declare name?: string;
  @property({type: String, reflect: true}) declare value?: string;
  @property({type: Boolean, reflect: true}) declare wrap?: boolean;
  @property({type: Boolean, reflect: true}) declare disabled?: boolean;
  @property({type: Boolean, reflect: true}) declare readonly?: boolean;
  @property({type: String, reflect: true}) declare scheme?: Colors;
  @property({type: String, reflect: true}) declare size?: Sizes;
  /* eslint-enable prettier/prettier */

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      wrap: !!this.wrap,
      disabled: !!this.disabled,
      readonly: !!this.readonly,
      [`scheme-${this.scheme}`]: !!this.scheme,
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
        ${!this.label
          ? nothing
          : html`<span part="label" class="label">${this.label}</span>`}
        <input
          part="input"
          class="input"
          type=${ifDefined(this.type)}
          name=${ifDefined(this.name)}
          placeholder=${ifDefined(this.placeholder)}
          .value=${this.value || ''}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${this.onChange}
          @input=${this.onInput}
        />
      </label>
    `;
  }
}
