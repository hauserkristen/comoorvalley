<template>
  <div>
    <page-header
      :title="title"
      :tabData="tabs"
      :isActiveTab="isActiveTab"
      :tabClicked="tabClicked">
    </page-header>

    <section class="section">
      <div class="columns">
        <div class="column is-full-width center-parent">
          <table class="table is-bordered is-striped center-child">
            <tbody>
              <tr v-for="(value, key) in tabData.info" :key="key">
                <td v-if="tabData.isDownload">
                  <div class="center-parent">
                    <button class="button is-dark center-child">
                      {{key}}
                    </button>
                  </div>
                </td>
                <td v-else>
                  <div class="center-parent">
                    <p class="center-child">{{key}}</p>
                  </div>
                </td>
                <td>
                  <div class="center-parent">
                    <p class="center-child">{{value}}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import { getInfoPage } from '../api.js'

export default {
  name: 'info',
  components: {
    'page-header': PageHeader
  },
  data () {
    return {
      title: '',
      tabs: [],
      navTab: ''
    }
  },
  computed: {
    tabData () {
      let tabName = this.navTab
      let index = this.tabs.findIndex(x => x.name === tabName)
      return this.tabs[index]
    }
  },
  methods: {
    isActiveTab: function (tab) {
      return this.navTab === tab
    }, // Check if the tab is active on
    tabClicked: function (tab) {
      this.navTab = tab
    } // When the user clicks on the tab, what needs to be done
  },
  mounted: function () {
    let infoData = getInfoPage()

    this.data.title = infoData.title
    this.data.tabs = infoData.tabs
    this.navTab = infoData.tabs[0].name
  }
}
</script>

<style scoped>
.center-parent {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.center-child {
  align-self: center;
}
</style>
