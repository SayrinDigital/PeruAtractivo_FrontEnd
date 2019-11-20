<template lang="pug">

    div
        img.uk-width-1-1(:src="$prismic.asLink(content.primary.image)", uk-img)
  
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="css">
</style>
