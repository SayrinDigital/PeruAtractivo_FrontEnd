export const actions = {
  async nuxtServerInit ({ commit }, { app, req }) {
      let home = await app.$prismic.api.getSingle('home', { lang : 'es-es' })
      let menu = await app.$prismic.api.getSingle('menu', { fetchLinks: ['menu_position','pagina.menu_posicion','pagina.sub_paginas', 'pagina.pagina_titulo' , ''], lang : 'es-es' })
      //let expcontents = await app.$prismic.api.getByIDs(experiences.data.tipos.map(a => a.id), { lang : 'en-gb' })
      commit('home/setHome', home)
      commit('menu/setMenu', menu)
      //commit('experiences/setContents', expcontents)
  }
}
