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

export default {
  name: 'info',
  components: {
    'page-header': PageHeader
  },
  data () {
    return {
      title: 'Information',
      subtitle: 'Insert picture as background',
      tabs: [
        {
          name: 'Governing Documents',
          icon: 'file',
          isDownload: true,
          info: {
            'By-Laws': 'Description of document they are downloading goes here.',
            'Convenants': 'Description of document they are downloading goes here.',
            'Rules and Regulations': 'Description of document they are downloading goes here.',
            'Antennae': 'Description of document they are downloading goes here.',
            'Sandy\'s Page': 'Description of document they are downloading goes here.'
          }
        }, {
          name: 'Forms',
          icon: 'check-square',
          isDownload: true,
          info: {
            'Landscape Change Request': 'Description of document they are downloading goes here.',
            'Antennae Installation': 'Description of document they are downloading goes here.'
          }
        }, {
          name: 'Important Numbers',
          icon: 'address-card',
          isDownload: false,
          info: {
            'President': '(123)-456-7890',
            'Vice President': '(123)-456-7890',
            'Schili': '(123)-456-7890',
            'City of Cleveland': '(123)-456-7890'
          }
        }, {
          name: 'General Information',
          icon: 'info',
          isDownload: false,
          info: {
            'Dues': 'Info on dues...',
            'Pool': 'Info on pool...',
            'Garbage': 'Info on garbage...'
          }
        }
      ],
      navTab: 'Governing Documents'
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
