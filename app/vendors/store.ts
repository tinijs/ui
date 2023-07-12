export type StoreCallback<Type> = (newValue: Type, oldValue: Type) => void;

export interface StoreOptions {
  preserveOldValue?: boolean;
}

export type Store<States> = States & {
  subscribe: <Type>(key: keyof States, cb: StoreCallback<Type>) => () => void;
  commit: <Type>(key: keyof States, value: Type) => Type;
};

export function Subscribe<States>(
  store: Store<States>,
  stateKey?: keyof States
) {
  return function (target: any, propertyKey: string) {
    const key = (stateKey || propertyKey) as string;
    const unsubscribeKey = Symbol();
    // originals
    const originalConnectedCallback = target.connectedCallback;
    const originalDisconnectedCallback = target.disconnectedCallback;
    // override
    target.connectedCallback = function () {
      originalConnectedCallback.bind(this)();
      this[unsubscribeKey] = store['subscribe'](
        key as unknown as keyof States,
        (value: unknown) => (this[propertyKey] = value)
      );
    };
    target.disconnectedCallback = function () {
      originalDisconnectedCallback.bind(this)();
      this[unsubscribeKey]?.();
    };
  };
}

export function createStore<States>(
  states: States,
  options: StoreOptions = {}
) {
  const store = new Proxy(states as Object, {
    get(target, prop: string) {
      if (prop === 'subscribe') {
        return (stateKey: string, cb: StoreCallback<unknown>) => {
          if (stateKey in target) {
            // subscribe
            const subscriptions = ((target as any)[`___${stateKey}$`] ||= []);
            const pointer = subscriptions.push(cb);
            // unsubscribe
            return () => subscriptions.splice(pointer - 1, 1);
          } else {
            throw new Error(`Unknown state: ${stateKey}`);
          }
        };
      } else if (prop === 'commit') {
        return (stateKey: string, value: unknown) =>
          ((store as any)[stateKey] = value);
      } else {
        return (target as any)[prop];
      }
    },
    set(target, prop: string, value) {
      const subscriptions = (target as any)[`___${prop}$`] as
        | undefined
        | StoreCallback<unknown>[];
      // set value
      const currentValue = (target as any)[prop];
      const oldValue = !options.preserveOldValue
        ? currentValue
        : !(currentValue instanceof Object)
        ? currentValue
        : structuredClone(currentValue);
      (target as any)[prop] = value;
      // notify subscribers
      subscriptions?.forEach((cb: StoreCallback<unknown>) =>
        cb(value, oldValue)
      );
      // success
      return true;
    },
  }) as Store<States>;
  return store;
}
