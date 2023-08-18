import {css} from 'lit';
import {generateColorVaries, generateSizeVaries} from '@tinijs/core';

export const spinnerStyle = css`
  :host {
    --spinner-color: var(--color-foreground);
    --spinner-size: var(--size-md);
  }

  /*
   * Root
   */

  .root {
    --size: calc(var(--spinner-size) * 2);
    --border-width: calc(var(--spinner-size) / 4);
  }

  .root {
    width: var(--size);
    height: var(--size);
    border: var(--border-width) solid var(--color-background-shade);
    border-top: var(--border-width) solid var(--spinner-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /*
   * [color]
   */

  ${generateColorVaries(
    ({name, color}) => `
    .scheme-${name} {
      --spinner-color: ${color};
    }
  `
  )}

  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --spinner-size: var(--size-${size});
    }
  `
  )}
`;

export const spinnerScript = undefined;
export const spinnerUnscript = undefined;
