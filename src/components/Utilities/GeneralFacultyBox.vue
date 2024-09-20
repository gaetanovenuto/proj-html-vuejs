<script>

import { store } from '../../store.js';

export default {
  data() {
    return {
      store
    }
  },
  props: {
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    generalClass: {
        type: String,
        default: ''
    },
    imageClass: {
        type: String,
        default: ''
    },
    titleClass: {
        type: String,
        default: ''
    },
  }
}
</script>

<template>
    <a href="#" class="general-facultyBox text-center m-auto py-5 text-decoration-none" :class="generalClass">
        <img :src="image" :alt="title" :class="imageClass">
        <h5 class="general-title" :class="titleClass">
            {{ title }}
        </h5>  
    </a>
</template>

<style lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/utilities.scss' as *;


</style>

<!-- <GeneralFacultyBox 
      v-for="(box, index) in store.facultyBoxes" 
      :key="index"
      :image="box.image" 
      :title="box.title"
      generalClass=""
      imageClass="" 
      textClass=""/> -->