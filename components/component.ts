import {PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {html, literal, unsafeStatic, StaticValue} from 'lit/static-html.js';
import {TiniElement, partMap} from 'tinijs';

/* UseBases(common,headings,text,link,button,form,code) */
export class TiniComponentComponent extends TiniElement {
  static readonly defaultTagName = 'tini-component';
  readonly componentName = 'component';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare tag?: string;
  /* eslint-enable prettier/prettier */

  private rootTag!: StaticValue;
  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root tag
    this.rootTag = literal`${unsafeStatic(this.tag || 'div')}`;
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
