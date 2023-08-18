import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateBasicFactorVaries,
  generateFontSizeVaries,
  generateSpaceVaries,
  generateBorderStyleVaries,
} from '@tinijs/core';

export const boxStyle = css`
  :host {
    --box-background: none;
    --box-text-size: var(--size-text);
    --box-text-color: var(--color-foreground);
    --box-border: none;
    --box-border-radius: var(--size-radius);
    --box-padding: var(--size-space);
    --box-margin: 0;
  }

  /*
   * Root
   */

  .root {
    width: 100%;
    background: var(--box-background);
    font-size: var(--box-text-size);
    color: var(--box-text-color);
    border: var(--box-border);
    border-radius: var(--box-border-radius);
    padding: var(--box-padding);
    margin: var(--box-margin);
  }

  /*
   * [textSize]
   */

  ${generateFontSizeVaries(
    sizeFactor => `
    .text-size-${sizeFactor} {
      --box-text-size: var(--size-text-${sizeFactor}) !important;
    }
  `
  )}

  /*
   * [border (size)] & [borderRadius]
   */

  ${generateBasicFactorVaries(
    size => `
    .border-width-${size} {
      border-width: var(--size-border-${size}) !important;
      border-color: var(--color-medium);
      border-style: solid;
    }
    .border-radius-${size} {
      --box-border-radius: var(--size-radius-${size});
    }
  `
  )}

  /*
   * [border (style)]
   */

  ${generateBorderStyleVaries(
    borderStyle => `
    .border-style-${borderStyle} {
      border-style: ${borderStyle} !important;
      border-width: var(--size-border);
      border-color: var(--color-medium);
    }
  `
  )}

  /*
   * [scheme] & [textColor] & [border (color)]
   */

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .scheme-${name} {
      --box-background: ${color};
      --box-text-color: ${contrast};
    }

    .text-color-${name} {
      --box-text-color: ${color} !important;
    }

    .border-color-${name} {
      border-color: ${color} !important;
      border-width: var(--size-border);
      border-style: solid;
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient, contrast}) => `
    .scheme-${name} {
      --box-background: ${gradient};
      --box-text-color: ${contrast};
    }
  `
  )}

  /*
   * [padding] & [margin]
   */

  ${generateSpaceVaries(
    sizeFactor => `
    .padding-top-${sizeFactor} {
      padding-top: var(--size-space-${sizeFactor});
    }
    .padding-right-${sizeFactor} {
      padding-right: var(--size-space-${sizeFactor});
    }
    .padding-bottom-${sizeFactor} {
      padding-bottom: var(--size-space-${sizeFactor});
    }
    .padding-left-${sizeFactor} {
      padding-left: var(--size-space-${sizeFactor});
    }

    :host(.margin-top-${sizeFactor}) {
      margin-top: var(--size-space-${sizeFactor});
    }
    :host(.margin-right-${sizeFactor}) {
      margin-right: var(--size-space-${sizeFactor});
    }
    :host(.margin-bottom-${sizeFactor}) {
      margin-bottom: var(--size-space-${sizeFactor});
    }
    :host(.margin-left-${sizeFactor}) {
      margin-left: var(--size-space-${sizeFactor});
    }
  `
  )}
`;

export const boxScript = undefined;
export const boxUnscript = undefined;
