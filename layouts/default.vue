<template>
  <div>
     <Navigator></Navigator>
    <nuxt />
    <Footer></Footer>
      <div class="preloader uk-position-cover uk-position-fixed"></div>
  </div>
</template>

<script>

import Navigator from '~/components/mainui/Navigator'
import Footer from '~/components/mainui/Footer'

  export default{
    components: {
      Footer,
      Navigator
    }
  }
</script>
