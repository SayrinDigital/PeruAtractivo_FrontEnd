<template lang="pug">

  section.uk-background-cover(:data-src="$prismic.asLink(content.primary.fondo)", uk-img)
    .uk-section.uk-section-large
      .uk-container(v-if="content.primary")
        h2.uk-text-capitalize(class="uk-width-large@s") {{ $prismic.asText(content.primary.titulo) }}
        p.desc(class="uk-width-large@s") {{ $prismic.asText(content.primary.descripcion) }}
        .uk-position-relative.uk-margin-top.uk-visible-toggle(uk-slider="autoplay: true; autoplay-interval: 1500")
          ul.uk-slider-items.uk-grid(class="uk-child-width-1-3@m uk-child-width-1-2@s")
            li(v-for="(item, index) in content.items", :key="'gallery-header-container-' + index")
              nuxt-link.uk-display-inline-block(:to="$prismic.asLink(item.link)", v-if='$prismic.asLink(content.primary.seccion_link)')
                img(:src="$prismic.asLink(item.imagen)")
                .uk-margin.uk-text-center.bottom-text-image
                  p.uk-margin-remove.title {{ $prismic.asText(item.titulo) }}
                  p.uk-margin-remove.sub {{ $prismic.asText(item.imagen_subtitulo) }}
          .uk-text-center
            a.dark-button.uk-display-inline-block.uk-position-small(href="#", uk-slider-item="previous") #[span.uk-icon(uk-icon="arrow-left")]
            a.dark-button.uk-display-inline-block.uk-position-small(href="#", uk-slider-item="next") #[span.uk-icon(uk-icon="arrow-right")]


</template>

<script>
export default {

  props: ['content']

}
</script>
