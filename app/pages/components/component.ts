import {html} from 'lit';
import {Page, TiniComponent, stylingWithBases} from '@tinijs/core';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
  codeBases,
} from '@tinijs/ui/bases';
import {TiniComponentComponent} from '@tinijs/ui/components/component';

import {renderSection, RenderSectionOptions} from '../../helpers/varies';
import {ConsumerPlatforms} from '../../consts/main';
import {CodeBuilder} from '../../helpers/code-builder';

import {AppComponentPageComponent} from '../../components/component-page';
import {AppSectionComponent} from '../../components/section';

@Page({
  name: 'app-page-components-component',
  components: [
    TiniComponentComponent,
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
export class AppPageComponentsComponent extends TiniComponent {
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
        titleText="Component"
        name="component"
        path="components/component"
        .partList=${this.PART_LIST}
      >
        <div slot="description">Generic component.</div>

        <!-- overview -->
        <app-section noCodeSample>
          <h2 slot="title">Overview</h2>
          <div slot="content" class="overview">
            <p>
              Use <code>tini-component</code> to create any custom component.
            </p>
            <p>
              Default is an inline element. You can also render as a scoped
              component using the <code>scoped</code> atrribute, user custom
              native tag via <code>tag</code> attribute, passing attributes
              using <code>-attr</code> suffixed attributes.
            </p>
            <p>
              Style a component by providing <strong>inline styles</strong> or
              <strong>CSS key-value pairs</strong> as attributes. There are
              several utils if needed (import from the
              <code>tinijs</code> package):
            </p>
            <ul>
              <li><strong>mix</strong>('red', 'blue'): Mix 2 colors</li>
              <li>
                <strong>darken</strong>('var(--color-primary)', 0.3): Darken a
                color by 30%
              </li>
              <li>
                <strong>brighten</strong>('#0000ff', 0.3): Brighten a color by
                30%
              </li>
              <li>
                <strong>opacity</strong>('var(--color-background)', 0.5): Add
                50% opacity
              </li>
            </ul>
            <p>
              Advanced style via the <code>styleDeep</code> attribute is used to
              style pseudo-classes, pseudo-elements, media queries, ... Use
              <code>.root</code> (or shorthand <code>&amp;</code>) as the main
              selector.
            </p>
            <p>
              Theme-based styling can be provided via
              <code>.theming</code> property.
            </p>
          </div>
        </app-section>

        <!-- inline styles -->
        ${renderSection(
          'inline-styles',
          'Inline styles',
          html`<p>
            Use <code>tini-component</code> as any native HTML element, it can
            be styled using the the inline <code>style</code> attribute.
          </p>`,
          html`
            <tini-component
              style="
    display: block;
    padding: 1rem;
    background: #ccc;
    border: 2px solid blue;
    border-radius: 0.5rem;
  "
              >An inline element.</tini-component
            >
          `,
          this.renderSectionOptions
        )}

        <!-- shadow-dom -->
        ${renderSection(
          'shadow-dom',
          'Shadow DOM',
          html`<p>Scoped element, custom tag and attributes.</p>`,
          html`
            <tini-component
              scoped
              tag="input"
              type-attr="email"
              placeholder-attr="Enter your email"
            ></tini-component>
          `,
          this.renderSectionOptions
        )}

        <!-- attribute styles -->
        ${renderSection(
          'attribute-styles',
          'Attribute styles',
          html`<p>Provide any CSS key-value pairs as attributes.</p>`,
          html`
            <tini-component
              scoped
              display="block"
              padding="1rem"
              border="2px solid blue"
              border-radius="0.5rem"
              background="#ccc"
            >
              <tini-component
                display="flex"
                align-items="center"
                justify-content="space-between"
              >
                <p>Flex left</p>
                <p>Flex right</p>
              </tini-component>
            </tini-component>
          `,
          this.renderSectionOptions
        )}

        <!-- advanced -->
        ${renderSection(
          'advanced',
          'Advanced',
          html`<p>
            More control using the <code>styleDeep</code> attribute; style
            pseudo-classes, pseudo-elements, media queries, ...
          </p>`,
          html`
            <tini-component
              styleDeep="
    .root {
      display: block;
      padding: 1rem;
      background: #ccc;
      border: 2px solid green;
      border-radius: 0.5rem;
    }

    @media (min-width: 768px) {
      .root {
        border-color: blue;
      }
    }
  "
              >Light DOM</tini-component
            >

            <tini-component
              scoped
              margin-top="1rem"
              display="flex"
              justify-content="center"
              padding="1rem"
              background="#ccc"
              border="2px solid green"
              border-radius="0.5rem"
              styleDeep="
    .root:hover {
      background: #a69836;
    }
    .root::before {
      content: '::before';
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: 100px;
      height: 100px;
      background: #333;
      color: #fff;
      border-radius: 50%;
    }
    @media (min-width: 768px) {
      .root {
        border-color: blue;
      }
    }
  "
            ></tini-component>
          `,
          this.renderSectionOptions
        )}

        <!-- theming -->
        ${renderSection(
          'theming',
          'Theming',
          html`<p>
            Theme-based styling using the <code>.theming</code> property. Change
            theme to <strong>Bootstrap Dark</strong> to see the defferent.
          </p>`,
          html`
            <tini-component
              scoped
              display="block"
              padding="1rem"
              border="2px solid blue"
              border-radius="0.5rem"
              background="#ccc"
              .theming=${{
                'bootstrap/dark': `
                  .root {
                    background: #a69836;
                  }
                `,
              }}
              >Default background=#ccc / Bootstrap Dark
              background=#a69836</tini-component
            >
          `,
          this.renderSectionOptions
        )}

        <!-- tailwind-comparison -->
        ${renderSection(
          'tailwind-comparison',
          'Tailwind comparison',
          html`
            <p>
              Here are 2 examples inspired by Tailwind if you like to compare
              <code>tini-component</code> to
              <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a
              >.
            </p>
            <ol>
              <li>
                Traditional CSS vs Utility classes:
                <a
                  href="https://tailwindcss.com/docs/utility-first"
                  target="_blank"
                  >https://tailwindcss.com/docs/utility-first</a
                >
              </li>
              <li>
                Why not inline styles?:
                <a
                  href="https://tailwindcss.com/docs/utility-first#why-not-just-use-inline-styles"
                  target="_blank"
                  >https://tailwindcss.com/docs/utility-first#why-not-just-use-inline-styles</a
                >
              </li>
            </ol>
            <p>
              In conclusion, <code>tini-component</code> doesn't require a build
              step, but the size of code is bigger than Tailwind about
              <strong>20%</strong> on average. It's recommended to extract
              repeatitive code intro reusable components.
            </p>
          `,
          html`
            <tini-component
              display="flex"
              align-items="center"
              gap="1rem"
              width="var(--wide-ss)"
              padding="1.5rem"
              background="#fff"
              border-radius=".75rem"
              box-shadow="rgba(0, 0, 0, 0.2) 0px 5px 15px"
            >
              <div>
                <img
                  width="64px"
                  height="64px"
                  src="https://img.icons8.com/fluency/96/chat--v1.png"
                  alt="ChitChat Logo"
                />
              </div>
              <div>
                <tini-component
                  scoped
                  color="black"
                  font-size="1.25rem"
                  font-weight="500"
                  >ChitChat</tini-component
                >
                <p style="margin: 0; color: #64748b">You have a new message!</p>
              </div>
            </tini-component>

            <tini-component
              margin-top="2rem"
              display="flex"
              align-items="center"
              gap="1.5rem"
              width="var(--wide-ss)"
              padding="1rem 1.5rem"
              background="#fff"
              border-radius=".75rem"
              box-shadow="rgba(0, 0, 0, 0.2) 0px 5px 15px"
            >
              <img
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=250&h=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Erin Lindford"
                style="
      width: 100px;
      height: 100px;
      border-radius: 50%;
    "
              />
              <div>
                <tini-component
                  scoped
                  color="black"
                  font-size="1.25rem"
                  font-weight="500"
                  >Erin Lindford</tini-component
                >
                <p style="margin: 0; color: #64748b">Product Engineer</p>
                <tini-component
                  scoped
                  tag="button"
                  background="none"
                  margin-top=".5rem"
                  padding=".25rem 1rem"
                  font-size=".875rem"
                  font-weight="600"
                  line-height="1.25rem"
                  color="#9333ea"
                  border="1px solid #e9d5ff"
                  border-radius="9999px"
                  cursor="pointer"
                  styleDeep="
        .root:hover {
          background: #9333ea;
          color: #fff;
        }
        .root:focus {
          outline: 2px solid #9333ea;
          outline-offset: 2px;
        }
      "
                  >Message</tini-component
                >
              </div>
            </tini-component>
          `,
          this.renderSectionOptions
        )}
      </app-component-page>
    `;
  }
}
