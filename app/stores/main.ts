import {createStore} from '../vendors/store';

import {OfficialSoulNames, ConsumerPlatforms, ImportMethods, IconsImportMethods} from './consts';

export default createStore({
  soulName: OfficialSoulNames.Bootstrap,
  referImport: ImportMethods.TiniJS,
  referPlatform: ConsumerPlatforms.Lit,
  referIconsImport: IconsImportMethods.TiniJS,
});
