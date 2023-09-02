import {html, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {TiniElement, partMap, VaryGroups, Colors, Scales} from 'tinijs';

/* UseBases(common) */
export class TiniSpinnerComponent extends TiniElement {
  static readonly defaultTagName = 'tini-spinner';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare scheme?: Colors;
  @property({type: String, reflect: true}) declare scale?: Scales;
  /* eslint-enable prettier/prettier */

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root classes parts
    this.extendRootClassesParts({
      [`${VaryGroups.Scheme}-${this.scheme}`]: !!this.scheme,
      [`${VaryGroups.Scale}-${this.scale}`]: !!this.scale,
    });
  }

  protected render() {
    return html`
      <div
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
        style=${styleMap(this.rootStyles)}
      ></div>
    `;
  }
}
