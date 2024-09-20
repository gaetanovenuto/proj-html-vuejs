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
}
</script>

<template>
  <div class="second-section">
    <h1 class="text-white font-size-60 fw-600 my-3">
        Upcoming Events
    </h1>
    <div class="container">
      <div class="row justify-content-between">
        <div v-for="(box, index) in 3" :key="index" class="col-auto coaching-sessions py-4">
          <h2 class="fw-600 opacity-8 coaching-title">
            Coaching Sessions
          </h2>
          <div class="date opacity-7">
            <span class="calender-img">
              <img src="../../../assets/icons/calendar-days-regular.svg" alt="Date">
            </span>
            20 May 21:30 PM
          </div>
          <p class="w-80 text-center mx-auto opacity-7 coaching-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor[...]
          </p>
          <GeneralButton
            v-for="(button, index) in store.findMore" 
            :key="index"
            :icon="button.icon"
            :text="button.text"
            buttonClasses="orange-button"
            linkClasses=""
            iconClasses=""
            imgClasses="w-25px"
            textClasses="text-white"/>
        </div>
      </div>
      <div class="row justify-content-center">
        <GeneralButton
        v-for="(button, index) in store.viewEvents" 
        :key="index"
        :icon="button.icon"
        :text="button.text"
        buttonClasses="yellow-button w-15 my-5 fw-700"
        linkClasses=""
        iconClasses=""
        textClasses="text-white"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables.scss' as *;
@use '../../../assets/scss/partials/utilities.scss' as *;

    .second-section {
        padding-top: 100px;

        background-color: $backgroundColor;
        background-image: url(../../../assets/edu/img/upcoming-events-calendar-icon.png);
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: 5%;
        background-size: 75px;
        

        .coaching-sessions {
          background-color: white;
          width: calc((100% / 3) - 15px);
          border-radius: 15px;
          margin-top: 50px;
          

          .coaching-title {
            padding-top: 35px;
          }

          .date {
            @include flexCentered;
            justify-content: center;
            
            img {
              width: 18px;
              opacity: .7;
              margin-right: 5px;      
            }
          }

          .coaching-text {
            padding-top: 25px;
          }

          

          
        }
    }


</style>
