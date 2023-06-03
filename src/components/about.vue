<template>
    <div class="about">
        <div class="row">
            <div class="col-lg-4 col-sm-12 p-5 img d-flex align-items-center ">
                <div class="">
                    <p class="muted m-0">Who we are</p>
                    <h1 class="pb-2">Our philosophy</h1>
                    <hr style="border-top: 2px solid; opacity:1;" >
                    <p class="py-3">To create designs and structures that are aesthetic and robust that will journey through the African culture and climate. Growing up in a floody neighbourhood with the occasional leaky roof and unbearable heat has geared our company towards creating spaces and structures that won't suffer and cause discomfort to residents.  Your space is your sanctuary. </p>
                    <button class="btn btn-primary rounded-0 px-3">Read More</button>
                </div>
            </div>
            <div class="col-lg-8 col-sm-12 text-dark">
                <h4>Our story</h4>
                    Experience the magic of harmonious designs that seamlessly blend functionality and aesthetics. Our dedicated team ensures timely execution with unwavering professionalism, delivering projects of the highest quality. With a focus on efficiency, we bring your vision to life, creating spaces that inspire and delight.
                <div class="ms-4 mt-4">
                    <h5>What we believe</h5>
                    Our Story begins with a carpenter in the mid 1980's in a town called Winneba, Ghana. His dream and desire to persevere  in the construction industry saw him move into the big city of Accra, Ghana. Gaining education and skill in carpentry he started this company which has since grown beyond his wildest dreams of just carpentry.  We aspire to grow even bigger to meet your needs. Join us as we tell our story to the world          <!-- ../assets/img/avatar-05 -->

                <!-- <div class="my-4">
                        <h5>Meet the Expects</h5>
                    <div class="circle-wrapper text-light">
                        <div class="circle">
                            <img src="../assets/img/avatar-05.jpg" alt="">
                            <div class="overlay  d-flex align-items-center justify-content-center">
                                <div>
                                    <p  class=" m-0" >Julius <span class="text-primary fw-bold">Turkson</span> </p>
                                    <i class="bi bi-three-dots"></i>
                                    <p  class="" style="font-size:70%" >Designer & Project Manager</p>
                                </div>
                            </div>
                        </div>
                        <div class="circle">
                            <img src="../assets/img/avatar-06.jpg" alt="">
                            <div class="overlay d-flex align-items-center justify-content-center">
                                <div>
                                    <p  class="m-0"  >Joewy <span class="text-primary fw-bold">Gartey</span></p>
                                    <i class="bi bi-three-dots"></i>
                                    <p  class="text-wrap" style="font-size:70%" >Electrical Engineer/Technician</p>
                                </div>
                            </div>
                        </div>
                        <div class="circle">
                            <img src="../assets/img/avatar-07.jpg" alt="">
                            <div class="overlay d-flex align-items-center justify-content-center">
                                <div>
                                    <p  class="m-0" >Emmanuella <span class="text-primary fw-bold">Azudey</span></p>
                                    <i class="bi bi-three-dots"></i>
                                    <p  class="text-wrap" style="font-size:70%" >Structural Consultant</p>
                                </div>
                            </div>
                        </div>
                        <div class="circle">
                            <img src="../assets/img/avatar-08.jpg" alt="">
                            <div class="overlay d-flex align-items-center justify-content-center">
                                <div>
                                    <p  class="m-0" >George <span class="text-primary fw-bold">Sorho</span></p>
                                    <i class="bi bi-three-dots"></i>
                                    <p  class="text-wrap" style="font-size:70%" >Network|IT Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div class="circle">
                            <img src="../assets/img/avatar-09.jpg" alt="">
                            <div class="overlay d-flex align-items-center justify-content-center">
                                <div>
                                    <p  class="m-0" >Mr. William <span class="text-primary fw-bold">Turkson</span></p>
                                    <i class="bi bi-three-dots"></i>
                                    <p  class="text-wrap" style="font-size:70%" >Chief Executive Officer</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div> -->
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.circle-wrapper {
  position: relative;
  height: auto;
  margin-inline: auto;
  margin-block: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
  .circle-wrapper {
    width: 100%;
  }
}

/* Media query for large devices */
@media (min-width: 769px) {
  .circle-wrapper {
    width: 40%;
  }
}

.circle {
  position: relative;
  width:50%;
  height:50%;
  backface-visibility: hidden;
  margin: -30px;
  overflow: hidden;
    transition: transform 0.3s ease-out;

  border-radius: 50%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.602);
}

.circle img {
  display: block;
    transition: transform 0.3s ease-out;

  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* padding-block: 20px; */
  padding-inline: 10px;
  font-size: 80%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease;
}

.circle:hover .overlay {
  opacity: 1;
  transition-delay: 0.1s;
}

.circle:hover {
transform: translateY(55px) scale(1.5);
  z-index: 1;
  transition-delay: 0.1s;
}

</style>
<style  scoped>
    .about{
        margin-inline: auto;
        width: 82%;
        height: fit-content;
        padding: 30px;
        color: #fff;
    }
    .img{
        background-image: linear-gradient(45deg, black, transparent), url('../assets/img/wood.jpg');
        background-size: cover;
        height: inherit
        
    }
    .muted{
        font-size: 1rem;
    }
    .shadow{
        /* border: .5px rgb(214, 214, 214) solid; */
        border-radius: 5px;
        box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.25) !important;
        font-size: 90%;
    }
</style>