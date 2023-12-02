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
  BoxShadows,
} from 'tinijs';

export enum ButtonModes {
  Filled = 'filled',
  Outline = 'outline',
  Text = 'text',
}

/* UseBases(common) */
export class TiniButtonComponent extends TiniElement {
  static readonly defaultTagName = 'tini-button';
  readonly componentName = 'button';

  /* eslint-disable prettier/prettier */
  @property({type: Boolean, reflect: true}) declare mode?: ButtonModes;
  @property({type: Boolean, reflect: true}) declare block?: boolean;
  @property({type: Boolean, reflect: true}) declare disabled?: boolean;
  @property({type: String, reflect: true}) declare scheme?: Colors | Gradients;
  @property({type: String, reflect: true}) declare scale?: Scales;
  @property({type: String, reflect: true}) declare color?: Colors;
  @property({type: String, reflect: true}) declare fontSize?: Factors;
  @property({type: String, reflect: true}) declare justifyContent?: JustifyContents;
  @property({type: String, reflect: true}) declare shadow?: BoxShadows;
  /* eslint-enable prettier/prettier */

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root classes parts
    this.extendRootClassesParts({
      info: {
        block: !!this.block,
        disabled: !!this.disabled,
      },
      hover: {
        [VaryGroups.Scheme]: this.hoverMap?.scheme,
        [VaryGroups.Color]: this.hoverMap?.color,
      },
      overridable: {
        [VaryGroups.Scheme]: this.scheme,
        [VaryGroups.Scale]: this.scale,
        [VaryGroups.Color]: this.color,
        [VaryGroups.FontSize]: this.fontSize,
        [VaryGroups.JustifyContent]: this.justifyContent,
        [VaryGroups.BoxShadow]: this.shadow,
      },
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
