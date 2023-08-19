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
    --link-font-size: var(--size-text);
    --link-font: var(--font-body);
    --link-weight: normal;
    --link-transform: none;
    --link-disabled-color: var(--color-medium);
    --link-disabled-opacity: 0.5;
  }

  :host {
    display: inline;
  }

  /*
   * Root
   */

  a {
    position: relative;
    text-decoration: none;
    font-family: var(--link-font);
    color: var(--link-color);
    font-size: var(--link-font-size);
    font-weight: var(--link-weight);
    text-transform: var(--link-transform);
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
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
      position: relative;
      background: ${gradient};
      -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
    }

    .color-${name}::after {
      --underline-height: calc(var(--link-font-size) / 13);
      visibility: hidden;
      content: '';
      position: absolute;
      left: 0;
      bottom: var(--underline-height);
      width: 100%;
      height: var(--underline-height);
      background: ${gradient};
    }

    .color-${name}:hover::after,
    .color-${name}.underline::after {
      visibility: visible;
    }
  `
  )}

  /*
   * [font]
   */

  ${generateFontTypeVaries(
    fontType => `
    .font-${fontType} {
      --link-font: var(--font-${fontType}) !important;
    }
  `
  )}

  /*
   * [fontSize]
   */

  ${generateFontSizeVaries(
    sizeFactor => `
    .font-size-${sizeFactor} {
      --link-font-size: var(--size-text-${sizeFactor});
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
