import {css} from 'lit';
import {
  generateColorVaries,
  generateBasicFactorVaries,
  generateFontSizeVaries,
  generateBorderStyleVaries,
} from '@tinijs/core';

export const messageStyle = css`
  :host {
    --message-background: var(--color-medium);
    --message-text-color: var(--color-medium);
    --message-text-size: var(--size-text);
    --message-border: var(--size-border) solid var(--color-medium);
    --message-radius: var(--size-radius);
    --message-padding: var(--size-space);
    --message-margin: 0;
  }

  /*
   * Root
   */

  .root {
    width: 100%;
    background: color-mix(in oklab, var(--message-background), transparent 50%);
    color: var(--message-text-color);
    font-size: var(--message-text-size);
    border: var(--message-border);
    border-radius: var(--message-radius);
    padding: var(--message-padding);
    margin: var(--message-margin);
  }

  /*
   * [textSize]
   */

  ${generateFontSizeVaries(
    sizeFactor => `
    .text-size-${sizeFactor} {
      --message-text-size: var(--size-text-${sizeFactor}) !important;
    }
  `
  )}

  /*
   * [color]
   */

  ${generateColorVaries(
    ({name, color}) => `
    .bg-${name} {
      --message-background: ${color};
      --message-text-color: ${color};
      border-color: ${color};
    }

    .text-color-${name} {
      --message-text-color: ${color} !important;
    }
  `
  )}
`;

export const messageScript = undefined;
export const messageUnscript = undefined;
