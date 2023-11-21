import {html, nothing, PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ref, Ref, createRef} from 'lit/directives/ref.js';
import {TiniElement, partMap, Colors, Gradients} from 'tinijs';

export enum DialogTypes {
  Alert = 'alert',
  Confirm = 'confirm',
  Prompt = 'prompt',
}

export interface DialogButton {
  text?: string;
  scheme?: Colors | Gradients;
}

export interface DialogResult<Context> {
  context: Context;
  dialog: HTMLDialogElement;
}

/* UseBases(common) */
/* UseComponents(button) */
/* ReactEvents(yes:onYes,no:onNo) */
export class TiniDialogComponent extends TiniElement {
  static readonly defaultTagName = 'tini-dialog';
  readonly componentName = 'dialog';

  private readonly BACKDROP_CLOSED = 'backdrop-closed';

  /* eslint-disable prettier/prettier */
  @property({type: String, reflect: true}) declare type: DialogTypes;
  @property({type: String, reflect: true}) declare titleText?: string;
  @property({type: Boolean, reflect: true}) declare backdropClosed?: boolean;
  @property({type: Object}) declare noButton?: DialogButton;
  @property({type: Object}) declare yesButton?: DialogButton;
  /* eslint-enable prettier/prettier */

  private dialogRef: Ref<HTMLDialogElement> = createRef();
  private context?: unknown;

  constructor() {
    super();
    this.type = DialogTypes.Alert;
  }

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
    // root classes parts
    this.extendRootClassesParts({
      info: {
        [this.type]: true,
        [this.BACKDROP_CLOSED]: !!this.backdropClosed,
      },
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
              ${this.type === DialogTypes.Alert
                ? nothing
                : html`
                    <tini-button
                      scheme=${this.noButton?.scheme || 'medium'}
                      @click=${this.clickNo}
                    >
                      ${this.noButton?.text ||
                      (this.type === DialogTypes.Confirm ? 'No' : 'Cancel')}
                    </tini-button>
                  `}
            </div>
            <div part="foot-right" class="foot-right">
              <tini-button
                scheme=${this.yesButton?.scheme || 'primary'}
                @click=${this.clickYes}
              >
                ${this.yesButton?.text ||
                (this.type === DialogTypes.Confirm ? 'Yes' : 'OK')}
              </tini-button>
            </div>
          </slot>
        </div>
      </dialog>
    `;
  }
}
