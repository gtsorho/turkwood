<template>
 
    <Banner  />
    <Services id="services"/>
    <ServicesAlt/>
    <About id="about"/>
    <News/>
    <Footer id="contact"/>

</template>

<script>
import About from '../components/about.vue';
import Banner from "../components/banner.vue";
import Footer from '../components/footer.vue';
import News from '../components/news.vue';
import Services from '../components/services.vue';
import ServicesAlt from '../components/servicesAlt.vue';



export default {
  components:{
    Banner,
    ServicesAlt,
    Services,
    News,
    Footer,
    About,
  }
}
</script>
