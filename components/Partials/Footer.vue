<template>
    <footer class="container footer-section">
        <div class="footer-header">
            Choose Ricki when trading giftcards. <span style="color: #492ED5;">Get started.</span> 
        </div>
        <div class="button-section button-down text-center v">
            <NuxtLink to="https://play.google.com/store/apps/details?id=com.app.ricki" target="_blank">
                <img src="/img/Android.svg" class="img-fluid link-trans mobile-button" alt="" srcset="" /> &nbsp;
            </NuxtLink>
            <NuxtLink to="https://apps.apple.com/us/app/id6444379776" target="_blank">
                <img src="/img/AppleiOS.svg" class="img-fluid link-trans mobile-button" alt="" srcset="" /> &nbsp;
            </NuxtLink>
            
            <NuxtLink to="https://web.ricki.app" target="_blank">
                <img src="/img/Buttton-web-b.svg" class="img-fluid link-trans mobile-button-trade" alt="" srcset="" />
            </NuxtLink>
        </div>
        <div class="footer-last-s">
            <div class="section-f-d">
                <div class="text-footer-d d">Terms of Service</div>
                <div class="text-footer-d m-f-l">Privacy Policy</div>
                <div class="text-footer-d m-f-l">{{ new Date().getFullYear() }} © Copyright Ricki.app</div>
            </div>
            <div class="social-m">
                <!-- <img src="/img/facebook.svg" class="img-fluid" alt="" srcset="" /> &nbsp;&nbsp; -->
                <a href='http://instagram.com/rickiapp' target='_blank' rel='noopener noreferrer'>
                    <img src="/img/instagram.svg" class="img-fluid" alt="" srcset="" /> &nbsp;
                    <span style="color :#492ED5;">Follow us in Instagram</span>
                </a>
                
               
                <!-- <img src="/img/twitter.svg" class="img-fluid" alt="" srcset="" /> &nbsp;&nbsp;
                <img src="/img/linkdin.svg" class="img-fluid" alt="" srcset="" /> &nbsp;&nbsp;
                <img src="/img/medium.svg" class="img-fluid" alt="" srcset="" /> &nbsp;&nbsp; -->
            </div>
        </div>
    </footer>
</template>

<script setup >

</script>

<style scoped>

</style>