<script>
import { useComponents } from 'tinijs';

import {TiniButtonComponent} from '@tinijs/ui-bootstrap/components/button';
import {IconHeartFillComponent} from '@tinijs/bootstrap-icons/heart-fill';

useComponents([
  TiniButtonComponent,
  IconHeartFillComponent
]);

</script>

<main>
  <h1>Svelte</h1>
  
  <div class="buttons">
    <tini-button scheme="primary">A Button</tini-button>
    <tini-button scheme="success" hover:scheme="gradient-success">A Button</tini-button>
  </div>

  <div class="icons">
    <icon-heart-fill scheme="gradient-disco-club"></icon-heart-fill>
  </div>

</main>
