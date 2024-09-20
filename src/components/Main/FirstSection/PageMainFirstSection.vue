<script>

import FirstSectionHeader from './FirstSectionHeader.vue';
import { store } from '../../../store';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    FirstSectionHeader
  }
}
</script>

<template>
  <FirstSectionHeader />
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables.scss' as *;
  .first-section {
    background-color: white;
  }
</style>
