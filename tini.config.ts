import {defineTiniConfig} from '@tinijs/core';

import uiCliExpansion from './cli/expand.js';

export default defineTiniConfig({
  ui: {
    outDir: '.tini-ui',
    react: true,
    sources: ['./ui'],
    pick: {
      families: {
        bootstrap: {
          skins: ['light', 'dark', 'xxx'],
        },
        material: {
          skins: ['zzz'],
        },
      },
      bases: ['*'],
    },
  },

  cli: {
    expand: [uiCliExpansion],
  },
});
