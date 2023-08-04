import {css} from 'lit';

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

  .xs {
    --icon-width: calc(var(--size-xs) * 4);
    --icon-height: calc(var(--size-xs) * 4);
  }

  .sm {
    --icon-width: calc(var(--size-sm) * 3);
    --icon-height: calc(var(--size-sm) * 3);
  }

  .lg {
    --icon-width: calc(var(--size-lg) * 2);
    --icon-height: calc(var(--size-lg) * 2);
  }

  .xl {
    --icon-width: calc(var(--size-xl) * 2);
    --icon-height: calc(var(--size-xl) * 2);
  }

  .xxl {
    --icon-width: calc(var(--size-xxl) * 2);
    --icon-height: calc(var(--size-xxl) * 2);
  }
`;

export function iconScript(host: HTMLElement) {}

export function iconUnscript(host: HTMLElement) {}
