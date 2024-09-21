<script>

import GeneralButton from '../Utilities/GeneralButton.vue';
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
    <div class="row subscribe-newsletter">
        <div class="col-auto">
            <h1 class="text-white fw-600 font-size-44">
                Subscrive Now to Our Newsletter !
            </h1>
        </div>
        <div class="col-auto">
            <form class="position-relative">
                <input type="email" class="newsletter-email" placeholder="Email address..."> 
                <GeneralButton
                    v-for="(button, index) in store.paperPlane" 
                    :key="index"
                    :icon="button.icon"
                    :text="button.text"
                    buttonClasses="yellow-button w-80px border-rad-50 email-button"
                    linkClasses=""
                    iconClasses=""
                    textClasses=""
                    imgClasses="w-75"/>
            </form>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/utilities.scss' as *;
@use '../../assets/scss/partials/variables.scss' as *;

.subscribe-newsletter {
    @include flexCentered;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    background-color: $backgroundColor;

    h1 {
        padding: 75px 0;
        margin: 0 75px;
    }

    .newsletter-email {
        padding: 25px;
        width: 500px;
        border: none;
        border-radius: 40px;
    }

    
}

</style>


