import {html, nothing, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {TiniElement, partMap, VaryGroups, Colors, Scales} from 'tinijs';

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
export class TiniInputComponent extends TiniElement {
  static readonly defaultTagName = 'tini-input';
  static readonly componentName = 'input';
  static readonly componentMetas = {
    colorOnlyScheme: true,
  };

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
  @property({type: String, reflect: true}) declare scale?: Scales;
  /* eslint-enable prettier/prettier */

  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // root classes parts
    this.extendRootClasses({
      raw: {
        wrap: !!this.wrap,
        disabled: !!this.disabled,
        readonly: !!this.readonly,
      },
      overridable: {
        [VaryGroups.Scheme]: this.scheme,
        [VaryGroups.Scale]: this.scale,
      },
    });
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
        class=${classMap(this.rootClasses)}
        part=${partMap(this.rootClasses)}
      >
        ${!this.label
          ? nothing
          : html`<span class="label" part="label">${this.label}</span>`}
        <input
          class="input"
          part="input"
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
