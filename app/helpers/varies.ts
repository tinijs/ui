import {html, nothing, HTMLTemplateResult} from 'lit';
import {
  BASE_COLORS,
  BASE_GRADIENTS,
  SIZES,
  SIZE_FACTORS,
  FONT_TYPES,
  FONT_WEIGHTS,
  TEXT_TRANSFORMS,
  ColorsAndGradients,
  Colors,
  Gradients,
  Sizes,
  FontTypes,
  FontWeights,
  TextTransforms,
  FontSizeFactors,
} from '@tinijs/core';
import {AppSectionComponent} from '../components/section';

export interface RenderSectionOptions {
  className?: string;
  title?: string;
  content?: HTMLTemplateResult;
  // <section> props
  noUsageTabs?: AppSectionComponent['noUsageTabs'];
  preprocessCode?: AppSectionComponent['preprocessCode'];
  codeBuilders?: AppSectionComponent['codeBuilders'];
  codeBuildContext?: AppSectionComponent['codeBuildContext'];
}

export const COLOR_SUFFIXES = [
  '',
  'shade',
  'shade-2',
  'shade-3',
  'shade-4',
  'shade-5',
  'tint',
  'tint-2',
  'tint-3',
  'tint-4',
  'tint-5',
  'contrast',
];

export const GRADIENT_SUFFIXES = ['', 'shade', 'tint', 'contrast'];

function buildFullName(baseName: string, suffix: string) {
  return `${baseName}${!suffix ? '' : `-${suffix}`}`;
}

function mapColorOrgradientVaries<Result>(
  suffixes: string[],
  baseName: string,
  handler: (fullName: string) => Result,
  skipContrast = false
) {
  return suffixes
    .filter(suffix => !skipContrast || suffix !== 'contrast')
    .map(suffix => handler(buildFullName(baseName, suffix)));
}

export function mapColorVaries<Result>(
  baseName: string,
  handler: (fullName: string) => Result,
  skipContrast = false
) {
  return mapColorOrgradientVaries(
    COLOR_SUFFIXES,
    baseName,
    handler,
    skipContrast
  );
}

export function mapGradientVaries<Result>(
  baseName: string,
  handler: (fullName: string) => Result,
  skipContrast = false
) {
  return mapColorOrgradientVaries(
    GRADIENT_SUFFIXES,
    baseName,
    handler,
    skipContrast
  );
}

function renderColorOrGradientVaries(
  suffixes: string[],
  baseName: string,
  render: (fullName: string) => HTMLTemplateResult,
  skipContrast = false
) {
  return suffixes
    .filter(suffix => !skipContrast || suffix !== 'contrast')
    .map(suffix => {
      const fullName = buildFullName(baseName, suffix);
      return suffix !== 'contrast'
        ? render(fullName)
        : html`<tini-box scheme=${baseName as ColorsAndGradients}
            >${render(fullName)}</tini-box
          >`;
    });
}

export function renderColorVaries(
  baseName: string,
  render: (fullName: string) => HTMLTemplateResult,
  skipContrast = false
) {
  return renderColorOrGradientVaries(
    COLOR_SUFFIXES,
    baseName,
    render,
    skipContrast
  );
}

export function renderGradientVaries(
  baseName: string,
  render: (fullName: string) => HTMLTemplateResult,
  skipContrast = false
) {
  return renderColorOrGradientVaries(
    GRADIENT_SUFFIXES,
    baseName,
    render,
    skipContrast
  );
}

export function renderSection(
  defaultClassName: string,
  defaultTitle: string,
  contentSlot: null | HTMLTemplateResult,
  codeSlot: HTMLTemplateResult,
  {
    className,
    title,
    noUsageTabs,
    content,
    preprocessCode,
    codeBuilders,
    codeBuildContext,
  }: RenderSectionOptions = {}
) {
  return html`
    <app-section
      class=${className || defaultClassName}
      .noUsageTabs=${noUsageTabs}
      .preprocessCode=${preprocessCode}
      .codeBuildContext=${codeBuildContext}
      .codeBuilders=${codeBuilders}
    >
      <h2 slot="title">${title || defaultTitle}</h2>
      <div slot="content">
        ${!content ? nothing : content} ${!contentSlot ? nothing : contentSlot}
      </div>
      <div slot="code">${codeSlot}</div>
    </app-section>
  `;
}

export function renderDefaultSection(
  content: null | HTMLTemplateResult,
  code: HTMLTemplateResult,
  options: RenderSectionOptions = {}
) {
  return renderSection('default', 'Default', content, code, options);
}

export function renderBaseColorsSection(
  handler: (baseName: Colors) => HTMLTemplateResult,
  options: RenderSectionOptions = {}
) {
  return renderSection(
    'colors',
    'Colors',
    html`
      <p>
        Suffixing colors with <code>-shade & -shade-2,3,4,5</code> for more
        shades, and <code>-tint & -tint-2,3,4,5</code> for more tints.
      </p>
    `,
    html`${BASE_COLORS.map(baseName => handler(baseName))}`,
    options
  );
}

export function renderContrastColorsSection(
  handler: (contrastName: Colors, baseName: Colors) => HTMLTemplateResult,
  options: RenderSectionOptions = {}
) {
  return renderSection(
    'contrasts',
    'Contrast colors',
    html`<p>Contrasts are used against schemed backgrounds.</p>`,
    html`
      ${BASE_COLORS.map(
        baseName => html`
          <tini-box scheme=${baseName}>
            ${handler(`${baseName}-contrast` as Colors, baseName)}
          </tini-box>
        `
      )}
    `,
    options
  );
}

export function renderBaseGradientsSection(
  handler: (baseName: Gradients) => HTMLTemplateResult,
  options: RenderSectionOptions = {}
) {
  return renderSection(
    'gradients',
    'Gradients',
    html`
      <p>
        Suffixing gradients with <code>-shade</code> for shade, and
        <code>-tint</code> for tint.
      </p>
    `,
    html`${BASE_GRADIENTS.map(baseName => handler(baseName))}`,
    options
  );
}

export function renderContrastGradientsSection(
  handler: (contrastName: Gradients, baseName: Gradients) => HTMLTemplateResult,
  options: RenderSectionOptions = {}
) {
  return renderSection(
    'contrasts',
    'Contrast gradients',
    html`<p>Contrasts are used against schemed backgrounds.</p>`,
    html`${BASE_GRADIENTS.map(
      baseName => html`
        <tini-box scheme=${baseName}>
          ${handler(`${baseName}-contrast` as Gradients, baseName)}
        </tini-box>
      `
    )}`,
    options
  );
}

export function renderSizesSection(
  handler: (size: Sizes) => HTMLTemplateResult,
  options: RenderSectionOptions = {}
) {
  return renderSection(
    'sizes',
    'Sizes',
    null,
    html`${SIZES.map(size => handler(size))}`,
    options
  );
}

export function renderFontColorsSection(
  schemes: ColorsAndGradients[],
  handler: (scheme: ColorsAndGradients) => HTMLTemplateResult,
  options: RenderSectionOptions = {}
) {
  return renderSection(
    'font-colors',
    'Font colors',
    html`
      <p>
        You can combine any text colors with any background colors. Below are
        just some examples.
      </p>
    `,
    html`${schemes.map(scheme => handler(scheme))}`,
    options
  );
}

export function renderFontTypesSection(
  handler: (fontType: FontTypes) => HTMLTemplateResult,
  options: RenderSectionOptions = {}
) {
  return renderSection(
    'fonts',
    'Fonts',
    null,
    html`${FONT_TYPES.map(fontType => handler(fontType))}`,
    options
  );
}

export function renderFontSizesSection(
  full: boolean,
  handler: (fontSize: FontSizeFactors) => HTMLTemplateResult,
  options: RenderSectionOptions = {}
) {
  return renderSection(
    'font-sizes',
    'Font sizes',
    html` <p>Font size from 0.1x to 10x.</p> `,
    html`${(full
      ? SIZE_FACTORS
      : (['0_5x', '1x', '3x'] as FontSizeFactors[])
    ).map(fontSize => handler(fontSize))}`,
    options
  );
}

export function renderWeightsSection(
  handler: (weight: FontWeights) => HTMLTemplateResult,
  options: RenderSectionOptions = {}
) {
  return renderSection(
    'weights',
    'Weights',
    html`<p>Please note that the active font the respective weights.</p>`,
    html`${FONT_WEIGHTS.map(weight => handler(weight))}`,
    options
  );
}

export function renderTransformsSection(
  handler: (transform: TextTransforms) => HTMLTemplateResult,
  options: RenderSectionOptions = {}
) {
  return renderSection(
    'transforms',
    'Transforms',
    null,
    html`${TEXT_TRANSFORMS.map(transform => handler(transform))}`,
    options
  );
}

export function renderSpacesSection(
  type: 'padding' | 'margin',
  handler: (value: string) => HTMLTemplateResult,
  options: RenderSectionOptions = {}
) {
  return renderSection(
    `${type}s`,
    `${type[0].toUpperCase() + type.slice(1)}s`,
    null,
    html`${['0x', '0_5x', '1x 2x', '1x 2x 3x', '1x 2x 3x 4x'].map(value =>
      handler(value)
    )}`,
    options
  );
}
