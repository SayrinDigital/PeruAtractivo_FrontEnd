<template lang="pug">

  div
    template(v-for="(slice,index) in document.data.page_content")
      template(v-if="slice.slice_type=='encabezado_principal'")
         Header(:content="slice")
      template(v-if="slice.slice_type=='imagen_informativa'")
         SectionImageContent(:content="slice")
      template(v-if="slice.slice_type=='grupo_de_items'")
         ItemsGroup(:content="slice")
      template(v-if="slice.slice_type=='full_width_image'")
         FullWidthImage(:content="slice")


</template>

<script>

import Header from '~/components/prismic/page/Header'
import ItemsGroup from '~/components/prismic/page/ItemsGroup'
import SectionImageContent from '~/components/prismic/SectionImageContent'
import FullWidthImage from '~/components/prismic/page/FullWidthImage'


export default {
  async asyncData({ app, error, params }) {
    let document = await app.$prismic.api.getByUID('pagina', params.slug, { lang : 'es-es' })

    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  components: {
    Header,
    SectionImageContent,
    ItemsGroup,
    FullWidthImage
  }
}
</script>

<style lang="css">
</style>
