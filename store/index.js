export const actions = {
  async nuxtServerInit ({ commit }, { app, req }) {
      let home = await app.$prismic.api.getSingle('home', { lang : 'en-gb' })
      let menu = await app.$prismic.api.getSingle('menu', { fetchLinks: ['menu_position','pagina.menu_posicion','pagina.sub_paginas', 'pagina.pagina_titulo' , ''], lang : 'en-gb' })
      //let expcontents = await app.$prismic.api.getByIDs(experiences.data.tipos.map(a => a.id), { lang : 'en-gb' })
      commit('home/setHome', home)
      commit('menu/setMenu', menu)
      //commit('experiences/setContents', expcontents)
  }
}
