import {css, unsafeCSS} from 'lit';
import {Colors, Sizes} from '../types';

export const iconStyle = css`
  :host {
    --icon-width: var(--size-md-2x);
    --icon-height: var(--size-md-2x);
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

  .${unsafeCSS(Colors.GradientDynamic)} {
    --icon-color: var(--gradient-foreground);
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

  .${unsafeCSS(Sizes.XXXS)} {
    --icon-width: var(--size-xxxs-2x);
    --icon-height: var(--size-xxxs-2x);
  }

  .${unsafeCSS(Sizes.XXS)} {
    --icon-width: var(--size-xxs-2x);
    --icon-height: var(--size-xxs-2x);
  }

  .${unsafeCSS(Sizes.XS)} {
    --icon-width: var(--size-xs-2x);
    --icon-height: var(--size-xs-2x);
  }

  .${unsafeCSS(Sizes.SS)} {
    --icon-width: var(--size-ss-2x);
    --icon-height: var(--size-ss-2x);
  }

  .${unsafeCSS(Sizes.SM)} {
    --icon-width: var(--size-sm-2x);
    --icon-height: var(--size-sm-2x);
  }

  .${unsafeCSS(Sizes.ML)} {
    --icon-width: var(--size-ml-2x);
    --icon-height: var(--size-ml-2x);
  }

  .${unsafeCSS(Sizes.LG)} {
    --icon-width: var(--size-lg-2x);
    --icon-height: var(--size-lg-2x);
  }

  .${unsafeCSS(Sizes.SL)} {
    --icon-width: var(--size-sl-2x);
    --icon-height: var(--size-sl-2x);
  }

  .${unsafeCSS(Sizes.XL)} {
    --icon-width: var(--size-xl-2x);
    --icon-height: var(--size-xl-2x);
  }

  .${unsafeCSS(Sizes.XXL)} {
    --icon-width: var(--size-xxl-2x);
    --icon-height: var(--size-xxl-2x);
  }

  .${unsafeCSS(Sizes.XXXL)} {
    --icon-width: var(--size-xxxl-2x);
    --icon-height: var(--size-xxxl-2x);
  }
`;

export function iconScript(host: HTMLElement) {}

export function iconUnscript(host: HTMLElement) {}
