<script>

import GeneralCard from '../../Utilities/GeneralCard.vue'
import { store } from '../../../store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    GeneralCard
  }
}
</script>

<template>
  <div class="partners-container">
    <GeneralCard 
        v-for="(paragraph, index) in store.partners" 
        :key="index" 
        :title="paragraph.title"
        :text="paragraph.text"
        generalClass=""
        titleClass="fw-600 font-size-48 py-5" 
        textClass="w-30 mx-auto text-center"/>
        <div class="container">
          <div class="row">
            <div v-for="(partner, index) in store.partnersLogos" :key="index" class="col d-flex justify-content-center">
              <img :src="partner.image" :alt="partner.title" class="logo text-center">
            </div>
          </div>
        </div>
      </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/utilities.scss' as *;
@use '../../../assets/scss/partials/utilities.scss' as *;
.partners-container {
  padding-bottom: 100px;

  .logo {
    height: 50px;
    opacity: .5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
}

</style>