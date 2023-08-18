import {css} from 'lit';
import {generateColorVaries, generateFontSizeVaries} from '@tinijs/core';

export const messageStyle = css`
  :host {
    --message-background: var(--color-medium);
    --message-color: var(--color-medium);
    --message-font-size: var(--size-text);
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
    color: var(--message-color);
    font-size: var(--message-font-size);
    border: var(--message-border);
    border-radius: var(--message-radius);
    padding: var(--message-padding);
    margin: var(--message-margin);
  }

  /*
   * [fontSize]
   */

  ${generateFontSizeVaries(
    sizeFactor => `
    .font-size-${sizeFactor} {
      --message-font-size: var(--size-text-${sizeFactor}) !important;
    }
  `
  )}

  /*
   * [scheme] & [color]
   */

  ${generateColorVaries(
    ({name, color}) => `
    .scheme-${name} {
      --message-background: ${color};
      --message-color: ${color};
      border-color: ${color};
    }

    .color-${name} {
      --message-color: ${color} !important;
    }
  `
  )}
`;

export const messageScript = undefined;
export const messageUnscript = undefined;
