// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        title: 'El Once Blanco',
        htmlAttrs: { lang: 'es' },
        meta: [
          { name: 'description', content: 'Video Podcast dedicado al Real Madrid' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }

        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
        ]
    }
  },
    vite: {
        $client: {
            build: {
                rolldownOptions: {
                    output: {
                        codeSplitting: false,
                    },
                },
            },
        },
    },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
})
