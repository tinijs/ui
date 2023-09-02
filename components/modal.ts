import {html, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ref, Ref, createRef} from 'lit/directives/ref.js';
import {TiniElement, partMap} from 'tinijs';

import {DialogButton, DialogResult} from './dialog';

export type ModalButton = DialogButton;
export type ModalResult<Context> = DialogResult<Context>;

/* UseBases(common) */
export class TiniModalComponent extends TiniElement {
  static readonly defaultTagName = 'tini-modal';

  private readonly BACKDROP_CLOSED = 'backdrop-closed';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare titleText?: string;
  @property({type: Boolean, reflect: true}) declare backdropClosed?: boolean;
  @property({type: Object}) declare noButton?: ModalButton;
  @property({type: Object}) declare yesButton?: ModalButton;
  /* eslint-enable prettier/prettier */

  private dialogRef: Ref<HTMLDialogElement> = createRef();
  private context?: unknown;

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root classes parts
    this.extendRootClassesParts({
      [this.BACKDROP_CLOSED]: !!this.backdropClosed,
    });
  }

  get opened() {
    return this.dialogRef.value?.open;
  }

  get result(): DialogResult<unknown> {
    return {
      context: this.context,
      dialog: this.dialogRef.value as HTMLDialogElement,
    };
  }

  show<Context>(context?: Context) {
    if (!this.dialogRef.value) return;
    this.context = context;
    this.dialogRef.value.showModal();
  }

  hide() {
    if (!this.dialogRef.value) return;
    this.dialogRef.value.close();
  }

  private clickDialog(e: MouseEvent) {
    if (!this.backdropClosed) return;
    const targetPart = (e.target as any)?.getAttribute('part');
    if (targetPart && ~targetPart.indexOf(this.BACKDROP_CLOSED)) this.clickNo();
  }

  private clickNo() {
    this.dispatchEvent(new CustomEvent('no', {detail: this.result}));
  }

  private clickYes() {
    this.dispatchEvent(new CustomEvent('yes', {detail: this.result}));
  }

  protected render() {
    return html`
      <dialog
        ${ref(this.dialogRef)}
        part=${partMap(this.rootClassesParts)}
        class=${classMap(this.rootClassesParts)}
        style=${styleMap(this.rootStyles)}
        @click=${this.clickDialog}
      >
        <div part="head" class="head">
          <slot name="head">
            <strong>${this.titleText || 'Untitled'}</strong>
            <button @click=${this.clickNo}>✕</button>
          </slot>
        </div>
        <div part="body" class="body">
          <slot></slot>
        </div>
        <div part="foot" class="foot">
          <slot name="foot">
            <div part="foot-left" class="foot-left">
              <tini-button
                scheme=${this.noButton?.scheme || 'medium'}
                @click=${this.clickNo}
              >
                ${this.noButton?.text || 'Cancel'}
              </tini-button>
            </div>
            <div part="foot-right" class="foot-right">
              <tini-button
                scheme=${this.yesButton?.scheme || 'primary'}
                @click=${this.clickYes}
              >
                ${this.yesButton?.text || 'OK'}
              </tini-button>
            </div>
          </slot>
        </div>
      </dialog>
    `;
  }
}
