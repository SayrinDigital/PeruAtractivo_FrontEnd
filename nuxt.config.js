const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Peru Atractivo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
    css: ['uikit/dist/css/uikit.css', '@/assets/style.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '~/plugins/lazyvideo.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['prismic-nuxt', {
    endpoint: 'https://peruatractivo.cdn.prismic.io/api/v2',
    linkResolver: function(doc, ctx) {
      if (doc.type === 'contenido') return "/conte/" + doc.uid
      if (doc.type === 'home') return "/"
      if (doc.type === 'pagina') return "/" + doc.uid
      return '/oops'
    },
    htmlSerializer: function(type, element, content, children) {

      var Elements = PrismicDOM.RichText.Elements;
        switch (type) {
          case Elements.paragraph:
          return '<p class="desc uk-text-justify">' + children.join('') + '</p>'
          case Elements.heading3:
          return '<h3 class="desc uk-text-center">' + children.join('') + '</h3>'
          case Elements.heading4:
          return '<h4 class="desc uk-text-center">' + children.join('') + '</h4>'
          case Elements.heading5:
          return '<h5 class="desc uk-text-center">' + children.join('') + '</h5>'
          case Elements.heading6:
          return '<h6 class="desc uk-text-center">' + children.join('') + '</h6>'
          default:

        }
    }
  }],
    '@nuxtjs/ngrok',
    ['nuxt-fontawesome', {
     component: 'fa',
     imports: [
       //import whole set
       {
         set: '@fortawesome/free-solid-svg-icons',
         icons: ['fas']
       },
     ]
   }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
