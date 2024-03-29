import {PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {html, unsafeStatic, StaticValue} from 'lit/static-html.js';

import {
  TiniElement,
  partAttrMap,
  VaryGroups,
  Colors,
  Gradients,
  Factors,
  FontTypes,
  FontWeights,
  TextTransforms,
} from 'tinijs';

/* UseBases(common,headings) */
export class TiniHeadingComponent extends TiniElement {
  static readonly defaultTagName = 'tini-heading';
  static readonly componentName = 'heading';

  /* eslint-disable prettier/prettier */
  @property({type: Number, reflect: true}) declare level?: number;
  @property({type: Boolean, reflect: true}) declare italic?: boolean;
  @property({type: Boolean, reflect: true}) declare underline?: boolean;
  @property({type: String, reflect: true}) declare color?: Colors | Gradients;
  @property({type: String, reflect: true}) declare fontType?: FontTypes;
  @property({type: String, reflect: true}) declare fontSize?: Factors;
  @property({type: String, reflect: true}) declare fontWeight?: FontWeights;
  @property({type: String, reflect: true}) declare textTransform?: TextTransforms;
  /* eslint-enable prettier/prettier */

  private rootTag!: StaticValue;
  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // set role
    this.setAttribute('role', 'heading');
    // root tag
    this.rootTag = unsafeStatic(`h${this.level || 1}`);
    // root classes parts
    this.extendRootClasses({
      raw: {
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
        class=${classMap(this.rootClasses)}
        part=${partAttrMap(this.rootClasses)}
      >
        <slot></slot>
      </${this.rootTag}>
    `;
  }
}
