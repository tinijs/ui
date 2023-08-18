import {css} from 'lit';
import {generateColorVaries, generateSizeVaries} from '@tinijs/core';

export const labelStyle = css`
  :host {
    --label-background: var(--color-medium) /* Background color */;
    --label-size: var(--size-md);
    --label-color: var(--color-medium-contrast) /* Text color */;
    --label-border: none;
    --label-radius: var(--size-radius);
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
    padding: calc(var(--label-size) * 0.5);
    border: var(--label-border);
    border-radius: var(--label-radius);
    background: color-mix(in oklab, var(--label-background), transparent 50%);
    color: var(--label-color);
    font-size: var(--label-size);
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
    .scheme-${name} {
      --label-background: ${color};
      --label-color: ${contrast};
    }

    .color-${name} {
      --label-color: ${color} !important;
    }
  `
  )}

  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --label-size: var(--size-${size});
    }
  `
  )}
`;

export const labelScript = undefined;
export const labelUnscript = undefined;
