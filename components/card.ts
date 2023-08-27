import {LitElement, html} from 'lit';
import {property, state, queryAssignedElements} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {partMap, PartInfo} from 'tinijs';

/* UseBases(common) */
export class TiniCardComponent extends LitElement {
  static readonly defaultTagName = 'tini-card';

  /* eslint-disable prettier/prettier */
  @property({type: Boolean, reflect: true}) declare fluid?: boolean;
  /* eslint-enable prettier/prettier */

  /* eslint-disable prettier/prettier */
  @queryAssignedElements({slot: 'head'}) private readonly headSlotElems?: HTMLElement[];
  @queryAssignedElements({slot: 'foot'}) private readonly footSlotElems?: HTMLElement[];
  /* eslint-enable prettier/prettier */
  @state() private headSlotPopulated = false;
  @state() private footSlotPopulated = false;

  private rootClassesParts: ClassInfo | PartInfo = {};
  private headClassesParts: ClassInfo | PartInfo = {};
  private bodyClassesParts: ClassInfo | PartInfo = {};
  private footClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    // root class
    this.rootClassesParts = {
      root: true,
      fluid: !!this.fluid,
    };
    // head classes or parts
    this.headClassesParts = {
      head: true,
      'head-populated': this.headSlotPopulated,
    };
    // body classes or parts
    this.bodyClassesParts = {
      body: true,
    };
    // foot classes or parts
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
