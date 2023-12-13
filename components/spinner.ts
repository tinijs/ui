import {html, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {TiniElement, partMap, VaryGroups, Colors, Scales} from 'tinijs';

/* UseBases(common) */
export class TiniSpinnerComponent extends TiniElement {
  static readonly defaultTagName = 'tini-spinner';
  readonly componentName = 'spinner';
  readonly componentMetas = {
    colorOnlyScheme: true,
  };

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare scheme?: Colors;
  @property({type: String, reflect: true}) declare scale?: Scales;
  /* eslint-enable prettier/prettier */

  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // root classes parts
    this.extendRootClasses({
      overridable: {
        [VaryGroups.Scheme]: this.scheme,
        [VaryGroups.Scale]: this.scale,
      },
    });
  }

  protected render() {
    return html`
      <div
        class=${classMap(this.rootClasses)}
        part=${partMap(this.rootClasses)}
      ></div>
    `;
  }
}
