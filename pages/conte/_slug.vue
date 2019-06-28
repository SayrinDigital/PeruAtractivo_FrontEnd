<template lang="pug">

   div
     template(v-for="(slice,index) in document.data.body")
       template(v-if="slice.slice_type=='encabezado_principal_con_texto'")
          Header(:content="slice")
       template(v-if="slice.slice_type=='imagen_informativa'")
          MapGalleryInformation(:content="slice")
       template(v-if="slice.slice_type=='itinerario'")
         TrackingInformation(:content="slice")
       template(v-if="slice.slice_type=='servicios'")
         Services(:content="slice")


</template>

<script>

import Header from '~/components/prismic/page/Header'
import MapGalleryInformation from '~/components/prismic/page/MapGalleryInformation'
import TrackingInformation from '~/components/prismic/page/TrackingInformation'
import Services from '~/components/prismic/page/Services'

export default {
  async asyncData({ app, error, params }) {
    let document = await app.$prismic.api.getByUID('contenido', params.slug, { lang : 'en-gb' })

    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  components: {
    Header,
    MapGalleryInformation,
    TrackingInformation,
    Services
  }
}
</script>

<style lang="css">
</style>
