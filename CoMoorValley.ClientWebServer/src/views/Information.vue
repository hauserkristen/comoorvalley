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
                    <a class="button is-dark center-child" :href="value.src" download>
                      {{key}}
                    </a>
                  </div>
                </td>
                <td v-else>
                  <div class="center-parent">
                    <p class="center-child">{{key}}</p>
                  </div>
                </td>

                <td v-if="tabData.isDownload">
                  <div class="center-parent">
                    <p class="center-child">{{value.content}}</p>
                  </div>
                </td>
                <td v-else>
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
import { infoPage } from '../../static/pageContent/info.js'

export default {
  name: 'info',
  components: {
    'page-header': PageHeader
  },
  data () {
    return infoPage
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
