<script>

import SecondSectionHeader from './SecondSectionHeader.vue';
import SecondSectionFooter from './SecondSectionFooter.vue';
import { store } from '../../../store';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    SecondSectionHeader,
    SecondSectionFooter
  }
}
</script>

<template>
  <SecondSectionHeader />
  <SecondSectionFooter />
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables.scss' as *;

</style>
