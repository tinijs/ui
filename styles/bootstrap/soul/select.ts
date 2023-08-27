import {css} from 'lit';
import {generateColorVaries, generateSizeVaries} from 'tinijs';

export const selectStyle = css`
  :host {
    --select-color: var(--color-primary);
    --select-size: var(--size-md);
    --select-border: var(--size-border) solid var(--color-medium);
    --select-radius: var(--size-radius);
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

  select {
    background: var(--color-background-tint);
    color: var(--color-foreground);
    border: var(--select-border);
    border-radius: var(--select-radius);
    padding: calc(var(--select-size) / 2) calc(var(--select-size) / 1.5);
    font-size: var(--select-size);
    transition: all 0.15s ease-in-out;
  }

  select:focus {
    outline: none;
    border-color: color-mix(in oklab, var(--select-color), transparent 30%);
    box-shadow: 0 0 0 calc(var(--select-size) / 4)
      color-mix(in oklab, var(--select-color), transparent 70%);
  }

  select:disabled {
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
      --select-color: ${color};
    }
  `
  )}

  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --select-size: var(--size-${size});
    }
  `
  )}
`;

export const selectScript = undefined;
export const selectUnscript = undefined;
