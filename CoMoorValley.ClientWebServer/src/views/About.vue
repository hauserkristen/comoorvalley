<template>
  <div>
    <page-header :title="title"></page-header>

    <section class="section">
      <div v-for="(row, i) in infoRows" :key="i">
        <div v-if="row.justification == 'right'" class="tile is-ancestor">
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <p class="subtitle"><b>{{row.title}}</b></p>
              <div class="content">
                <p>{{row.content}}</p>
              </div>
            </article>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child box">
              <img :src="row.src" width="300" height="300" >
            </article>
          </div>
        </div>

        <div v-else class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img :src="row.src" width="300" height="300" >
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <p class="subtitle"><b>{{row.title}}</b></p>
              <div class="content">
                <p>{{row.content}}</p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="subtitle"><b>{{boardMemberRow.title}}</b></p>
            <div class="content">
              <p>{{boardMemberRow.content}}</p>

              <div class="content grid">
                <board-member v-for="(member, i) in boardMemberRow.members"
                  :key="i"
                  :title="member.title"
                  :name="member.name"
                  :description="member.description"
                  :src="member.src">
                </board-member>
              </div>

            </div>
          </article>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import BoardMember from '../components/BoardMember'
import { aboutPage } from '../../static/about.js'

export default {
  name: 'about',
  components: {
    'page-header': PageHeader,
    'board-member': BoardMember
  },
  data () {
    return aboutPage
  }
}
</script>

<style>
</style>
