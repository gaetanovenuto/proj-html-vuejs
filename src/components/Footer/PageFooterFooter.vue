<script>

import GeneralButton from '../Utilities/GeneralButton.vue'
import { store } from '../../store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    GeneralButton
  }
}
</script>

<template>
  <div class="footer-ending-page">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="row flex-column">
            <div class="col-4">
              <img src="../../assets/edu/img/theme_eduprime_logo.png" alt="" class="footer-logo">
            </div>
            <div class="col-4 w-100 py-4">
              <p class="text-white w-90">
                EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc.
              </p>
            </div>
            <div class="col-4">
              <div class="row flex-nowrap">
                <div class="col-auto">
                  <GeneralButton
                    v-for="(button, index) in store.facebook" 
                    :key="index"
                    :icon="button.icon"
                    :text="button.text"
                    buttonClasses="social-button"
                    linkClasses=""
                    imgClasses="w-20px"
                    textClasses=""/>
                </div>
                <div class="col-auto">
                  <GeneralButton
                    v-for="(button, index) in store.twitter" 
                    :key="index"
                    :icon="button.icon"
                    :text="button.text"
                    buttonClasses="social-button"
                    linkClasses=""
                    imgClasses="w-20px"
                    textClasses=""/>
                </div>
                <div class="col-auto">
                  <GeneralButton
                    v-for="(button, index) in store.instagram" 
                    :key="index"
                    :icon="button.icon"
                    :text="button.text"
                    buttonClasses="social-button"
                    linkClasses=""
                    imgClasses="w-20px"
                    textClasses=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2">
          <h4 class="text-white fw-600 font-size-22 py-2">
            Get EduPrime
          </h4>
          <ul class="list-unstyled">
            <li v-for="(link, index) in store.getEduPrime" :key="index" class="text-white font-size-16 fw-400 text-decoration-none py-1">
              {{ link }}
            </li>
          </ul>
        </div>
        <div class="col-2">
          <h4 class="text-white fw-600 font-size-22 py-2">
            Networking
          </h4>
          <ul class="list-unstyled">
            <li v-for="(link, index) in store.networking" :key="index" class="text-white font-size-16 fw-400 text-decoration-none py-1">
              {{ link }}
            </li>
          </ul>
        </div>
        <div class="col-4">
          <div class="row flex-nowrap w-85">
            <form class="position-relative">
                <input type="text" class="search-input w-100" placeholder="Search..."> 
                <GeneralButton
                    v-for="(button, index) in store.paperPlane" 
                    :key="index"
                    :icon="button.icon"
                    :text="button.text"
                    buttonClasses="yellow-button w-80px border-rad-50 search-button"
                    linkClasses=""
                    iconClasses=""
                    textClasses=""
                    imgClasses="w-75"/>
            </form>
          </div>
          <h1 class="font-size-22 fw-600 py-3 text-white">
            Search categories
          </h1>
          <div class="row justify-content-end w-85">
            <GeneralButton
                    v-for="(category, index) in store.categories" 
                    :key="index"
                    :icon="category.icon"
                    :text="category"
                    buttonClasses="logo-button col-auto mx-1 my-2 d-flex align-items-center"
                    linkClasses=""
                    imgClasses=""
                    textClasses="text-white" />
          </div>
          <div class="row w-85">
            <span class="yellow-text text-end py-2">
              ModelTheme. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/utilities.scss' as *;
@use '../../assets/scss/partials/variables.scss' as *;

.footer-ending-page {
  background-color: $backgroundColor;
  padding: 100px 0;

  .footer-logo {
    width: 300px;
  }

  .search-input {
      padding: 25px;
      border: none;
      border-radius: 40px;
    }
}
</style>