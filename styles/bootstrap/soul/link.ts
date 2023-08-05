import {css} from 'lit';

export const linkStyle = css`
  :host {
    --link-color: var(--color-primary);
    --link-color-muted: var(--color-foreground);
    --link-hover-color: var(--color-primary-shade);
    --link-hover-color-muted: var(--color-foreground-shade);
    display: inline;
  }

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
    color: var(--link-hover-color);
    text-decoration: underline;
    background: none;
    border: none;
    outline: 0;
  }

  a.muted {
    color: var(--link-color-muted);
  }

  a.muted:hover,
  a.muted:focus,
  a.muted:active {
    text-decoration: none;
    color: var(--link-hover-color-muted);
  }
`;

export function linkScript(host: HTMLElement) {}

export function linkUnscript(host: HTMLElement) {}
