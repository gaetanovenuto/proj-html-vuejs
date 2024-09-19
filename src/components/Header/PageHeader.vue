<script>

import PageHeaderNavbar from './PageHeaderNavbar.vue';
import PageHeaderMain from './PageHeaderMain.vue';

export default {
  data() {
    return 
  },
  components: {
    PageHeaderNavbar,
    PageHeaderMain
  }
}
</script>

<template>
  <PageHeaderNavbar />
  <PageHeaderMain />
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

</style>
