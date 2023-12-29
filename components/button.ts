import {html, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {
  TiniElement,
  partMap,
  borderToClassInfo,
  VaryGroups,
  Colors,
  Gradients,
  Scales,
  Factors,
  JustifyContents,
  BorderRadiuses,
  BoxShadows,
} from 'tinijs';

export enum ButtonModes {
  Filled = 'filled',
  Outline = 'outline',
  Bordered = 'bordered',
  Clear = 'clear',
}

/* UseBases(common) */
export class TiniButtonComponent extends TiniElement {
  static readonly defaultTagName = 'tini-button';
  static readonly componentName = 'button';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare mode?: ButtonModes;
  @property({type: Boolean, reflect: true}) declare block?: boolean;
  @property({type: Boolean, reflect: true}) declare disabled?: boolean;
  @property({type: String, reflect: true}) declare scheme?: Colors | Gradients;
  @property({type: String, reflect: true}) declare scale?: Scales;
  @property({type: String, reflect: true}) declare color?: Colors;
  @property({type: String, reflect: true}) declare fontSize?: Factors;
  @property({type: String, reflect: true}) declare justifyContent?: JustifyContents;
  @property({type: String, reflect: true}) declare border?: string;
  @property({type: String, reflect: true}) declare borderRadius?: BorderRadiuses;
  @property({type: String, reflect: true}) declare shadow?: BoxShadows;
  @property({type: String, reflect: true, attribute: 'hover:scheme'}) declare hoverScheme?: TiniButtonComponent['scheme'];
  /* eslint-enable prettier/prettier */

  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // root classes parts
    this.extendRootClasses({
      raw: {
        block: !!this.block,
        disabled: !!this.disabled,
        ...borderToClassInfo(this.border),
      },
      pseudo: {
        hover: {
          [VaryGroups.Scheme]: this.hoverScheme,
        },
      },
      overridable: {
        [VaryGroups.Mode]: this.mode,
        [VaryGroups.Scheme]: this.scheme,
        [VaryGroups.Scale]: this.scale,
        [VaryGroups.Color]: this.color,
        [VaryGroups.FontSize]: this.fontSize,
        [VaryGroups.JustifyContent]: this.justifyContent,
        [VaryGroups.BorderRadius]: this.borderRadius,
        [VaryGroups.BoxShadow]: this.shadow,
      },
    });
  }

  protected render() {
    return html`<button
      class=${classMap(this.rootClasses)}
      part=${partMap(this.rootClasses)}
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`;
  }
}
