import {css} from 'lit';

export default css`
  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  a[target='_blank'] {
    cursor: alias;
  }

  a:hover,
  a:focus,
  a:active {
    background: none;
    color: var(--color-primary-shade);
    text-decoration: underline;
    border: none;
    outline: 0;
  }
`;
