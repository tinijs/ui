import {LitElement} from 'lit';
import {property} from 'lit/decorators.js';
import {nanoid} from 'nanoid';
import {
  GLOBAL_TINI,
  THEME_CHANGE_EVENT,
  ActiveTheme,
  GenericThemingOptions,
  getTheme,
  adoptScripts,
  processComponentStyles,
  genericComponentProcessAttributes,
  genericComponentBuildStyleTextFromAttributes,
  genericComponentBuildStyleTextFromStyling,
  genericComponentBuildAndCacheStyles,
} from 'tinijs';

/* Raw(LitElement,react-any-props) */
export class TiniGenericUnscopedComponent extends LitElement {
  static readonly defaultTagName = 'tini-generic-unscoped';
  static readonly componentName = 'generic-unscoped';

  readonly internalClassName = `_${nanoid(6)}`;
  private activeTheme = getTheme();

  styleAttributes?: Map<string, string>;

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare name?: string;
  @property({type: String, reflect: true}) declare styleDeep?: string;
  @property({type: String, reflect: true}) declare precomputed?: string;
  @property({type: Object}) declare theming?: GenericThemingOptions;
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
    // assign internal class
    this.classList.add(this.internalClassName);
    // on theme change
    window.addEventListener(THEME_CHANGE_EVENT, this.onThemeChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // off theme change
    window.removeEventListener(THEME_CHANGE_EVENT, this.onThemeChange);
  }

  protected firstUpdated() {
    this.customAdoptScripts();
  }

  private buildStyles() {
    const attributeStyleText = genericComponentBuildStyleTextFromAttributes(
      this.internalClassName,
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
    const styleText = processComponentStyles(
      allStyles,
      this.activeTheme,
      content => content.replace(/\.root/g, `.${this.internalClassName}`)
    );
    // result
    return [styleText];
  }

  private customAdoptStyles(renderRoot: HTMLElement | DocumentFragment) {
    const styles = genericComponentBuildAndCacheStyles(
      this.precomputed,
      this.activeTheme,
      (GLOBAL_TINI.cachedGenericUnscopedStyles ||= {}),
      () => this.buildStyles()
    );
    // apply styles
    const currentStyleElement = renderRoot.querySelector('style');
    const styleElement = currentStyleElement || document.createElement('style');
    styleElement.textContent = styles.join('\n');
    if (!currentStyleElement) renderRoot.appendChild(styleElement);
  }

  private customAdoptScripts() {
    adoptScripts(this, this.activeTheme, this.theming?.scripting);
  }

  protected createRenderRoot() {
    return this;
  }
}
