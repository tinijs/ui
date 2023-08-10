export class Configurable {
  static options = {
    appId: 'ui',
    logoUrl: new URL('./assets/logo.svg', import.meta.url).toString(),
  };

  static getOptions(key?: keyof typeof Configurable.options) {
    return !key ? Configurable.options : Configurable.options[key];
  }

  static setOptions(options: Partial<typeof Configurable.options>) {
    return (Configurable.options = {...Configurable.options, ...options});
  }
}
