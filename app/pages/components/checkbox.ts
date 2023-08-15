import {
  Page,
  TiniComponent,
  html,
  css,
  stylingWithBases,
  SIZES,
  BASE_COLORS,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniCheckboxComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-checkbox',
  components: [
    TiniCheckboxComponent,
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
export class AppPageComponentsCheckbox extends TiniComponent {
  private readonly PART_LIST = [['checkbox', 'The root part']];

  protected render() {
    return html`
      <app-component-page
        titleText="Checkbox"
        name="checkbox"
        path="components/checkbox"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Checkbox description.</div>

        <app-section class="default">
          <h2 slot="title">Default</h2>
          <div slot="content">
            <p>
              Default active color is <code>primary</code>, default size is
              <code>md</code>.
            </p>
          </div>
          <div slot="code">
            <tini-checkbox label="Default checkbox"></tini-checkbox>
            <tini-checkbox
              checked
              label="Default checkbox (checked)"
            ></tini-checkbox>
          </div>
        </app-section>

        <app-section class="no-label">
          <h2 slot="title">No label</h2>
          <div slot="code">
            <tini-checkbox></tini-checkbox>
            <tini-checkbox checked></tini-checkbox>
          </div>
        </app-section>

        <app-section class="disabled">
          <h2 slot="title">Disabled</h2>
          <div slot="code">
            <tini-checkbox disabled label="Disabled checkbox"></tini-checkbox>
            <tini-checkbox
              checked
              disabled
              label="Disabled checkbox (checked)"
            ></tini-checkbox>
          </div>
        </app-section>

        ${BASE_COLORS.map(
          color => html`
            <app-section class="colors">
              <h2 slot="title">Color ${color}</h2>
              <div slot="code">
                <tini-checkbox
                  checked
                  color=${color}
                  label=${`Checkbox ${color}`}
                ></tini-checkbox>
                <tini-checkbox
                  checked
                  color=${`${color}-shade`}
                  label=${`Checkbox ${color}-shade`}
                ></tini-checkbox>
                <tini-checkbox
                  checked
                  color=${`${color}-shade-2`}
                  label=${`Checkbox ${color}-shade-2`}
                ></tini-checkbox>
                <tini-checkbox
                  checked
                  color=${`${color}-shade-3`}
                  label=${`Checkbox ${color}-shade-3`}
                ></tini-checkbox>
                <tini-checkbox
                  checked
                  color=${`${color}-shade-4`}
                  label=${`Checkbox ${color}-shade-4`}
                ></tini-checkbox>
                <tini-checkbox
                  checked
                  color=${`${color}-shade-5`}
                  label=${`Checkbox ${color}-shade-5`}
                ></tini-checkbox>
                <tini-checkbox
                  checked
                  color=${`${color}-tint`}
                  label=${`Checkbox ${color}-tint`}
                ></tini-checkbox>
                <tini-checkbox
                  checked
                  color=${`${color}-tint-2`}
                  label=${`Checkbox ${color}-tint-2`}
                ></tini-checkbox>
                <tini-checkbox
                  checked
                  color=${`${color}-tint-3`}
                  label=${`Checkbox ${color}-tint-3`}
                ></tini-checkbox>
                <tini-checkbox
                  checked
                  color=${`${color}-tint-4`}
                  label=${`Checkbox ${color}-tint-4`}
                ></tini-checkbox>
                <tini-checkbox
                  checked
                  color=${`${color}-tint-5`}
                  label=${`Checkbox ${color}-tint-5`}
                ></tini-checkbox>
              </div>
            </app-section>
          `
        )}

        <app-section class="sizes">
          <h2 slot="title">Sizes</h2>
          <div slot="code">
            ${SIZES.map(
              size =>
                html`<tini-checkbox
                  size=${size}
                  label=${`Check box size ${size}`}
                ></tini-checkbox>`
            )}
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='code'] {
      display: flex;
      flex-flow: column;
    }
  `;
}
