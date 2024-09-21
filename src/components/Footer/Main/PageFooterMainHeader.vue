<script>

import GeneralCard from '../../Utilities/GeneralCard.vue';
import GeneralButton from '../../Utilities/GeneralButton.vue';
import { store } from '../../../store.js';

export default {
  data() {
    return {
      store,
      actualIndex: 0,
    }
  },
  components: {
    GeneralCard,
    GeneralButton
  },
  computed: {
    visibleManagementTeam() {
      return this.store.managementTeam.slice(this.actualIndex, this.actualIndex + parseInt(store.managementTeam.length - 1));
    }
  },
  methods: {
    scrollLeft() {
      if (this.actualIndex > 0) {
        this.actualIndex -= 1;
      }
    },
    scrollRight() {
      if (this.actualIndex < this.store.managementTeam.length - parseInt(store.managementTeam.length - 1)) {
        this.actualIndex += 1;
      }
    }
  }
}
</script>

<template>
  <div class="footer-first-section">
    <GeneralCard 
      v-for="(paragraph, index) in store.management" 
      :key="index" 
      :title="paragraph.title"
      :text="paragraph.text"
      generalClass=""
      titleClass="py-5 fw-700 font-size-60 opacity-8" 
      textClass="font-size-20 w-30 mx-auto text-center"/>
    <div class="container">
      <div class="row align-items-center justify-content-between py-5">
        <div class="col-1">
          <GeneralButton
              v-for="(button, index) in store.angleLeft" 
              :key="index"
              :icon="button.icon"
              :text="button.text"
              buttonClasses="orange-button rounded-circle px-4 py-3"
              linkClasses=""
              iconClasses=""
              textClasses=""
              imgClasses="w-100"
              
              @click.prevent="scrollLeft"/>
        </div>
        <div class="col-10">
          <div class="row carousel w-100">
            <div v-for="(person, index) in visibleManagementTeam" :key="index" class="item col-3 mx-0">
              <img :src="person.image" :alt="person.name">
              <h3 class="fw-600 font-size-24 opacity-8 py-2">
                {{ person.name }}
              </h3>
              <div>
                {{ person.role }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-1">
          <GeneralButton
              v-for="(button, index) in store.angleRight" 
              :key="index"
              :icon="button.icon"
              :text="button.text"
              buttonClasses="orange-button rounded-circle px-4 py-3"
              linkClasses=""
              iconClasses=""
              textClasses=""
              imgClasses="w-100"
              
              @click.prevent="scrollRight"/>
        </div>
      </div>
      <div class="row">
        <GeneralButton
        v-for="(button, index) in store.viewTeam" 
        :key="index"
        :icon="button.icon"
        :text="button.text"
        buttonClasses="yellow-button w-20 mx-auto my-3"
        linkClasses=""
        iconClasses=""
        textClasses="text-white fw-600 font-size-20"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../../../assets/scss/partials/variables.scss' as *;
@use '../../../assets/scss/partials/utilities.scss' as *;

.footer-first-section {
  background-color: white;
  min-height: 500px;

  .carousel {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    scroll-behavior: smooth;

    .item {
      display: inline-block;
      padding: 0 10px;
      text-align: center;

      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }

    }
  }
}

</style>