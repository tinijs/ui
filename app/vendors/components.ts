export function useComponents(items: Record<string, any>) {
  Object.keys(items).forEach(tagName => {
    const isDefined = customElements.get(tagName);
    if (!isDefined) {
      customElements.define(tagName, items[tagName]);
    }
  });
}

export function UseComponents(items: Record<string, any>) {
  return function (target: any) {
    useComponents(items);
    return target;
  };
}
