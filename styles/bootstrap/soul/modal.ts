import {css} from 'lit';

export const modalStyle = css`
  /* :host {} */

  /*
   * Main
   */

  dialog {
    position: fixed;
    padding: 0;
    width: calc(100% - 2rem);
    max-width: 960px;
    border: none;
    border-radius: var(--size-radius);
    box-shadow: var(--shadow-box);
    background: var(--color-background);
    color: var(--color-foreground);
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }

  dialog.backdrop-closed::backdrop {
    cursor: pointer;
  }

  .head,
  .body,
  .foot {
    cursor: default;
    display: flex;
    box-sizing: border-box;
    width: 100%;
  }

  .head {
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-background-shade);
    padding: 1rem;
  }

  .head em {
    display: block;
    font-size: 1.2rem;
    font-style: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .head button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    padding: 0;
    background: none;
    border: none;
    opacity: 0.5;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--color-foreground);
  }

  .head button:hover {
    opacity: 1;
  }

  .body {
    padding: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 75vh;
    max-height: 75dvh;
  }

  .foot {
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-top: 1px solid var(--color-background-shade);
  }
`;

export const modalScript = undefined;
export const modalUnscript = undefined;
