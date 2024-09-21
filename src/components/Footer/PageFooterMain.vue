<script>

import PageFooterMainHeader from './Main/PageFooterMainHeader.vue';
import PageFooterMainMain from './Main/PageFooterMainMain.vue';
import PageFooterMainFooter from './Main/PageFooterMainFooter.vue';

export default {
  data() {
    return 
  },
  components: {
    PageFooterMainHeader,
    PageFooterMainMain,
    PageFooterMainFooter
  }
}
</script>

<template>
    <PageFooterMainHeader />
    <PageFooterMainMain />
    <PageFooterMainFooter />
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/utilities.scss' as *;
@use '../../assets/scss/partials/variables.scss' as *;

</style>
