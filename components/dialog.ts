import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {ref, Ref, createRef} from 'lit/directives/ref.js';
import {partMap, PartInfo, ColorsAndGradients, Sizes} from '@tinijs/core';

export enum DialogTypes {
  Alert = 'alert',
  Confirm = 'confirm',
  Prompt = 'prompt',
}

export interface DialogButton {
  text: string;
  color: ColorsAndGradients;
}

export interface DialogResult<Context> {
  context: Context;
  dialog: HTMLDialogElement;
}

export const TINI_DIALOG = 'tini-dialog';

/* UseBases(common) */
/* UseComponents(button) */
export class TiniDialogComponent extends LitElement {
  static readonly defaultTagName = TINI_DIALOG;

  @property({type: String}) declare type: DialogTypes;
  @property({type: String}) declare titleText?: string;
  @property({type: Boolean}) declare backdropClosed?: boolean;
  @property({type: Object}) declare noButton?: DialogButton;
  @property({type: Object}) declare yesButton?: DialogButton;

  private dialogRef: Ref<HTMLDialogElement> = createRef();
  private context?: unknown;

  constructor() {
    super();
    this.type = DialogTypes.Alert;
  }

  private rootClassesParts: ClassInfo | PartInfo = {};
  willUpdate() {
    this.rootClassesParts = {
      root: true,
      [this.type]: true,
      'backdrop-closed': !!this.backdropClosed,
    };
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
    const backdropClicked = !!(e.target as any)?.getAttribute('part');
    if (backdropClicked) this.clickNo();
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
        @click=${this.clickDialog}
      >
        <div part="head" class="head">
          <em>${this.titleText || 'Untitled'}</em>
          <button @click=${this.clickNo}>✕</button>
        </div>
        <div part="body" class="body">
          <slot></slot>
        </div>
        <div part="foot" class="foot">
          ${this.type === DialogTypes.Alert
            ? nothing
            : html`
                <tini-button
                  color=${this.noButton?.color || 'medium'}
                  @click=${this.clickNo}
                >
                  ${this.noButton?.text ||
                  (this.type === DialogTypes.Prompt ? 'Cancel' : 'No')}
                </tini-button>
              `}
          <tini-button
            color=${this.yesButton?.color || 'primary'}
            @click=${this.clickYes}
          >
            ${this.yesButton?.text ||
            (this.type === DialogTypes.Prompt ? 'OK' : 'Yes')}
          </tini-button>
        </div>
      </dialog>
    `;
  }
}
