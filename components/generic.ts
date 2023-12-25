import {
  LitElement,
  ReactiveElement,
  PropertyValues,
  CSSResultOrNative,
  nothing,
  unsafeCSS,
  getCompatibleStyle,
  adoptStyles,
} from 'lit';
import {property} from 'lit/decorators.js';
import {html, unsafeStatic, StaticValue} from 'lit/static-html.js';
import {CHANGE_THEME_EVENT, randomClassName, getTheme} from 'tinijs';

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

  readonly internalClassName = randomClassName(7, true);
  private currentTheme = getTheme();
  private styleAttributes?: Record<string, string>;
  private forwardAttributes?: Record<string, string>;

  /* eslint-disable prettier/prettier */
  @property({type: Boolean, reflect: true}) declare unscoped?: boolean;
  @property({type: String, reflect: true}) declare tag?: string;
  @property({type: String, reflect: true}) declare name?: string;
  @property() declare styleDeep?: string | CSSResultOrNative;
  @property({type: Object}) declare theming?: Record<string, string>;
  /* eslint-enable prettier/prettier */

  protected createRenderRoot() {
    return this.unscoped
      ? this
      : this.shadowRoot ??
          this.attachShadow(
            (this.constructor as typeof ReactiveElement).shadowRootOptions
          );
  }

  private onThemeChange = (e: Event) => {
    this.currentTheme = (e as CustomEvent).detail.theme;
    this.customAdoptStyles(this.renderRoot || this);
  };

  connectedCallback() {
    super.connectedCallback();
    // adopt styles
    this.processAttributes();
    this.customAdoptStyles(this.renderRoot || this);
    // assign internal class
    if (this.unscoped) this.classList.add(this.internalClassName);
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
    const attributeStyleText = this.buildStyleTextFromAttributes();
    const themingStyleText = this.buildStyleTextFromTheming();
    // adopt styles
    if (!this.unscoped) {
      const styles: CSSResultOrNative[] = [];
      // attribute styles
      if (attributeStyleText) {
        styles.push(getCompatibleStyle(unsafeCSS(attributeStyleText)));
      }
      // deep styles
      if (this.styleDeep) {
        styles.push(
          getCompatibleStyle(
            typeof this.styleDeep === 'string'
              ? unsafeCSS(this.postprocessStyleText(this.styleDeep))
              : this.styleDeep
          )
        );
      }
      // theming styles
      if (themingStyleText) {
        styles.push(getCompatibleStyle(unsafeCSS(themingStyleText)));
      }
      // apply
      adoptStyles(renderRoot as unknown as ShadowRoot, styles);
    } else {
      const styles: string[] = [];
      // attribute styles
      if (attributeStyleText) {
        styles.push(attributeStyleText);
      }
      // deep styles
      if (this.styleDeep) {
        let deepStyleText = '';
        if (typeof this.styleDeep === 'string') {
          deepStyleText = this.styleDeep;
        } else if (this.styleDeep instanceof CSSStyleSheet) {
          for (const rule of this.styleDeep.cssRules as any) {
            deepStyleText += rule.cssText;
          }
        } else {
          deepStyleText = this.styleDeep.cssText;
        }
        styles.push(this.postprocessStyleText(deepStyleText));
      }
      // theming styles
      if (themingStyleText) {
        styles.push(themingStyleText);
      }
      // apply
      const currentStyleElement = renderRoot.querySelector('style');
      const styleElement =
        currentStyleElement || document.createElement('style');
      styleElement.textContent = styles.join('\n');
      if (!currentStyleElement) {
        renderRoot.insertBefore(styleElement, renderRoot.firstChild);
      }
    }
  }

  private processAttributes() {
    const componentProps = (this.constructor as any).observedAttributes || [];
    // extract attributes
    let styleAttributes: undefined | Record<string, string>;
    let forwardAttributes: undefined | Record<string, string>;
    for (let i = 0; i < this.attributes.length; i++) {
      const {name, value} = this.attributes[i];
      if (
        name in HTMLElement.prototype ||
        ~componentProps.indexOf(name) ||
        name.startsWith('data-') ||
        name.startsWith('aria-')
      )
        continue;
      if (name.substring(name.length - 5) !== '-attr') {
        if (!styleAttributes) styleAttributes = {};
        styleAttributes[name] = value;
      } else {
        if (!forwardAttributes) forwardAttributes = {};
        forwardAttributes[name.substring(0, name.length - 5)] = value;
      }
    }
    // set values
    this.styleAttributes = styleAttributes;
    this.forwardAttributes = forwardAttributes;
  }

  private postprocessStyleText(styleText: string) {
    styleText = styleText.replace(/&/g, '.root');
    return !this.unscoped
      ? styleText
      : styleText.replace(/\.root/g, `.${this.internalClassName}`);
  }

  private buildStyleTextFromAttributes() {
    return !this.styleAttributes
      ? ''
      : `
      .${!this.unscoped ? 'root' : this.internalClassName} {
        ${Object.entries(this.styleAttributes)
          .map(([name, value]) => `${name}: ${value};`)
          .join('\n')}
      }
    `;
  }

  private buildStyleTextFromTheming() {
    if (!this.theming || !this.currentTheme) return '';
    if (this.theming[this.currentTheme]) {
      return this.postprocessStyleText(this.theming[this.currentTheme]);
    }
    const soulOnly = `${this.currentTheme.split('/')[0]}/*`;
    if (!this.theming[soulOnly]) {
      return '';
    } else {
      return this.postprocessStyleText(this.theming[soulOnly]);
    }
  }

  protected render() {
    return this.unscoped
      ? nothing
      : this.tag &&
          ~(this.constructor as any).SELF_CLOSING_TAGS.indexOf(this.tag)
        ? html`<${this.rootTag} ${this.rootAttributes} />`
        : html`<${this.rootTag} ${this.rootAttributes}><slot></slot></${this.rootTag}>`;
  }
}
