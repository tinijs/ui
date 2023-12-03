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
export class TiniBadgeComponent extends TiniElement {
  static readonly defaultTagName = 'tini-badge';
  readonly componentName = 'badge';

  /* eslint-disable prettier/prettier */
  @property({type: Boolean, reflect: true}) declare pill?: boolean;
  @property({type: Boolean, reflect: true}) declare circle?: boolean;
  @property({type: String, reflect: true}) declare scheme?: Colors | Gradients;
  @property({type: String, reflect: true}) declare scale?: Scales;
  @property({type: String, reflect: true}) declare color?: Colors;
  /* eslint-enable prettier/prettier */

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root classes parts
    this.extendRootClassesParts({
      info: {
        pill: !!this.pill,
        circle: !!this.circle,
      },
      overridable: {
        [VaryGroups.Scheme]: this.scheme,
        [VaryGroups.Scale]: this.scale,
        [VaryGroups.Color]: this.color,
      },
    });
  }

  protected render() {
    return html`
      <span
        part=${partMap(this.activeRootClassesParts)}
        class=${classMap(this.activeRootClassesParts)}
        style=${styleMap(this.activeRootStyles)}
      >
        <slot></slot>
      </span>
    `;
  }
}
