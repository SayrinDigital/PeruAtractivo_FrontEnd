<template lang="pug">

  section.uk-section
    .uk-container
      h2.uk-text-capitalize(class="uk-text-center") {{ $prismic.asText(content.primary.titulo) }}
      p.desc(class="uk-text-center") {{ $prismic.asText(content.primary.descripcion) }}
      .uk-margin-top(class="uk-child-width-1-4@m", uk-grid)
       div( v-for="item in content.items")
        div.uk-text-center
          nuxt-link.uk-display-block( v-if="$prismic.asLink(item.link)", :to="$prismic.asLink(item.link)")
            img(v-if="item.cover", :src="$prismic.asLink(item.cover)")
          img(v-else, :src="$prismic.asLink(item.cover)")
          .uk-margin-top.uk-text-center
           h4.uk-text-capitalize.uk-margin-remove {{ $prismic.asText(item.titulo) }}
           p.uk-margin-remove.desc {{ $prismic.asText(item.descripcion) }}


</template>

<script>
export default {
  props: ['content']
}
</script>
