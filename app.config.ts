export default defineAppConfig({
  docus: {
    title: 'JapanJS',
    description: 'JapanJS は日本特有の機能を提供するライブラリです。 カナ変換、都道府県の一覧データなど、日本特有のめんどくさい実装を肩代わりします。Tree Shaking なライブラリなのでバンドルサイズが重くなりません。',
    image: 'https://japanjs.org/ogp_image.jpg',
    socials: {
      twitter: 'takasqr',
      github: 'japanjsorg/japanjs',
      // nuxt: {
      //   label: 'Nuxt',
      //   icon: 'simple-icons:nuxtdotjs',
      //   href: 'https://nuxt.com'
      // }
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'japanjsorg',
      owner: 'japanjsorg',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: {
        dark: '/icon.png',
        light: '/icon.png'
      },
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
