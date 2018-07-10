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
          src: './../assets/001.png',
          title: 'Kitty 2'
        },
        {
          src: './../assets/002.jng',
          title: 'Kitty 3'
        },
        {
          src: './../assets/003.png',
          title: 'Kitty 4'
        },
        {
          src: './../assets/004.jng',
          title: 'Kitty 5'
        },
        {
          src: './../assets/005.jng',
          title: 'Kitty 5'
        },
        {
          src: './../assets/006.jng',
          title: 'Kitty 5'
        },
        {
          src: './../assets/007.jng',
          title: 'Kitty 5'
        },
        {
          src: './../assets/008.jng',
          title: 'Kitty 5'
        },
        {
          src: './../assets/009.jng',
          title: 'Kitty 5'
        },
        {
          src: './../assets/010.jng',
          title: 'Kitty 5'
        },
        {
          src: './../assets/011.jng',
          title: 'Kitty 5'
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

.grid {
  display: flex;
  flex-wrap: wrap;
}

.cell {
  width: 20%;
  color: var(--green-custom);
  background-color: var(--off-white-custom);
}
</style>
