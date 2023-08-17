import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui';

import {AppCodeComponent} from '../../components/code';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-guides-customization',
  components: [AppCodeComponent, AppSectionComponent],
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
export class AppPageGuidesCustomization extends TiniComponent {
  protected render() {
    return html`
      <h1>Customization</h1>
      <p>
        Use this guide to style your app or create your own souls and skins or
        customize Tini UI components.
      </p>

      <app-section noUsageTabs>
        <h2 slot="title">Terminologies</h2>
        <div slot="content">
          <ul>
            <li>
              <strong>Soul</strong>: the feel of a component (design system).
            </li>
            <li><strong>Skin</strong>: the look of a component.</li>
            <li>
              <strong>Theme</strong>: a combination of a soul and a skin,
              format: <code>soul/skin</code>.
            </li>
          </ul>
        </div>
      </app-section>

      <app-section noUsageTabs>
        <h2 slot="title">Build skins</h2>
        <div slot="content">
          <p>
            To create your own skins, you can copy the variables from one of the
            skin that belongs to a soul you want to associated, for example
            <a
              href="https://raw.githubusercontent.com/tinijs/ui/main/styles/bootstrap/skins/light.css"
              target="_blank"
              >Bootstrap light skin</a
            >.
          </p>
          <p>
            Or, you can use the <strong>Skin Editor</strong> to have a quick
            start, then copy the code and fine tuned it futher.
          </p>
        </div>
      </app-section>

      <app-section noUsageTabs>
        <h2 slot="title">Build souls</h2>
        <div slot="content">
          <p>
            You can create a public soul and share it with the community by
            contributing to the
            <a href="https://github.com/tinijs/ui" target="_blank"
              >Tini UI repo</a
            >.
          </p>
          <p>
            Or, create a private soul by cloning the
            <a href="https://github.com/tinijs/ui-skeleton" target="_blank"
              >UI skeleton</a
            >.
          </p>
          <p>
            Please see
            <a
              href="https://github.com/tinijs/ui/tree/main/styles/bootstrap"
              target="_blank"
              >the structure</a
            >
            of an official for more detail.
          </p>
        </div>
      </app-section>

      <app-section noUsageTabs>
        <h2 slot="title">Customize a component</h2>
        <div slot="content">
          <p>
            To customize a component, you can edit its
            <strong>variables</strong> or provide custom styles via its
            <strong>parts</strong>. Please see the list of variables and parts
            at the bottom of a component detail page.
          </p>

          <p><strong>Using variables</strong></p>
          <app-code
            .code=${'<tini-button style="--button-background: aqua;"></tini-button>'}
          ></app-code>

          <p><strong>Using parts</strong></p>
          <app-code
            language="css"
            .code=${'tini-button::part(root) {\n  background-color: aqua;\n}'}
          ></app-code>
        </div>
      </app-section>

      <app-section noUsageTabs>
        <h2 slot="title">Variable reference</h2>
        <div slot="content">
          <p>
            Please see the list of
            <a
              href="https://raw.githubusercontent.com/tinijs/ui/main/styles/bootstrap/skins/light.css"
              target="_blank"
              >main CSS variables</a
            >
            and
            <a
              href="https://unpkg.com/@tinijs/ui@latest/skin-utils.css"
              target="_blank"
              >skin utilities</a
            >.
          </p>
        </div>
      </app-section>
    `;
  }
}
