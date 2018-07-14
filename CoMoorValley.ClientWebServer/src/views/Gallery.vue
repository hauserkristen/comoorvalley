<template>
  <div>
    <page-header :title="title"></page-header>

    <section>
      <div class="content grid">

        <div class="card cell" v-for="(image, i) in images" :key="i">
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
import PageHeader from '../components/PageHeader'

export default {
  name: 'gallery',
  components: {
    'gallery-slideshow': VueGallerySlideshow,
    'page-header': PageHeader
  },
  data () {
    return {
      title: 'Photo Gallery',
      images: [
        {
          src: require('./../assets/001.png'),
          title: ''
        },
        {
          src: require('./../assets/002.jpg'),
          title: ''
        },
        {
          src: require('./../assets/004.jpg'),
          title: ''
        },
        {
          src: require('./../assets/005.jpg'),
          title: ''
        },
        {
          src: require('./../assets/006.jpg'),
          title: ''
        },
        {
          src: require('./../assets/007.jpg'),
          title: ''
        },
        {
          src: require('./../assets/008.jpg'),
          title: ''
        },
        {
          src: require('./../assets/009.jpg'),
          title: ''
        },
        {
          src: require('./../assets/010.jpg'),
          title: ''
        },
        {
          src: require('./../assets/011.jpg'),
          title: ''
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

.cell {
  width: 20%;
  color: var(--green-custom);
  background-color: var(--off-white-custom);
}
</style>
