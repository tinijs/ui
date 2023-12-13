import {html, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap, StyleInfo} from 'lit/directives/style-map.js';
import {
  TiniElement,
  partMap,
  VaryGroups,
  Colors,
  Gradients,
  Scales,
} from 'tinijs';

/* UseBases(common) */
export class TiniIconComponent extends TiniElement {
  static readonly defaultTagName = 'tini-icon';
  readonly componentName = 'icon';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare src?: string;
  @property({type: String, reflect: true}) declare scale?: Scales;
  @property({type: String, reflect: true}) declare scheme?: Colors | Gradients;
  /* eslint-enable prettier/prettier */

  private rootStyles: StyleInfo = {};
  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);
    // root classes parts
    this.extendRootClasses({
      raw: {
        scheme: !!this.scheme,
      },
      overridable: {
        [VaryGroups.Scale]: this.scale,
        [VaryGroups.Scheme]: this.scheme,
      },
    });
    // root styles
    this.rootStyles = {
      '--icon-image': `url(${this.src})`,
    };
  }

  protected render() {
    return html`
      <i
        class=${classMap(this.rootClasses)}
        part=${partMap(this.rootClasses)}
        style=${styleMap(this.rootStyles)}
      ></i>
    `;
  }
}
