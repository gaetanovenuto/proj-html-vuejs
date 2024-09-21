<script>

import { store } from '../../../store.js';

export default {
  data() {
    return {
      store,
      actualIndex: 0,
      backgroundColor: '#f0f0f0',
    }
  },
  components: {
    
  },
  computed: {
    visibleStudentsThoughts() {
      return this.store.studentsThoughts.slice(this.actualIndex, this.actualIndex + parseInt(store.studentsThoughts.length - 2));
    }
  },
  methods: {
    scrollLeft() {
      if (this.actualIndex > 0) {
        this.actualIndex -= 2;
      }
    },
    scrollRight() {
      if (this.actualIndex < this.store.studentsThoughts.length - parseInt(store.studentsThoughts.length - 2)) {
        this.actualIndex += 2;
      }
    }
  }
}
</script>

<template>
  <div class="students-thoughts">
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="fw-600 font-size-52 text-center opacity-9 py-3">
          Thoughts from our students
        </h1>
      </div>
      <div class="row carousel py-4 flex-nowrap justify-content-center">
        <div v-for="(thought, index) in visibleStudentsThoughts" :key="index" class="thought-box col-5">
          <div class="row flex-nowrap align-items-center py-3">
            <div class="col-auto mx-0 px-0">
              <img :src="thought.facultyImage" :alt="thought.facultyName" class="w-70px">
            </div>
            <h4 class="text-uppercase orange-text w-60 fw-600">
              {{ thought.facultyName }}
            </h4>
          </div>
          <p class="py-4 font-size-18">
            {{ thought.text }}
          </p>
          <div class="row flex-nowrap">
            <div class="col-auto">
              <img :src="thought.studentImage" :alt="thought.studentName" class="rounded-circle w-60px">
            </div>
            <div class="col-auto">
              <div class="row">
                <div class="h3 font-size-22 fw-600">
                  {{ thought.studentName }}
                </div>
                <div class="opacity-5 fw-400 text-uppercase font-size-14">
                  {{ thought.studentPeriod }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <button class="change-thought left-button mx-2" @click="scrollLeft"></button>
        <button class="change-thought right-button" @click="scrollRight"></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/utilities.scss' as *;
@use '../../../assets/scss/partials/utilities.scss' as *;

.students-thoughts {
  padding: 200px 0;
  background-image: url(../../../assets/edu/img/background-wave3.png);
  background-repeat: no-repeat;
  background-color: #F7F8FA;
  background-position-y: -30px;
  min-height: 500px;

  .thought-box {
    background-color: white;
    border-radius: 10px;
    padding: 60px;
    margin: 0 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
  }

  .change-thought {
    background-color: #DADBDF;
    border-radius: 50%;
    padding: 5px;
    margin-right: 10px;
    width: 5px;
    height: 5px;
    border: none;

    &:focus {
      background-color: $backgroundColor;
    }
  }

  
}

</style>