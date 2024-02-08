import {html} from 'lit';
import {Page, TiniComponent, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniBoxComponent} from '@tinijs/ui/components/box';
import {TiniFigureComponent} from '@tinijs/ui/components/figure';

import {
  renderSection,
  renderDefaultSection,
  RenderSectionOptions,
} from '../../helpers/varies';
import {ConsumerPlatforms} from '../../consts/main';
import {CodeBuilder, ReactCommonProps} from '../../helpers/code-builder';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-figure',
  components: [
    TiniBoxComponent,
    TiniFigureComponent,
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
export class AppPageComponentsFigure extends TiniComponent {
  private readonly PART_LIST = [['root', 'The root part']];

  private readonly PREPROCESS_CODE: CodeBuilder = builder => builder;

  private readonly CODE_BUILDERS: Record<string, CodeBuilder> = {
    [ConsumerPlatforms.React]: builder => builder,
  };

  private renderSectionOptions?: RenderSectionOptions;
  onChanges() {
    this.renderSectionOptions = {
      preprocessCode: this.PREPROCESS_CODE,
      codeBuilders: this.CODE_BUILDERS,
    };
  }

  protected render() {
    return html`
      <app-component-page
        titleText="Figure"
        name="figure"
        path="components/figure"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Figure description.</div>

        <!-- default -->
        ${renderDefaultSection(
          html` <p>Lorem ipsum.</p> `,
          html`
            <tini-figure>
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80"
              />
              <figcaption>An elephant at sunset</figcaption>
            </tini-figure>
          `,
          this.renderSectionOptions
        )}

        <!-- codes -->
        ${renderSection(
          'codes',
          'Codes',
          html` <p>Codes.</p> `,
          html`
            <tini-figure>
              <figcaption>
                Get browser details using <code>navigator</code>.
              </figcaption>
              <pre>
  function NavigatorExample() {
    var txt;
    txt = "Browser CodeName: " + navigator.appCodeName + "; ";
    txt+= "Browser Name: " + navigator.appName + "; ";
    txt+= "Browser Version: " + navigator.appVersion  + "; ";
    txt+= "Cookies Enabled: " + navigator.cookieEnabled  + "; ";
    txt+= "Platform: " + navigator.platform  + "; ";
    txt+= "User-agent header: " + navigator.userAgent  + "; ";
    console.log("NavigatorExample", txt);
  }
              </pre
              >
            </tini-figure>
          `,
          this.renderSectionOptions
        )}

        <!-- quotations -->
        ${renderSection(
          'quotations',
          'Quotations',
          html` <p>Quotations.</p> `,
          html`
            <tini-figure>
              <figcaption><b>Edsger Dijkstra:</b></figcaption>
              <blockquote>
                If debugging is the process of removing software bugs, then
                programming must be the process of putting them in.
              </blockquote>
            </tini-figure>
          `,
          this.renderSectionOptions
        )}

        <!-- poems -->
        ${renderSection(
          'poems',
          'Poems',
          html` <p>Poems.</p> `,
          html`
            <tini-figure>
              <p style="white-space:pre">
                Bid me discourse, I will enchant thine ear, Or like a fairy trip
                upon the green, Or, like a nymph, with long dishevelled hair,
                Dance on the sands, and yet no footing seen: Love is a spirit
                all compact of fire, Not gross to sink, but light, and will
                aspire.
              </p>
              <figcaption>
                <cite>Venus and Adonis</cite>, by William Shakespeare
              </figcaption>
            </tini-figure>
          `,
          this.renderSectionOptions
        )}
      </app-component-page>
    `;
  }
}
