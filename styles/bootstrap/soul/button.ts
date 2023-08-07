import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateSizeVaries,
} from '@tinijs/core';

export const buttonStyle = css`
  :host {
    --button-background: var(--color-medium) /* Background color */;
    --button-color: var(--color-medium-contrast) /* Text color */;
    --button-border: none;
    --button-radius: var(--size-radius);
    --button-padding: var(--size-md) /* Base padding */;
    --button-font-size: var(--size-md);
    --button-hover-brightness: 1.1;
    --button-active-brightness: 0.95;
    --button-disabled-opacity: 0.5
      /* [B] Dimmer or brighter to indicate the click action */;
    --button-focus-visible-shadow-size: var(--size-md-0_3x)
      /* [B] Size of the shadow while focusing */;
    --button-focus-visible-shadow-color: color-mix(
        in oklab,
        var(--color-foreground),
        transparent 70%
      )
      /* [B] */;
    display: inline-block;
  }

  button {
    cursor: pointer;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: calc(var(--button-padding) * 0.5) var(--button-padding);
    font-family: var(--font-body);
    font-size: var(--button-font-size);
    line-height: 1.5;
    border: var(--button-border);
    border-radius: var(--button-radius);
    background: var(--button-background);
    color: var(--button-color);
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

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .bg-${name} {
      --button-background: ${color};
      --button-color: ${contrast};
      --button-focus-visible-shadow-color: color-mix(in oklab, ${color}, transparent 70%);
    }

    :host([textColor="${name}"]),
    .color-${name} {
      --button-color: ${color} !important;
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient, color, contrast}) => `
    .bg-gradient-${name} {
      --button-background: ${gradient};
      --button-color: ${contrast};
      --button-hover-background: ${gradient};
      --button-focus-visible-shadow-color: color-mix(in oklab, ${color}, transparent 70%);
    }
  `
  )}

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --button-font-size: var(--size-${size});
      --button-padding: var(--size-${size});
      --button-focus-visible-shadow-size: var(--size-${size}-0_3x);
    }
  `
  )}
`;

export function buttonScript(host: HTMLElement) {}

export function buttonUnscript(host: HTMLElement) {}
