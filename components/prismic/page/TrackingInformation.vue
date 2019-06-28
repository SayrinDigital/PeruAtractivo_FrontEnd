<template lang="pug">

 section.uk-section.uk-section-large
   .uk-container.uk-container-small.tour-container.uk-position-relative
     h2.uk-text-center {{ $prismic.asText(content.primary.titulo) }}
     p.desc.uk-margin-large-bottom.uk-margin-auto.uk-text-center(class="uk-width-medium@m") {{ $prismic.asText(content.primary.descripcion) }}

     .uk-position-relative
      .uk-grid-medium(class="uk-child-width-1-2@m", uk-grid="masonry: true")
        div(v-for="item in content.items")
         .day-container.uk-card.uk-card-body
           //div {{ $prismic.asHtml(item.contenido) }}
           div(v-html="$prismic.asHtml(item.contenido)")
      hr.divider
</template>

<script>
export default {
  props: ['content']
}
</script>
