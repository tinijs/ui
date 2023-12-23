import {css} from 'lit';
import {generateColorVaries, generateScaleVaries} from 'tinijs';

export const inputStyle = css`
  :host {
    --input-color: var(--color-primary);
    --input-border-color: var(--color-medium);
    --input-scale: var(--scale-md);
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
    border: var(--size-border) solid var(--input-border-color);
    border-radius: var(--input-radius);
    padding: calc(var(--input-scale) / 2) calc(var(--input-scale) / 1.5);
    font-size: var(--input-scale);
    transition: all 0.15s ease-in-out;
  }

  input::placeholder {
    color: var(--input-border-color);
    opacity: 0.75;
  }

  input:focus {
    outline: none;
    border-color: color-mix(in oklab, var(--input-color), transparent 30%);
    box-shadow: 0 0 0 calc(var(--input-scale) / 4)
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
    ({fullName, color}) => `
    .${fullName} {
      --input-color: ${color};
      --input-border-color: ${color};
    }
  `
  )}

  /*
   * [scale]
   */

  ${generateScaleVaries(
    ({fullName, scale}) => `
    .${fullName} {
      --input-scale: ${scale};
    }
  `
  )}
`;

export const inputScript = undefined;
export const inputUnscript = undefined;
