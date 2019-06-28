<template>
  <div>
    <no-ssr>
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <Navigator></Navigator>
      </div>
    </no-ssr>

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
