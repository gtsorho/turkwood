<script setup>
</script>

<template>

      <nav class="navbar navbar-expand-lg   fixed-top" :class="{ 'navbar-hidden': !showNavbar }" >
        <div class="container-fluid">
          <a class="navbar-brand mx-5" href="#">
            <img src="./assets/icons/logo2.png" alt="Logo" width="50"  class="d-inline-block align-text-top">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " style="width:100%" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-4  d-flex justify-content-between" style="width: 70%;">
              <router-link class="nav-link" :to="{name:'home', hash:'#home'}">HOME</router-link>
              <router-link class="nav-link" :to="{name:'home', hash:'#about'}">ABOUT</router-link>
              <router-link class="nav-link" :to="{name:'home', hash:'#services'}">SERVICES</router-link>
              <router-link class="nav-link" :to="{name:'home', hash:'#news'}">PROJECTS</router-link>
              <router-link class="nav-link" :to="{name:'home', hash:'#contact'}">CONTACT</router-link>
              <router-link class="nav-link nav-btn" :to="{name:'home', hash:'#services'}">QUOTATION</router-link>
            </div>
          </div>
        </div>
      </nav>
      

  <RouterView />
</template>

<script>
export default {
 data() {
    return {
      showNavbar: false,
      navbarHeight: 0,
      navbarThreshold: 0
    };
  },
  mounted() {
    this.navbarHeight = 300;
    this.navbarThreshold = this.navbarHeight - 100; // change 100 to your desired threshold
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showNavbar = window.scrollY > this.navbarThreshold;
    }
  }
};
</script>

<style scoped>
 .navbar-hidden {
    transform: translateY(-100%);
  }
  .navbar{
    transition: transform 0.5s ease-out;
    background-color: rgba(170, 97, 19, 0.798);
  }
  .nav-link{
    color: aliceblue !important;
    border: 2px solid rgba(255, 255, 255, 0);
    transition: padding-inline 0.5s ease;
    padding-block: 5px;

  }
  .nav-link:hover{
    color: aliceblue;
    padding-inline: 20px !important;
    border: 2px solid white;
  }
  .nav-btn{
     background-color: rgb(255, 255, 255) !important;
     color: rgb(65, 65, 65) !important;
      transition:  0.5s ease;
      padding-inline: 20px !important;
  }
  .nav-btn:hover{
    border: 2px solid rgb(143, 61, 3) !important;
  }
</style>

<style lang="scss">


@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,500;0,700;1,100&display=swap');
  p,div,label,span, h1,h2,h3,h4.h5,h6,li,ol{
    font-family: 'Poppins', sans-serif;
    font-weight:300 !important;
  }
  $primary: rgb(170, 97, 19);
  $dark:rgb(68, 68, 68);
  $warning:rgb(225, 225, 2);
  @import "../node_modules/bootstrap/scss/bootstrap";

</style>
