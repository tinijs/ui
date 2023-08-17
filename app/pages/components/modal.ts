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
  TiniModalComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-modal',
  components: [
    TiniModalComponent,
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
export class AppPageComponentsModal extends TiniComponent {
  private readonly PART_LIST = [['modal', 'The root part']];

  private readonly defaultModalRef: Ref<TiniModalComponent> = createRef();

  protected render() {
    return html`
      <app-component-page
        titleText="Modal"
        name="modal"
        path="components/modal"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Modal description.</div>

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="code">
            <tini-button @click=${() => this.defaultModalRef.value?.show()}
              >Open modal</tini-button
            >
            <tini-modal
              ${ref(this.defaultModalRef)}
              @no=${() => this.defaultModalRef.value?.hide()}
              @yes=${() => this.defaultModalRef.value?.hide()}
            >
              <p>Modal content.</p>
            </tini-modal>
          </div>
        </app-section>
      </app-component-page>
    `;
  }
}
