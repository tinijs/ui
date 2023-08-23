import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniButtonComponent} from '@tinijs/ui/components/button';
import {TiniCardComponent} from '@tinijs/ui/components/card';

import {renderSection, renderDefaultSection} from '../../helpers/varies';

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
  private readonly PART_LIST = [
    ['root', 'The root part'],
    ['head', 'The head part'],
    ['head-populated', 'The head part, with content'],
    ['body', 'The body part'],
    ['foot', 'The foot part'],
    ['foot-populated', 'The foot part, with content'],
  ];

  protected render() {
    return html`
      <app-component-page
        titleText="Card"
        name="card"
        path="components/card"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Card description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html`<p>Max width is <code>--wide-xs</code>.</p>`,
          html`
            <tini-card>
              <strong class="card-title">Card title</strong>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <tini-button scheme="primary">Go somewhere</tini-button>
            </tini-card>
          `
        )}

        <!-- fluid -->
        ${renderSection(
          'fluid',
          'Fluid card',
          null,
          html`
            <tini-card fluid>
              <strong class="card-title">Card title</strong>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <tini-button scheme="primary">Go somewhere</tini-button>
            </tini-card>
          `
        )}

        <!-- head and foot -->
        ${renderSection(
          'head-foot',
          'Head and foot',
          null,
          html`
            <tini-card>
              <span slot="head">Card head</span>
              <strong class="card-title">Card title</strong>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <tini-button scheme="primary">Go somewhere</tini-button>
              <span slot="foot">Card foot</span>
            </tini-card>
          `
        )}

        <!-- image -->
        ${renderSection(
          'image',
          'Image card',
          null,
          html`
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
              <tini-button scheme="primary">Go somewhere</tini-button>
            </tini-card>
          `
        )}
      </app-component-page>
    `;
  }
}
