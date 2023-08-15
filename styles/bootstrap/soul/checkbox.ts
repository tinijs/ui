import {css} from 'lit';
import {generateColorVaries, generateSizeVaries} from '@tinijs/core';

export const checkboxStyle = css`
  :host {
    --checkbox-size: var(--size-md);
    --checkbox-background: var(--color-primary);
    display: inline;
  }

  /*
   * Main
   */

  .checkbox {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  input {
    cursor: pointer;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: var(--color-background-tint);
    background-image: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: var(--size-border-0_5x) solid var(--color-medium);
    border-radius: var(--size-radius);
  }

  input:focus {
    border-color: color-mix(
      in oklab,
      var(--checkbox-background),
      transparent 50%
    );
    outline: 0;
    box-shadow: 0 0 0 calc(var(--checkbox-size) / 4)
      color-mix(in oklab, var(--checkbox-background), transparent 70%);
  }

  input:active {
    filter: brightness(90%);
  }

  input:checked {
    border-color: var(--checkbox-background);
    background: var(--checkbox-background);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
  }

  span {
    font-size: var(--checkbox-size);
    margin-left: calc(var(--checkbox-size) / 3);
  }

  /*
   * [disabled]
   */

  .checkbox.disabled {
    opacity: 0.5;
  }

  .checkbox.disabled,
  input:disabled {
    cursor: not-allowed;
    pointer-events: none;
    filter: none;
  }

  /*
   * [color]
   */

  ${generateColorVaries(
    ({name, color}) => `
    .bg-${name} {
      --checkbox-background: ${color};
    }
  `
  )}

  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --checkbox-size: var(--size-${size});
    }
  `
  )}
`;

export const checkboxScript = undefined;
export const checkboxUnscript = undefined;
