import {html} from 'lit';
import {Page, TiniComponent, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';

import {AppCodeComponent} from '../components/code';
import {AppSectionComponent} from '../components/section';

@Page({
  name: 'app-page-get-started',
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
export class AppPageGetStarted extends TiniComponent {
  protected render() {
    return html`
      <h1>Get started</h1>

      <p>There are 2 main ways of using Tini UI:</p>
      <ol>
        <li>
          Use the
          <a href="https://github.com/tinijs/cli" target="_blank"
            >@tinijs/cli</a
          >
          to create TiniJS applications and manage themes.
        </li>
        <li>Install the specific pre-built packages.</li>
      </ol>
      <p>
        <strong>Quick note</strong>: A <strong>theme</strong> is a combination
        of a <code>soul</code> and a <code>skin</code>. You can have one or more
        themes both at the build time and the run time.
      </p>

      <app-section noUsageTabs>
        <h2 slot="title">Install and Usage</h2>
        <div slot="content">
          <h3>1. Use the official CLI</h3>
          <p>
            The CLI is the <strong>recommended</strong> way of using Tini UI. It
            helps you to create new TiniJS projects quickly and manage themes
            easily by providing the <code>tini ui use</code> command.
          </p>
          <p>
            Github repo:
            <a href="https://github.com/tinijs/cli" target="_blank"
              >https://github.com/tinijs/cli</a
            >
          </p>

          <h4>Create a new TiniJS project</h4>
          <p>To create a new TiniJS app, run:</p>
          <app-code
            language="bash"
            code="npx @tinijs/cli new my-app --latest"
          ></app-code>
          <p>
            The skeleton app comes with a default theme
            (<code>bootstrap/light</code>).
          </p>
          <p>To change themes of the app, for example:</p>
          <app-code
            language="bash"
            code="npx tini ui use bootstrap/dark"
          ></app-code>

          <h4>Add Tini UI to an existing project</h4>
          <p>Install the CLI as a dev dependency:</p>
          <app-code language="bash" code="npm i -D @tinijs/cli"></app-code>
          <p>
            Then run <code>tini ui use &lt;list of soul/skins&gt;</code>, for
            example:
          </p>
          <app-code
            language="bash"
            code="npx tini ui use bootstrap/light,dark"
          ></app-code>

          <h3>2. Use the pre-built packages</h3>
          <p>
            Pre-built packages are available on NPM. You can install them
            directly to your project.
          </p>
          <app-code
            language="bash"
            code="npm i @tinijs/ui-&lt;id&gt;
    
# For example:
npm i @tinijs/ui-bootstrap"
          ></app-code>
          <p>
            Include skins (and skin utils) in a global CSS file, for example:
          </p>
          <app-code
            code="@import '../node_modules/@tinijs/ui-bootstrap/styles/skins/light.css';
@import '../node_modules/@tinijs/ui-bootstrap/skin-utils.css';"
          ></app-code>
          <p>Then import use the components, for example:</p>
          <app-code
            code="import {TiniButtonComponent} from '@tinijs/ui-bootstrap/components/button';"
          ></app-code>
          <app-code
            code='&lt;tini-button scheme="primary"&gt;A button&lt;/tini-button&gt;'
          ></app-code>
          <p>Please see the list of official packages below.</p>
        </div>
      </app-section>

      <app-section noUsageTabs>
        <h2 slot="title">Packages</h2>
        <div slot="content">
          <h3>Bootstrap</h3>
          <app-code
            language="bash"
            code="npm i @tinijs/ui-bootstrap"
          ></app-code>
          <p>Official skins:</p>
          <ul>
            <li><code>light</code></li>
            <li><code>dark</code></li>
          </ul>

          <h3>And more</h3>
          <p><strong>TODO</strong>: add more souls and skins</p>
          <ul>
            <li>Material</li>
            <li>iOS</li>
            <li>Fluent</li>
            <li>Ant</li>
            <li>Spectrum</li>
            <li>Shoelace</li>
            <li>PrimeNG</li>
            <li>Element Plus</li>
            <li>...</li>
          </ul>
        </div>
      </app-section>
    `;
  }
}
