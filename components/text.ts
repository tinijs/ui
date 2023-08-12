import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {
  ColorsAndGradients,
  FontTypes,
  FontSizeFactors,
  FontWeights,
  TextTransforms,
} from '@tinijs/core';

export const TEXT = 'text';
export const TINI_TEXT = `tini-${TEXT}`;

/* UseBases(common) */
export class TiniTextComponent extends LitElement {
  static readonly defaultTagName = TINI_TEXT;

  @property({type: String}) declare color?: ColorsAndGradients;
  @property({type: String}) declare font?: FontTypes;
  @property({type: String}) declare size?: FontSizeFactors;
  @property({type: String}) declare weight?: FontWeights;
  @property({type: String}) declare transform?: TextTransforms;

  private mainClasses: ClassInfo = {};
  protected willUpdate() {
    this.mainClasses = {
      [TEXT]: true,
      [`color-${this.color}`]: !!this.color,
      [`font-${this.font}`]: !!this.font,
      [`size-${this.size}`]: !!this.size,
      [`weight-${this.weight}`]: !!this.weight,
      [`transform-${this.transform}`]: !!this.transform,
    };
  }

  protected render() {
    return html`
      <span part=${TEXT} class=${classMap(this.mainClasses)}>
        <slot></slot>
      </span>
    `;
  }
}
