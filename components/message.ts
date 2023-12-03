import {html, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {TiniElement, partMap, VaryGroups, Colors, Factors} from 'tinijs';

/* UseBases(common) */
export class TiniMessageComponent extends TiniElement {
  static readonly defaultTagName = 'tini-message';
  readonly componentName = 'message';
  readonly componentMetas = {
    colorOnlyScheme: true,
  };

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare scheme?: Colors;
  @property({type: String, reflect: true}) declare color?: Colors;
  @property({type: String, reflect: true}) declare fontSize?: Factors;
  /* eslint-enable prettier/prettier */

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root classes parts
    this.extendRootClassesParts({
      overridable: {
        [VaryGroups.Scheme]: this.scheme,
        [VaryGroups.Color]: this.color,
        [VaryGroups.FontSize]: this.fontSize,
      },
    });
  }

  protected render() {
    return html`
      <div
        part=${partMap(this.activeRootClassesParts)}
        class=${classMap(this.activeRootClassesParts)}
        style=${styleMap(this.activeRootStyles)}
      >
        <slot></slot>
      </div>
    `;
  }
}
