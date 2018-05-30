<template>
  <div>
    <section class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            {{ title }}
          </h1>
          <h2 class="subtitle has-text-centered">
            {{ subtitle }}
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="content">
        Photos here
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      title: 'Photo Gallery',
      subtitle: 'Insert picture as background'
    }
  }
}
</script>

<style scoped>
</style>
