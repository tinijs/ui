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
  Factors,
  BorderRadiuses,
  factorsToClassInfo,
  borderToClassInfo,
} from 'tinijs';

/* UseBases(common) */
export class TiniBoxComponent extends TiniElement {
  static readonly defaultTagName = 'tini-box';
  readonly componentName = 'box';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare scheme?: Colors | Gradients;
  @property({type: String, reflect: true}) declare fontSize?: Factors;
  @property({type: String, reflect: true}) declare color?: Colors;
  @property({type: String, reflect: true}) declare border?: string;
  @property({type: String, reflect: true}) declare borderRadius?: BorderRadiuses;
  @property({type: String, reflect: true}) declare padding?: string;
  @property({type: String, reflect: true}) declare margin?: string;
  /* eslint-enable prettier/prettier */

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
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
      <div
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
        style=${styleMap(this.rootStyles)}
      >
        <slot></slot>
      </div>
    `;
  }
}
