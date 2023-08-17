import {LitElement} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {html, literal, unsafeStatic, StaticValue} from 'lit/static-html.js';
import {
  partMap,
  PartInfo,
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

export const TINI_TEXT = 'tini-text';

/* UseBases(common,headings) */
export class TiniTextComponent extends LitElement {
  static readonly defaultTagName = TINI_TEXT;

  @property({type: String}) declare type?: TextTypes;
  @property({type: Boolean}) declare italic?: boolean;
  @property({type: Boolean}) declare underline?: boolean;
  @property({type: String}) declare color?: ColorsAndGradients;
  @property({type: String}) declare font?: FontTypes;
  @property({type: String}) declare size?: FontSizeFactors;
  @property({type: String}) declare weight?: FontWeights;
  @property({type: String}) declare transform?: TextTransforms;

  private tag!: StaticValue;
  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.tag = literal`${unsafeStatic(this.type || TextTypes.Span)}`;
    this.rootClassesParts = {
      root: true,
      italic: !!this.italic,
      underline: !!this.underline,
      [`color-${this.color}`]: !!this.color,
      [`font-${this.font}`]: !!this.font,
      [`size-${this.size}`]: !!this.size,
      [`weight-${this.weight}`]: !!this.weight,
      [`transform-${this.transform}`]: !!this.transform,
    };
  }

  protected render() {
    return html`
      <${this.tag} part=${partMap(this.rootClassesParts)} class=${classMap(
        this.rootClassesParts
      )}>
        <slot></slot>
      </${this.tag}>
    `;
  }
}
