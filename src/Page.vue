<script>
/* 
  Per importare ed utilizzare un componente dentro un altro devo SEMPRE seguire questi 3 passi:
  1) Importazione del componente
  2) Dichiarazione del componente
  3) Utilizzo del componente
*/
// 1) Importazione del componente
import PageHeader from './components/Header/PageHeader.vue';
import PageMain from './components/Main/PageMain.vue';
import PageFooter from './components/Footer/PageFooter.vue';

export default {
  
  // 2) Dichiarazione del componente
  components: {
    PageHeader,
    PageMain,
    PageFooter
  },
  methods: {
    
  }
}
</script>

<template>
  <div>
    <!-- 3) Utilizzo del componente -->
    <PageHeader />
    <PageMain />
    <PageFooter />
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;

// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
