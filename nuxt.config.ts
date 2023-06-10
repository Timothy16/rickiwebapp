// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            meta : [
                {property : 'og:description', content : 'Today, Ricki is the world’s leading gift card trading platform. We are making a promise to be legit, efficient and provide quality service. Our Mission is to be the household name for giftcard exchange in Nigeria.'},
                {property : 'og:title', content : 'Ricki'},
                {property : 'og:url', content : 'Rickiapp.com'},
                {property : 'og:url', content : 'Rickiapp.com'},
                {name : 'twitter:card' , content : 'summary_large_image'}
            ],
            link : [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css'},
                { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=satoshi&display=swap'},
                // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=satoshi&display=swap'},
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/fontawesome.min.css'},
                { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'},
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'},
                // { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css'},
  
            ],
            script : [
                { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js',
                  async: true,
                  crossorigin: "anonymous"
                },
                // { src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
                //   async: true,
                //   crossorigin: "anonymous"
                // },
            ]
        },
    },
    css: [
        '~/assets/css/style.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@/assets/css/global.scss"',
                },
            },
        },
    },
    modules: [
        '@nuxt/image-edge',
        'nuxt-gtag'
    ],
    gtag: {
        id: 'GTM-5RZX7W6',
        config: {
            id: "GTM-5RZX7W6",
            page_title: 'Ricki -; Trade your Giftcards for Instant Cash at the Speed of Light.',
            params: {
              send_page_view: true,
            },
        },
    }
})
