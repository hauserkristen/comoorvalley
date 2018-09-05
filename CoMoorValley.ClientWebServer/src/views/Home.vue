<template>
  <div>
    <section class="hero is-fullheight home-background">

      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-8 is-offset-2 opaque-brown">
            <img :src="coMoorLogo" width="300" height="300"
              alt="Co-Moor Valley Condo Association">
            <h2 class="subtitle has-text-warning">
                {{ subtitle }}
            </h2>
          </div>

        </div>
      </div>

    </section>
  </div>
</template>

<script>
import { getHomePage } from '../api.js'

export default {
  name: 'home',
  data () {
    return {
      coMoorLogo: '',
      subtitle: ''
    }
  },
  mounted: function () {
    let homeData = getHomePage()

    this.data.coMoorLogo = require(homeData.coMoorLogo)
    this.data.subtitle = homeData.subtitle
  }
}
</script>

<style scoped>

</style>
