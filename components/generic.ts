import {
  LitElement,
  PropertyValues,
  unsafeCSS,
  getCompatibleStyle,
  adoptStyles,
} from 'lit';
import {property} from 'lit/decorators.js';
import {html, unsafeStatic, StaticValue} from 'lit/static-html.js';
import {
  GLOBAL_TINI,
  THEME_CHANGE_EVENT,
  EventForwarding,
  ActiveTheme,
  GenericThemingOptions,
  forwardEvents,
  getTheme,
  adoptScripts,
  processComponentStyles,
  genericComponentProcessAttributes,
  genericComponentBuildStyleTextFromAttributes,
  genericComponentBuildStyleTextFromStyling,
  genericComponentBuildAndCacheStyles,
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
  static readonly componentName = 'generic';

  private activeTheme = getTheme();

  styleAttributes?: Map<string, string>;
  forwardAttributes?: Map<string, string>;

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare name?: string;
  @property({type: String, reflect: true}) declare tag?: string;
  @property({type: String, reflect: true}) declare styleDeep?: string;
  @property({type: String, reflect: true}) declare precomputed?: string;
  @property({type: Object}) declare theming?: GenericThemingOptions;
  @property() declare events?: string | Array<string | Omit<EventForwarding, 'target'>>;
  /* eslint-enable prettier/prettier */

  private onThemeChange = (e: Event) => {
    this.activeTheme = (e as CustomEvent<ActiveTheme>).detail;
    this.customAdoptStyles(this.renderRoot || this);
    this.customAdoptScripts();
  };

  connectedCallback() {
    super.connectedCallback();
    // process attributes
    genericComponentProcessAttributes(this);
    // adopt styles
    this.customAdoptStyles(this.renderRoot || this);
    // on theme change
    window.addEventListener(THEME_CHANGE_EVENT, this.onThemeChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // off theme change
    window.removeEventListener(THEME_CHANGE_EVENT, this.onThemeChange);
  }

  private rootTag!: StaticValue;
  private rootAttributes!: StaticValue;
  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // root tag
    this.rootTag = unsafeStatic(this.tag || 'span');
    // root attributes
    this.rootAttributes = unsafeStatic(
      [
        ['class', 'root'],
        ['part', 'root'],
      ]
        .concat(
          !this.forwardAttributes ? [] : Array.from(this.forwardAttributes)
        )
        .map(([name, value]) => {
          if (~['class', 'part'].indexOf(name) && value !== 'root') {
            value = `${value} root`;
          }
          return `${name}="${value}"`;
        })
        .join(' ')
    );
  }

  protected firstUpdated() {
    this.customAdoptScripts();
    if (this.events) forwardEvents(this, this.events);
  }

  private buildStyles() {
    const attributeStyleText = genericComponentBuildStyleTextFromAttributes(
      'root',
      this.styleAttributes
    );
    const themingStyleText = genericComponentBuildStyleTextFromStyling(
      this.theming?.styling,
      this.activeTheme.themeId
    );
    // build style text
    const allStyles: string[] = [];
    if (attributeStyleText) allStyles.push(attributeStyleText); // from attributes
    if (this.styleDeep) allStyles.push(this.styleDeep); // from styleDeep
    if (themingStyleText) allStyles.push(themingStyleText); // from theming
    const styleText = processComponentStyles(allStyles, this.activeTheme);
    // result
    return [getCompatibleStyle(unsafeCSS(styleText))];
  }

  private customAdoptStyles(renderRoot: HTMLElement | DocumentFragment) {
    const styles = genericComponentBuildAndCacheStyles(
      this.precomputed,
      this.activeTheme,
      (GLOBAL_TINI.cachedGenericStyles ||= {}),
      () => this.buildStyles()
    );
    // apply styles
    adoptStyles(renderRoot as unknown as ShadowRoot, styles);
  }

  private customAdoptScripts() {
    adoptScripts(this, this.activeTheme, this.theming?.scripting);
  }

  protected createRenderRoot() {
    return (
      this.shadowRoot ??
      this.attachShadow(
        (this.constructor as typeof LitElement).shadowRootOptions
      )
    );
  }

  protected render() {
    return this.tag &&
      ~(this.constructor as any).SELF_CLOSING_TAGS.indexOf(this.tag)
      ? html`<${this.rootTag} ${this.rootAttributes} />`
      : html`<${this.rootTag} ${this.rootAttributes}><slot></slot></${this.rootTag}>`;
  }
}
