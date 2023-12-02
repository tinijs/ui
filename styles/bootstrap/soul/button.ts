import {css} from 'lit';
import {
  VaryGroups,
  generateColorVaries,
  generateGradientVaries,
  generateScaleVaries,
  generateFontSizeVaries,
  generateJustifyContentVaries,
  generateBoxShadowVaries,
} from 'tinijs';

export const buttonStyle = css`
  :host {
    --button-background: var(--color-medium) /* Background color */;
    --button-scale: var(--scale-md) /* Base scale */;
    --button-color: var(--color-medium-contrast) /* Text color */;
    --button-border-radius: var(--size-radius) /* Border radius */;
    --button-shadow: var(--shadow-none) /* Box shadow */;
    --button-hover-brightness: 1.1 /* Over brightness */;
    --button-active-brightness: 0.95 /* Click brightness */;
    --button-disabled-opacity: 0.5 /* Disabled opacity */;
    --button-focus-visible-shadow-size: var(--scale-md-0_3x)
      /* Focus visible shadow size */;
    --button-focus-visible-shadow-color: var(--color-medium)
      /* Focus visible shadow color */;
  }

  :host {
    display: inline;
  }

  /*
   * Root
   */

  button {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--button-scale) * 0.5);
    padding: calc(var(--button-scale) * 0.5) var(--button-scale);
    background: var(--button-background);
    color: var(--button-color);
    font-family: var(--font-body);
    font-size: var(--button-scale);
    line-height: 1.5;
    border: none;
    border-radius: var(--button-border-radius);
    outline: 0 !important;
    box-shadow: var(--button-shadow);
    transition: all 0.15s ease-in-out;
  }

  button:hover {
    filter: brightness(var(--button-hover-brightness));
  }

  button:active {
    filter: brightness(var(--button-active-brightness));
  }

  button:focus-visible {
    box-shadow: 0 0 0 var(--button-focus-visible-shadow-size)
      color-mix(
        in oklab,
        var(--button-focus-visible-shadow-color),
        transparent 70%
      );
  }

  button:disabled,
  button:disabled:hover,
  button:disabled:active,
  button:disabled:focus-visible {
    cursor: not-allowed;
    filter: none;
    pointer-events: none;
    box-shadow: none;
    background: var(--button-background);
    opacity: var(--button-disabled-opacity);
  }

  button > * {
    pointer-events: none;
  }

  /*
   * button > .content-group
   */

  button ::slotted(.content-group) {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--button-scale) * 0.5);
  }

  /*
   * [?block]
   */

  :host([block]),
  .block {
    width: 100%;
    display: flex;
    align-items: center;
  }

  /*
   * [scheme] & [color]
   */

  ${generateColorVaries(
    ({name, fullName, color, contrast}) => `
    .${fullName}-hover {
      transition: none;
    }

    .${fullName},
    .${fullName}-hover:hover {
      --button-background: ${color};
      --button-color: ${contrast};
      --button-focus-visible-shadow-color: ${color};
    }

    .${VaryGroups.Color}-${name},
    .${VaryGroups.Color}-${name}-hover:hover {
      --button-color: ${color} !important;
    }
  `
  )}

  ${generateGradientVaries(
    ({fullName, gradient, color, contrast}) => `
    .${fullName}-hover {
      transition: none;
    }

    .${fullName},
    .${fullName}-hover:hover {
      --button-background: ${gradient};
      --button-color: ${contrast};
      --button-focus-visible-shadow-color: ${color};
    }
  `
  )}

  /*
   * [scale]
   */

  ${generateScaleVaries(
    ({name, fullName, scale}) => `
    .${fullName} {
      --button-scale: ${scale};
      --button-focus-visible-shadow-size: var(--size-${name}-0_3x);
    }
  `
  )}

  /*
   * [fontSize]
   */

  ${generateFontSizeVaries(
    ({fullName, size}) => `
    .${fullName} {
      font-size: ${size} !important;
    }
  `
  )}

  /*
   * [justifyContent]
   */

  ${generateJustifyContentVaries(
    ({fullName, justify}) => `
    .${fullName} {
      justify-content: ${justify};
    }
  `
  )}

  /*
   * [shadow]
   */

  ${generateBoxShadowVaries(
    ({fullName, shadow}) => `
    .${fullName} {
      --button-shadow: ${shadow};
    }
  `
  )}
`;

export const buttonScript = undefined;
export const buttonUnscript = undefined;
