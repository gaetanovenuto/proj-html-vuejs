<script>

import PageMainFirstSection from './FirstSection/PageMainFirstSection.vue';
import PageMainSecondSection from './SecondSection/PageMainSecondSection.vue';
import { store } from '../../store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    PageMainFirstSection,
    PageMainSecondSection
  }
}
</script>

<template>
  <Main>
    <PageMainFirstSection />
    <PageMainSecondSection />
  </Main>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

</style>
