<script>

import PageHeaderNavbar from './PageHeaderNavbar.vue'
import { store } from '../../store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
      PageHeaderNavbar
  }
}
</script>

<template>
  <section class="showcase-your-courses">
    <div v-for="(paragraph, index) in store.showcaseYourCourses" :key="index" class="text-center text-white w-50 m-auto py-5">
      <h1 class="showcase-title">
        {{ paragraph.title }}
      </h1>
      <p class="m-auto showcase-text">
        {{ paragraph.text }}
      </p>
      <div class="row w-50 m-auto myButtons">
        <button class="yellow-button">
          <a href="">
            <span class="search-icon">
              &#x1F50E;&#xFE0E;
            </span>
              Search Courses
          </a>
        </button>
        <button class="white-button">
          <a href="">
            <span class="search-icon">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 640 512"
                width="24"
                height="24"
                style="color: white">
                  <path 
                    fill="#FFFFFF"
                    d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
              </svg>
            </span>
              Apply for University
          </a>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
.showcase-your-courses {
  padding-top: 100px;
  padding-bottom: 200px;
  
  .showcase-title {
    font-size: 68px;
    font-weight: 600;
  }

  .showcase-text {
    padding-top: 35px;
    width: 80%;
    font-size: 24px;
  }

  .myButtons {

    padding-top: 50px;

    .yellow-button {
    width: 45%;
    
    background-color: $buttonColor;
    @include roundedButton;
    padding: 10px 0;

      a {
        text-decoration: none;
        color: white;
        font-weight: 700;
        letter-spacing: .5px;

        .search-icon {
          margin-right: 20px;
          font-size: 20px;
        }
      }
  }

  .white-button {
    width: 45%;
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
  }

  
}
</style>
