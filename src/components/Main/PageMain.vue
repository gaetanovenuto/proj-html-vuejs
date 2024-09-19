<script>

import PageMainFirstSection from './FirstSection/PageMainFirstSection.vue';
import { store } from '../../store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    PageMainFirstSection
  }
}
</script>

<template>
  <Main>
    <PageMainFirstSection />
  </Main>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

</style>
