<script>

import PageFooterHeader from './PageFooterHeader.vue';
import PageFooterMain from './PageFooterMain.vue';
import PageFooterFooter from './PageFooterFooter.vue';

export default {
  data() {
    return 
  },
  components: {
    PageFooterHeader,
    PageFooterMain,
    PageFooterFooter
  }
}
</script>

<template>
  <footer>
    <PageFooterHeader />
    <PageFooterMain />
    <PageFooterFooter />
  </footer>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
footer {
  background-color: white;
}
</style>
