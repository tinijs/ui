import {defineCliExpansion, resolveCommand} from '@tinijs/cli';

export default defineCliExpansion({
  meta: {
    name: '@tinijs/ui',
  },
  setup() {
    return {
      ui: () => import('./commands/ui.js').then(resolveCommand),
    };
  },
});
