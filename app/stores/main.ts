import {createStore} from '@tinijs/store';

import {
  OfficialSoulNames,
  ConsumerPlatforms,
  ImportMethods,
  IconsImportMethods,
} from '../consts/main';

export const mainStore = createStore({
  soulName: OfficialSoulNames.Bootstrap,
  referImport: ImportMethods.TiniJS,
  referPlatform: ConsumerPlatforms.Lit,
  referIconsImport: IconsImportMethods.TiniJS,
  skinEditorShown: true,
});
