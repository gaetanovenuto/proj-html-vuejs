<script>

import GeneralCard from '../../Utilities/GeneralCard.vue';
import GeneralButton from '../../Utilities/GeneralButton.vue';
import GeneralLatestCourseBox from '../../Utilities/GeneralLatestCourseBox.vue';
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
    GeneralLatestCourseBox
  },
}
</script>

<template>
  <div class="first-section">
    <div class="container">
      <div class="row">
        <h1 class="text-start font-size-48 fw-600 opacity-9">
          Latest Courses
        </h1>
      </div>
      <div class="row py-5 justify-content-between d-flex">
        <GeneralLatestCourseBox 
          v-for="(box, index) in store.latestCourses" 
          :key="index"
          :image="box.image" 
          :title="box.title"
          :teacher="box.teacher"
          :price="box.price"
          boxClass=""
          teacherClass="opacity-8"
          imageClass="w-75px"
          iconClass="w-15px opacity-8" 
          titleClass="font-size-22 py-3 fw-600"
          priceClass="opacity-8" />
          
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables.scss' as *;
@use '../../../assets/scss/partials/utilities.scss' as *;
  .first-section {
    background-image: url('../../../assets/edu/svg/svg-1.svg');
    background-repeat: no-repeat;
    background-position-y: -1px;
    background-position-x: -10px;
    min-height: 150px;
    background-color: white;
    
    .container {
      
      .row {

        h1 {
          padding-top: 200px;
          text-align: left;
        }
      }
    }
  }
 

</style>
