import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateSizeVaries,
  generateJustifyVaries,
} from '@tinijs/core';

export const buttonStyle = css`
  :host {
    --button-background: var(--color-medium) /* Background color */;
    --button-text-color: var(--color-medium-contrast) /* Text color */;
    --button-text-size: var(--size-md);
    --button-padding: var(--size-md) /* Base padding */;
    --button-border: none;
    --button-radius: var(--size-radius);
    --button-hover-brightness: 1.1;
    --button-active-brightness: 0.95;
    --button-disabled-opacity: 0.5
      /* Dimmer or brighter to indicate the click action */;
    --button-focus-visible-shadow-size: var(--size-md-0_3x)
      /* Size of the shadow while focusing */;
    --button-focus-visible-shadow-color: color-mix(
      in oklab,
      var(--color-foreground),
      transparent 70%
    );
    display: inline;
  }

  /*
   * Main
   */

  button {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--button-padding) * 0.5);
    padding: calc(var(--button-padding) * 0.5) var(--button-padding);
    font-family: var(--font-body);
    font-size: var(--button-text-size);
    line-height: 1.5;
    border: var(--button-border);
    border-radius: var(--button-radius);
    background: var(--button-background);
    color: var(--button-text-color);
    outline: 0 !important;
    transition: background-color 0.15s ease-in-out;
  }

  button:hover {
    filter: brightness(var(--button-hover-brightness));
  }

  button:active {
    filter: brightness(var(--button-active-brightness));
  }

  button:focus-visible {
    box-shadow: 0 0 0 var(--button-focus-visible-shadow-size)
      var(--button-focus-visible-shadow-color);
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
    gap: calc(var(--button-padding) * 0.5);
  }

  /*
   * [color]
   */

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .bg-${name} {
      --button-background: ${color};
      --button-text-color: ${contrast};
      --button-focus-visible-shadow-color: color-mix(in oklab, ${color}, transparent 70%);
    }

    :host([textColor="${name}"]),
    .color-${name} {
      --button-text-color: ${color} !important;
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient, color, contrast}) => `
    .bg-${name} {
      --button-background: ${gradient};
      --button-text-color: ${contrast};
      --button-hover-background: ${gradient};
      --button-focus-visible-shadow-color: color-mix(in oklab, ${color}, transparent 70%);
    }
  `
  )}



  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --button-text-size: var(--size-${size});
      --button-padding: var(--size-${size});
      --button-focus-visible-shadow-size: var(--size-${size}-0_3x);
    }
  `
  )}



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
`;

export const buttonScript = undefined;
export const buttonUnscript = undefined;
