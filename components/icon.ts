import {html, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
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

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root classes parts
    this.extendRootClassesParts({
      info: {
        scheme: !!this.scheme,
      },
      overridable: {
        [VaryGroups.Scale]: this.scale,
        [VaryGroups.Scheme]: this.scheme,
      },
    });
    // root styles
    this.extendRootStyles({
      '--icon-image': `url(${this.src})`,
    });
  }

  protected render() {
    return html`
      <i
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
        style=${styleMap(this.rootStyles)}
      ></i>
    `;
  }
}
