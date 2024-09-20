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
  },
  computed: {
    evenParagraphs() {
        return this.store.universityYear.filter((_, index) => index % 2 == 0)
    },
    unevenParagraphs() {
        return this.store.universityYear.filter((_, index) => index % 2 != 0)
    },
  }
}
</script>

<template>
  <div class="first-section">
    <h1 class="text-white font-size-60 fw-600 my-3">
        University Year
    </h1>
    <div class="row uneven-paragraphs">
        <GeneralCard  
            v-for="(paragraph, index) in unevenParagraphs" 
            :key="index" 
            :title="paragraph.title"
            :text="paragraph.text"
            generalClass="text-white w-45 single-uneven-p d-flex flex-column align-items-center"
            titleClass="fs-5 text-center fw-600" 
            textClass="fs-6 fw-300 text-center py-2"/>
    </div>
    <img src="../../../assets/edu/img/Timeline-Item.png" alt="University Year Timeline" class="timeline-img">
    <div class="row even-paragraphs">
        <GeneralCard  
            v-for="(paragraph, index) in evenParagraphs" 
            :key="index" 
            :title="paragraph.title"
            :text="paragraph.text"
            generalClass="text-white w-45 single-even-p d-flex flex-column align-items-center"
            titleClass="fs-5 text-center fw-600" 
            textClass="fs-6 fw-300 text-center py-2"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables.scss' as *;
@use '../../../assets/scss/partials/utilities.scss' as *;

    .first-section {
        padding-top: 100px;

        background-color: $backgroundColor;
        background-image: url(../../../assets/edu/img/Clock-and-Bell.png);
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: 5%;
        background-size: 75px;

        .uneven-paragraphs {
            padding-top: 50px;
            width: 45%;
            margin-left: 34%;
            margin-bottom: -50px;
            @include flexCentered;
            justify-content: space-between;
            
        }

        .even-paragraphs {
            width: 45%;
            margin-left: 22%;
            margin-top: -20px;
            @include flexCentered;
            justify-content: space-between;
        }
    }


</style>
