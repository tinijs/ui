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
    --text-font: var(--font-body);
    --text-size: var(--size-text);
    --text-weight: normal;
    --text-transform: none;
    display: inline;
  }

  /*
   * Main
   */

  .text {
    font-family: var(--text-font);
    color: var(--text-color);
    font-size: var(--text-size);
    font-weight: var(--text-weight);
    text-transform: var(--text-transform);
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
    :host([font="${fontType}"]),
    .font-${fontType} {
      --text-font: var(--font-${fontType});
    }
  `
  )}

  /*
   * [size]
   */

  ${generateFontSizeVaries(
    sizeFactor => `
    .size-${sizeFactor} {
      --text-size: var(--size-text-${sizeFactor});
    }
  `
  )}

  /*
   * [weight]
   */

  ${generateFontWeightVaries(
    fontWeight => `
    .weight-${fontWeight} {
      --text-weight: ${fontWeight};
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
