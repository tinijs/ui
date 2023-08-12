import {
  Page,
  TiniComponent,
  html,
  css,
  stylingWithBases,
  BASE_COLORS,
  BASE_GRADIENTS,
} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
  TiniBoxComponent,
} from '@tinijs/ui';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-box',
  components: [
    TiniBoxComponent,
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
export class AppPageComponentsBox extends TiniComponent {
  private readonly PART_LIST = [['box', 'The root part']];
  protected render() {
    return html`
      <app-component-page
        titleText="Boxes"
        name="box"
        path="components/box"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Boxes are containers for any content.</div>

        <app-section class="default">
          <div slot="content">
            <h2>Default</h2>
            <p>
              Default background is the current <code>background</code>, default
              color is the current <code>foreground</code>.
            </p>
          </div>
          <div slot="code">
            <tini-box>Here is a default box</tini-box>
          </div>
        </app-section>

        ${BASE_COLORS.map(
          color => html`
            <app-section class="colors">
              <div slot="content">
                <h2>Color ${color}</h2>
              </div>
              <div slot="code">
                <tini-box background=${color}
                  >Box with ${color} background</tini-box
                >
                <tini-box background=${`${color}-shade` as any}
                  >Box with ${color}-shade background</tini-box
                >
                <tini-box background=${`${color}-shade-2` as any}
                  >Box with ${color}-shade-2 background</tini-box
                >
                <tini-box background=${`${color}-shade-3` as any}
                  >Box with ${color}-shade-3 background</tini-box
                >
                <tini-box background=${`${color}-shade-4` as any}
                  >Box with ${color}-shade-4 background</tini-box
                >
                <tini-box background=${`${color}-shade-5` as any}
                  >Box with ${color}-shade-5 background</tini-box
                >
                <tini-box background=${`${color}-tint` as any}
                  >Box with ${color}-tint background</tini-box
                >
                <tini-box background=${`${color}-tint-2` as any}
                  >Box with ${color}-tint-2 background</tini-box
                >
                <tini-box background=${`${color}-tint-3` as any}
                  >Box with ${color}-tint-3 background</tini-box
                >
                <tini-box background=${`${color}-tint-4` as any}
                  >Box with ${color}-tint-4 background</tini-box
                >
                <tini-box background=${`${color}-tint-5` as any}
                  >Box with ${color}-tint-5 background</tini-box
                >
                <tini-box background=${color}>
                  <tini-box background=${`${color}-contrast` as any}
                    >Box with ${color}-contrast background</tini-box
                  >
                </tini-box>
              </div>
            </app-section>
          `
        )}
        ${BASE_GRADIENTS.map(
          gradient => html`
            <app-section class="gradients">
              <div slot="content">
                <h2>${gradient.replace(/-/g, ' ')}</h2>
              </div>
              <div slot="code">
                <tini-box background=${gradient}
                  >Box with ${gradient} background</tini-box
                >
                <tini-box background=${`${gradient}-shade` as any}
                  >Box with ${gradient}-shade background</tini-box
                >
                <tini-box background=${`${gradient}-tint` as any}
                  >Box with ${gradient}-tint background</tini-box
                >
                <tini-box background=${gradient}>
                  <tini-box background=${`${gradient}-contrast` as any}
                    >Box with ${gradient}-contrast background</tini-box
                  >
                </tini-box>
              </div>
            </app-section>
          `
        )}

        <app-section class="text-colors">
          <div slot="content">
            <h2>Text colors</h2>
            <p>
              You can combine any text colors with any background colors. Below
              are just some examples.
            </p>
          </div>
          <div slot="code">
            <tini-box textColor="primary"
              >Default background / Primary text</tini-box
            >
            <tini-box background="warning" textColor="primary"
              >Warning background / Primary text</tini-box
            >
            <tini-box background="gradient-danger" textColor="primary"
              >Gradient Danger background / Primary text</tini-box
            >
          </div>
        </app-section>
      </app-component-page>
    `;
  }

  static styles = css`
    app-section [slot='content'] h2 {
      text-transform: capitalize;
    }

    app-section [slot='code'] {
      display: flex;
      flex-flow: column nowrap;
      gap: var(--size-space);
    }
  `;
}
