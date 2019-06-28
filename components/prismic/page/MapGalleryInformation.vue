<template lang="pug">

  section.uk-section.uk-section-large.uk-position-relative.uk-background-cover(:data-src="$prismic.asLink(content.primary.cover)", uk-img)
    .ul-flex.uk-flex-middle(uk-grid)
      div(class="uk-width-2-5@m")
        div(v-bind:class="{ 'say-padding-left-container' : content.primary.seccion_alineacion == 'derecha' }")
          .uk-container
            p.head.uk-margin-remove {{ $prismic.asText(content.primary.seccion_subtitulo) }}
            h2.uk-margin-remove(class="uk-width-medium@s") {{ $prismic.asText(content.primary.seccion_encabezado) }}
            p.desc(class="uk-width-medium@m") {{ $prismic.asText(content.primary.seccion_contenido) }}

      div(class="uk-width-3-5@m", v-bind:class="{ 'uk-flex-first' : content.primary.seccion_alineacion == 'izquierda' }")
        ul(uk-tab="animation: uk-animation-fade")
          li
            a(href="#") Galería
          li
            a(href="#") Mapa
        ul.uk-switcher.uk-margin
          li
            .uk-position-relative.uk-visible-toggle.uk-light(tabindex="-1", uk-slideshow="min-height: 440")
              ul.uk-slideshow-items
                li(v-for="img in content.items")
                  img(:src="$prismic.asLink(img.galeria)", uk-cover)
              .uk-text-center
                a.dark-button.uk-display-inline-block.uk-position-small(href="#", uk-slideshow-item="previous") #[span.uk-icon(uk-icon="arrow-left")]
                a.dark-button.uk-display-inline-block.uk-position-small(href="#", uk-slideshow-item="next") #[span.uk-icon(uk-icon="arrow-right")]
          li
            iframe.map-iframe(:src="content.primary.mapa_del_recorrido.embed_url")



</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="css" scoped>
</style>
