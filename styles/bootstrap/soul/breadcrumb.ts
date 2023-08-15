import {css} from 'lit';

export const breadcrumbStyle = css`
  /* :host {} */

  /*
   * Main
   */

  .breadcrumb {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .item {
    color: var(--color-medium);
  }

  .item::before {
    content: '/';
    margin: 0 var(--size-space-0_5x);
    color: var(--color-medium);
  }

  .item:first-child::before {
    display: none;
  }
`;

export const breadcrumbScript = undefined;
export const breadcrumbUnscript = undefined;
