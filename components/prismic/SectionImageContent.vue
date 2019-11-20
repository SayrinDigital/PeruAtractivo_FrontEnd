<template lang="pug">

  section.uk-section(v-if="content.primary")
    .uk-container
      .uk-flex.uk-flex-middle(uk-grid)
        div(class="uk-width-1-2@s")
          div
            div
              div(v-if="content.primary")
                  p.head.uk-margin-remove {{ $prismic.asText(content.primary.seccion_subtitulo) }}
                  h2.uk-margin-remove-top(class="uk-width-large@s") {{ $prismic.asText(content.primary.seccion_encabezado) }}
                  p.desc {{ $prismic.asText(content.primary.seccion_contenido) }}
                  nuxt-link.dark-button(:to="$prismic.asLink(content.primary.seccion_link)", v-if="$prismic.asLink(content.primary.seccion_link)") {{ $prismic.asText(content.primary.seccion_link_texto) }} #[span.uk-margin-small-left(uk-icon="minus")]
        div(class="uk-width-1-2@s", v-bind:class="{ 'uk-flex-first' : content.primary.seccion_alineacion == 'izquierda' }")
          div(uk-slider="autoplay: true; autoplay-interval: 1500")
            ul.uk-slider-items.uk-grid(class="uk-child-width-1-1")
              li(v-for="(item, index) in content.items", :key="'section-image-container-' + index")
                img.uk-width-1-1(:src="$prismic.asLink(item.image)")
            .uk-slider-nav.uk-dotnav.uk-flex-center.uk-margin

</template>

<script>

  export default{
    props: ['content']
  }

</script>
