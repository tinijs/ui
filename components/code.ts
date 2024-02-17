import {html, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ref, Ref, createRef} from 'lit/directives/ref.js';

import {TiniElement, partAttrMap, UICodeOptions} from 'tinijs';

/* UseBases(common,code) */
export class TiniCodeComponent extends TiniElement {
  static readonly defaultTagName = 'tini-code';
  static readonly componentName = 'code';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare language: string;
  @property({type: String, reflect: true}) declare content: string;
  /* eslint-enable prettier/prettier */

  private readonly styleRef: Ref<HTMLStyleElement> = createRef();
  private readonly codeRef: Ref<HTMLElement> = createRef();

  private validateProperties() {
    if (!this.language) throw new Error('Property "language" is required.');
    if (!this.content) throw new Error('Property "content" is required.');
  }

  private codeClasses: ClassInfo = {};
  private componentOptions: UICodeOptions = {
    engine: 'none',
    highlight: (_, code) => code,
  };
  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // default and validations
    this.validateProperties();
    // root classes parts
    this.extendRootClasses({});
    // code classes parts
    this.componentOptions = this.getGlobalOptions().componentOptions;
    this.codeClasses = {
      code: true,
      [this.componentOptions.engine]: true,
      [`language-${this.language}`]: true,
    };
  }

  async updated() {
    if (this.codeRef.value && this.styleRef.value) {
      if (this.componentOptions.theme) {
        this.styleRef.value.textContent = this.componentOptions.theme;
      }
      this.codeRef.value.innerHTML = await this.componentOptions.highlight?.(
        this.language,
        this.content,
        this.styleRef.value
      );
    }
  }

  protected render() {
    return html`
      <style ${ref(this.styleRef)}></style>
      <pre
        class=${classMap(this.rootClasses)}
        part=${partAttrMap(this.rootClasses)}
      ><code
          ${ref(this.codeRef)}
          class=${classMap(this.codeClasses)}
          part=${partAttrMap(this.codeClasses)}
        ></code></pre>
    `;
  }
}
