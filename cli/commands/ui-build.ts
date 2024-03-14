import {resolve, parse} from 'pathe';
import {defineCliCommand, parseName} from '@tinijs/cli';
import {consola} from 'consola';

import {
  listAvailableComponents,
  listAvailableThemeFamilies,
  outputBuildResults,
  buildGlobal,
  buildSkins,
  buildBases,
  buildComponents,
  buildSetup,
} from '../utils/build.js';

import cliExpansion from '../expand.js';

export const uiBuildCommand = defineCliCommand(
  {
    meta: {
      name: 'build',
      description: 'Build the UI package.',
    },
  },
  async () => {
    const {
      context: {tiniApp},
    } = cliExpansion;
    const uiConfig = tiniApp.config.ui;
    if (!uiConfig) return consola.error('No UI configuration found.');
    const ourDir = resolve(uiConfig.outDir || './node_modules/@tinijs/ui');

    const availableComponents = await listAvailableComponents(uiConfig.sources);
    const availableThemeFamilies = await listAvailableThemeFamilies(
      uiConfig.sources
    );

    const global = await buildGlobal();
    await outputBuildResults(ourDir, global);

    const skins = await buildSkins(
      ourDir,
      availableThemeFamilies,
      uiConfig.pick
    );
    await outputBuildResults(ourDir, skins);

    const bases = await buildBases(
      ourDir,
      availableThemeFamilies,
      uiConfig.pick
    );
    await outputBuildResults(ourDir, bases);

    const components = await buildComponents(
      ourDir,
      availableComponents,
      availableThemeFamilies,
      uiConfig.pick,
      uiConfig.react
    );
    await outputBuildResults(ourDir, components);

    const setup = await buildSetup();
    await outputBuildResults(ourDir, setup);
  }
);

export default uiBuildCommand;
