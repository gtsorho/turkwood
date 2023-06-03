<template >
    <div class="bgimg">
        <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-4 col-sm-12 text-light p-5">
                <small class="text-center text-light">EVERYTHING</small>
                <h1>Renovate</h1>
                <p>Transform your space with ease! Whether it's your office, kitchen, home, shop, church, or any other residential or commercial area, we're here to help. Don't know where to start or how to repurpose your space to match your unique style and needs? Look no further! With just a phone call away, we'll guide you through the process and make your vision a reality.</p>
                <h1>FROM GHS 5k </h1>
                <button class="btn btn-transparent border-1 rounded-0 border-light text-light fs-6">READ MORE</button>
            </div>
            <div class="col-lg-4 col-sm-12 px-0 border-0 d-flex align-items-center">
                <div class="card border-0 rounded-0 py-4 w-100" >
                    <div class="card-body text-center">
                        <h5 class="card-title text-dark py-2">GET IN TOUCH</h5>
                        <h6 class="card-subtitle mb-2 text-secondary">Leave us a message and expect our prompt response, your satisfaction is our priority</h6>
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
                <p>Looking for  a Cost Effective, Durable, Flexible Payment and Project schedule to suit your building needs ?  We will handle your edifice from the designing (architectural)  stage down to the implementation stage. We will schedule the project to fit right into your financial plan. </p>
                <h1>FROM GHS 50k</h1>
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
        background-image:linear-gradient(45deg, rgba(0, 0, 0, 0.371), rgba(0, 0, 0, 0.378)), url('../assets/img/plane.jpg');
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