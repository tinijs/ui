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
    width: calc(var(--spinner-size) * 2);
    height: calc(var(--spinner-size) * 2);
    border: calc(var(--spinner-size) / 4) solid var(--color-background-shade);
    border-top: calc(var(--spinner-size) / 4) solid var(--spinner-color);
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
    .color-${name} {
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
