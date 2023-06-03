<template>
<transition v-bind:css="false" name="banner">
<div class="slider" id="home">
  <div  :style="{ 'background-image': 'linear-gradient(45deg, #404040, transparent), url(' + currentImage + ')'}" ref="bgImage" class="brand-slide jumbo ">
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid">
          <a class="navbar-brand mx-5" href="#">
            <img src="../assets/icons/logo2.png" alt="Logo" width="100"  class="d-inline-block align-text-top">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" style="width:100%" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-4 d-flex justify-content-between" style="width: 70%">
              <router-link class="nav-link" :to="{name:'home', hash:'#home'}">HOME</router-link>
              <router-link class="nav-link" :to="{name:'home', hash:'#about'}">ABOUT</router-link>
              <router-link class="nav-link" :to="{name:'home', hash:'#services'}">SERVICES</router-link>
              <router-link class="nav-link" :to="{name:'home', hash:'#news'}">PROJECTS</router-link>
              <router-link class="nav-link" :to="{name:'home', hash:'#contact'}">CONTACT</router-link>
              <router-link class="nav-link bg-primary px-4 text-center" :to="{name:'home', hash:'#services'}">QUOTATION</router-link>
            </div>
          </div>
        </div>
      </nav>


  <div class="brand">
    <div class="container textbg">
       <h1 class="highlight-text brand-text text-center w-75" ref="brandText">
        <span  style="font-weight:800 !important " v-for="(char, index) in brandText" :key="index" :class="{ 'highlighted': highlightedIndex === index }" @mouseover="highlightIndex(index)" @mouseout="resetHighlight">
          {{ char }}
        </span>
      </h1>
      <!-- <h2  class="" style="font-weight:800!important ">{{ brandText }}</h2> -->
    <h2 ref="subText" class="sub-text text-break w-50 text-break">{{ subText }} <span class="fw-bold text-primary"> "UNLEASH  YOUR SANCTUARY IN SPACE, DREAM IT, LIVE IT!"</span></h2>
    <router-link  ref="brandBtn" class="brand-btn btn btn-transparent border-3 rounded-0  py-2 border-light text-light " :to="{name:'home', hash:'#services'}">Get A Quote</router-link>

    </div>
  </div>
  <!-- <div class="address d-flex justify-content-evenly w-100"> 
      <p >ADDRESS : 143 Avenue, Miami ( Florida )</p>
      <p>EMAIL : email@construction.com</p>
  </div> -->

 </div>
 
</div>
</transition>
 
</template>
  <script>
  export default {
    data() {
      return {
        text: 'Your Text Here',
        highlightedIndex: null,
        brandText: ' Imagination Meets Design',
        subText: 'Delivering to you not only ideas that work but work that stand out. ',
        maxRotation: 5,
        maxTranslation: 10,
        images: [
        'c101.jpg',
        'c102.jpg',
        'ejuction1.jpg'
      ],
      currentImageIndex: 0
      }
    },
   computed: {
      currentImage() {
        return new URL(`../assets/img/${this.images[this.currentImageIndex]}`,  import.meta.url).href;
      },
    },
    // watch: {
    //   currentImageIndex(newValue, oldValue) {
    //     if (newValue !== oldValue) {
    //       this.$refs.bgImage.classList.add('fade-transition')
    //       setTimeout(() => {
    //         this.$refs.bgImage.classList.remove('fade-transition')
    //       }, 1000)
    //     }
    //   }
    // },
    mounted() {

      window.addEventListener('mousemove', this.handleMouseMove);

      setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;

      }, 3000);

    },
    methods: {
       highlightIndex(index) {
       this.highlightedIndex = index;
    },
    resetHighlight() {
      this.highlightedIndex = null;
    },
      handleMouseMove(event) {
        const { clientX, clientY } = event;
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = this.$refs.brandText;
        const centerX = offsetLeft + offsetWidth / 2;
        const centerY = offsetTop + offsetHeight / 2;
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;
        const rotationY = deltaX / centerX * this.maxRotation;
        const rotationX = -deltaY / centerY * this.maxRotation;
        const translationX = deltaX / centerX * this.maxTranslation;
        const translationY = deltaY / centerY * this.maxTranslation;
        this.$refs.brandText.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateX(${this.mapValue(translationX, -20, 20, -50, -58)}%) translateY(${this.mapValue(translationY, -20, 20, -50, -55)}%)`;
        this.$refs.subText.style.transform = `rotateX(${rotationX / 2}deg) rotateY(${rotationY / 2}deg) translateX(${ this.mapValue(translationX / 2, -1, 10, -50, -55)}%) translateY(${this.mapValue(translationY / 2, -20, 20, -50, -55) }%)`;
        this.$refs.brandBtn.style.transform = `rotateX(${rotationX / 1}deg) rotateY(${rotationY / 3}deg) translateX(${ this.mapValue(translationX / 3 / 2, -1, 10, -40, -60)  }%) translateY(${ this.mapValue(translationY / 3 / 2, -20, 20, -40, -70) }%)`;

      },
      mapValue(oldValue, oldMin, oldMax, newMin, newMax) {
        return (((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin)) + newMin;
      }
    },
  }
  </script>


<style scoped>




.highlight-text {
  display: inline-block;
  /* font-size: 24px; */
}

.highlighted {
  transition: 0.0s;
  color: rgb(170, 97, 19); /* Customize the highlight color as per your preference */
  /* color: #404040; */
}


























.textbg{
   /* position: absolute; */
   margin-top: 5%;
  height: 80%;
  width: 75%;
  background-color: rgba(0, 0, 0, 0.628);
}
.brand {
  position: relative;
  width:100%;
  height: 400px;
}

.brand-text  {
  position: absolute;
  top: 20%;
  left: 53%;
  transform-style: preserve-3d;
}

 .sub-text {
  position: absolute;
  top: 40%;
  left: 50%;
  transform-style: preserve-3d;
}

.address{
  position: absolute;
  top:147%;
  color:white;
}

.brand-text {
  font-size: calc(25px + (40 - 25) * ((100vw - 320px) / (1024 - 320)));
  font-weight: bold;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  color: #fff;
  transition: transform 0.3s ease-out;
}

.sub-text {
  font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1024 - 320)));
  color:#fff;
  text-align: center;
  transform: translate(-50%, -50%);
  transition: transform 0.5s ease-out;
}

.brand-btn {
  font-size: calc(8px + (16 - 8) * ((100vw - 320px) / (1024 - 320)));
  color:#fff;
  text-align: center;
  position: absolute;
  top: 60%;
  left: 50%;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
}

  .jumbo{
    border-inline: 60px solid #2d2d2d;
    border-block: 40px solid #2d2d2d;
    width:100%;
    height: 8in;
    background-size: cover;
  }
  .nav-link{
    color: aliceblue;
    border: 2px solid rgba(255, 255, 255, 0);
    transition: 0.5s ease-out;
    padding-block: 5px;

  }
  .nav-link:hover{
    color: aliceblue;
    padding-inline: 20px;
    border: 2px solid white;
  }


.banner-enter {
  opacity: 0;
  transition: opacity 1s;
}

.banner-leave {
  opacity: 1;
  transition: opacity 1s;
}

.banner-enter-active,
.banner-leave-active {
  opacity: 1;
}
.banner-enter-to,
.banner-leave-from {
  opacity: 0;
}
</style>

