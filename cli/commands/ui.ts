import {defineCliCommand, resolveCommand} from '@tinijs/cli';

export const uiCommand = defineCliCommand({
  meta: {
    name: 'ui',
    description: 'Tools for the Tini UI.',
  },
  subCommands: {
    build: () => import('./ui-build.js').then(resolveCommand),
  },
});

export default uiCommand;
