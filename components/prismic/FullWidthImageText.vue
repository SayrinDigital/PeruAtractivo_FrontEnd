<template lang="pug">

  section.uk-position-relative.uk-background-cover(:data-src="$prismic.asLink(content.primary.fondo)", uk-img, uk-parallax="bgy: -200")
    div
      .uk-section.uk-position-relative
        .uk-container.uk-text-center(v-if="content.primary")
          img(:src="$prismic.asLink(content.primary.icono)")
          h2.light.uk-margin-auto(class="uk-width-large@m") {{ $prismic.asText(content.primary.titulo) }}
          p.desc.light.uk-margin-auto(class="uk-width-large@m") {{ $prismic.asText(content.primary.contenido) }}
          .uk-margin(v-if="$prismic.asLink(content.primary.link)")
            a.light-button.uk-display-inline-block(v-if="content.primary.link.link_type == 'Web'", :href="$prismic.asLink(content.primary.link)", target="_blank") {{ $prismic.asText(content.primary.link_texto) }} #[span.uk-icon(uk-icon="minus") ]
            nuxt-link.light-button.uk-display-inline-block(:to="$prismic.asLink(content.primary.link)", v-else) {{ $prismic.asText(content.primary.link_texto) }} #[span.uk-icon(uk-icon="minus") ]
        .uk-height-medium
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="css">
</style>
