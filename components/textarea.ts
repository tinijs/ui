import {html, nothing, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {TiniElement, partMap, VaryGroups, Colors, Scales} from 'tinijs';

/* UseBases(common) */
export class TiniTextareaComponent extends TiniElement {
  static readonly defaultTagName = 'tini-textarea';
  static readonly componentName = 'textarea';
  static readonly componentMetas = {
    colorOnlyScheme: true,
  };
  static readonly mainNonRootSelector = '.textarea';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare label?: string;
  @property({type: String, reflect: true}) declare placeholder?: string;
  @property({type: String, reflect: true}) declare name?: string;
  @property({type: String, reflect: true}) declare value?: string;
  @property({type: String, reflect: true}) declare autocomplete?: string;
  @property({type: Boolean, reflect: true}) declare disabled?: boolean;
  @property({type: Boolean, reflect: true}) declare readonly?: boolean;
  @property({type: String, reflect: true}) declare scheme?: Colors;
  @property({type: String, reflect: true}) declare scale?: Scales;
  @property({type: String, reflect: true, attribute: 'focus:scheme'}) declare focusScheme?: TiniTextareaComponent['scheme'];
  /* eslint-enable prettier/prettier */

  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // root classes parts
    this.extendRootClasses({
      raw: {
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

  protected render() {
    return html`
      <label
        class=${classMap(this.rootClasses)}
        part=${partMap(this.rootClasses)}
      >
        ${!this.label
          ? nothing
          : html`<span class="label" part="label">${this.label}</span>`}
        <textarea
          class="textarea"
          part="textarea"
          placeholder=${ifDefined(this.placeholder)}
          name=${ifDefined(this.name)}
          .value=${this.value || ''}
          autocomplete=${ifDefined(this.autocomplete) as any}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
        ></textarea>
      </label>
    `;
  }
}
