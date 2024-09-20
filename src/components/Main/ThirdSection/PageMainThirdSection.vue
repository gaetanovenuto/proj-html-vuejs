<script>

import ThirdSectionHeader from './ThirdSectionHeader.vue';
import ThirdSectionMainHeaderSection from './ThirdSectionMainHeaderSection.vue';
import ThirdSectionMainFooterSection from './ThirdSectionMainFooterSection.vue';
import ThirdSectionFooter from './ThirdSectionFooter.vue';
import { store } from '../../../store';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    ThirdSectionHeader,
    ThirdSectionMainHeaderSection,
    ThirdSectionMainFooterSection,
    ThirdSectionFooter,
  }
}
</script>

<template>
  <ThirdSectionHeader />
  <ThirdSectionFooter />
  <ThirdSectionMainHeaderSection />
  <ThirdSectionMainFooterSection />
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables.scss' as *;

</style>
