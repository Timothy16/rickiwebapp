<template>
    <div class="testimonial-bg">
        <div class="container">
            <div class="testimonial-header">
                What our users have said about us
            </div>
            <div class="arrow-s d-flex justify-content-center">
                <div  @click="moveLeft"><i class="fa fa-arrow-left arrow-edit link-trans"></i></div> &nbsp;&nbsp; &nbsp;&nbsp;
                <div  @click="moveRight" class="d-sm-none d-none d-md-block"><i class="fa fa-arrow-right arrow-edit link-trans"></i></div>
                <div  @click="moveRight2" class="d-sm-block d-md-none"><i class="fa fa-arrow-right arrow-edit link-trans"></i></div>
            </div>

            <div class="carousel" style="transform: translateX(0rem); "  ref="items">
                <div class="testimonail-p">
                    <div class="profile-p">
                        <img src="/img/ayorinde.svg" class="img-up edit-img" alt="" srcset="" />
                    </div>
                    <div class="profile-text">
                        The app is excellent and it truly does what it claims do. It is very simple to use and functional. The interface design and navigation are great. Keep it up!
                    </div>  
                    <div class="profile-star">
                        <img src="/img/full-star.svg" class="img-up edit-img-1" alt="" srcset="" />
                        <img src="/img/full-star.svg" class="img-up edit-img-1" alt="" srcset="" />
                        <img src="/img/full-star.svg" class="img-up edit-img-1" alt="" srcset="" />
                        <img src="/img/full-star.svg" class="img-up edit-img-1" alt="" srcset="" />
                        <img src="/img/half-star.svg" class="img-up edit-img-1" alt="" srcset="" />
                    </div>
                    <h6>Ayorinde Olorunniyi</h6>
                </div>
                <div class="testimonail-p testi-p-3 ">
                    <div class="profile-p">
                        <img src="/img/david.svg" class="img-up" alt="" srcset="" />
                    </div>
                    <div class="profile-text">
                        1. The design is simple and user friendly 2. The rate the app offers is the best. 3.the transaction is fast. There is no delay in transaction. 4.the payment is fast. 5. I strongly recommend it.
                    </div>  
                    <div class="profile-star">
                        <img src="/img/full-star.svg" class="img-up" alt="" srcset="" />
                        <img src="/img/full-star.svg" class="img-up" alt="" srcset="" />
                        <img src="/img/full-star.svg" class="img-up" alt="" srcset="" />
                        <img src="/img/full-star.svg" class="img-up" alt="" srcset="" />
                        <img src="/img/half-star.svg" class="img-up" alt="" srcset="" />
                    </div>
                    <h6>DAVID OMADIVI</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            counter : 0
        }
    },
    methods: {
        moveRight() {
            const carousel = this.$refs.items
            carousel.style.transform = 'translateX(-45rem)'
        },
        moveRight2() {
            const carousel = this.$refs.items
            carousel.style.transform = 'translateX(-28rem)'
        },
        moveLeft() {
            const carousel = this.$refs.items
            carousel.style.transform = 'translateX(+0rem)'
        },
    },
}
</script>

<style scoped>

</style>