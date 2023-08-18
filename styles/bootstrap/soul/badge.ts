import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateSizeVaries,
} from '@tinijs/core';

export const badgeStyle = css`
  :host {
    --badge-background: var(--color-medium) /* Background color */;
    --badge-text-color: var(--color-medium-contrast) /* Text color */;
    --badge-text-size: var(--size-md);
    --badge-padding: var(--size-md-0_25x) /* Base padding */;
    --badge-border: none;
    --badge-radius: var(--size-radius);
    display: inline;
  }

  /*
   * Root
   */

  .root {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--badge-padding);
    border: var(--badge-border);
    border-radius: var(--badge-radius);
    background: var(--badge-background);
    color: var(--badge-text-color);
    font-size: var(--badge-text-size);
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
    --badge-rounded-size: calc(var(--badge-text-size) * 1.75);
    width: var(--badge-rounded-size);
    height: var(--badge-rounded-size);
    border-radius: 100% !important;
    overflow: hidden;
  }

  /*
   * [color]
   */

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .bg-${name} {
      --badge-background: ${color};
      --badge-text-color: ${contrast};
    }

    .color-${name} {
      --badge-text-color: ${color} !important;
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient, contrast}) => `
    .bg-${name} {
      --badge-background: ${gradient};
      --badge-text-color: ${contrast};
    }
  `
  )}



  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --badge-text-size: var(--size-${size});
      --badge-padding: var(--size-${size}-0_25x);
    }
  `
  )}
`;

export const badgeScript = undefined;
export const badgeUnscript = undefined;
