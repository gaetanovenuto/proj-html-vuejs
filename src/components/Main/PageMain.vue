<script>

import PageMainFirstSection from './FirstSection/PageMainFirstSection.vue';
import PageMainSecondSection from './SecondSection/PageMainSecondSection.vue';
import PageMainThirdSection from './ThirdSection/PageMainThirdSection.vue';
import { store } from '../../store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    PageMainFirstSection,
    PageMainSecondSection,
    PageMainThirdSection
  }
}
</script>

<template>
  <Main>
    <PageMainFirstSection />
    <PageMainSecondSection />
    <PageMainThirdSection />
  </Main>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

</style>
