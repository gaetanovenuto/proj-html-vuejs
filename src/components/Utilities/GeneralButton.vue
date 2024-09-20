<script>

import { store } from '../../store.js';


export default {
  data() {
    return {
      store
    }
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    buttonClasses: {
      type: String,
      default: ''
    },
    iconClasses: {
      type: String,
      default: ''
    },
    textClasses: {
      type: String,
      default: ''
    },
    imgClasses: {
      type: String,
      default: ''
    },
    linkClasses: {
      type: String,
      default: ''
    },
  }
}
</script>

<template>
        <button :class="buttonClasses" class="general-button">
          <a href="#" :class="linkClasses" class="text-decoration-none">
            <span v-if="icon" :class="iconClasses">
              <img :src="icon" :alt="text" :class="imgClasses">
            </span>
            <span v-if="text" :class="textClasses" >
              {{ text }}
            </span>
          </a>
        </button>
</template>

<style lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/utilities.scss' as *;



.white-button {
width: 25%;
margin: 0 5px;

@include roundedButton;
padding: 10px 0px;
background-color: transparent;
border: 2px solid white;

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;

    .search-icon {
      margin-right: 10px;
      font-size: 20px;
      
    }
  }
}

.general-button {
  @include roundedButton;

}

</style>

<!-- <GeneralButton
        v-for="(button, index) in store.searchCourses" 
        :key="index"
        :icon="button.icon"
        :text="button.text"
        buttonClasses=""
        linkClasses=""
        iconClasses=""
        textClasses=""/> -->