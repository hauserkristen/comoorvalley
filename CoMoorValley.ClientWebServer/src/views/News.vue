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

export default {
  name: 'news',
  components: {
    'page-header': PageHeader
  },
  data () {
    return {
      title: 'News and Events',
      newsItems: [
        {
          title: 'Board Meeting',
          date: 'July 27, 2018 at 6:00 PM',
          location: 'Office',
          content: 'Board meeting to discuss upcoming events and budget.',
          src: ''
        },
        {
          title: 'July 4th Fireworks',
          date: 'July 4, 2018 at sundown',
          location: 'Foltz Field',
          content: 'Come attend the 2nd best fireworks show in the Cleveland area right here in Strongsville!',
          src: ''
        },
        {
          title: 'Board Meeting',
          date: 'May 16, 2018 at 6:00 PM',
          location: 'Office',
          content: 'Board meeting to discuss upcoming events and budget.',
          src: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
