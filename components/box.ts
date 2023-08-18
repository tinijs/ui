import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {
  partMap,
  PartInfo,
  ColorsAndGradients,
  Colors,
  SizeFactors,
  sizeFactorsToClassInfo,
  SizeBasicFactors,
  BorderStyles,
} from '@tinijs/core';

export const TINI_BOX = 'tini-box';

/* UseBases(common) */
export class TiniBoxComponent extends LitElement {
  static readonly defaultTagName = TINI_BOX;

  @property({type: String, reflect: true})
  declare background?: ColorsAndGradients;
  @property({type: String, reflect: true, attribute: 'text-color'})
  declare textColor?: Colors;
  @property({type: String, reflect: true, attribute: 'text-size'})
  declare textSize?: SizeFactors;
  @property({type: String, reflect: true, attribute: 'border-size'})
  declare borderSize?: SizeBasicFactors;
  @property({type: String, reflect: true, attribute: 'border-style'})
  declare borderStyle?: BorderStyles;
  @property({type: String, reflect: true, attribute: 'border-color'})
  declare borderColor?: Colors;
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
      [`bg-${this.background}`]: !!this.background,
      [`text-color-${this.textColor}`]: !!this.textColor,
      [`text-size-${this.textSize}`]: !!this.textSize,
      [`border-size-${this.borderSize}`]: !!this.borderSize,
      [`border-color-${this.borderColor}`]: !!this.borderColor,
      [`border-style-${this.borderStyle}`]: !!this.borderStyle,
      [`border-radius-${this.borderRadius}`]: !!this.borderRadius,
      ...(!this.padding ? {} : sizeFactorsToClassInfo('padding', this.padding)),
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
