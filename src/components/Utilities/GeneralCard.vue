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
  <div class="general-card text-center m-auto py-5" :class="generalClass">
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

.general-title {
    font-size: 68px;
    font-weight: 600;
  }

  .general-text {
    padding-top: 35px;
    width: 80%;
    font-size: 24px;
  }

</style>

<!-- <GeneralCard 
      v-for="(paragraph, index) in store.showcaseYourCourses" 
      :key="index" 
      :title="paragraph.title"
      :text="paragraph.text"
      generalClass="" 
      textClass=""/> -->