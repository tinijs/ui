import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateFontTypeVaries,
  generateFontSizeVaries,
  generateFontWeightVaries,
  generateTextTransformVaries,
} from '@tinijs/core';

export const linkStyle = css`
  :host {
    --link-color: var(--color-primary);
    --link-font: var(--font-body);
    --link-size: var(--size-text);
    --link-weight: normal;
    --link-transform: none;
    --link-disabled-color: var(--color-medium);
    --link-disabled-opacity: 0.5;
    display: inline;
  }

  /*
   * Main
   */

  a {
    position: relative;
    text-decoration: none;
    font-family: var(--link-font);
    color: var(--link-color);
    font-size: var(--link-size);
    font-weight: var(--link-weight);
    text-transform: var(--link-transform);
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }

  a.muted,
  a.muted:hover,
  a.muted:focus,
  a.muted:active {
    text-decoration: none;
    color: var(--link-disabled-color);
    opacity: var(--link-disabled-opacity);
  }

  a[target='_blank'] {
    cursor: alias;
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
      --link-color: ${color};
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
    .color-${name}::after {
      visibility: hidden;
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: calc(var(--link-size) / 12);
      background: ${gradient};
    }
    .color-${name}:hover::after {
      visibility: visible;
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
      --link-font: var(--font-${fontType});
    }
  `
  )}

  /*
   * [size]
   */

  ${generateFontSizeVaries(
    sizeFactor => `
    .size-${sizeFactor} {
      --link-size: var(--size-text-${sizeFactor});
    }
  `
  )}

  /*
   * [weight]
   */

  ${generateFontWeightVaries(
    fontWeight => `
    .weight-${fontWeight} {
      --link-weight: ${fontWeight};
    }
  `
  )}

  /*
   * [transform]
   */

  ${generateTextTransformVaries(
    transform => `
    .transform-${transform} {
      --link-transform: ${transform};
    }
  `
  )}
`;

export const linkScript = undefined;
export const linkUnscript = undefined;
