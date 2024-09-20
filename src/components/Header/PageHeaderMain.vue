<script>

import GeneralCard from '../Utilities/GeneralCard.vue'
import GeneralButton from '../Utilities/GeneralButton.vue'
import PageHeaderNavbar from './PageHeaderNavbar.vue'
import { store } from '../../store.js';


export default {
  data() {
    return {
      store
    }
  },
  components: {
      PageHeaderNavbar,
      GeneralCard,
      GeneralButton
  }
}
</script>

<template>
  <section class="showcase-your-courses">
    <GeneralCard 
      v-for="(paragraph, index) in store.showcaseYourCourses" 
      :key="index" 
      :title="paragraph.title"
      :text="paragraph.text"
      generalClass="w-50 text-white m-auto"
      titleClass="font-size-60 fw-800" 
      textClass="m-auto w-75 font-size-22 py-3"/>
    <div class="row w-50 m-auto myButtons">
      <GeneralButton
        v-for="(button, index) in store.searchCourses" 
        :key="index"
        :icon="button.icon"
        :text="button.text"
        buttonClasses="yellow-button w-25"
        linkClasses="text-decoration-none"
        iconClasses=""
        textClasses="text-white fw-600 font-size-18 px-4"/>
        <GeneralButton
        v-for="(button, index) in store.applyUniversity" 
        :key="index"
        :icon="button.icon"
        :text="button.text"
        buttonClasses="white-button w-25"
        linkClasses="text-decoration-none"
        iconClasses="change-color"
        textClasses="text-white fw-600 font-size-18 px-2"/>
    </div>
      
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
.showcase-your-courses {
  padding-top: 75px;
  padding-bottom: 200px;

  .myButtons {
    @include flexCentered;
    justify-content: center;

  }
}
</style>
