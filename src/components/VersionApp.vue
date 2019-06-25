<template>
  <span class="font-weight-light">{{appVersion}}</span>
</template>

<script>
import { version } from '../../package.json';

export default {
  data() {
    return {
      appVersion: `Version App ${version}`,
    };
  },
};
</script>
