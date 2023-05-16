<template >
    <div class="bgimg">
        <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-4 col-sm-12 text-light p-5">
                <small class="text-center text-light">EVERYTHING</small>
                <h1>Renovate</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio non quasi impedit laudantium libero recusandae minus consequatur harum officiis provident reprehenderit eveniet alias vel cum voluptatum distinctio, officia dolorem.</p>
                <h1>FROM $ 30 k</h1>
                <button class="btn btn-transparent border-1 rounded-0 border-light text-light fs-6">READ MORE</button>
            </div>
            <div class="col-lg-4 col-sm-12 px-0 border-0 d-flex align-items-center">
                <div class="card border-0 rounded-0 py-4 w-100" >
                    <div class="card-body text-center">
                        <h5 class="card-title text-dark py-2">GET IN TOUCH</h5>
                        <h6 class="card-subtitle mb-2 text-secondary">Lorem ipsum dolor sit amet, tempus iaculis. Duis pretium pretium tortor</h6>
                        <div>
                            <input class="form-control rounded-0 my-3" type="text" placeholder="Email" aria-label="default input example">
                            <textarea class="form-control rounded-0 my-4" rows="4" type="text" placeholder="Message" aria-label=".form-control-sm example"></textarea>
                            <button class="btn btn-primary rounded-0 text-light w-100">SEND REQUEST</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 text-light p-5 text-start">
                <small class=" text-light">HOUSES</small>
                <h1>Building</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio non quasi impedit laudantium libero recusandae minus consequatur harum officiis provident reprehenderit eveniet alias vel cum voluptatum distinctio, officia dolorem.</p>
                <h1>FROM $ 50 k</h1>
                <button class="btn btn-transparent border-1 rounded-0 border-light text-light fs-6">READ MORE</button>
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
    .bgimg{
        background-image: url('../assets/img/plane.jpg');
        background-size: cover;
        background-position: center 50%;
        background-attachment: fixed;
        width: 80%;
        margin-inline: auto;
        margin-block: 100px;
        
    }
    .form-control{
        border: 1px rgb(233, 233, 233) solid;
    }
</style>