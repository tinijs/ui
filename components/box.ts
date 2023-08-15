import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {
  ColorsAndGradients,
  Colors,
  SizeFactors,
  sizeFactorsToClassInfo,
  SizeBasicFactors,
  BorderStyles,
} from '@tinijs/core';

export const BOX = 'box';
export const TINI_BOX = `tini-${BOX}`;

/* UseBases(common) */
export class TiniBoxComponent extends LitElement {
  static readonly defaultTagName = TINI_BOX;

  @property({type: String}) declare background?: ColorsAndGradients;
  @property({type: String}) declare textColor?: Colors;
  @property({type: String}) declare textSize?: SizeFactors;
  @property({type: String}) declare borderSize?: SizeBasicFactors;
  @property({type: String}) declare borderStyle?: BorderStyles;
  @property({type: String}) declare borderColor?: Colors;
  @property({type: String}) declare borderRadius?: SizeBasicFactors;
  @property({type: String}) declare padding?: string;
  @property({type: String}) declare margin?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    // host classes
    this.updateHostClasses();
    // root classes
    this.rootClasses = {
      [BOX]: true,
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
      <div part=${BOX} class=${classMap(this.rootClasses)}>
        <slot></slot>
      </div>
    `;
  }
}
