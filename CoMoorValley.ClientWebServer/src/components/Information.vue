<template>
  <div>
    <!--Hero Banner-->
    <section class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            {{ title }}
          </p>
          <p class="subtitle">
            {{ subtitle }}
          </p>
        </div>
      </div>

      <!--We start from leadership and make that tab active, once the users start clicking-->
      <!--the tab, we change the value of navTeam which changes the users list-->
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li :class="{'is-active': activeTab(tabNav.tab)}" v-for="tabNav in tabNavs" :key="tabNav.tab">
                <a v-on:click="tabClicked(tabNav.tab)">
                  <span class="icon is-small">
                    <font-awesome-icon :icon="tabNav.icon" />
                  </span>
                  <span>{{ tabNav.tab }}</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    
    <section class="section">
      <div class="columns">
        <div class="column is-full-width center-parent">
          <table class="table is-bordered is-striped center-child">
            <tbody>
              <tr v-for="(value, key) in navTabData.info" :key="key">
                <td v-if="navTabData.isDownload">
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
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faFile from '@fortawesome/fontawesome-free-solid/faFile'
import faAddressCard from '@fortawesome/fontawesome-free-solid/faAddressCard'
import faInfo from '@fortawesome/fontawesome-free-solid/faInfo'
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'

export default {
  name: 'info',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  data () {
    return {
      title: 'Documents',
      subtitle: 'Insert picture as background',
      tabNavs: [
        {
          tab: 'Governing Documents',
          icon: faFile,
          isDownload: true,
          info: {
            'By-Laws': 'Description of document they are downloading goes here.',
            'Convenants': 'Description of document they are downloading goes here.',
            'Rules and Regulations': 'Description of document they are downloading goes here.',
            'Antennae': 'Description of document they are downloading goes here.',
            'Sandy\'s Page': 'Description of document they are downloading goes here.'
          }
        }, {
          tab: 'Forms',
          icon: faCheckSquare,
          isDownload: true,
          info: {
            'Landscape Change Request': 'Description of document they are downloading goes here.',
            'Antennae Installation': 'Description of document they are downloading goes here.'
          }
        }, {
          tab: 'Important Numbers',
          icon: faAddressCard,
          isDownload: false,
          info: {
            'President': '(123)-456-7890',
            'Vice President': '(123)-456-7890',
            'Schili': '(123)-456-7890',
            'City of Cleveland': '(123)-456-7890'
          }
        }, {
          tab: 'General Information',
          icon: faInfo,
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
    navTabData () {
      let tabName = this.navTab
      let index = this.tabNavs.findIndex(x => x.tab === tabName)
      return this.tabNavs[index]
    }
  },
  methods: {
    activeTab: function (tab) {
      return this.navTab === tab
    }, // Check if the tab is active on
    tabClicked: function (tab) {
      this.navTab = tab
      return
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