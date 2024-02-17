import {App} from '@tinijs/core';

import {TiniCodeComponent} from '@tinijs/ui/components/code';

import {AppRootTemplate} from './root-template';

import {prismHighlight, prismThemeLight, prismThemeDark} from './helpers/prism';
import {
  hljsHighlight,
  hljsThemeLight,
  hljsThemeDark,
} from './helpers/highlight';

@App({
  uiOptions: {
    'bootstrap/light': {
      perComponent: {
        [TiniCodeComponent.componentName]: {
          engine: 'hljs',
          highlight: hljsHighlight,
          theme: hljsThemeLight,
        },
      },
    },
    'bootstrap/dark': {
      // referGradientScheme: true,
      perComponent: {
        // [TiniButtonComponent.componentName]: {
        //   referGradientSchemeOnHover: true,
        // },
        [TiniCodeComponent.componentName]: {
          engine: 'hljs',
          highlight: hljsHighlight,
          theme: hljsThemeDark,
        },
      },
    },
    'bootstrap/retro-light': {
      perComponent: {
        [TiniCodeComponent.componentName]: {
          engine: 'prism',
          highlight: prismHighlight,
          theme: prismThemeLight,
        },
      },
    },
    'bootstrap/retro-dark': {
      perComponent: {
        [TiniCodeComponent.componentName]: {
          engine: 'prism',
          highlight: prismHighlight,
          theme: prismThemeDark,
        },
      },
    },
  },
})
export class AppRoot extends AppRootTemplate {}
