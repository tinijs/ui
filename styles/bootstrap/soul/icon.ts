import {css} from 'lit';
import {
  generateColorDynamic,
  generateColorVaries,
  generateGradientDynamic,
  generateGradientVaries,
  generateSizeVaries,
} from '@tinijs/core';

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

  ${generateColorDynamic(
    ({name, colorA}) => `
      .${name} {
        --icon-color: ${colorA};
      }
    `
  )}

  ${generateColorVaries(
    ({name, colorA}) => `
      .${name} {
        --icon-color: ${colorA};
      }
    `
  )}

  ${generateGradientDynamic(
    ({name, gradientA}) => `
      .gradient-${name} {
        --icon-color: ${gradientA};
      }
    `
  )}

  ${generateGradientVaries(
    ({name, gradientA}) => `
      .gradient-${name} {
        --icon-color: ${gradientA};
      }
    `
  )}

  ${generateSizeVaries(
    size => `
      .${size} {
        --icon-width: var(--size-${size}-2x);
        --icon-height: var(--size-${size}-2x);
      }
    `
  )}
`;

export function iconScript(host: HTMLElement) {}

export function iconUnscript(host: HTMLElement) {}
