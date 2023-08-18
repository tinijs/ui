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
    --text-font: var(--font-body);
    --text-weight: normal;
    --text-transform: none;
    display: inline;
  }

  /*
   * Root
   */

  .root {
    color: var(--text-color);
    text-transform: var(--text-transform);
  }

  span {
    font-family: var(--text-font);
    font-size: var(--text-font-size);
    font-weight: var(--text-weight);
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
      background: ${gradient};
      -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
    }
  `
  )}



  /*
   * [font]
   */

  ${generateFontTypeVaries(
    fontType => `
    .font-${fontType} {
      --text-font: var(--font-${fontType}) !important;
      font-family: var(--text-font);
    }
  `
  )}



  /*
   * [size]
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
