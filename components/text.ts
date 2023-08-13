import {LitElement} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {html, literal, unsafeStatic, StaticValue} from 'lit/static-html.js';
import {
  ColorsAndGradients,
  FontTypes,
  FontSizeFactors,
  FontWeights,
  TextTransforms,
} from '@tinijs/core';

export enum TextTypes {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  Strong = 'strong',
  Em = 'em',
  Span = 'span',
}

export const TEXT = 'text';
export const TINI_TEXT = `tini-${TEXT}`;

/* UseBases(common,headings) */
export class TiniTextComponent extends LitElement {
  static readonly defaultTagName = TINI_TEXT;

  @property({type: String}) declare type?: TextTypes;
  @property({type: String}) declare color?: ColorsAndGradients;
  @property({type: String}) declare font?: FontTypes;
  @property({type: String}) declare size?: FontSizeFactors;
  @property({type: String}) declare weight?: FontWeights;
  @property({type: String}) declare transform?: TextTransforms;
  @property({type: Boolean}) declare italic?: boolean;
  @property({type: Boolean}) declare underline?: boolean;

  private tag!: StaticValue;
  private rootClasses: ClassInfo = {};
  protected willUpdate() {
    this.tag = literal`${unsafeStatic(this.type || TextTypes.Span)}`;
    this.rootClasses = {
      [TEXT]: true,
      [`color-${this.color}`]: !!this.color,
      [`font-${this.font}`]: !!this.font,
      [`size-${this.size}`]: !!this.size,
      [`weight-${this.weight}`]: !!this.weight,
      [`transform-${this.transform}`]: !!this.transform,
      italic: !!this.italic,
      underline: !!this.underline,
    };
  }

  protected render() {
    return html`
      <${this.tag} part=${TEXT} class=${classMap(this.rootClasses)}>
        <slot></slot>
      </${this.tag}>
    `;
  }
}
