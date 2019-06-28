<template lang="pug">

  section.uk-position-relative.uk-background-cover(:data-src="$prismic.asLink(content.primary.fondo)", uk-img, uk-parallax="bgy: -200")
    div
      .uk-section.uk-section-large.uk-position-relative
        .uk-container.uk-text-center
          img(:src="$prismic.asLink(content.primary.icono)")
          h2.light.uk-margin-auto(class="uk-width-large@m") {{ $prismic.asText(content.primary.titulo) }}
          p.desc.light.uk-margin-auto(class="uk-width-large@m") {{ $prismic.asText(content.primary.contenido) }}
          .uk-margin
            nuxt-link.light-button.uk-display-inline-block(:to="$prismic.asLink(content.primary.link)") {{ $prismic.asText(content.primary.link_texto) }} #[span.uk-icon(uk-icon="minus") ]
        .uk-height-medium
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="css">
</style>
