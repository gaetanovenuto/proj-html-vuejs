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
  <header>
    <PageHeaderNavbar />
    <PageHeaderMain />
  </header>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
  header {
    background-image: url('https://eduprime.modeltheme.com/wp-content/uploads/2019/05/breadcrumbs.png?id=19814');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
