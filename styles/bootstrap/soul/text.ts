import {css} from 'lit';
import {generateColorVaries, generateGradientVaries} from '@tinijs/core';

export const textStyle = css`
  :host {
    --text-color: var(--color-foreground);
    display: inline;
  }

  [part='text'] {
    color: var(--text-color);
  }

  ${generateColorVaries(
    ({name, color}) => `
    .color-${name} {
      --text-color: ${color};
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient}) => `
    .color-gradient-${name} {
      background: ${gradient};
      -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
    }
  `
  )}
`;

export function textScript(host: HTMLElement) {}

export function textUnscript(host: HTMLElement) {}
