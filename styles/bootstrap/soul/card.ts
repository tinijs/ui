import {css} from 'lit';

export const cardStyle = css`
  :host {
    --card-background: var(--color-background-tint);
    --card-border: var(--size-border) solid var(--color-background-shade);
    --card-radius: var(--size-radius);
  }

  /*
   * Main
   */

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--card-background);
    border: var(--card-border);
    border-radius: var(--card-radius);
    overflow: hidden;
    max-width: var(--wide-xs);
  }

  .head,
  .foot {
    display: none;
    padding: var(--size-space-0_5x) var(--size-space);
    align-items: center;
    justify-content: space-between;
    background: color-mix(in oklab, var(--color-background-shade), white 75%);
  }

  .head-populated,
  .foot-populated {
    display: flex;
  }

  .head {
    border-bottom: var(--card-border);
  }

  .body {
    padding: var(--size-space);
  }

  .foot {
    border-top: var(--card-border);
  }

  ::slotted(.card-image) {
    width: calc(100% + (var(--size-space) * 2));
    margin: calc(var(--size-space) * -1);
    height: auto;
    margin-bottom: var(--size-space);
  }

  ::slotted(.card-title) {
    display: block;
    margin: 0;
    font-size: var(--size-text-1_25x);
    font-weight: bold;
  }

  /*
   * [?fluid]
   */

  .fluid {
    max-width: none;
  }
`;

export const cardScript = undefined;
export const cardUnscript = undefined;
