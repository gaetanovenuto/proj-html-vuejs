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
    teacher: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    boxClass: {
        type: String,
        default: ''
    },
    teacherClass: {
        type: String,
        default: ''
    },
    imageClass: {
        type: String,
        default: ''
    },
    iconClass: {
        type: String,
        default: ''
    },
    titleClass: {
        type: String,
        default: ''
    },
    priceClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
    <div class="box" :class="boxClass">
      <img :src="image" :alt="title" :class="imageClass" class="course-image">
      <h3 :class="titleClass">
        {{ title }}
      </h3>
      <div>
        <span>
          <img src="../../assets/icons/user-regular.svg" :alt="teacher" :class="iconClass">
        </span>
        <span :class="teacherClass">
          Teacher: <strong> {{ teacher }} </strong>
        </span>
      </div>
      <div>
        <span>
          <img src="../../assets/icons/money-bill-1-solid.svg" :alt="price" :class="iconClass"> 
        </span>
        <span :class="priceClass">
          Price: <strong> {{ price }} </strong>
        </span>
      </div>
      <GeneralButton
            v-for="(button, index) in store.viewLatestCourse" 
            :key="index"
            :icon="button.icon"
            :text="button.text"
            buttonClasses="orange-button my-3 position-absolute mx-auto left-30 z-index-1"
            linkClasses=""
            iconClasses=""
            imgClasses="w-15px mx-2"
            textClasses="text-white"/>
    </div>
</template>

<style lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/utilities.scss' as *;

//

.box {
  width: calc((100% / 4) - 15px) !important;
  border-radius: 12px; 
  padding: 50px 25px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 
    5px 5px 15px rgba(0, 0, 0, 0.1),  
    -5px -5px 15px rgba(255, 255, 255, 1), 
    inset 1px 1px 2px rgba(0, 0, 0, 0.1),  
    inset -1px -1px 2px rgba(255, 255, 255, 0.7);
    transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
  position: relative;

    &:hover {
    box-shadow: 
      8px 8px 20px rgba(0, 0, 0, 0.2),
      -8px -8px 20px rgba(255, 255, 255, 1),
      inset 1px 1px 2px rgba(0, 0, 0, 0.2),
      inset -1px -1px 2px rgba(255, 255, 255, 0.8);
    }

    .course-image {
      transition: transform .4s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }

 
}


</style>

<!-- <GeneralLatestCourseBox 
      v-for="(box, index) in store.facultyBoxes" 
      :key="index"
      :image="box.image" 
      :title="box.title"
      :teacher="box.teacher"
      :price="box.price"
      boxClass=""
      teacherClass=""
      imageClass=""
      iconClass="" 
      titleClass=""
      priceClass="" /> -->