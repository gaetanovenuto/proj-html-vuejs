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
  <navbar>
    <div class="row justify-content-around navbar ">
      <div class="col-4 edu-logo">
        <img src="../../assets/edu/img/theme_eduprime_logo.png" alt="EduPrime">
      </div>
      <div class="col-8 navigation-menu">
        <ul class="row d-flex">
          <li v-for="(link, index) in store.navbarLinks" :key="index" class="col-auto navigation-item">
            <div class="dropdown">
              <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" :class="link.dropdownLinks.length > 0 ? 'dropdown-toggle' : '' " >
                {{ link.label }}
              </button>
              <ul v-if="link.dropdownLinks != '' " class="dropdown-menu">
                <li v-for="(dropdownLink, index) in link.dropdownLinks" :key="index">
                  <a class="dropdown-item" href="#">
                    {{ dropdownLink }}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="col-auto navigation-item">
            <GeneralButton
              v-for="(button, index) in store.viewCourses" 
              :key="index"
              :icon="button.icon"
              :text="button.text"
              buttonClasses="yellow-button"
              linkClasses="text-decoration-none"
              iconClasses=""
              textClasses="text-white fw-600 font-size-18 px-2"/>
          </li>
        </ul>
      </div>
    </div>
  </navbar>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.navbar {
  padding: 40px 0px;
  margin: 0;
  .edu-logo {
    padding-left: 50px;
    
    img {
      max-height: 60px;
    }
  }


  .navigation-menu { // Tutti i figli di ".navbar"

    display: flex;
    justify-content: flex-end;
    
    > ul { // Solo i figli unici di ".navigation-menu"
      @include flexCentered;
      padding: 0;
      
      list-style: none;

      .navigation-item { // Tutti i figli di "ul"
          
          margin: 0;
          text-align: center;

          &:first-child {

            .dropdown {

              button {
                color: $buttonColor;
              }
            }    
          }
    
          > a { // Solo i figli unici di ".navigation-item"
            @include navbarLinkStyle;
          }

          .dropdown { // Tutti i figli di ".navigation-item"

            &:active {
              border: none;
              box-shadow: none;
            }

            &:hover button {
              color: $buttonColor;
            }
            
            button { // Tutti i figli di ".dropdown"
              @include navbarLinkStyle;
            }

            .dropdown-menu {
              margin-top: 0;
              border: none;
              padding: 15px 20px;


              li {
                a {
                  color: $titleColor;
                  opacity: .9;
                  font-weight: 600;
                }
              }
            }

          }

          .yellow-button {
            background-color: $buttonColor;
            @include roundedButton;

            a {
              @include navbarLinkStyle;
              text-transform: uppercase;
            }
          }

          @media (min-width: 576px) {       // Se lo schermo è grande almeno 576px, quando si hovera il pulsante ".dropdown" si aprirà ".dropdown-menu",
          .dropdown:hover .dropdown-menu {  // altrimenti servirà il click.
            display: block;
            margin-top: 0px;
          }
        }
      }
      
    }
  }
}
</style>

