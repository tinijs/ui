import {html, nothing, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {TiniElement, partMap, VaryGroups, Colors, Scales} from 'tinijs';

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
  @property({type: String, reflect: true}) declare type?: string;
  @property({type: String, reflect: true}) declare name?: string;
  @property({type: String, reflect: true}) declare value?: string;
  @property({type: String, reflect: true}) declare inputmode?: string;
  @property({type: String, reflect: true}) declare autocomplete?: string;
  @property({type: Boolean, reflect: true}) declare disabled?: boolean;
  @property({type: Boolean, reflect: true}) declare readonly?: boolean;
  @property({type: Boolean, reflect: true}) declare wrap?: boolean;
  @property({type: Boolean, reflect: true}) declare block?: boolean;
  @property({type: String, reflect: true}) declare scheme?: Colors;
  @property({type: String, reflect: true}) declare scale?: Scales;
  @property({type: String, reflect: true, attribute: 'focus:scheme'}) declare focusScheme?: TiniInputComponent['scheme'];
  /* eslint-enable prettier/prettier */

  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // host block
    if (changedProperties.has('block')) {
      if (this.block) {
        this.classList.add('block');
      } else {
        this.classList.remove('block');
      }
    }
    // root classes parts
    this.extendRootClasses({
      raw: {
        wrap: !!this.wrap,
        disabled: !!this.disabled,
        readonly: !!this.readonly,
      },
      pseudo: {
        focus: {
          [VaryGroups.Scheme]: this.focusScheme,
        },
      },
      overridable: {
        [VaryGroups.Scheme]: this.scheme,
        [VaryGroups.Scale]: this.scale,
      },
    });
  }

  private buildEventDetail(e: InputEvent | FocusEvent) {
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

  private onFocus(e: FocusEvent) {
    e.stopPropagation();
    return this.dispatchEvent(
      new CustomEvent('focus', {
        detail: this.buildEventDetail(e),
      })
    );
  }

  private onBlur(e: FocusEvent) {
    e.stopPropagation();
    return this.dispatchEvent(
      new CustomEvent('blur', {
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
          type=${ifDefined(this.type) as any}
          name=${ifDefined(this.name)}
          inputmode=${ifDefined(this.inputmode)}
          autocomplete=${ifDefined(this.autocomplete) as any}
          placeholder=${ifDefined(this.placeholder)}
          .value=${this.value || ''}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${this.onChange}
          @input=${this.onInput}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
        />
      </label>
    `;
  }
}
