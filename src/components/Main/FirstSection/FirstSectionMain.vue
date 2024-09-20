<script>

import GeneralCard from '../../Utilities/GeneralCard.vue';
import GeneralButton from '../../Utilities/GeneralButton.vue'
import GeneralFacultyBox from  '../../Utilities/GeneralFacultyBox.vue'
import { store } from '../../../store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    GeneralCard,
    GeneralButton,
    GeneralFacultyBox
  }
}
</script>

<template>
  <section class="second-section">
    <div class="container">
      <div class="row available-faculties">
        <div class="col-12 d-flex flex-column">
          <GeneralCard 
          v-for="(paragraph, index) in store.availableFaculties" 
          :key="index" 
          :title="store.availableFaculties[index].title"
          :text="store.availableFaculties[index].text"
          generalClass="m-auto"
          titleClass="font-size-48 text-align-start w-100 fw-700" 
          textClass="fs-6 text-align-start fw-400 w-50 text-center mx-auto"/>
        </div>
        <div class="row facultyBoxes">
            <GeneralFacultyBox 
                v-for="(box, index) in store.facultyBoxes" 
                :key="index"
                :image="box.image" 
                :title="box.title"
                generalClass="col single-box"
                imageClass="faculty-image" 
                titleClass="orange-text fs-4 py-4"/>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables.scss' as *;
@use '../../../assets/scss/partials/utilities.scss' as *;

.second-section {

  .available-faculties {

    @include flexCentered;
    justify-content: center;
    padding: 25px;

    .faculty-boxes {
        @include flexCentered;
        justify-content: center;
        cursor: pointer;
        }

        
    }
}




</style>
