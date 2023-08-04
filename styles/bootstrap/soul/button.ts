import {css, unsafeCSS} from 'lit';
import {Colors, Sizes} from '../types';

export const buttonStyle = css`
  :host {
    --button-background: var(--color-medium) /* Background color */;
    --button-color: var(--color-medium-contrast) /* Text color */;
    --button-radius: var(--size-radius);
    --button-padding: var(--size-md) /* Base padding */;
    --button-font-size: var(--size-md);
    --button-hover-background: var(--color-medium-shade);
    --button-active-brightness: 0.95;
    --button-disabled-opacity: 0.5;
    /* [B] Dimmer or brighter to indicate the click action */
    --button-focus-visible-shadow-size: calc(var(--size-md) * 0.3)
      /* [B] Size of the shadow while focusing */;
    --button-focus-visible-shadow-color: var(--color-foreground-30) /* [B] */;
  }

  *,
  *::before,
  *::after,
  :host {
    font-size: inherit;
  }

  button {
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: calc(var(--button-padding) / 2) var(--button-padding);
    font-family: var(--font-body);
    font-size: var(--button-font-size);
    line-height: 1.5;
    border: none;
    border-radius: var(--button-radius);
    background: var(--button-background);
    color: var(--button-color);
    text-decoration: none !important;
    outline: 0 !important;
    transition: background-color 0.15s ease-in-out;
  }

  button:hover {
    background: var(--button-hover-background);
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
    pointer-events: none;
    cursor: not-allowed;
    filter: none;
    box-shadow: none;
    background: var(--button-background);
    opacity: var(--button-disabled-opacity);
  }

  .${unsafeCSS(Colors.Dynamic)} {
    --button-background: var(--color-foreground);
    --button-color: var(--color-foreground-contrast);
    --button-hover-background: var(--color-foreground-shade);
    --button-focus-visible-shadow-color: rgba(var(--color-foreground-rgb), 0.3);
  }

  .${unsafeCSS(Colors.Primary)} {
    --button-background: var(--color-primary);
    --button-color: var(--color-primary-contrast);
    --button-hover-background: var(--color-primary-shade);
    --button-focus-visible-shadow-color: rgba(var(--color-primary-rgb), 0.3);
  }

  .${unsafeCSS(Colors.Secondary)} {
    --button-background: var(--color-secondary);
    --button-color: var(--color-secondary-contrast);
    --button-hover-background: var(--color-secondary-shade);
    --button-focus-visible-shadow-color: rgba(var(--color-secondary-rgb), 0.3);
  }

  .${unsafeCSS(Colors.Tertiary)} {
    --button-background: var(--color-tertiary);
    --button-color: var(--color-tertiary-contrast);
    --button-hover-background: var(--color-tertiary-shade);
    --button-focus-visible-shadow-color: rgba(var(--color-tertiary-rgb), 0.3);
  }

  .${unsafeCSS(Colors.Success)} {
    --button-background: var(--color-success);
    --button-color: var(--color-success-contrast);
    --button-hover-background: var(--color-success-shade);
    --button-focus-visible-shadow-color: rgba(var(--color-success-rgb), 0.3);
  }

  .${unsafeCSS(Colors.Warning)} {
    --button-background: var(--color-warning);
    --button-color: var(--color-warning-contrast);
    --button-hover-background: var(--color-warning-shade);
    --button-focus-visible-shadow-color: rgba(var(--color-warning-rgb), 0.3);
  }

  .${unsafeCSS(Colors.Danger)} {
    --button-background: var(--color-danger);
    --button-color: var(--color-danger-contrast);
    --button-hover-background: var(--color-danger-shade);
    --button-focus-visible-shadow-color: rgba(var(--color-danger-rgb), 0.3);
  }

  .${unsafeCSS(Colors.Light)} {
    --button-background: var(--color-light);
    --button-color: var(--color-light-contrast);
    --button-hover-background: var(--color-light-shade);
    --button-focus-visible-shadow-color: rgba(var(--color-light-rgb), 0.3);
  }

  .${unsafeCSS(Colors.Medium)} {
    --button-background: var(--color-medium);
    --button-color: var(--color-medium-contrast);
    --button-hover-background: var(--color-medium-shade);
    --button-focus-visible-shadow-color: rgba(var(--color-medium-rgb), 0.3);
  }

  .${unsafeCSS(Colors.Dark)} {
    --button-background: var(--color-dark);
    --button-color: var(--color-dark-contrast);
    --button-hover-background: var(--color-dark-tint);
    --button-active-brightness: 1.05;
    --button-focus-visible-shadow-color: rgba(var(--color-dark-rgb), 0.3);
  }

  .${unsafeCSS(Colors.GradientDynamic)} {
    --button-background: var(--gradient-foreground);
    --button-color: var(--color-foreground-contrast);
    --button-hover-background: var(--gradient-foreground-shade);
    --button-focus-visible-shadow-color: var(--color-foreground-30);
  }

  .${unsafeCSS(Colors.GradientPrimary)} {
    --button-background: var(--gradient-primary);
    --button-color: var(--color-primary-contrast);
    --button-hover-background: var(--gradient-primary-shade);
    --button-focus-visible-shadow-color: var(--color-primary-30);
  }

  .${unsafeCSS(Colors.GradientSecondary)} {
    --button-background: var(--gradient-secondary);
    --button-color: var(--color-secondary-contrast);
    --button-hover-background: var(--gradient-secondary-shade);
    --button-focus-visible-shadow-color: var(--color-secondary-30);
  }

  .${unsafeCSS(Colors.GradientTertiary)} {
    --button-background: var(--gradient-tertiary);
    --button-color: var(--color-tertiary-contrast);
    --button-hover-background: var(--gradient-tertiary-shade);
    --button-focus-visible-shadow-color: var(--color-tertiary-30);
  }

  .${unsafeCSS(Colors.GradientSuccess)} {
    --button-background: var(--gradient-success);
    --button-color: var(--color-success-contrast);
    --button-hover-background: var(--gradient-success-shade);
    --button-focus-visible-shadow-color: var(--color-success-30);
  }

  .${unsafeCSS(Colors.GradientWarning)} {
    --button-background: var(--gradient-warning);
    --button-color: var(--color-warning-contrast);
    --button-hover-background: var(--gradient-warning-shade);
    --button-focus-visible-shadow-color: var(--color-warning-30);
  }

  .${unsafeCSS(Colors.GradientDanger)} {
    --button-background: var(--gradient-danger);
    --button-color: var(--color-danger-contrast);
    --button-hover-background: var(--gradient-danger-shade);
    --button-focus-visible-shadow-color: var(--color-danger-30);
  }

  .${unsafeCSS(Colors.GradientDark)} {
    --button-background: var(--gradient-dark);
    --button-color: var(--color-dark-contrast);
    --button-hover-background: var(--gradient-dark-shade);
    --button-focus-visible-shadow-color: var(--color-dark-30);
  }

  .${unsafeCSS(Colors.GradientMedium)} {
    --button-background: var(--gradient-medium);
    --button-color: var(--color-medium-contrast);
    --button-hover-background: var(--gradient-medium-shade);
    --button-focus-visible-shadow-color: var(--color-medium-30);
  }

  .${unsafeCSS(Colors.GradientLight)} {
    --button-background: var(--gradient-light);
    --button-color: var(--color-light-contrast);
    --button-hover-background: var(--gradient-light-shade);
    --button-focus-visible-shadow-color: var(--color-light-30);
  }

  .${unsafeCSS(Sizes.XXXS)} {
    --button-font-size: var(--size-xxxs);
    --button-padding: var(--size-xxxs);
    --button-focus-visible-shadow-size: calc(var(--size-xxxs) * 0.3);
  }

  .${unsafeCSS(Sizes.XXS)} {
    --button-font-size: var(--size-xxs);
    --button-padding: var(--size-xxs);
    --button-focus-visible-shadow-size: calc(var(--size-xxs) * 0.3);
  }

  .${unsafeCSS(Sizes.XS)} {
    --button-font-size: var(--size-xs);
    --button-padding: var(--size-xs);
    --button-focus-visible-shadow-size: calc(var(--size-xs) * 0.3);
  }

  .${unsafeCSS(Sizes.SM)} {
    --button-font-size: var(--size-sm);
    --button-padding: var(--size-sm);
    --button-focus-visible-shadow-size: calc(var(--size-sm) * 0.3);
  }

  .${unsafeCSS(Sizes.MS)} {
    --button-font-size: var(--size-ms);
    --button-padding: var(--size-ms);
    --button-focus-visible-shadow-size: calc(var(--size-ms) * 0.3);
  }

  .${unsafeCSS(Sizes.ML)} {
    --button-font-size: var(--size-ml);
    --button-padding: var(--size-ml);
    --button-focus-visible-shadow-size: calc(var(--size-ml) * 0.3);
  }

  .${unsafeCSS(Sizes.LG)} {
    --button-font-size: var(--size-lg);
    --button-padding: var(--size-lg);
    --button-focus-visible-shadow-size: calc(var(--size-lg) * 0.3);
  }

  .${unsafeCSS(Sizes.SL)} {
    --button-font-size: var(--size-sl);
    --button-padding: var(--size-sl);
    --button-focus-visible-shadow-size: calc(var(--size-sl) * 0.3);
  }

  .${unsafeCSS(Sizes.XL)} {
    --button-font-size: var(--size-xl);
    --button-padding: var(--size-xl);
    --button-focus-visible-shadow-size: calc(var(--size-xl) * 0.3);
  }

  .${unsafeCSS(Sizes.XXL)} {
    --button-font-size: var(--size-xxl);
    --button-padding: var(--size-xxl);
    --button-focus-visible-shadow-size: calc(var(--size-xxl) * 0.3);
  }

  .${unsafeCSS(Sizes.XXXL)} {
    --button-font-size: var(--size-xxxl);
    --button-padding: var(--size-xxxl);
    --button-focus-visible-shadow-size: calc(var(--size-xxxl) * 0.3);
  }
`;

export function buttonScript(host: HTMLElement) {}

export function buttonUnscript(host: HTMLElement) {}
