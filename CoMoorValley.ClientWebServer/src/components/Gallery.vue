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
      
        <div class="card" v-for="(image, i) in images" :key="i">
          <div class="card-content">
            <img class="image"  :src="image.src" @click="onClick(i)">
            <p class="subtitle">
              {{image.title}}
            </p>
          </div>
        </div>
        
        <gallery-slideshow :images="imageSources" :index="index" @close="index = null"></gallery-slideshow>
      </div>
    </section>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'

export default {
  name: 'gallery',
  components: {
    'gallery-slideshow': VueGallerySlideshow
  },
  data () {
    return {
      title: 'Photo Gallery',
      subtitle: 'Insert picture as background',
      images: [
        {
          src: 'https://placekitten.com/801/800',
          title: 'Kitty 1'
        },
        {
          src: 'https://placekitten.com/802/800',
          title: 'Kitty 2'
        },
        {
          src: 'https://placekitten.com/803/800',
          title: 'Kitty 3'
        },
        {
          src: 'https://placekitten.com/804/800',
          title: 'Kitty 4'
        },
        {
          src: 'https://placekitten.com/805/800',
          title: 'Kitty 5'
        },
        {
          src: 'https://placekitten.com/806/800',
          title: 'Kitty 6'
        },
        {
          src: 'https://placekitten.com/807/800',
          title: 'Kitty 7'
        },
        {
          src: 'https://placekitten.com/808/800',
          title: 'Kitty 8'
        },
        {
          src: 'https://placekitten.com/809/800',
          title: 'Kitty 9'
        },
        {
          src: 'https://placekitten.com/810/800',
          title: 'Kitty 10'
        }
      ],
      index: null
    }
  },
  computed: {
    imageSources () {
      return this.images.map(x => x.src)
    }
  },
  methods: {
    onClick (i) {
      this.index = i
      return
    }
  }
}
</script>

<style scoped>
.image {
  width: 100px;
  height: 100px;
  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}
</style>
