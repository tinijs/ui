import {resolveCommand} from '@tinijs/cli';

export default function () {
  return {
    ui: import('./commands/ui.js').then(resolveCommand),
  };
}
