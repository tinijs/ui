import {css} from 'lit';

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

  .dynamic {
    --icon-color: var(--color-foreground);
  }

  .primary {
    --icon-color: var(--color-primary);
  }

  .secondary {
    --icon-color: var(--color-secondary);
  }

  .tertiary {
    --icon-color: var(--color-tertiary);
  }

  .success {
    --icon-color: var(--color-success);
  }

  .warning {
    --icon-color: var(--color-warning);
  }

  .danger {
    --icon-color: var(--color-danger);
  }

  .light {
    --icon-color: var(--color-light);
  }

  .medium {
    --icon-color: var(--color-medium);
  }

  .dark {
    --icon-color: var(--color-dark);
  }

  .gradient-dynamic {
    --icon-color: var(--gradient-foreground);
  }

  .gradient-primary {
    --icon-color: var(--gradient-primary);
  }

  .gradient-secondary {
    --icon-color: var(--gradient-secondary);
  }

  .gradient-tertiary {
    --icon-color: var(--gradient-tertiary);
  }

  .gradient-success {
    --icon-color: var(--gradient-success);
  }

  .gradient-warning {
    --icon-color: var(--gradient-warning);
  }

  .gradient-danger {
    --icon-color: var(--gradient-danger);
  }

  .gradient-light {
    --icon-color: var(--gradient-light);
  }

  .gradient-medium {
    --icon-color: var(--gradient-medium);
  }

  .gradient-dark {
    --icon-color: var(--gradient-dark);
  }

  .xxxs {
    --icon-width: var(--size-xxxs-2x);
    --icon-height: var(--size-xxxs-2x);
  }

  .xxs {
    --icon-width: var(--size-xxs-2x);
    --icon-height: var(--size-xxs-2x);
  }

  .xs {
    --icon-width: var(--size-xs-2x);
    --icon-height: var(--size-xs-2x);
  }

  .ss {
    --icon-width: var(--size-ss-2x);
    --icon-height: var(--size-ss-2x);
  }

  .sm {
    --icon-width: var(--size-sm-2x);
    --icon-height: var(--size-sm-2x);
  }

  .ml {
    --icon-width: var(--size-ml-2x);
    --icon-height: var(--size-ml-2x);
  }

  .lg {
    --icon-width: var(--size-lg-2x);
    --icon-height: var(--size-lg-2x);
  }

  .sl {
    --icon-width: var(--size-sl-2x);
    --icon-height: var(--size-sl-2x);
  }

  .xl {
    --icon-width: var(--size-xl-2x);
    --icon-height: var(--size-xl-2x);
  }

  .xxl {
    --icon-width: var(--size-xxl-2x);
    --icon-height: var(--size-xxl-2x);
  }

  .xxxl {
    --icon-width: var(--size-xxxl-2x);
    --icon-height: var(--size-xxxl-2x);
  }
`;

export function iconScript(host: HTMLElement) {}

export function iconUnscript(host: HTMLElement) {}
