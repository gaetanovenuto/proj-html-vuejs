<script>

import { store } from '../../store.js';
import GeneralButton from './GeneralButton.vue';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    GeneralButton
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
    text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    boxClass: {
        type: String,
        default: ''
    },
    textClass: {
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
    dateClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
    <div class="box" :class="boxClass">
      <img :src="image" :alt="title" :class="imageClass" class="blog-image">
      <div class="container">
        <h3 :class="titleClass">
          {{ title }}
        </h3>
        <p :class="textClass">
          {{ text }}
        </p>
        <div class="row px-4  d-flex justify-content-between align-items-center">
          <span :class="dateClass" class="w-50 orange-text">
            {{ date }}
          </span>
          <div class="d-flex justify-content-end w-45">
            <GeneralButton
              v-for="(button, index) in store.angleRight" 
              :key="index"
              :icon="button.icon"
              :text="button.text"
              buttonClasses="yellow-button w-30"
              linkClasses=""
              iconClasses=""
              textClasses=""
              imgClasses="w-100"/>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/utilities.scss' as *;

.box {
  width: calc((100% / 3) - 15px );
  padding: 0 !important;
  padding-bottom: 15px !important;
  margin: 75px 0 !important;
  overflow: hidden;

  .blog-image {
    width: 100%;
    object-fit: cover;
    transition: transform .7s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  .container {
    padding-top: 50px;

    h3 {
      padding: 25px 0;
    }

    .yellow-button {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    @include flexCentered;
    justify-content: center;
  }
  }

  
}

</style>

<!-- <GeneralLatestBlogBox 
      v-for="(box, index) in store.facultyBoxes" 
      :key="index"
      :image="box.image" 
      :title="box.title"
      :text="box.text"
      :date="box.date"
      boxClass=""
      textClass=""
      imageClass="" 
      titleClass=""
      dateClass="" /> -->