import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateBasicFactorVaries,
  generateFontSizeVaries,
  generateSpaceVaries,
  generateBorderStyleVaries,
} from 'tinijs';

export const boxStyle = css`
  :host {
    --box-background: none;
    --box-font-size: var(--size-text);
    --box-color: var(--color-foreground);
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
    font-size: var(--box-font-size);
    color: var(--box-color);
    border: var(--box-border);
    border-radius: var(--box-border-radius);
    padding: var(--box-padding);
    margin: var(--box-margin);
  }

  /*
   * [fontSize]
   */

  ${generateFontSizeVaries(
    sizeFactor => `
    .font-size-${sizeFactor} {
      --box-font-size: var(--size-text-${sizeFactor}) !important;
    }
  `
  )}

  /*
   * [border/width] & [borderRadius]
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
   * [border/style]
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
   * [scheme] & [color] & [border/color]
   */

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .scheme-${name} {
      --box-background: ${color};
      --box-color: ${contrast};
    }

    .color-${name} {
      --box-color: ${color} !important;
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
      --box-color: ${contrast};
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
