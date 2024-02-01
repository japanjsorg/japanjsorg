export default defineAppConfig({
  docus: {
    title: 'JapanJS',
    description: 'カナ変換、都道府県の一覧データなど、日本特有のめんどくさい実装を肩代わりします。Tree Shaking なライブラリなのでバンドルサイズが重くなりません。',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
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
