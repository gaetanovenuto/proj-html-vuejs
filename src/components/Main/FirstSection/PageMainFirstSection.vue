<script>

import FirstSectionHeader from './FirstSectionHeader.vue';
import FirstSectionMain from './FirstSectionMain.vue';
import FirstSectionFooter from './FirstSectionFooter.vue';
import { store } from '../../../store';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    FirstSectionHeader,
    FirstSectionMain,
    FirstSectionFooter
  }
}
</script>

<template>
  <FirstSectionHeader />
  <FirstSectionMain />
  <FirstSectionFooter />
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables.scss' as *;
  .first-section, .second-section, .third-section {
    background-color: white;
  }
</style>
