import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateSizeVaries,
} from '@tinijs/core';

export const paginationStyle = css`
  :host {
    --pagination-background: none;
    --pagination-color: var(--color-primary);
    --pagination-active-background: var(--color-primary);
    --pagination-active-color: var(--color-primary-contrast);
    --pagination-size: var(--size-md);
  }

  /*
   * Main
   */

  .pagination {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li a {
    display: block;
    padding: calc(var(--pagination-size) / 2.75)
      calc(var(--pagination-size) / 1.25);
    text-decoration: none;
    background: var(--pagination-background);
    color: var(--pagination-color);
    border: var(--size-border) solid var(--color-background-shade);
    border-right-width: 0;
    font-size: var(--pagination-size);
  }

  li:first-child a {
    border-radius: var(--size-radius) 0 0 var(--size-radius);
  }

  li:last-child a {
    border-right-width: var(--size-border);
    border-radius: 0 var(--size-radius) var(--size-radius) 0;
  }

  li a:hover {
    background: color-mix(
      in oklab,
      var(--color-background-shade),
      transparent 75%
    );
  }

  li.active a {
    cursor: default;
    background: var(--pagination-active-background);
    color: var(--pagination-active-color);
  }

  /*
   * Previous & Next
   */

  .previous a::before {
    content: 'Previous';
  }

  .next a::before {
    content: 'Next';
  }

  .previous.disabled a,
  .previous.disabled a:hover,
  .next.disabled a,
  .next.disabled a:hover {
    cursor: default;
    background: var(--color-background-shade);
    color: var(--color-medium);
  }

  /*
   * [color]
   */

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .color-${name} {
      --pagination-color: ${color};
      --pagination-active-background: ${color};
      --pagination-active-color: ${contrast};
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient, color, contrast}) => `
    .color-${name} {
      --pagination-color: ${color};
      --pagination-active-background: ${gradient};
      --pagination-active-color: ${contrast};
    }
  `
  )}

  /*
   * [size]
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      --pagination-size: var(--size-${size});
    }
  `
  )}
`;

export const paginationScript = undefined;
export const paginationUnscript = undefined;
