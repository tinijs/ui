import {defineTiniCommand} from '@tinijs/cli';

export const uiBuildCommand = defineTiniCommand(
  {
    meta: {
      name: 'build',
      description: 'Build the UI package.',
    },
  },
  async (args) => {
    console.log('UI build: ', args);
  }
);

export default uiBuildCommand;
