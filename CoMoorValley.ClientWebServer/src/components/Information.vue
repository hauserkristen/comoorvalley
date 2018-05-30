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
                    <i :class="tabNav.icon"></i>
                  </span>
                  <span>{{ tabNav.tab }}</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    
    <!--Meet my team cards-->
    <section class="section">
      <div class="columns">
        <div v-if="!navTabData.isTable" class="column">
          <div class="field" 
            v-for="tab in navTabData.info" 
            :key="tab">
            <button class="button is-dark">
              {{tab}}
            </button>
          </div>
        </div>
        <div v-else class="column">
          <table class="table is-bordered is-stribed">
            <tbody>
              <tr v-for="(value, key) in navTabData.info" :key="key">
                <td>{{key}}</td>
                <td>{{value}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'info',
    data () {
      return {
        title: 'Documents',
        subtitle: 'Insert picture as background',
        tabNavs: [
          {
            tab: 'Governing Documents',
            icon: 'fas fa-user',
            isTable: false,
            info: ['By-Laws', 'Convenants', 'Rules and Regulations', 'Antennae', 'Sandy\'s Page']
          }, {
            tab: 'Forms',
            icon: 'fas fa-users',
            isTable: false,
            info: ['Landscape Change Request', 'Antennae Installation']
          }, {
            tab: 'Important Numbers',
            icon: 'fas fa-street-view',
            isTable: true,
            info: {
              'President': '(123)-456-7890',
              'Vice President': '(123)-456-7890',
              'Schili': '(123)-456-7890',
              'City of Cleveland': '(123)-456-7890'
            }
          }, {
            tab: 'General Information',
            icon: 'fas fa-street-view',
            isTable: true,
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

<style>
</style>