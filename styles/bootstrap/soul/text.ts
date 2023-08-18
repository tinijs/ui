import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateFontTypeVaries,
  generateFontSizeVaries,
  generateFontWeightVaries,
  generateTextTransformVaries,
} from '@tinijs/core';

export const textStyle = css`
  :host {
    --text-color: var(--color-foreground);
    --text-font-size: var(--size-text);
    --text-font-family: var(--font-body);
    --text-weight: normal;
    --text-transform: none;
  }

  :host {
    display: inline;
  }

  /*
   * Root
   */

  .root {
    margin: 0;
    color: var(--text-color);
    text-transform: var(--text-transform);
  }

  span {
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-weight: var(--text-weight);
  }

  /*
   * :host(type) -> Correct margin for headings and paragraphs
   */

  :host([type='h1']) {
    display: block;
    font-size: 2.5rem;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
  }

  :host([type='h2']) {
    display: block;
    font-size: 2rem;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
  }

  :host([type='h3']) {
    display: block;
    font-size: 1.75rem;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  :host([type='h4']) {
    display: block;
    font-size: 1.5rem;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
  }

  :host([type='h5']) {
    display: block;
    font-size: 1.25rem;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
  }

  :host([type='h6']) {
    display: block;
    font-size: 1rem;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
  }

  :host([type='p']) {
    display: block;
    font-size: 1rem;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  /*
   * [?italic]
   */

  .italic {
    font-style: italic;
  }

  /*
   * [?underline]
   */

  .underline {
    text-decoration: underline;
  }

  /*
   * [color]
   */

  ${generateColorVaries(
    ({name, color}) => `
    .color-${name} {
      --text-color: ${color};
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient}) => `
    .color-${name} {
      position: relative;
      background: ${gradient};
      -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
    }

    .color-${name}.underline::after {
      --underline-height: calc(var(--text-font-size) / 13);
      content: '';
      position: absolute;
      left: 0;
      bottom: var(--underline-height);
      width: 100%;
      height: var(--underline-height);
      background: ${gradient};
    }
  `
  )}

  /*
   * [fontFamily]
   */

  ${generateFontTypeVaries(
    fontType => `
    .font-family-${fontType} {
      --text-font-family: var(--font-${fontType}) !important;
      font-family: var(--text-font-family);
    }
  `
  )}

  /*
   * [fontSize]
   */

  ${generateFontSizeVaries(
    sizeFactor => `
    .font-size-${sizeFactor} {
      --text-font-size: var(--size-text-${sizeFactor}) !important;
      font-size: var(--text-font-size);
    }
  `
  )}

  /*
   * [weight]
   */

  ${generateFontWeightVaries(
    fontWeight => `
    .weight-${fontWeight} {
      --text-weight: ${fontWeight} !important;
      font-weight: var(--text-weight);
    }
  `
  )}

  /*
   * [transform]
   */

  ${generateTextTransformVaries(
    transform => `
    .transform-${transform} {
      --text-transform: ${transform};
    }
  `
  )}
`;

export const textScript = undefined;
export const textUnscript = undefined;
