import {createStore} from '@tinijs/store';

import {
  ConsumerPlatforms,
  ImportMethods,
  IconsImportMethods,
} from '../consts/main';

export const mainStore = createStore({
  activeSoulId: 'bootstrap',
  activeSkinId: 'light',
  referImport: ImportMethods.TiniJS,
  referPlatform: ConsumerPlatforms.Tini,
  referIconsImport: IconsImportMethods.TiniJS,
  skinEditorShown: false,
});
