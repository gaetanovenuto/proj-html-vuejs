<script>

import GeneralCard from '../../Utilities/GeneralCard.vue';
import GeneralButton from '../../Utilities/GeneralButton.vue';
import GeneralLatestBlogBox from '../../Utilities/GeneralLatestBlogBox.vue';
import { store } from '../../../store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    GeneralCard,
    GeneralButton,
    GeneralLatestBlogBox
  },
}
</script>

<template>
  <div class="first-section">
    <div class="container">
      <div class="row">
        <h1 class="text-start font-size-48 fw-600 opacity-9">
          Latest Blog Posts
        </h1>
      </div>
      <div class="row justify-content-between d-flex">
        <GeneralLatestBlogBox 
          v-for="(box, index) in store.latestBlog" 
          :key="index"
          :image="box.image" 
          :title="box.title"
          :text="box.text"
          :date="box.date"
          boxClass="w-30"
          textClass="px-4 text-start"
          imageClass="" 
          titleClass="px-4 text-start"
          dateClass="text-start" /> 
          
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables.scss' as *;
@use '../../../assets/scss/partials/utilities.scss' as *;
  .first-section {
    background-color: white;
    
  }
 

</style>
