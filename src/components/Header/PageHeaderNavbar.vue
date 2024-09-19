<script>

import { store } from '../../store.js';

export default {
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <navbar>
    <div class="row justify-content-around navbar ">
      <div class="col-5 edu-logo">
        <img src="../../assets/edu/img/theme_eduprime_logo.png" alt="EduPrime">
      </div>
      <div class="col-7 navigation-menu">
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
            <button class="yellow-button">
              <a href="#">View Courses</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </navbar>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.navbar {
  padding: 40px 50px;
  .edu-logo {
    
    img {
      max-height: 60px;
    }
  }


  .navigation-menu { // Tutti i figli di ".navbar"
    
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

