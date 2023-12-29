// import { invoke } from "@tauri-apps/api/tauri";
import {registerComponents} from 'tinijs';

import {TiniGenericComponent} from '@tinijs/ui-bootstrap/components/generic';
import {TiniGenericUnscopedComponent} from '@tinijs/ui-bootstrap/components/generic-unscoped';
import {TiniBoxComponent} from '@tinijs/ui-bootstrap/components/box';
import {TiniButtonComponent} from '@tinijs/ui-bootstrap/components/button';
import {IconHeartFillComponent} from '@tinijs/bootstrap-icons/heart-fill';

registerComponents([
  TiniGenericComponent,
  TiniGenericUnscopedComponent,
  TiniBoxComponent,
  TiniButtonComponent,
  IconHeartFillComponent,
]);
