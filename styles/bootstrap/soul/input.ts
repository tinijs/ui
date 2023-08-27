import {css} from 'lit';
import {generateColorVaries, generateSizeVaries} from 'tinijs';

export const inputStyle = css`
  :host {
    --input-color: var(--color-primary);
    --input-size: var(--size-md);
    --input-border: var(--size-border) solid var(--color-medium);
    --input-radius: var(--size-radius);
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
    gap: var(--size-space-0_5x);
  }

  .wrap {
    flex-flow: column;
    align-items: flex-start;
    gap: var(--size-space-0_5x);
  }

  input {
    background: var(--color-background-tint);
    color: var(--color-foreground);
    border: var(--input-border);
    border-radius: var(--input-radius);
    padding: calc(var(--input-size) / 2) calc(var(--input-size) / 1.5);
    font-size: var(--input-size);
    transition: all 0.15s ease-in-out;
  }

  input:focus {
    outline: none;
    border-color: color-mix(in oklab, var(--input-color), transparent 30%);
    box-shadow: 0 0 0 calc(var(--input-size) / 4)
      color-mix(in oklab, var(--input-color), transparent 70%);
  }

  input:disabled {
    background: color-mix(
      in oklab,
      var(--color-background-shade),
      transparent 50%
    );
    opacity: 1;
    color: var(--color-medium);
  }

  /*
   * [scheme]
   */

  ${generateColorVaries(
    ({name, color}) => `
    .scheme-${name} {
      --input-color: ${color};
    }
  `
  )}

  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --input-size: var(--size-${size});
    }
  `
  )}
`;

export const inputScript = undefined;
export const inputUnscript = undefined;
