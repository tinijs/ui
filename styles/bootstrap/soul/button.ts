import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateSizeVaries,
  generateFontSizeVaries,
  generateJustifyVaries,
} from '@tinijs/core';

export const buttonStyle = css`
  :host {
    --button-background: var(--color-medium) /* Background color */;
    --button-size: var(--size-md);
    --button-text-color: var(--color-medium-contrast) /* Text color */;
    --button-border-radius: var(--size-radius);
    --button-hover-brightness: 1.1;
    --button-active-brightness: 0.95;
    --button-disabled-opacity: 0.5
      /* Dimmer or brighter to indicate the click action */;
    --button-focus-visible-shadow-size: calc(var(--button-size) * 0.3);
    --button-focus-visible-shadow-color: var(--color-medium);
  }

  :host {
    display: inline;
  }

  /*
   * Root
   */

  button {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--button-size) * 0.5);
    padding: calc(var(--button-size) * 0.5) var(--button-size);
    background: var(--button-background);
    color: var(--button-text-color);
    font-family: var(--font-body);
    font-size: var(--button-size);
    line-height: 1.5;
    border: none;
    border-radius: var(--button-border-radius);
    outline: 0 !important;
    transition: all 0.15s ease-in-out;
  }

  button:hover {
    filter: brightness(var(--button-hover-brightness));
  }

  button:active {
    filter: brightness(var(--button-active-brightness));
  }

  button:focus-visible {
    box-shadow: 0 0 0 var(--button-focus-visible-shadow-size)
      color-mix(
        in oklab,
        var(--button-focus-visible-shadow-color),
        transparent 70%
      );
  }

  button:disabled,
  button:disabled:hover,
  button:disabled:active,
  button:disabled:focus-visible {
    cursor: not-allowed;
    filter: none;
    pointer-events: none;
    box-shadow: none;
    background: var(--button-background);
    opacity: var(--button-disabled-opacity);
  }

  /*
   * button > .content-group
   */

  button ::slotted(.content-group) {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--button-size) * 0.5);
  }

  /*
   * [justify]
   */

  ${generateJustifyVaries(
    justify => `
    .justify-${justify} {
      justify-content: ${justify};
    }
  `
  )}

  /*
   * [scheme] & [textColor]
   */

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .scheme-${name} {
      --button-background: ${color};
      --button-text-color: ${contrast};
      --button-focus-visible-shadow-color: ${color};
    }

    .text-color-${name} {
      --button-text-color: ${color} !important;
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient, color, contrast}) => `
    .scheme-${name} {
      --button-background: ${gradient};
      --button-text-color: ${contrast};
      --button-focus-visible-shadow-color: ${color};
    }
  `
  )}

  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --button-size: var(--size-${size});
    }
  `
  )}



  /*
   * [textSize]
   */

  ${generateFontSizeVaries(
    fontSize => `
    .text-size-${fontSize} {
      font-size: var(--size-text-${fontSize}) !important;
    }
  `
  )}
`;

export const buttonScript = undefined;
export const buttonUnscript = undefined;
