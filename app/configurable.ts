import routes from './routes';

export class Configurable {
  static options = {
    appId: 'ui',
    appName: 'Tini UI',
    logoUrl: new URL('./assets/logo.svg', import.meta.url).toString(),
    privateRepo: false,
    repoUrl: 'https://github.com/tinijs/ui',
    iconsRepoUrl: 'https://github.com/tinijs/icons',
    packagePrefix: '@tinijs/ui',
    soulList: [
      {
        id: 'bootstrap',
        name: 'Bootstrap',
        skins: [
          {id: 'light', name: 'Light'},
          {id: 'dark', name: 'Dark'},
        ],
      },
    ],
    routes,
  };

  static setOptions(options: Partial<typeof Configurable.options>) {
    return (Configurable.options = {...Configurable.options, ...options});
  }

  static getOption<Key extends keyof typeof Configurable.options>(key: Key) {
    return Configurable.options[key];
  }
}
