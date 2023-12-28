import {LitElement, CSSResultOrNative} from 'lit';
import {property} from 'lit/decorators.js';
import {
  CHANGE_THEME_EVENT,
  randomClassName,
  getTheme,
  extractGenericAttributes,
  buildStyleTextFromAttributes,
  buildStyleTextFromTheming,
} from 'tinijs';

/* Raw(LitElement,react-any-props) */
export class TiniGenericUnscopedComponent extends LitElement {
  static readonly defaultTagName = 'tini-generic-unscoped';
  readonly componentName = 'generic-unscoped';

  readonly internalClassName = randomClassName(7, true);
  private currentTheme = getTheme();
  private styleAttributes?: Record<string, string>;

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare name?: string;
  @property({type: Object}) declare theming?: Record<string, string>;
  @property() declare styleDeep?: string | CSSResultOrNative;
  /* eslint-enable prettier/prettier */

  private postprocessStyleText = (styleText: string) => {
    return styleText
      .replace(/&/g, '.root')
      .replace(/\.root/g, `.${this.internalClassName}`);
  };

  private onThemeChange = (e: Event) => {
    this.currentTheme = (e as CustomEvent).detail.theme;
    this.customAdoptStyles(this.renderRoot || this);
  };

  connectedCallback() {
    super.connectedCallback();
    // adopt styles
    const {styleAttributes} = extractGenericAttributes(
      this.attributes,
      (this.constructor as any).observedAttributes || []
    );
    this.styleAttributes = styleAttributes;
    this.customAdoptStyles(this.renderRoot || this);
    // assign internal class
    this.classList.add(this.internalClassName);
    // on theme change
    window.addEventListener(CHANGE_THEME_EVENT, this.onThemeChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // off theme change
    window.removeEventListener(CHANGE_THEME_EVENT, this.onThemeChange);
  }

  private customAdoptStyles(renderRoot: HTMLElement | DocumentFragment) {
    const attributeStyleText = buildStyleTextFromAttributes(
      this.internalClassName,
      this.styleAttributes
    );
    const themingStyleText = buildStyleTextFromTheming(
      this.theming,
      this.currentTheme,
      this.postprocessStyleText
    );
    // build styles
    const styles: string[] = [];
    if (attributeStyleText) {
      // attribute
      styles.push(attributeStyleText);
    }
    if (this.styleDeep) {
      // deep
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
    if (themingStyleText) {
      // theming
      styles.push(themingStyleText);
    }
    // apply styles
    const currentStyleElement = renderRoot.querySelector('style');
    const styleElement = currentStyleElement || document.createElement('style');
    styleElement.textContent = styles.join('\n');
    if (!currentStyleElement) renderRoot.appendChild(styleElement);
  }

  protected createRenderRoot() {
    return this;
  }
}
