<template>
  <div>
    <page-header :title="title"></page-header>

    <section class="section">
      <div class="tile is-ancestor grid">

        <div v-for="(item, i) in newsItems" :key="i" class="tile is-parent is-6">
          <article class="tile is-child box">
            <p class="subtitle"><b>{{item.title}}</b></p>
            <p>{{item.date}}</p>
            <p v-if="item.location != null">{{item.location}}</p>
            <br/>
            <div class="content">
              <p>{{item.content}}</p>
              <a v-if="item.src " class="button is-dark center-child" :href="item.src" download>
                Download Document
              </a>
            </div>
          </article>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import { newsPage } from '../../static/pageContent/news.js'

export default {
  name: 'news',
  components: {
    'page-header': PageHeader
  },
  data () {
    return newsPage
  }
}
</script>

<style scoped>
</style>
