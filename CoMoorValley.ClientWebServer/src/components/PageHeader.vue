<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered has-text-primary">
          {{ title }}
        </h1>
      </div>
    </div>

    <div class="hero-foot" v-if="tabData.length > 0">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li :class="{'is-active': isActiveTab(tab.name)}" v-for="tab in tabData" :key="tab.name">
                <a v-on:click="tabClicked(tab.name)">
                  <span class="icon is-small">
                    <font-awesome-icon :icon="tab.icon" />
                  </span>
                  <span>{{ tab.name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  </section>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'page-header',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    isActiveTab: {
      type: Function,
      required: false
    },
    tabClicked: {
      type: Function,
      required: false
    },
    tabData: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style scoped>
</style>
