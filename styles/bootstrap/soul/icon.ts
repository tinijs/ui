import {css, unsafeCSS} from 'lit';
import {Colors, Sizes} from '../types';

export const iconStyle = css`
  :host {
    --icon-width: calc(var(--size-md) * 2);
    --icon-height: calc(var(--size-md) * 2);
    --icon-color: none;
    --icon-image: url();
    display: inline-block;
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: var(--icon-image);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: var(--icon-width);
    height: var(--icon-height);
  }

  .recolor {
    background: var(--icon-color);
    -webkit-mask-image: var(--icon-image);
    -webkit-mask-size: var(--icon-width) var(--icon-height);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-image: var(--icon-image);
    mask-size: var(--icon-width) var(--icon-height);
    mask-repeat: no-repeat;
    mask-position: center;
  }

  .${unsafeCSS(Colors.Dynamic)} {
    --icon-color: var(--color-foreground);
  }

  .${unsafeCSS(Colors.Primary)} {
    --icon-color: var(--color-primary);
  }

  .${unsafeCSS(Colors.Secondary)} {
    --icon-color: var(--color-secondary);
  }

  .${unsafeCSS(Colors.Tertiary)} {
    --icon-color: var(--color-tertiary);
  }

  .${unsafeCSS(Colors.Success)} {
    --icon-color: var(--color-success);
  }

  .${unsafeCSS(Colors.Warning)} {
    --icon-color: var(--color-warning);
  }

  .${unsafeCSS(Colors.Danger)} {
    --icon-color: var(--color-danger);
  }

  .${unsafeCSS(Colors.Light)} {
    --icon-color: var(--color-light);
  }

  .${unsafeCSS(Colors.Medium)} {
    --icon-color: var(--color-medium);
  }

  .${unsafeCSS(Colors.Dark)} {
    --icon-color: var(--color-dark);
  }

  .${unsafeCSS(Colors.GradientPrimary)} {
    --icon-color: var(--gradient-primary);
  }

  .${unsafeCSS(Colors.GradientSecondary)} {
    --icon-color: var(--gradient-secondary);
  }

  .${unsafeCSS(Colors.GradientTertiary)} {
    --icon-color: var(--gradient-tertiary);
  }

  .${unsafeCSS(Colors.GradientSuccess)} {
    --icon-color: var(--gradient-success);
  }

  .${unsafeCSS(Colors.GradientWarning)} {
    --icon-color: var(--gradient-warning);
  }

  .${unsafeCSS(Colors.GradientDanger)} {
    --icon-color: var(--gradient-danger);
  }

  .${unsafeCSS(Colors.GradientLight)} {
    --icon-color: var(--gradient-light);
  }

  .${unsafeCSS(Colors.GradientMedium)} {
    --icon-color: var(--gradient-medium);
  }

  .${unsafeCSS(Colors.GradientDark)} {
    --icon-color: var(--gradient-dark);
  }

  .${unsafeCSS(Sizes.XS)} {
    --icon-width: calc(var(--size-xs) * 4);
    --icon-height: calc(var(--size-xs) * 4);
  }

  .${unsafeCSS(Sizes.SM)} {
    --icon-width: calc(var(--size-sm) * 3);
    --icon-height: calc(var(--size-sm) * 3);
  }

  .${unsafeCSS(Sizes.LG)} {
    --icon-width: calc(var(--size-lg) * 2);
    --icon-height: calc(var(--size-lg) * 2);
  }

  .${unsafeCSS(Sizes.XL)} {
    --icon-width: calc(var(--size-xl) * 2);
    --icon-height: calc(var(--size-xl) * 2);
  }

  .${unsafeCSS(Sizes.XXL)} {
    --icon-width: calc(var(--size-xxl) * 2);
    --icon-height: calc(var(--size-xxl) * 2);
  }
`;

export function iconScript(host: HTMLElement) {}

export function iconUnscript(host: HTMLElement) {}
