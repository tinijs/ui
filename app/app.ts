import {App} from '@tinijs/core';

import {AppRootTemplate} from './root-template';

@App({
  globalComponentOptions: {
    // 'bootstrap/dark': {
    //   // referGradientScheme: true,
    //   perComponent: {
    //     button: {
    //       referGradientSchemeOnHover: true,
    //     }
    //   }
    // },
  },
})
export class AppRoot extends AppRootTemplate {}
