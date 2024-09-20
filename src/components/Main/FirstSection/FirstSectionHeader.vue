<script>

import GeneralCard from '../../Utilities/GeneralCard.vue';
import GeneralButton from '../../Utilities/GeneralButton.vue'
import { store } from '../../../store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    GeneralCard,
    GeneralButton
  }
}
</script>

<template>
  <section class="first-section">
    <div class="container">
      <div class="row thousand-courses">
        <div class="col-6 d-flex flex-column">
          <GeneralCard 
          v-for="(paragraph, index) in store.thousandsCourses" 
          :key="index" 
          :title="store.thousandsCourses[index].title"
          :text="store.thousandsCourses[index].text"
          titleClass="font-size-48 text-align-start opacity-8 w-100" 
          textClass="fs-6 text-align-start fw-400 w-100"/>
          <GeneralButton
              v-for="(button, index) in store.browseCourses" 
              :key="index"
              :icon="button.icon"
              :text="button.text"
              buttonClasses="yellow-button w-50"
              linkClasses="text-decoration-none"
              iconClasses=""
              textClasses="text-white fw-600 font-size-18 px-2"/>
          
        </div>
        <div class="col-6 thousand-courses-img">
          <img src="../../../assets/edu/img/Graduation-Illustration.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables.scss' as *;
@use '../../../assets/scss/partials/utilities.scss' as *;

.first-section {
  background-image: url(https://eduprime.modeltheme.com/wp-content/uploads/2019/05/home-background.png?id=19812);
  background-repeat: no-repeat;
  background-position: -10px 20px;
  

  .thousand-courses {

    @include flexCentered;
    justify-content: center;
    padding: 100px 50px;
    background-image: url(../../../assets/edu/img/Books-icon.png);
    background-repeat: no-repeat;
    background-size: 65px;
    background-position: 60px 70px;


.thousand-courses-img {

  @include flexCentered;

  img {
    width: 95%;
  }
}
}

}
  


</style>
