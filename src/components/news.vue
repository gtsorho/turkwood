<template>
    <div class="container"  id="news">
        <h5 class="text-muted text-center my-0">
            Project
        </h5>
        <h1 class="text-dark text-center mb-5">
            Updates
        </h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3  ">
            <div class="col">
                <div class="card">
                    <div class="bg-primary overImg" data-bs-toggle="modal" @click="selectedProject = 0" data-bs-target="#exampleModal"><i class="bi bi-image text-light fs-5 p-0 m-0"></i></div>
                    <img :src="projects[0].images[0]"  class="rounded-0 card-img-top" alt="...">
                    <div class="card-body">
                        <div class="card-text">
                            <h4>{{projects[0].title}}</h4>
                            <p>{{truncatedText(projects[0].details)}}</p>
                            <span class="muted"><i class="bi me-2 bi-geo-alt-fill" ></i>{{projects[0].location}}</span>
                        </div>                    
                    </div>
                </div>
            </div>
            <div class="col">
                 <div class="card">
                    <div class="card-body">
                        <div class="card-text">
                            <h4>{{projects[1].title}}</h4>
                            <p>{{truncatedText(projects[1].details)}}</p>
                            <span class="muted"><i class="bi me-2 bi-geo-alt-fill" ></i>{{projects[1].location}}</span>
                        </div>
                    </div>
                    <img :src="projects[1].images[0]" class="rounded-0 card-img-bottom" alt="...">
                    <div class="bg-primary overImg" data-bs-toggle="modal" @click="selectedProject = 1" data-bs-target="#exampleModal"><i class="bi bi-image text-light fs-5 p-0 m-0"></i></div>
                </div>
            </div>
            <div class="col">
                 <div class="card">
                    <div class="bg-primary overImg" data-bs-toggle="modal" @click="selectedProject = 2" data-bs-target="#exampleModal"><i class="bi bi-image text-light fs-5 p-0 m-0"></i></div>
                    <img :src="projects[2].images[0]" class="rounded-0 card-img-top" alt="...">
                    <div class="card-body">
                        <div class="card-text">
                            <h4>{{projects[2].title}}</h4>
                            <p>{{truncatedText(projects[2].details)}}</p>
                            <span class="muted"><i class="bi me-2 bi-geo-alt-fill" ></i>{{projects[2].location}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content rounded-0">
                <div class="modal-header">
                    <h1 class="modal-title fs-6 fw-bold" id="exampleModalLabel">{{projects[selectedProject].title}}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body mx-auto" style="width:80%">
                    <vueper-slides
                    
                        :breakpoints="breakpoints"
                        autoplay
                        class=""
                        visible-slides="2"
                        :slide-ratio="1 / 2"
                        :gap="3"
                        :dragging-distance="40">
                        <vueper-slide  
                            v-for="(slide, i) in projects[selectedProject].images"
                            :key="i"
                            :image="slide"
                        />
                    </vueper-slides>                
                </div>
                <div class="p-4">
                    <h4 class="border-start ps-1 border-4 border-primary">Details</h4>
                    <p class="border-end ps-1 border-2 border-primary">
                        {{projects[selectedProject].details}}
                    </p>
                    <p class="muted text-end pe-2"><i class="bi me-2 bi-geo-alt-fill" ></i>{{projects[selectedProject].location}}</p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
      components: { VueperSlides, VueperSlide },
      data() {
        return {
            selectedProject:0,
            breakpoints: {
                1200: {
                visibleSlides: 2
                },
                900: {
                visibleSlides: 2
                },
                600: {
                visibleSlides: 1,
                arrows: false,
                bulletsOutside: true,
                slideRatio: 1 / 1
                },    
            },
            slides: [],
            projects:[
                {
                    title: 'El Teide Volcano, Spain',
                    details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut exercitationem accusantium ad beatae illo r adipisicing elit. Dolorum aut exercitationem accusantium ad beatae  voluptas suscipit non, hic blanditiis? Quos, officiis reiciendis odio aliquid eos inventore eum amet. Atque!',
                    location:'Buena-Vista, Sakumono',
                    images:  [
                        new URL(`../assets/img/plane.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/plane.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/plane.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/plane.jpg`,  import.meta.url).href
                    ]
                },
                {
                    title: 'El Teide Volcano, Spain',
                    details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut exercitationem accusantium ad beatae illo r adipisicing elit. Dolorum aut exercitationem accusantium ad beatae  voluptas suscipit non, hic blanditiis? Quos, officiis reiciendis odio aliquid eos inventore eum amet. Atque!',
                    location:'Alisa Hotel, North Ridge',
                    images:  [
                        new URL(`../assets/img/post-07.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/plane.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/plane.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/plane.jpg`,  import.meta.url).href
                    ]
                },
                {
                    title: 'El Teide Volcano, Spain',
                    details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut exercitationem accusantium ad beatae illo r adipisicing elit. Dolorum aut exercitationem accusantium ad beatae  voluptas suscipit non, hic blanditiis? Quos, officiis reiciendis odio aliquid eos inventore eum amet. Atque!',
                    location:'Kuawu, Easten Region',
                    images:  [
                        new URL(`../assets/img/wood.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/plane.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/post-08.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/plane.jpg`,  import.meta.url).href
                    ]
                }
            ]
        }
    },
    methods:{
        truncatedText(text) {
            const maxLength = 100;
            if (text.length > maxLength) {
                return `${text.substring(0, maxLength)}...`;
            } else {
                return this.text;
            }
        }
    }
}
</script>
<style >
.vueperslides__arrow svg {
   width: 3em !important;
}
.vueperslide__content-wrapper{
    /* background-color: #1717174a; */
    justify-content: end !important;
    color: aliceblue !important;
    text-align: right;
    align-items: stretch !important;
}
.vueperslide__title, .vueperslide__content{
    background-color: #1717179d;
    padding: 5px;
}
.vueperslide{
    border-radius: 10px !important;
}
</style>
<style scoped>


.card > .overImg{
    position: absolute;
    top: 50%;
    left: 90%;
    transform: translate(-50%, -50%);
    padding: 5px 15px;
    background-color: #fff;
    border-radius: 0px;
    font-size: 16px;
    cursor: pointer;
}

.container {
  margin-block: 50px;
  margin-inline: auto;
  width: 80%;
}

.muted{
    font-size: .8rem;
}

.card {
    height: 5in;
    position: relative;
	border-radius: 0px !important;
    border: 0.5px rgb(230, 230, 230) solid;

}
img{
    height:50%;
    object-fit: cover;
}
.card-text{
    margin-block: 25px;
    height: 50%;
}

.content {
  transition: transform 1s ease;
	position: absolute;
	top: 10%;
	text-align: center;
	color: #fff;
  	will-change: transform;
}

</style>