<script setup lang="ts">
import {useComponents} from 'tinijs';
import {TiniButtonComponent} from '@tinijs/ui-bootstrap/components/button';
import {IconHeartFillComponent} from '@tinijs/bootstrap-icons/heart-fill';

useComponents([TiniButtonComponent, IconHeartFillComponent]);
</script>

<template>
  <main>
    <h1>Vue</h1>

    <div class="buttons">
      <tini-button scheme="primary">A Button</tini-button>
      <tini-button scheme="success" .hoverMap="{scheme: 'gradient-success'}">A Button</tini-button>
    </div>

    <div class="icons">
      <icon-heart-fill scheme="gradient-disco-club"></icon-heart-fill>
    </div>
  </main>
</template>
