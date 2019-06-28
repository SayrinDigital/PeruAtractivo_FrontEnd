<template lang="pug">

  section.uk-section
    .uk-container
      h2.uk-text-capitalize(class="uk-width-large@s") {{ $prismic.asText(content.primary.titulo) }}
      p.desc(class="uk-width-large@s") {{ $prismic.asText(content.primary.descripcion) }}
      .uk-margin-top(class="uk-child-width-1-3@m", uk-grid)
       div(v-if="$prismic.asLink(item.link)", v-for="item in content.items")
        div
          nuxt-link.uk-display-block( :to="$prismic.asLink(item.link)")
            img(v-if="item.cover", :src="$prismic.asLink(item.cover)")
          .uk-margin-top
           h4.uk-text-capitalize.uk-margin-remove {{ $prismic.asText(item.titulo) }}
           p.uk-margin-remove.desc {{ $prismic.asText(item.descripcion) }}


</template>

<script>
export default {
  props: ['content']
}
</script>
