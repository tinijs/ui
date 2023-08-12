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
    color: var(--text-color);
    text-transform: var(--text-transform);
  }

  span {
    font-family: var(--text-font);
    font-size: var(--text-size);
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
    :host([font="${fontType}"]),
    .font-${fontType} {
      --text-font: var(--font-${fontType});
      font-family: var(--text-font);
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
      font-size: var(--text-size);
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
