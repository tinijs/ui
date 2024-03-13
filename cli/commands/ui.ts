import {defineTiniCommand, resolveCommand} from '@tinijs/cli';

export const uiCommand = defineTiniCommand({
  meta: {
    name: 'ui',
    description: 'Tools for the Tini UI.',
  },
  subCommands: {
    build: import('./ui-build.js').then(resolveCommand),
  },
});

export default uiCommand;
