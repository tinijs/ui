import {css} from 'lit';
import {generateColorVaries, generateSizeVaries} from '@tinijs/core';

export const labelStyle = css`
  :host {
    --label-background: var(--color-medium) /* Background color */;
    --label-text-color: var(--color-medium-contrast) /* Text color */;
    --label-text-size: var(--size-md);
    --label-padding: var(--size-md-0_5x) /* Base padding */;
    --label-border: none;
    --label-radius: var(--size-radius);
    display: inline;
  }

  /*
   * Main
   */

  .label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--label-padding);
    border: var(--label-border);
    border-radius: var(--label-radius);
    background: color-mix(in oklab, var(--label-background), transparent 50%);
    color: var(--label-text-color);
    font-size: var(--label-text-size);
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
   * [color]
   */

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .bg-${name} {
      --label-background: ${color};
      --label-text-color: ${contrast};
    }

    :host([textColor="${name}"]),
    .color-${name} {
      --label-text-color: ${color} !important;
    }
  `
  )}

  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --label-text-size: var(--size-${size});
      --label-padding: var(--size-${size}-0_5x);
    }
  `
  )}
`;

export const labelScript = undefined;
export const labelUnscript = undefined;
