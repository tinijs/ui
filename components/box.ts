import {PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {html, literal, unsafeStatic, StaticValue} from 'lit/static-html.js';
import {
  TiniElement,
  partMap,
  VaryGroups,
  Colors,
  Gradients,
  Factors,
  BorderRadiuses,
  BoxShadows,
  factorsToClassInfo,
  borderToClassInfo,
} from 'tinijs';

/* UseBases(common) */
export class TiniBoxComponent extends TiniElement {
  static readonly defaultTagName = 'tini-box';
  readonly componentName = 'box';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare tag?: string;
  @property({type: String, reflect: true}) declare scheme?: Colors | Gradients;
  @property({type: String, reflect: true}) declare fontSize?: Factors;
  @property({type: String, reflect: true}) declare color?: Colors;
  @property({type: String, reflect: true}) declare border?: string;
  @property({type: String, reflect: true}) declare borderRadius?: BorderRadiuses;
  @property({type: String, reflect: true}) declare padding?: string;
  @property({type: String, reflect: true}) declare margin?: string;
  @property({type: String, reflect: true}) declare shadow?: BoxShadows;
  /* eslint-enable prettier/prettier */

  private rootTag!: StaticValue;
  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root tag
    this.rootTag = literal`${unsafeStatic(this.tag || 'div')}`;
    // host classes
    this.updateHostClasses();
    // root classes parts
    this.extendRootClassesParts({
      info: {
        ...borderToClassInfo(this.border),
        ...factorsToClassInfo(VaryGroups.Padding, this.padding),
      },
      overridable: {
        [VaryGroups.Scheme]: this.scheme,
        [VaryGroups.FontSize]: this.fontSize,
        [VaryGroups.Color]: this.color,
        [VaryGroups.BorderRadius]: this.borderRadius,
        [VaryGroups.BoxShadow]: this.shadow,
      },
    });
  }

  private updateHostClasses() {
    if (this.margin) {
      this.classList.add(
        ...Object.keys(factorsToClassInfo(VaryGroups.Margin, this.margin))
      );
    } else {
      this.classList.forEach(className => {
        if (!className.startsWith(`${VaryGroups.Margin}-`)) return;
        this.classList.remove(className);
      });
    }
  }

  protected render() {
    return html`
      <${this.rootTag}
        part=${partMap(this.activeRootClassesParts)}
        class=${classMap(this.activeRootClassesParts)}
        style=${styleMap(this.activeRootStyles)}
      >
        <slot></slot>
      </${this.rootTag}>
    `;
  }
}
