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
        <div class="col-6 thousand-courses-img">
          <img src="../../../assets/edu/img/Girl-Illustration.png" alt="">
        </div>
        <div class="col-6 d-flex flex-column">
          <GeneralCard 
          v-for="(paragraph, index) in store.variableFees" 
          :key="index" 
          :title="paragraph.title"
          :text="paragraph.text"
          titleClass="font-size-48 text-align-start w-80 fw-700 py-4" 
          textClass="fs-5 text-align-start fw-400 w-75"/>
          <GeneralButton
              v-for="(button, index) in store.feesList" 
              :key="index"
              :icon="button.icon"
              :text="button.text"
              buttonClasses="orange-button w-30"
              linkClasses="text-decoration-none"
              iconClasses=""
              textClasses="text-white fw-600 font-size-18 px-2"/>
          
        </div>
        
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables.scss' as *;
@use '../../../assets/scss/partials/utilities.scss' as *;

.first-section {

  background-color: white;

  .thousand-courses {

    @include flexCentered;
    justify-content: center;
    padding: 100px 50px;
    background-image: url(../../../assets/edu/img/Exam-icon-1.png);
    background-repeat: no-repeat;
    background-size: 65px;
    background-position: 675px 70px;


.thousand-courses-img {

  @include flexCentered;

  img {
    width: 95%;
  }
}
}

}
  


</style>