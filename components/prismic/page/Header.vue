<template lang="pug">

  .uk-background-cover.uk-position-relative.fix-position-nav(uk-img, :data-src="$prismic.asLink(content.primary.cover)")
    .fill-nav
    .uk-position-cover.overlay
    .uk-position-relative.uk-section
      .uk-container.uk-text-center
        p.light.head {{ $prismic.asText(content.primary.subtitulo) }}
        h1(class="uk-width-xlarge@m").uk-margin-auto.uk-margin-remove-top.light.main-heading {{ $prismic.asText(content.primary.titulo) }}
        p(class="uk-width-large@m").desc.light.uk-margin-auto {{ $prismic.asText(content.primary.descripcion) }}

</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="css" scoped>
</style>
