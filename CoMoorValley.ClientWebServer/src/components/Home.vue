<template>
  <div>
    <section class="hero is-fullheight is-info">

      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-8 is-offset-2">
            <img :src="coMoorLogo"
              alt="Co-Moor Valley Condo Association">
            <h2 class="subtitle">
                {{ subtitle }}
            </h2>
          </div>

        </div>
      </div>

    </section>
  </div>
</template>

<script>
import logoText from './../assets/logo_text.png'

export default {
  name: 'home',
  data () {
    return {
      coMoorLogo: logoText,
      subtitle: 'Where the convenience of the city meets the beauty of the woods.'
    }
  }
}
</script>

<style scoped>
</style>