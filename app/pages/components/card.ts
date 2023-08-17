import {Page, TiniComponent, html, css, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniButtonComponent,
  TiniCardComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-card',
  components: [
    TiniButtonComponent,
    TiniCardComponent,
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
export class AppPageComponentsCard extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Card"
        name="card"
        path="components/card"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Card description.</div>

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>Max width is <code>--wide-xs</code>.</p>
          </div>
          <div slot="code">
            <tini-card>
              <strong class="card-title">Card title</strong>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <tini-button color="primary">Go somewhere</tini-button>
            </tini-card>
          </div>
        </app-section>

        <app-section class="default">
          <h2 slot="title">Fluid card</h2>
          <div slot="code">
            <tini-card fluid>
              <strong class="card-title">Card title</strong>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <tini-button color="primary">Go somewhere</tini-button>
            </tini-card>
          </div>
        </app-section>

        <app-section class="default">
          <h2 slot="title">Head and foot</h2>
          <div slot="code">
            <tini-card>
              <span slot="head">Card head</span>
              <strong class="card-title">Card title</strong>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <tini-button color="primary">Go somewhere</tini-button>
              <span slot="foot">Card foot</span>
            </tini-card>
          </div>
        </app-section>

        <app-section class="default">
          <h2 slot="title">Image card</h2>
          <div slot="code">
            <tini-card>
              <img
                class="card-image"
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1875&q=80"
              />
              <strong class="card-title">Card title</strong>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <tini-button color="primary">Go somewhere</tini-button>
            </tini-card>
          </div>
        </app-section>
      </app-component-page>
    `;
  }
}
