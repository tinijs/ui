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
} from 'tinijs';

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

/* UseBases(common,headings) */
export class TiniTextComponent extends LitElement {
  static readonly defaultTagName = 'tini-text';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare type?: TextTypes;
  @property({type: Boolean, reflect: true}) declare italic?: boolean;
  @property({type: Boolean, reflect: true}) declare underline?: boolean;
  @property({type: String, reflect: true}) declare color?: ColorsAndGradients;
  @property({type: String, reflect: true}) declare fontSize?: FontSizeFactors;
  @property({type: String, reflect: true}) declare font?: FontTypes;
  @property({type: String, reflect: true}) declare weight?: FontWeights;
  @property({type: String, reflect: true}) declare transform?: TextTransforms;
  /* eslint-enable prettier/prettier */

  private tag!: StaticValue;
  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    // root tag
    this.tag = literal`${unsafeStatic(this.type || TextTypes.Span)}`;
    // root classes parts
    this.rootClassesParts = {
      root: true,
      italic: !!this.italic,
      underline: !!this.underline,
      [`color-${this.color}`]: !!this.color,
      [`font-size-${this.fontSize}`]: !!this.fontSize,
      [`font-${this.font}`]: !!this.font,
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
