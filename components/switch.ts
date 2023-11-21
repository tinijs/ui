import {html, nothing, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {
  TiniElement,
  partMap,
  VaryGroups,
  Colors,
  Gradients,
  Scales,
} from 'tinijs';

/* UseBases(common) */
export class TiniSwitchComponent extends TiniElement {
  static readonly defaultTagName = 'tini-switch';
  readonly componentName = 'switch';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare label?: string;
  @property({type: String, reflect: true}) declare name?: string;
  @property({type: String, reflect: true}) declare value?: string;
  @property({type: Boolean, reflect: true}) declare checked?: boolean;
  @property({type: Boolean, reflect: true}) declare disabled?: boolean;
  @property({type: String, reflect: true}) declare scheme?: Colors | Gradients;
  @property({type: String, reflect: true}) declare scale?: Scales;
  /* eslint-enable prettier/prettier */

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root classes parts
    this.extendRootClassesParts({
      info: {
        checked: !!this.checked,
        disabled: !!this.disabled,
      },
      overridable: {
        [VaryGroups.Scheme]: this.scheme,
        [VaryGroups.Scale]: this.scale,
      },
    });
  }

  private onChange(e: Event) {
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
    return html`
      <label
        class=${classMap(this.rootClassesParts)}
        part=${partMap(this.rootClassesParts)}
        style=${styleMap(this.rootStyles)}
      >
        <div class="switch">
          <input
            part="input"
            class="input"
            type="checkbox"
            name=${ifDefined(this.name)}
            value=${ifDefined(this.value)}
            ?checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this.onChange}
          />
          <span part="slider" class="slider"></span>
        </div>
        ${!this.label
          ? nothing
          : html`<span part="label" class="label">${this.label}</span>`}
      </label>
    `;
  }
}
