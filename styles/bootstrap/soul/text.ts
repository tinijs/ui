import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateFontTypeVaries,
  generateFontSizeVaries,
} from '@tinijs/core';

export const textStyle = css`
  :host {
    --text-color: var(--color-foreground);
    --text-font: var(--font-body);
    --text-size: var(--size-text);
    display: inline;
  }

  /*
   * Main
   */

  .text {
    font-family: var(--text-font);
    color: var(--text-color);
    font-size: var(--text-size);
  }

  /*
   * color="..."
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
    .color-gradient-${name} {
      background: ${gradient};
      -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
    }
  `
  )}

  /*
   * font="..."
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
   * size="..."
   */

  ${generateFontSizeVaries(
    sizeFactor => `
    .size-${sizeFactor} {
      --text-size: var(--size-text-${sizeFactor});
    }
  `
  )}
`;

export function textScript(host: HTMLElement) {}

export function textUnscript(host: HTMLElement) {}
