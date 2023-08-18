import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateSizeVaries,
} from '@tinijs/core';

export const badgeStyle = css`
  :host {
    --badge-background: var(--color-medium) /* Background color */;
    --badge-size: var(--size-md) /* Base size */;
    --badge-color: var(--color-medium-contrast) /* Text color */;
    --badge-radius: var(--size-radius) /* Border radius */;
  }

  :host {
    display: inline;
  }

  /*
   * Root
   */

  .root {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: calc(var(--badge-size) * 0.25);
    background: var(--badge-background);
    color: var(--badge-color);
    font-size: var(--badge-size);
    border: none;
    border-radius: var(--badge-radius);
    font-weight: bold;
    line-height: 1;
  }

  /*
   * [?pilled]
   */

  .pilled {
    border-radius: 1000px !important;
  }

  /*
   * [?rounded]
   */

  .rounded {
    --rounded-size: calc(var(--badge-size) * 1.75);
    width: var(--rounded-size);
    height: var(--rounded-size);
    border-radius: 100% !important;
    overflow: hidden;
  }

  /*
   * [scheme]
   */

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .scheme-${name} {
      --badge-background: ${color};
      --badge-color: ${contrast};
    }

    .color-${name} {
      --badge-color: ${color} !important;
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient, contrast}) => `
    .scheme-${name} {
      --badge-background: ${gradient};
      --badge-color: ${contrast};
    }
  `
  )}

  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --badge-size: var(--size-${size});
    }
  `
  )}
`;

export const badgeScript = undefined;
export const badgeUnscript = undefined;
