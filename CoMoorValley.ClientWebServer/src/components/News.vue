<template>
  <div>
    <page-header :title="title"></page-header>
    
    <section class="section">
      <div class="content">
        News here
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from './utils/PageHeader'

export default {
  name: 'news',
  components: {
    'page-header': PageHeader
  },
  data () {
    return {
      title: 'News and Notices',
      subtitle: 'Insert picture as background'
    }
  }
}
</script>

<style scoped>
</style>
