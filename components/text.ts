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
  FontTypes,
  FontWeights,
  TextTransforms,
} from 'tinijs';

export enum TextTags {
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
export class TiniTextComponent extends TiniElement {
  static readonly defaultTagName = 'tini-text';
  readonly componentName = 'text';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare tag?: TextTags;
  @property({type: Boolean, reflect: true}) declare italic?: boolean;
  @property({type: Boolean, reflect: true}) declare underline?: boolean;
  @property({type: String, reflect: true}) declare color?: Colors | Gradients;
  @property({type: String, reflect: true}) declare fontType?: FontTypes;
  @property({type: String, reflect: true}) declare fontSize?: Factors;
  @property({type: String, reflect: true}) declare fontWeight?: FontWeights;
  @property({type: String, reflect: true}) declare textTransform?: TextTransforms;
  /* eslint-enable prettier/prettier */

  private rootTag!: StaticValue;
  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root tag
    this.rootTag = literal`${unsafeStatic(this.tag || TextTags.Span)}`;
    // root classes parts
    this.extendRootClassesParts({
      info: {
        italic: !!this.italic,
        underline: !!this.underline,
      },
      overridable: {
        [VaryGroups.Color]: this.color,
        [VaryGroups.FontType]: this.fontType,
        [VaryGroups.FontSize]: this.fontSize,
        [VaryGroups.FontWeight]: this.fontWeight,
        [VaryGroups.TextTransform]: this.textTransform,
      },
    });
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
