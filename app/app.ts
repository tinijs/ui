import {App} from '@tinijs/core';
// import {TiniButtonComponent} from '@tinijs/ui/components/button';

import {AppRootTemplate} from './root-template';

@App({
  // uiOptions: {
  //   'bootstrap/dark': {
  //     referGradientScheme: true,
  //     perComponent: {
  //       [TiniButtonComponent.componentName]: {
  //         referGradientSchemeOnHover: true,
  //       }
  //     }
  //   },
  // },
})
export class AppRoot extends AppRootTemplate {}
