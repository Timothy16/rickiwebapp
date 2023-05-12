<template>
    <div>
        <div class="desktop-view">
            <PartialsTopMenu />
        </div>
        <div class="mobile-view">
            <!-- <PartialsTopTubeMobile /> -->
        </div>
        <div class="top-down">
             <slot />
        </div>
        <div>
            <PartialsFooter />
        </div>
    </div>
</template>
 <script setup>

 </script>
 <style scoped>
 .top-down{
     padding-top: 5rem !important;
 }
 .desktop-view{
    display: block;
}
.mobile-view{
    display: none;
}
@media screen and (max-width : 578px) {
    .desktop-view{
        /* display: none; */
    }
    .mobile-view{
        /* display: block; */
    }

    .top-down{
        padding-top: 8rem !important;
    }
}
@media screen and (max-width : 768px) {
    .desktop-view{
        /* display: none; */
    }
    .mobile-view{
        /* display: block; */
    }
    .top-down{
        padding-top: 7rem !important;
    }
   
}
 </style>