<template>
  <div>
    <page-header :title="title"></page-header>

    <section class="section">
      <div class="tile is-ancestor grid">

        <div v-for="(item, i) in newsItems" :key="i" class="tile is-parent is-6">
          <article class="tile is-child box">
            <p class="subtitle"><b>{{item.title}}</b></p>
            <p>{{item.date}}</p>
            <p>{{item.location}}</p>
            <br/>
            <div class="content">
              <p>{{item.content}}</p>
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
