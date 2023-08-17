import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateSizeVaries,
} from '@tinijs/core';

export const switchStyle = css`
  :host {
    --switch-size: var(--size-md);
    --switch-background: var(--color-medium);
    --switch-color: var(--color-light);
    --switch-active-background: var(--color-primary);
    --switch-active-color: var(--color-primary-contrast);
    display: inline;
  }

  /*
   * Root
   */

  .root {
    --offset: 2px;
    --wrapper-size: calc(var(--switch-size) * 2);
    --slider-outer-size: calc((var(--wrapper-size) / 2) + var(--offset));
    --slider-size: calc((var(--wrapper-size) / 2) - var(--offset));
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: var(--wrapper-size);
    height: var(--slider-outer-size);
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--switch-background);
    transition: 0.4s;
    border-radius: var(--slider-outer-size);
  }

  .slider:before {
    position: absolute;
    content: '';
    height: var(--slider-size);
    width: var(--slider-size);
    left: var(--offset);
    bottom: var(--offset);
    background: var(--switch-color);
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background: var(--switch-active-background);
  }

  input:checked + .slider:before {
    background: var(--switch-active-color);
    -webkit-transform: translateX(var(--slider-size));
    -ms-transform: translateX(var(--slider-size));
    transform: translateX(var(--slider-size));
  }

  .switch > span {
    margin-left: var(--size-space-0_5x);
  }

  /*
   * [color]
   */

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .color-${name} {
      --switch-active-background: ${color};
      --switch-active-color: ${contrast};
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient, contrast}) => `
    .color-${name} {
      --switch-background: var(--gradient-medium);
      --switch-active-background: ${gradient};
      --switch-active-color: ${contrast};
    }
  `
  )}

  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --switch-size: var(--size-${size});
    }
  `
  )}
`;

export const switchScript = undefined;
export const switchUnscript = undefined;
