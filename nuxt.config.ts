export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible'
  ],
  app: {
    head: {
      meta: [
        { name: 'title', content: 'JapanJS' },
        { name: 'description', content: 'JapanJS は日本特有の機能を提供するライブラリです。 カナ変換、都道府県の一覧データなど、日本特有のめんどくさい実装を肩代わりします。Tree Shaking なライブラリなのでバンドルサイズが重くなりません。' },
        // Open Graph
        { property: 'og:url', content: 'https://japanjs.org' },
        { property: 'og:title', content: 'JapanJS' },
        { property: 'og:description', content: 'JapanJS は日本特有の機能を提供するライブラリです。 カナ変換、都道府県の一覧データなど、日本特有のめんどくさい実装を肩代わりします。Tree Shaking なライブラリなのでバンドルサイズが重くなりません。' },
        { property: 'og:image', content: 'https://japanjs.org/ogp_image.jpg' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@takasqr' },
        { name: 'twitter:creator', content: '@takasqr' },
        // サムネイル指定
        { name: 'thumbnail', content: 'https://japanjs.org/ogp_image.jpg' }
      ],
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','${process.env.GTM_ID}');` 
        }
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: 'bodyOpen'
        }
      ]
    }
  }
})
