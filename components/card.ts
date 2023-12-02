import {html, PropertyValues} from 'lit';
import {property, state, queryAssignedElements} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {TiniElement, partMap, PartInfo, VaryGroups, BoxShadows} from 'tinijs';

/* UseBases(common) */
export class TiniCardComponent extends TiniElement {
  static readonly defaultTagName = 'tini-card';
  readonly componentName = 'card';

  /* eslint-disable prettier/prettier */
  @property({type: Boolean, reflect: true}) declare fluid?: boolean;
  @property({type: String, reflect: true}) declare shadow?: BoxShadows;
  /* eslint-enable prettier/prettier */

  /* eslint-disable prettier/prettier */
  @queryAssignedElements({slot: 'head'}) private readonly headSlotElems?: HTMLElement[];
  @queryAssignedElements({slot: 'foot'}) private readonly footSlotElems?: HTMLElement[];
  /* eslint-enable prettier/prettier */
  @state() private headSlotPopulated = false;
  @state() private footSlotPopulated = false;

  private headClassesParts: ClassInfo | PartInfo = {};
  private bodyClassesParts: ClassInfo | PartInfo = {};
  private footClassesParts: ClassInfo | PartInfo = {};
  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root classes parts
    this.extendRootClassesParts({
      info: {
        fluid: !!this.fluid,
      },
      overridable: {
        [VaryGroups.BoxShadow]: this.shadow,
      },
    });
    // head classes parts
    this.headClassesParts = {
      head: true,
      'head-populated': this.headSlotPopulated,
    };
    // body classes parts
    this.bodyClassesParts = {
      body: true,
    };
    // foot classes parts
    this.footClassesParts = {
      foot: true,
      'foot-populated': this.footSlotPopulated,
    };
  }

  protected render() {
    return html`
      <div
        class=${classMap(this.rootClassesParts)}
        part=${partMap(this.rootClassesParts)}
        style=${styleMap(this.rootStyles)}
      >
        <div
          class=${classMap(this.headClassesParts)}
          part=${partMap(this.headClassesParts)}
        >
          <slot
            name="head"
            @slotchange=${() =>
              (this.headSlotPopulated = !!this.headSlotElems?.length)}
          ></slot>
        </div>

        <div
          class=${classMap(this.bodyClassesParts)}
          part=${partMap(this.bodyClassesParts)}
        >
          <slot></slot>
        </div>

        <div
          class=${classMap(this.footClassesParts)}
          part=${partMap(this.footClassesParts)}
        >
          <slot
            name="foot"
            @slotchange=${() =>
              (this.footSlotPopulated = !!this.footSlotElems?.length)}
          ></slot>
        </div>
      </div>
    `;
  }
}
