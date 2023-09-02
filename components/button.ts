import {html, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {
  TiniElement,
  partMap,
  VaryGroups,
  Colors,
  Gradients,
  Scales,
  Factors,
  JustifyContents,
} from 'tinijs';

/* UseBases(common) */
export class TiniButtonComponent extends TiniElement {
  static readonly defaultTagName = 'tini-button';

  /* eslint-disable prettier/prettier */
  @property({type: Boolean, reflect: true}) declare block?: boolean;
  @property({type: Boolean, reflect: true}) declare disabled?: boolean;
  @property({type: String, reflect: true}) declare scheme?: Colors | Gradients;
  @property({type: String, reflect: true}) declare scale?: Scales;
  @property({type: String, reflect: true}) declare color?: Colors;
  @property({type: String, reflect: true}) declare fontSize?: Factors;
  @property({type: String, reflect: true}) declare justifyContent?: JustifyContents;
  /* eslint-enable prettier/prettier */

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root classes parts
    this.extendRootClassesParts({
      block: !!this.block,
      disabled: !!this.disabled,
      [`${VaryGroups.Scheme}-${this.scheme}`]: !!this.scheme,
      [`${VaryGroups.Scale}-${this.scale}`]: !!this.scale,
      [`${VaryGroups.Color}-${this.color}`]: !!this.color,
      [`${VaryGroups.FontSize}-${this.fontSize}`]: !!this.fontSize,
      [`${VaryGroups.JustifyContent}-${this.justifyContent}`]:
        !!this.justifyContent,
    });
  }

  protected render() {
    return html`<button
      part=${partMap(this.rootClassesParts)}
      class=${classMap(this.rootClassesParts)}
      style=${styleMap(this.rootStyles)}
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`;
  }
}
