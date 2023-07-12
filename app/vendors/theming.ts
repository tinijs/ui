import {adoptStyles, CSSResult} from 'lit';

interface Scripting {
  script: (host: HTMLElement) => void;
  unscript: Scripting['script'];
}

type Subscription = (soul: string) => void;

interface ThemingOptions {
  styling?: Record<string, CSSResult[]>;
  scripting?: Record<string, Scripting>;
}

export const THEMING_SUBSCRIPTIONS: Subscription[] = [];

export function changeTheme({soul, skin}: {soul?: string; skin?: string}) {
  const [currentSoul, currentSkin] =
    document.body.dataset.theme?.split('/') || [];
  soul ||= currentSoul;
  skin ||= currentSkin;
  if (soul && skin) {
    document.body.dataset.theme = `${soul}/${skin}`;
    if (soul !== currentSoul) {
      THEMING_SUBSCRIPTIONS.forEach(subscription =>
        subscription(soul as string)
      );
    }
  }
}

export function Theming({styling, scripting}: ThemingOptions) {
  return function (target: any) {
    // originals
    const originalConnectedCallback = target.prototype.connectedCallback;
    const originalDisconnectedCallback = target.prototype.disconnectedCallback;
    const originalUpdated = target.prototype.updated;
    // styles
    const unsubscribeKey = Symbol();
    const applyStyles = (host: any, soulName?: string) => {
      soulName ||= document.body.dataset.theme?.split('/')[0];
      // retrieve styles
      const originalStyles = target.styles || [];
      const styles = (
        !styling
          ? []
          : !soulName || !styling[soulName]
          ? Object.values(styling)[0]
          : styling[soulName]
      ).concat(
        originalStyles instanceof Array ? originalStyles : [originalStyles]
      );
      // affect
      adoptStyles(host.shadowRoot, styles);
    };
    // scripts
    const unscriptKey = Symbol();
    const dummyScript = (host: any) => host;
    const applyScripts = (host: any, soulName?: string) => {
      soulName ||= document.body.dataset.theme?.split('/')[0];
      // retrieve scripts
      const scripts: any = !scripting
        ? {}
        : !soulName || !scripting[soulName]
        ? Object.values(scripting)[0]
        : scripting[soulName];
      // affect
      (host[unscriptKey] || dummyScript)(host);
      host[unscriptKey] = scripts?.unscript || dummyScript;
      (scripts?.script || dummyScript)(host);
    };

    // connected/disconnected
    target.prototype.connectedCallback = function () {
      originalConnectedCallback?.bind(this)();
      // watch for soul change
      const pointer = THEMING_SUBSCRIPTIONS.push(soul => {
        applyStyles(this, soul);
        applyScripts(this, soul);
      });
      this[unsubscribeKey] = () => THEMING_SUBSCRIPTIONS.splice(pointer - 1, 1);
      // apply styles
      applyStyles(this);
    };
    target.prototype.disconnectedCallback = function () {
      originalDisconnectedCallback?.bind(this)();
      // unwatch for soul change
      this[unsubscribeKey]?.();
    };

    // updated
    target.prototype.updated = function (...params: any[]) {
      originalUpdated?.bind(this)(...params);
      // apply scripts
      applyScripts(this);
    };
  };
}
