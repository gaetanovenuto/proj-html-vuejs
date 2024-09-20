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
  <section class="third-section">
    <div class="container">
      <div class="row law-faculty">
        <div class="col-6 law-faculty-img d-flex justify-content-center">
            <img src="../../../assets/edu/img/Gavel-Illustration-e1556884768193.png" alt="Law Faculty" class="w-65">
        </div>
        <div class="col-6 d-flex flex-column">  
          <GeneralCard 
          v-for="(paragraph, index) in store.lawFaculty" 
          :key="index" 
          :title="paragraph.title"
          :text="paragraph.text"
          titleClass="font-size-44 text-align-start opacity-8 w-100 fw-700" 
          textClass="font-size-16 text-align-start fw-400 w-100 opacity-7 py-3"/>
          <GeneralButton
              v-for="(button, index) in store.readMore" 
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

.third-section {

  padding-bottom: 300px;
  background-image: url(../../../assets/edu/svg/svg-0.svg);
  background-repeat: no-repeat;
  background-position-y: 100%;
  
  .law-faculty {
        @include flexCentered;
        justify-content: center;
        padding: 50px;
    }
}
  


</style>