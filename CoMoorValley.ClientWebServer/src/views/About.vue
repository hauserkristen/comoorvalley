<template>
  <div>
    <page-header :title="title"></page-header>

    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-8">
          <article class="tile is-child box">
            <p class="subtitle"><b>About CoMoor Valley</b></p>
            <div class="content">
              <p>{{introContent}}</p>
            </div>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box">
            <img :src="rowOnePhoto" width="300" height="300" >
          </article>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <img :src="rowTwoPhoto" width="300" height="300" >
          </article>
        </div>
        <div class="tile is-parent is-8">
          <article class="tile is-child box">
            <p class="subtitle"><b>History</b></p>
            <div class="content">
              <p>{{historyContent}}</p>
            </div>
          </article>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="subtitle"><b>Board of Directors</b></p>
            <div class="content">
              <p>{{memberContent}}</p>

              <div class="content grid">
                <board-member v-for="(member, i) in boardMembers"
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
import photo1 from '../assets/019.jpg'
import photo2 from '../assets/060.jpg'
import BoardMember from '../components/BoardMember'

export default {
  name: 'about',
  components: {
    'page-header': PageHeader,
    'board-member': BoardMember
  },
  data () {
    return {
      title: 'About',
      rowOnePhoto: photo1,
      rowTwoPhoto: photo2,
      introContent: 'Content topics here: Offerings such as pool, fitness center, etc? City info.',
      historyContent: 'Content topics here: When was it founded? Home many homes? Different types? Difference from CoMoor?',
      memberContent: 'Content topics here: Intro to how many board members, positions and general idea of what they do.',
      boardMembers: [
        {
          name: 'John Smith',
          title: 'President',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
          src: 'https://bulma.io/images/placeholders/1280x960.png'
        },
        {
          name: 'Jane Smith',
          title: 'Board Member',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
          src: 'https://bulma.io/images/placeholders/1280x960.png'
        }
      ]
    }
  }
}
</script>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
}
</style>
