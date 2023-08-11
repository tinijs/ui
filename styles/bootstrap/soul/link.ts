import {css} from 'lit';
import {generateColorVaries, generateGradientVaries} from '@tinijs/core';

export const linkStyle = css`
  :host {
    --link-color: var(--color-primary);
    --link-color-muted: var(--color-foreground);
    --link-hover-brightness: 1.1;
    --link-disabled-opacity: 0.5;
    display: inline;
  }

  /*
   * Main
   */

  a {
    color: var(--link-color);
    text-decoration: none;
  }

  a[target='_blank'] {
    cursor: alias;
  }

  a:hover,
  a:focus,
  a:active {
    filter: brightness(var(--link-hover-brightness));
    text-decoration: underline;
    background: none;
    border: none;
    outline: 0;
  }

  a.muted {
    opacity: var(--link-disabled-opacity);
  }

  a.muted:hover,
  a.muted:focus,
  a.muted:active {
    text-decoration: none;
    filter: none;
  }

  /*
   * [color]
   */

  ${generateColorVaries(
    ({name, color}) => `
    .color-${name} {
      --link-color: ${color};
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient}) => `
    .color-${name} {
      background: ${gradient};
      -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
    }
  `
  )}
`;

export const linkScript = undefined;
export const linkUnscript = undefined;
