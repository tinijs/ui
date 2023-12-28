import {
  LitElement,
  PropertyValues,
  CSSResultOrNative,
  unsafeCSS,
  getCompatibleStyle,
  adoptStyles,
} from 'lit';
import {property} from 'lit/decorators.js';
import {html, unsafeStatic, StaticValue} from 'lit/static-html.js';
import {
  CHANGE_THEME_EVENT,
  getTheme,
  extractGenericAttributes,
  buildStyleTextFromAttributes,
  buildStyleTextFromTheming,
} from 'tinijs';

/* Raw(LitElement,react-any-props) */
export class TiniGenericComponent extends LitElement {
  static readonly SELF_CLOSING_TAGS = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ];
  static readonly defaultTagName = 'tini-generic';
  readonly componentName = 'generic';

  private currentTheme = getTheme();
  private styleAttributes?: Record<string, string>;
  private forwardAttributes?: Record<string, string>;

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare tag?: string;
  @property({type: String, reflect: true}) declare name?: string;
  @property({type: Object}) declare theming?: Record<string, string>;
  @property() declare styleDeep?: string | CSSResultOrNative;
  /* eslint-enable prettier/prettier */

  private postprocessStyleText = (styleText: string) => {
    return styleText.replace(/&/g, '.root');
  };

  private onThemeChange = (e: Event) => {
    this.currentTheme = (e as CustomEvent).detail.theme;
    this.customAdoptStyles(this.renderRoot || this);
  };

  connectedCallback() {
    super.connectedCallback();
    // extract attributes & adopt styles
    const {styleAttributes, forwardAttributes} = extractGenericAttributes(
      this.attributes,
      (this.constructor as any).observedAttributes || []
    );
    this.styleAttributes = styleAttributes;
    this.forwardAttributes = forwardAttributes;
    this.customAdoptStyles(this.renderRoot || this);
    // on theme change
    window.addEventListener(CHANGE_THEME_EVENT, this.onThemeChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // off theme change
    window.removeEventListener(CHANGE_THEME_EVENT, this.onThemeChange);
  }

  private rootTag!: StaticValue;
  private rootAttributes!: StaticValue;
  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // root tag
    this.rootTag = unsafeStatic(this.tag || 'span');
    // root attributes
    this.rootAttributes = unsafeStatic(
      Object.entries({
        class: 'root',
        part: 'root',
        ...this.forwardAttributes,
      })
        .map(([name, value]) => {
          if (~['class', 'part'].indexOf(name) && value !== 'root') {
            value = `${value} root`;
          }
          return `${name}="${value}"`;
        })
        .join(' ')
    );
  }

  private customAdoptStyles(renderRoot: HTMLElement | DocumentFragment) {
    const attributeStyleText = buildStyleTextFromAttributes(
      'root',
      this.styleAttributes
    );
    const themingStyleText = buildStyleTextFromTheming(
      this.theming,
      this.currentTheme,
      this.postprocessStyleText
    );
    // build styles
    const styles: CSSResultOrNative[] = [];
    if (attributeStyleText) {
      // attribute
      styles.push(getCompatibleStyle(unsafeCSS(attributeStyleText)));
    }
    if (this.styleDeep) {
      // deep
      styles.push(
        getCompatibleStyle(
          typeof this.styleDeep === 'string'
            ? unsafeCSS(this.postprocessStyleText(this.styleDeep))
            : this.styleDeep
        )
      );
    }
    if (themingStyleText) {
      // theming
      styles.push(getCompatibleStyle(unsafeCSS(themingStyleText)));
    }
    // apply styles
    adoptStyles(renderRoot as unknown as ShadowRoot, styles);
  }

  protected render() {
    return this.tag &&
      ~(this.constructor as any).SELF_CLOSING_TAGS.indexOf(this.tag)
      ? html`<${this.rootTag} ${this.rootAttributes} />`
      : html`<${this.rootTag} ${this.rootAttributes}><slot></slot></${this.rootTag}>`;
  }
}
