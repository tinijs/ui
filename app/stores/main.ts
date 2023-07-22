import {createStore} from '@tinijs/store';

import {
  OfficialSoulNames,
  ConsumerPlatforms,
  ImportMethods,
  IconsImportMethods,
} from '../consts/main';

export default createStore({
  soulName: OfficialSoulNames.Bootstrap,
  referImport: ImportMethods.TiniJS,
  referPlatform: ConsumerPlatforms.Lit,
  referIconsImport: IconsImportMethods.TiniJS,
});
