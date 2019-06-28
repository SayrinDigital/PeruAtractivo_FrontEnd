<template lang="pug">

  section.uk-section
    p {{ content }}
    .uk-container.uk-container-small
      h2 {{ $prismic.asText(content.primary.titulo) }}
      p.desc.uk-margin-auto.uk-margin-large-bottom.uk-text-center(class="uk-width-medium@m") {{ $prismic.asText(content.primary.descripcion) }}
      div(class="uk-child-width-1-2@m", uk-grid)
       div
         .container-services.uk-card.uk-card-body
           h3 Incluye
           ul.uk-list.list-of-services
             li #[fa.uk-margin-small-right(:icon="['fas', 'map']")] Guide
       div
         .container-services.uk-card.uk-card-body
          h3 No Incluye
          ul.uk-list.list-of-services
            li #[fa.uk-margin-small-right(:icon="['fas', 'map']")] Guide
      .uk-margin-large-top.uk-text-center
        a.dark-button.uk-display-inline-block #[span.uk-margin-small-right(uk-icon="plus")] Favoritos


</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  props: ['content'],
  computed: {
    fas () {
         return fas
      }
  },
}
</script>
