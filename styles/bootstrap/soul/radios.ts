import {css} from 'lit';
import {generateColorVaries, generateSizeVaries} from '@tinijs/core';

export const radiosStyle = css`
  /* :host {} */

  /*
   * Main
   */

  .radios {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--size-space);
  }

  .radios.wrap {
    flex-flow: column;
    align-items: flex-start;
  }

  /*
   * Radio item
   */

  .radio {
    --radio-size: var(--size-md);
    --radio-background: var(--color-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  input {
    cursor: pointer;
    width: var(--radio-size);
    height: var(--radio-size);
    margin-top: calc(var(--radio-size) / -10);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: var(--color-background-tint);
    background-image: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: var(--size-border-0_5x) solid var(--color-medium);
    border-radius: 100%;
  }

  input:focus {
    border-color: color-mix(in oklab, var(--radio-background), transparent 50%);
    outline: 0;
    box-shadow: 0 0 0 calc(var(--radio-size) / 4)
      color-mix(in oklab, var(--radio-background), transparent 70%);
  }

  input:active {
    filter: brightness(90%);
  }

  input:checked {
    border-color: var(--radio-background);
    background: var(--radio-background);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
  }

  span {
    font-size: var(--radio-size);
    margin-left: calc(var(--radio-size) / 3);
  }

  /*
   * [?disabled]
   */

  .radio.disabled {
    cursor: default;
    opacity: 0.5;
  }

  input:disabled {
    pointer-events: none;
    filter: none;
  }

  /*
   * [color]
   */

  ${generateColorVaries(
    ({name, color}) => `
    .bg-${name} {
      --radio-background: ${color};
    }
  `
  )}

  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --radio-size: var(--size-${size});
    }
  `
  )}
`;

export const radiosScript = undefined;
export const radiosUnscript = undefined;
