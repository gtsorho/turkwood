<template >
    <div class="footer">
        <div class="row">
            <div class="col">
                <div class="d-flex align-items-center">
                    <img src="../assets/icons/logo2.png" alt="Logo" width="100"  class="d-inline-block align-text-top">
                    <h4 class="d-inline mx-3 mt-3">Turkwood Constuction Ltd</h4>
                </div>
                <p class="my-4">
                        We are a trusted construction company committed to delivering high-quality projects with integrity, innovation, and customer satisfaction. Contact us for your construction needs today.                </p>
                <div class="social-icons">
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-whatsapp"></i>
                </div>
            </div>
            <div class="col">
                <ul class="list-group d-flex justify-content-end list-group-horizontal">
                    <li class="list-group-item">About</li>
                    <li class="list-group-item">Services</li>
                    <li class="list-group-item">Projects</li>
                    <li class="list-group-item">News</li>
                </ul>
                <div class="text-end my-5">
                    <p class="m-0"><span class="text-light fw-bold ">Location</span>: Tema Comm-16 Lashibi</p>
                    <p class="m-0"><span class="text-light fw-bold ">email</span>: info@turkwood.com</p>
                    <p class="m-0"><span class="text-light fw-bold ">Contact</span>: +233 54 437 3693</p>
                    <p class="m-0"><span class="text-light fw-bold "></span> +233 24 426 5145</p>
                </div>
            </div>
        </div>
        <hr>
        <div class=" d-flex justify-content-between ">
            <p>Turkwood Construction Ghana</p>
            <div class="copyright">
                <span>&copy; </span>
                <span >{{new Date().getFullYear()}}</span>
                <span> My Company. All rights reserved.</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .footer{
        padding-inline: 30px;
        padding-top: 30px;
        padding-bottom: 10px;
        background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.916), rgba(0, 0, 0, 0.489)), url('../assets/img/woodsaw.jpg');
        height: fit-content;
        width: 100%;
        background-size: cover;
        background-position: center 50%;
        color: #fff !important;
    }
    .list-group-item{
        color: #d5d5d5;
        border: none;
        background: none !important;
    }
    .social-icons > i{
        font-size: 1.5rem !important;
        margin-inline: 8px;
    }
</style>