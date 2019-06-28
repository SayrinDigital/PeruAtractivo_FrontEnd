<template lang="pug">

  section.uk-section.uk-section-large(v-if="content.primary")
    .uk-flex.uk-flex-middle(uk-grid)
      div(class="uk-width-2-5@s")
        div
          div(v-bind:class="{ 'say-padding-left-container' : content.primary.seccion_alineacion == 'derecha' }")
            .uk-container
                p.head.uk-margin-remove {{ $prismic.asText(content.primary.seccion_subtitulo) }}
                h2.uk-margin-remove-top(class="uk-width-large@s") {{ $prismic.asText(content.primary.seccion_encabezado) }}
                p.desc(class="uk-width-large@s") {{ $prismic.asText(content.primary.seccion_contenido) }}
                nuxt-link.dark-button(:to="$prismic.asLink(content.primary.seccion_link)", v-if="$prismic.asLink(content.primary.seccion_link)") {{ $prismic.asText(content.primary.seccion_link_texto) }} #[span.uk-margin-small-left(uk-icon="minus")]
      div(class="uk-width-3-5@s", v-bind:class="{ 'uk-flex-first' : content.primary.seccion_alineacion == 'izquierda' }")
        div
          img.uk-width-1-1(:src="$prismic.asLink(content.primary.seccion_imagen)")

</template>

<script>

  export default{
    props: ['content']
  }

</script>
