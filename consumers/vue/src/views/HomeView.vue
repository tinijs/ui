<script setup lang="ts">
import {useComponents} from 'tinijs';
import {TiniButtonComponent} from '@tinijs/ui-bootstrap/components/button.js';

useComponents([TiniButtonComponent]);
</script>

<template>
  <main>
    <tini-button scheme="primary">A Button</tini-button>
  </main>
</template>
