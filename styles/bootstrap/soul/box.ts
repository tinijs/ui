import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
} from '@tinijs/core';

export const boxStyle = css`
  :host {
    --box-background: var(--color-background);
    --box-color: var(--color-foreground);
    --box-border: none;
    --box-radius: var(--size-radius);
    --box-padding-top: var(--size-space);
    --box-padding-right: var(--size-space);
    --box-padding-bottom: var(--size-space);
    --box-padding-left: var(--size-space);
    --box-margin-top: 0;
    --box-margin-right: 0;
    --box-margin-bottom: 0;
    --box-margin-left: 0;
  }

  [part='box'] {
    width: 100%;
    background: var(--box-background);
    color: var(--box-color);
    border: var(--box-border);
    border-radius: var(--box-radius);
    padding-top: var(--box-padding-top);
    padding-right: var(--box-padding-right);
    padding-bottom: var(--box-padding-bottom);
    padding-left: var(--box-padding-left);
    margin-top: var(--box-margin-top);
    margin-right: var(--box-margin-right);
    margin-bottom: var(--box-margin-bottom);
    margin-left: var(--box-margin-left);
  }

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .bg-${name} {
      --box-background: ${color};
      --box-color: ${contrast};
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient, contrast}) => `
    .bg-gradient-${name} {
      --box-background: ${gradient};
      --box-color: ${contrast};
    }
  `
  )}
`;

export function boxScript(host: HTMLElement) {}

export function boxUnscript(host: HTMLElement) {}
