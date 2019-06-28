<template lang="pug">

 section.uk-section.uk-section-large.uk-background-cover(uk-img, v-if='content.primary', :data-src="$prismic.asLink(content.primary.seccion_background)")
  div.uk-flex.uk-flex-middle(uk-grid)
    div(class="uk-width-2-5@s")
      div
        div.say-padding-left-container
          div.uk-container
            p.head.uk-margin-remove {{ $prismic.asText(content.primary.seccion_subtitulo) }}
            h2.uk-margin-remove-top {{ $prismic.asText(content.primary.seccion_encabezado) }}
            p.desc(class="uk-width-large@s") {{ $prismic.asText(content.primary.seccion_contenido) }}
            nuxt-link.dark-button(:to="$prismic.asLink(content.primary.seccion_link)") {{ $prismic.asText(content.primary.seccion_link_texto) }} #[span.uk-margin-small-left(uk-icon="minus")]

    div(class="uk-width-3-5@s")
      div
        .uk-position-relative.uk-visible-toggle.uk-light(uk-slider="autoplay: true; autoplay-interval: 1500", tabindex="-1")
          ul.uk-slider-items.uk-grid.uk-child-width-1-2
            li(v-for="(item,index) in content.items", :key="'slider-image-gallery-' + index")
              img(:src="$prismic.asLink(item.seccion_slider_imagen)")
              .uk-margin.uk-text-center.bottom-text-image
                p.uk-margin-remove.title {{ $prismic.asText(item.seccion_slider_titulo) }}
                p.uk-margin-remove.title {{ $prismic.asText(item.seccion_slider_subtitulo) }}

          .uk-text-center
            a.dark-button.uk-display-inline-block.uk-position-small(href="#", uk-slider-item="previous") #[span.uk-icon(uk-icon="arrow-left")]
            a.dark-button.uk-display-inline-block.uk-position-small(href="#", uk-slider-item="next") #[span.uk-icon(uk-icon="arrow-right")]

</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="css">
</style>
