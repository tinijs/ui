import {css} from 'lit';
import {generateColorVaries, generateSizeVaries} from '@tinijs/core';

export const textareaStyle = css`
  :host {
    --textarea-color: var(--color-primary);
    --textarea-size: var(--size-md);
    --textarea-border: var(--size-border) solid var(--color-background-shade);
    --textarea-radius: var(--size-radius);
  }

  /*
   * Root
   */

  .root {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: var(--size-space-0_5x);
  }

  textarea {
    width: 100%;
    background: var(--color-background-tint);
    border: var(--textarea-border);
    border-radius: var(--textarea-radius);
    padding: calc(var(--textarea-size) / 2) calc(var(--textarea-size) / 1.5);
    transition: all 0.15s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--textarea-size);
  }

  textarea:focus {
    outline: none;
    border-color: color-mix(in oklab, var(--textarea-color), transparent 30%);
    box-shadow: 0 0 0 calc(var(--textarea-size) / 4)
      color-mix(in oklab, var(--textarea-color), transparent 70%);
  }

  textarea:disabled {
    background: color-mix(
      in oklab,
      var(--color-background-shade),
      transparent 50%
    );
    opacity: 1;
    color: var(--color-medium);
  }

  /*
   * [color]
   */

  ${generateColorVaries(
    ({name, color}) => `
    .color-${name} {
      --textarea-color: ${color};
    }
  `
  )}

  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --textarea-size: var(--size-${size});
    }
  `
  )}
`;

export const textareaScript = undefined;
export const textareaUnscript = undefined;
