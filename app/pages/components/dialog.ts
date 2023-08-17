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
  TiniDialogComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-dialog',
  components: [
    TiniButtonComponent,
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
  private readonly PART_LIST = [['dialog', 'The root part']];

  private readonly alertDialogRef: Ref<TiniDialogComponent> = createRef();
  private readonly confirmDialogRef: Ref<TiniDialogComponent> = createRef();
  private readonly promptDialogRef: Ref<TiniDialogComponent> = createRef();

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
          <div slot="code">
            <tini-button @click=${() => this.alertDialogRef.value?.show()}
              >Open alert</tini-button
            >
            <tini-dialog
              ${ref(this.alertDialogRef)}
              @no=${() => this.alertDialogRef.value?.hide()}
              @yes=${() => this.alertDialogRef.value?.hide()}
            >
              <p>Alert dialog content.</p>
            </tini-dialog>
          </div>
        </app-section>

        <app-section class="confirm">
          <h2 slot="title">Confirm</h2>
          <div slot="code">
            <tini-button @click=${() => this.confirmDialogRef.value?.show()}
              >Open confirm</tini-button
            >
            <tini-dialog
              ${ref(this.confirmDialogRef)}
              type="confirm"
              @no=${() => this.confirmDialogRef.value?.hide()}
              @yes=${() => this.confirmDialogRef.value?.hide()}
            >
              <p>Confirm dialog content.</p>
            </tini-dialog>
          </div>
        </app-section>

        <app-section class="prompt">
          <h2 slot="title">Prompt</h2>
          <div slot="code">
            <tini-button @click=${() => this.promptDialogRef.value?.show()}
              >Open prompt</tini-button
            >
            <tini-dialog
              ${ref(this.promptDialogRef)}
              type="prompt"
              @no=${() => this.promptDialogRef.value?.hide()}
              @yes=${() => this.promptDialogRef.value?.hide()}
            >
              <p>Prompt dialog content.</p>
            </tini-dialog>
          </div>
        </app-section>
      </app-component-page>
    `;
  }
}
