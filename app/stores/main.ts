import {createStore} from '@tinijs/store';

import {
  ConsumerPlatforms,
  ImportMethods,
  IconsImportMethods,
} from '../consts/main';

export const mainStore = createStore({
  soulName: 'bootstrap',
  skinName: 'light',
  referImport: ImportMethods.TiniJS,
  referPlatform: ConsumerPlatforms.Tini,
  referIconsImport: IconsImportMethods.TiniJS,
  skinEditorShown: false,
});
