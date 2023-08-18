import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {
  partMap,
  PartInfo,
  ColorsAndGradients,
  Colors,
  SizeFactors,
  SizeBasicFactors,
  sizeFactorsToClassInfo,
  borderingToClassInfo,
} from '@tinijs/core';

export const TINI_BOX = 'tini-box';

/* UseBases(common) */
export class TiniBoxComponent extends LitElement {
  static readonly defaultTagName = TINI_BOX;

  @property({type: String, reflect: true})
  declare scheme?: ColorsAndGradients;
  @property({type: String, reflect: true, attribute: 'font-size'})
  declare fontSize?: SizeFactors;
  @property({type: String, reflect: true}) declare color?: Colors;
  @property({type: String, reflect: true}) declare bordering?: string;
  @property({type: String, reflect: true, attribute: 'border-radius'})
  declare borderRadius?: SizeBasicFactors;
  @property({type: String, reflect: true}) declare padding?: string;
  @property({type: String, reflect: true}) declare margin?: string;

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    // host classes
    this.updateHostClasses();
    // root classes
    this.rootClassesParts = {
      root: true,
      [`scheme-${this.scheme}`]: !!this.scheme,
      [`font-size-${this.fontSize}`]: !!this.fontSize,
      [`color-${this.color}`]: !!this.color,
      ...borderingToClassInfo(this.bordering),
      [`border-radius-${this.borderRadius}`]: !!this.borderRadius,
      ...sizeFactorsToClassInfo('padding', this.padding),
    };
  }

  private updateHostClasses() {
    if (this.margin) {
      this.classList.add(
        ...Object.keys(sizeFactorsToClassInfo('margin', this.margin))
      );
    } else {
      this.classList.forEach(className => {
        if (!className.startsWith('margin-')) return;
        this.classList.remove(className);
      });
    }
  }

  protected render() {
    return html`
      <div
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
      >
        <slot></slot>
      </div>
    `;
  }
}
