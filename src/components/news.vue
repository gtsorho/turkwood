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
                <div class="card shadow">
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
                 <div class="card shadow">
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
                 <div class="card shadow">
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
                    title: 'Pergola & Resturant, Alisa Hotel',
                    details:`Alisa Hotel at North Ridge undertook a beautiful transformation with the addition of a poolside pergola, a wooden fence, and a stylish bar. The construction project aimed at enhancing the hotel's ambiance, providing guests with a serene and luxurious experience. These new features surely elevated the overall charm and appeal of Alisa Hotel.`,
                    location:'Alisa Hotel, North Ridge',
                    images:  [
                        new URL(`../assets/img/alisa3.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/alisa4.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/alisa5.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/alisa1.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/alisa2.jpg`,  import.meta.url).href

                    ]
                },
                {
                    title: 'Pergola|Out Hut',
                    details:`A pergola/wooden shelter and wooden fence are being constructed at Community 10 in Tema. These structures will enhance the aesthetics of the home and provide its residents with a shaded area to relax and socialize. The wooden fence will improve privacy and security, adding a touch of elegance to the scene. Image references are available`,
                    location:'Private Client, Comm 10 Tema',
                    images:  [
                        new URL(`../assets/img/c101.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/c102.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/c103.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/c104.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/c105.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/c109.jpg`,  import.meta.url).href,
                    ]
                },
                {
                    title: 'Facelift & Office Contru.',
                    details:`This construction project involved the transforming of one open area into six individual office spaces. The services required for this project included installing plasterboard walls, applying paint, setting up electrical wiring and fixtures, implementing plumbing systems, and carrying out the necessary finishing touches. This comprehensive project encompasses all aspects, from A to Z, to create functional and visually appealing office spaces.`,
                    location:"Hui'er Hearing, Sakumono Tema" ,
                    images:  [
                        new URL(`../assets/img/ejunction1.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/ejunction2.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/ejunction3.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/ejunction4.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/ejunction5.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/ejunction6.jpg`,  import.meta.url).href,
                        new URL(`../assets/img/ejunction8.jpg`,  import.meta.url).href,
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

.card-body{
    height: 50%;
}
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
    margin-top: 25px;
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