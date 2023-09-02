import {css} from 'lit';
import {VaryGroups, generateColorVaries, generateScaleVaries} from 'tinijs';

export const labelStyle = css`
  :host {
    --label-background: var(--color-medium) /* Background color */;
    --label-scale: var(--scale-md);
    --label-color: black /* Text color */;
    --label-border: none;
    --label-radius: var(--size-radius);
  }

  :host {
    display: inline;
  }

  /*
   * Root
   */

  .root {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: calc(var(--label-scale) * 0.5);
    border: var(--label-border);
    border-radius: var(--label-radius);
    background: color-mix(in oklab, var(--label-background), transparent 50%);
    color: var(--label-color);
    font-size: var(--label-scale);
    font-weight: normal;
    line-height: 1;
  }

  /*
   * [?pill]
   */

  .pill {
    border-radius: 1000px !important;
  }

  /*
   * [scheme] & [color]
   */

  ${generateColorVaries(
    ({name, fullName, color}) => `
    .${fullName} {
      --label-background: ${color};
    }

    .${VaryGroups.Color}-${name} {
      --label-color: ${color} !important;
    }
  `
  )}

  /*
   * [scale]
   */

  ${generateScaleVaries(
    ({fullName, scale}) => `
    .${fullName} {
      --label-scale: ${scale};
    }
  `
  )}
`;

export const labelScript = undefined;
export const labelUnscript = undefined;
