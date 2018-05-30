<template>
  <div>
    <section class="hero is-info is-fullheight">

      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-8 is-offset-2">
            <h1 class="title white">
                {{ title }}
            </h1>
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
  export default {
    name: 'home',
    data () {
      return {
        'title': 'Co-Moor Valley Condo Association',
        'subtitle': 'Where the convience of the city meets the beauty of the woods.'
      }
    }
  }
</script>

<style scoped>
  .hero.is-info {
    background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url('https://unsplash.it/1200/900?random') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>