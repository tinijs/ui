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
    --box-text-color: var(--color-foreground);
    --box-text-size: var(--size-text);
    --box-border: none;
    --box-radius: var(--size-radius);
    --box-padding: var(--size-space);
    --box-margin: 0;
  }

  /*
   * Root
   */

  .root {
    width: 100%;
    background: var(--box-background);
    color: var(--box-text-color);
    font-size: var(--box-text-size);
    border: var(--box-border);
    border-radius: var(--box-radius);
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
   * [borderSize] & [borderRadius]
   */

  ${generateBasicFactorVaries(
    size => `
    .border-size-${size} {
      --box-border: var(--size-border-${size}) solid var(--color-medium);
    }
    .border-radius-${size} {
      --box-radius: var(--size-radius-${size});
    }
  `
  )}

  /*
   * [borderStyle]
   */

  ${generateBorderStyleVaries(
    borderStyle => `
    .border-style-${borderStyle} {
      border-style: ${borderStyle};
    }
  `
  )}

  /*
   * [color] & [borderColor]
   */

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .bg-${name} {
      --box-background: ${color};
      --box-text-color: ${contrast};
    }

    .text-color-${name} {
      --box-text-color: ${color} !important;
    }

    .border-color-${name} {
      border-color: ${color};
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient, contrast}) => `
    .bg-${name} {
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
