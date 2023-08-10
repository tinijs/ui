export const OFFICIAL_REPO_URL = 'https://github.com/tinijs/ui';

export const enum ConsumerPlatforms {
  Tini = 'Tini',
  Vue = 'Vue',
  React = 'React',
  Angular = 'Angular',
  Svelte = 'Svelte',
  HTML = 'HTML',
}

export const enum ImportMethods {
  TiniJS = 'TiniJS Framework',
  Others = 'Other Frameworks',
  Standalone = 'Standalone/CDN',
}

export const enum IconsImportMethods {
  TiniJS = ImportMethods.TiniJS,
  Others = ImportMethods.Others,
  Standalone = ImportMethods.Standalone,
  DataURI = 'Base64 URI',
  SVG = 'SVG Code',
  URL = 'Direct URL',
}
