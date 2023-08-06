import {css} from 'lit';

export const buttonStyle = css`
  :host {
    --button-background: var(--color-medium) /* Background color */;
    --button-background-disabled: rgba(var(--color-medium-rgb), 0.5);
    --button-color: var(--color-medium-contrast) /* Text color */;
    --button-color-disabled: rgba(var(--color-medium-contrast-rgb), 0.5);
    --button-radius: var(--size-radius);
    --button-padding: calc(var(--size-md) * 0.75) /* Base padding */;
    --button-font-size: var(--size-md);
    --button-hover-background: var(--color-foreground-shade);
    --button-ripple-color: rgba(var(--color-background-rgb), 0.3)
      /* [B] Ripple effect color */;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    border: none;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    margin: 0;
    width: 100%;
    border-radius: var(--button-radius);
    box-shadow: var(--shadow-box);
    position: relative;
    overflow: hidden;
    background: var(--button-background);
    color: var(--button-color);
    padding: calc(var(--button-padding) / 2) var(--button-padding);
    font-family: var(--font-body);
    font-size: var(--button-font-size);
  }

  button:active,
  button:hover {
    outline: 0;
    text-decoration: none;
  }

  button:disabled {
    opacity: 1;
    cursor: default;
    background: var(--button-background-disabled);
    color: var(--button-color-disabled);
  }

  button span.ripple {
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: button_ripple 350ms linear;
    background-color: var(--button-ripple-color);
  }

  @keyframes button_ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .dynamic {
    --button-background: var(--color-foreground);
    --button-background-disabled: rgba(var(--color-foreground-rgb), 0.5);
    --button-color: var(--color-background);
    --button-color-disabled: rgba(var(--color-background-rgb), 0.5);
    --button-hover-background: var(--color-foreground-shade);
    --button-ripple-color: rgba(var(--color-background-rgb), 0.3);
  }

  .primary {
    --button-background: var(--color-primary);
    --button-background-disabled: rgba(var(--color-primary-rgb), 0.5);
    --button-color: var(--color-primary-contrast);
    --button-color-disabled: rgba(var(--color-primary-contrast-rgb), 0.5);
    --button-hover-background: var(--color-primary-shade);
    --button-ripple-color: rgba(var(--color-primary-contrast-rgb), 0.3);
  }

  .secondary {
    --button-background: var(--color-secondary);
    --button-background-disabled: rgba(var(--color-secondary-rgb), 0.5);
    --button-color: var(--color-secondary-contrast);
    --button-color-disabled: rgba(var(--color-secondary-contrast-rgb), 0.5);
    --button-hover-background: var(--color-secondary-shade);
    --button-ripple-color: rgba(var(--color-secondary-contrast-rgb), 0.3);
  }

  .tertiary {
    --button-background: var(--color-tertiary);
    --button-background-disabled: rgba(var(--color-tertiary-rgb), 0.5);
    --button-color: var(--color-tertiary-contrast);
    --button-color-disabled: rgba(var(--color-tertiary-contrast-rgb), 0.5);
    --button-hover-background: var(--color-tertiary-shade);
    --button-ripple-color: rgba(var(--color-tertiary-contrast-rgb), 0.3);
  }

  .success {
    --button-background: var(--color-success);
    --button-background-disabled: rgba(var(--color-success-rgb), 0.5);
    --button-color: var(--color-success-contrast);
    --button-color-disabled: rgba(var(--color-success-contrast-rgb), 0.5);
    --button-hover-background: var(--color-success-shade);
    --button-ripple-color: rgba(var(--color-success-contrast-rgb), 0.3);
  }

  .warning {
    --button-background: var(--color-warning);
    --button-background-disabled: rgba(var(--color-warning-rgb), 0.5);
    --button-color: var(--color-warning-contrast);
    --button-color-disabled: rgba(var(--color-warning-contrast-rgb), 0.5);
    --button-hover-background: var(--color-warning-shade);
    --button-ripple-color: rgba(var(--color-warning-contrast-rgb), 0.3);
  }

  .danger {
    --button-background: var(--color-danger);
    --button-background-disabled: rgba(var(--color-danger-rgb), 0.5);
    --button-color: var(--color-danger-contrast);
    --button-color-disabled: rgba(var(--color-danger-contrast-rgb), 0.5);
    --button-hover-background: var(--color-danger-shade);
    --button-ripple-color: rgba(var(--color-danger-contrast-rgb), 0.3);
  }

  .light {
    --button-background: var(--color-light);
    --button-background-disabled: rgba(var(--color-light-rgb), 0.5);
    --button-color: var(--color-light-contrast);
    --button-color-disabled: rgba(var(--color-light-contrast-rgb), 0.5);
    --button-hover-background: var(--color-light-shade);
    --button-ripple-color: rgba(var(--color-light-contrast-rgb), 0.3);
  }

  .medium {
    --button-background: var(--color-medium);
    --button-background-disabled: rgba(var(--color-medium-rgb), 0.5);
    --button-color: var(--color-medium-contrast);
    --button-color-disabled: rgba(var(--color-medium-contrast-rgb), 0.5);
    --button-hover-background: var(--color-medium-shade);
    --button-ripple-color: rgba(var(--color-medium-contrast-rgb), 0.3);
  }

  .dark {
    --button-background: var(--color-dark);
    --button-background-disabled: rgba(var(--color-dark-rgb), 0.5);
    --button-color: var(--color-dark-contrast);
    --button-color-disabled: rgba(var(--color-dark-contrast-rgb), 0.5);
    --button-hover-background: var(--color-dark-tint);
    --button-ripple-color: rgba(var(--color-dark-contrast-rgb), 0.3);
  }

  .xs {
    --button-font-size: calc(var(--size-xs) * 2);
    --button-padding: calc(var(--size-xs) * 1);
  }

  .sm {
    --button-font-size: calc(var(--size-sm) * 1.5);
    --button-padding: calc(var(--size-sm) * 1);
  }

  .lg {
    --button-font-size: calc(var(--size-lg) * 1);
    --button-padding: calc(var(--size-lg) * 1);
  }

  .xl {
    --button-font-size: calc(var(--size-xl) * 1);
    --button-padding: calc(var(--size-xl) * 1);
  }

  .xxl {
    --button-font-size: calc(var(--size-xxl) * 1);
    --button-padding: calc(var(--size-xxl) * 1);
  }
`;

function createRipple(event: MouseEvent) {
  const button = event.currentTarget as HTMLButtonElement;
  const buttonBox = button.getBoundingClientRect();
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - buttonBox.left - radius}px`;
  circle.style.top = `${event.clientY - buttonBox.top - radius}px`;
  circle.classList.add('ripple');
  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) ripple.remove();
  button.appendChild(circle);
}

export function buttonScript(host: HTMLElement) {
  const buttonEl = (host as any).renderRoot?.querySelector('button');
  buttonEl.addEventListener('click', createRipple);
}

export function buttonUnscript(host: HTMLElement) {
  const buttonEl = (host as any).renderRoot?.querySelector('button');
  buttonEl.removeEventListener('click', createRipple);
  const ripple = buttonEl.getElementsByClassName('ripple')[0];
  if (ripple) ripple.remove();
}
