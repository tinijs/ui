import {
  Page,
  TiniComponent,
  html,
  stylingWithBases,
  ref,
  Ref,
  createRef,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniButtonComponent,
  TiniInputComponent,
  TiniDialogComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-dialog',
  components: [
    TiniButtonComponent,
    TiniInputComponent,
    TiniDialogComponent,
    AppComponentPageComponent,
    AppSectionComponent,
  ],
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
      codeBases,
    ]),
  },
})
export class AppPageComponentsDialog extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];

  private readonly alert1DialogRef: Ref<TiniDialogComponent> = createRef();
  private readonly alert2DialogRef: Ref<TiniDialogComponent> = createRef();
  private readonly confirmDialogRef: Ref<TiniDialogComponent> = createRef();
  private readonly promptDialogRef: Ref<TiniDialogComponent> = createRef();
  private readonly customButtonsDialogRef: Ref<TiniDialogComponent> =
    createRef();
  private readonly customHeadFootDialogRef: Ref<TiniDialogComponent> =
    createRef();

  protected render() {
    return html`
      <app-component-page
        titleText="Dialog"
        name="dialog"
        path="components/dialog"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Dialog description.</div>

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default type is <code>alert</code>. Use <code>yes</code> and
              <code>no</code> to capture events.
            </p>
          </div>
          <div slot="code">
            <div class="group">
              <tini-button
                scheme="primary"
                @click=${() => this.alert1DialogRef.value?.show()}
                >Open alert</tini-button
              >
              <tini-dialog
                ${ref(this.alert1DialogRef)}
                title-text="An alert dialog"
                @no=${() => this.alert1DialogRef.value?.hide()}
                @yes=${() => this.alert1DialogRef.value?.hide()}
              >
                <p>Alert dialog content.</p>
              </tini-dialog>
            </div>
            <div class="group" style="margin-top: 1rem;">
              <tini-button
                scheme="primary"
                @click=${() => this.alert2DialogRef.value?.show()}
                >Open alert (close on clicking backdrop)</tini-button
              >
              <tini-dialog
                ${ref(this.alert2DialogRef)}
                backdrop-closed
                title-text="An alert dialog"
                @no=${() => this.alert2DialogRef.value?.hide()}
                @yes=${() => this.alert2DialogRef.value?.hide()}
              >
                <p>Alert dialog content, close on clicking backdrop.</p>
              </tini-dialog>
            </div>
          </div>
        </app-section>

        <app-section class="confirm">
          <h2 slot="title">Confirm</h2>
          <div slot="content">
            <p>
              Use type <code>confirm</code> to create dialog with
              <strong>Yes/No</strong> button.
            </p>
          </div>
          <div slot="code">
            <tini-button
              scheme="primary"
              @click=${() => this.confirmDialogRef.value?.show()}
              >Open confirm</tini-button
            >
            <tini-dialog
              ${ref(this.confirmDialogRef)}
              type="confirm"
              title-text="A confirm dialog"
              @no=${() => this.confirmDialogRef.value?.hide()}
              @yes=${() => this.confirmDialogRef.value?.hide()}
            >
              <p>Confirm dialog content.</p>
            </tini-dialog>
          </div>
        </app-section>

        <app-section class="prompt">
          <h2 slot="title">Prompt</h2>
          <div slot="content">
            <p>
              Use type <code>prompt</code> to create dialog with
              <strong>OK/Cancel</strong> button.
            </p>
          </div>
          <div slot="code">
            <tini-button
              scheme="primary"
              @click=${() => this.promptDialogRef.value?.show()}
              >Open prompt</tini-button
            >
            <tini-dialog
              ${ref(this.promptDialogRef)}
              type="prompt"
              title-text="A prompt dialog"
              @no=${() => this.promptDialogRef.value?.hide()}
              @yes=${() => this.promptDialogRef.value?.hide()}
            >
              <tini-input
                label="Enter your email"
                name="email"
                type="email"
                placeholder="email@example.com"
              ></tini-input>
            </tini-dialog>
          </div>
        </app-section>

        <app-section class="custom-buttons">
          <h2 slot="title">Custom buttons</h2>
          <div slot="content">
            <p>Customize the Yes/No button.</p>
          </div>
          <div slot="code">
            <tini-button
              scheme="primary"
              @click=${() => this.customButtonsDialogRef.value?.show()}
              >Open custom dialog</tini-button
            >
            <tini-dialog
              ${ref(this.customButtonsDialogRef)}
              title-text="Delete this item?"
              type="confirm"
              .no-button=${{text: 'Cancel', scheme: 'secondary'}}
              .yes-button=${{text: 'Delete?', scheme: 'danger'}}
              @no=${() => this.customButtonsDialogRef.value?.hide()}
              @yes=${() => this.customButtonsDialogRef.value?.hide()}
            >
              <p>Customize text and color of the buttons.</p>
            </tini-dialog>
          </div>
        </app-section>

        <app-section class="custom-head-foot">
          <h2 slot="title">Custom head and foot</h2>
          <div slot="content">
            <p>Provide your own head and foot.</p>
          </div>
          <div slot="code">
            <tini-button
              scheme="primary"
              @click=${() => this.customHeadFootDialogRef.value?.show()}
              >Open custom alert</tini-button
            >
            <tini-dialog
              ${ref(this.customHeadFootDialogRef)}
              @no=${() => this.customHeadFootDialogRef.value?.hide()}
              @yes=${() => this.customHeadFootDialogRef.value?.hide()}
            >
              <div slot="head">Custom head</div>
              <p>Provide your custom head and foot.</p>
              <div slot="foot" style="width: 100%; text-align: center;">
                <tini-button
                  color="success"
                  @click=${() => this.customHeadFootDialogRef.value?.hide()}
                  >Close</tini-button
                >
              </div>
            </tini-dialog>
          </div>
        </app-section>
      </app-component-page>
    `;
  }
}
