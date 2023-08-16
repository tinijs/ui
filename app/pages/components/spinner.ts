import {
  Page,
  TiniComponent,
  html,
  css,
  stylingWithBases,
  BASE_COLORS,
  SIZES,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
  TiniSpinnerComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-spinner',
  components: [
    TiniBoxComponent,
    TiniSpinnerComponent,
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
export class AppPageComponentsSpinner extends TiniComponent {
  private readonly PART_LIST = [['spinner', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Spinner"
        name="spinner"
        path="components/spinner"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Spinner description.</div>

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default color is <code>medium</code>, default size is
              <code>md</code>.
            </p>
          </div>
          <div slot="code">
            <tini-spinner></tini-spinner>
          </div>
        </app-section>

        ${BASE_COLORS.map(
          color => html`
            <app-section class="colors">
              <h2 slot="title">Color ${color}</h2>
              <div slot="code">
                <tini-spinner color=${color}></tini-spinner>
                <tini-spinner color=${`${color}-shade` as any}></tini-spinner>
                <tini-spinner color=${`${color}-shade-2` as any}></tini-spinner>
                <tini-spinner color=${`${color}-shade-3` as any}></tini-spinner>
                <tini-spinner color=${`${color}-shade-4` as any}></tini-spinner>
                <tini-spinner color=${`${color}-shade-5` as any}></tini-spinner>
                <tini-spinner color=${`${color}-tint` as any}></tini-spinner>
                <tini-spinner color=${`${color}-tint-2` as any}></tini-spinner>
                <tini-spinner color=${`${color}-tint-3` as any}></tini-spinner>
                <tini-spinner color=${`${color}-tint-4` as any}></tini-spinner>
                <tini-spinner color=${`${color}-tint-5` as any}></tini-spinner>
                <tini-box background=${color}>
                  <tini-spinner
                    color=${`${color}-contrast` as any}
                  ></tini-spinner>
                </tini-box>
              </div>
            </app-section>
          `
        )}

        <app-section class="sizes">
          <h2 slot="title">Sizes</h2>
          <div slot="code">
            ${SIZES.map(
              size =>
                html`<tini-spinner size=${size} color="primary"></tini-spinner>`
            )}
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 1rem;

      tini-box {
        width: 65px;
      }
    }

    .default [slot='code'] {
      display: block;
    }
  `;
}
