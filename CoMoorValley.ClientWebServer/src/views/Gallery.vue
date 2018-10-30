<template>
  <div>
    <page-header :title="title"></page-header>

    <section class="section">
      <section class="vertical-alignment">
        <h2 class="subtitle colored">
          {{subtitle}}
        </h2>
      </section>
      <div class="content grid">

        <div class="card cell" v-for="(image, i) in images" :key="i">
          <div>
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
import { galleryPage } from '../../static/pageContent/gallery.js'

export default {
  name: 'gallery',
  components: {
    'gallery-slideshow': VueGallerySlideshow,
    'page-header': PageHeader
  },
  data () {
    return galleryPage
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
  width: 120px;
  height: 120px;
  color: var(--green-custom);
  background-color: var(--off-white-custom);
}

.vertical-alignment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10px;
}

.colored {
  color: var(--green-custom)
}
</style>
