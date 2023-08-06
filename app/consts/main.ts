export const LIB_VERSION = '0.0.0';

export const GITHUB_REPO_URL = 'https://github.com/tinijs/ui';
export const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/tinijs/ui';

export const GITHUB_ICONS_REPO_URL = GITHUB_REPO_URL.replace(
  'tinijs/ui',
  'tinijs/icons'
);
export const GITHUB_ICONS_RAW_URL = GITHUB_RAW_URL.replace(
  'tinijs/ui',
  'tinijs/icons'
);

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
