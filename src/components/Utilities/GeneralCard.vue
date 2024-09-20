<script>

import { store } from '../../store.js';

export default {
  data() {
    return {
      store
    }
  },
  props: {
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    generalClass: {
        type: String,
        default: ''
    },
    titleClass: {
        type: String,
        default: ''
    },
    textClass: {
        type: String,
        default: ''
    }
  }
}
</script>

<template>
  <div class="general-card text-center py-5" :class="generalClass">
      <h1 class="general-title" :class="titleClass">
        {{ title }}
      </h1>
      <p class="general-text" :class="textClass">
        {{ text }}
      </p>  
    </div>
</template>

<style lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/utilities.scss' as *;


</style>

<!-- <GeneralCard 
      v-for="(paragraph, index) in store.showcaseYourCourses" 
      :key="index" 
      :title="paragraph.title"
      :text="paragraph.text"
      generalClass=""
      titleClass="" 
      textClass=""/> -->