import {css} from 'lit';
import {generateColorVaries, generateGradientVaries} from '@tinijs/core';

export const textStyle = css`
  :host {
    --box-color: var(--color-foreground);
    display: inline;
  }

  [part='text'] {
    color: var(--box-color);
  }

  ${generateColorVaries(
    ({name, color}) => `
    .${name} {
      --box-color: ${color};
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient}) => `
    .gradient-${name} {
      background: ${gradient};
      -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
    }
  `
  )}
`;

export function textScript(host: HTMLElement) {}

export function textUnscript(host: HTMLElement) {}
