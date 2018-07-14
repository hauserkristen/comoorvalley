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

                <div v-for="(member, i) in boardMembers" :key="i" class="card cell">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img :src="member.src" alt="No image available.">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">{{member.name}}</p>
                        <p class="subtitle is-6">{{member.title}}</p>
                      </div>
                    </div>

                    <div class="content">
                      {{member.description}}
                    </div>
                  </div>
                </div>

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

export default {
  name: 'about',
  components: {
    'page-header': PageHeader
  },
  data () {
    return {
      title: 'About',
      rowOnePhoto: photo1,
      rowTwoPhoto: photo2,
      introContent: "Content topics here: Offerings such as pool, fitness center, etc? City info.",
      historyContent: "Content topics here: When was it founded? Home many homes? Different types? Difference from CoMoor?",
      memberContent: "Content topics here: Intro to how many board members, positions and general idea of what they do.",
      boardMembers: [
        {
          name: "John Smith",
          title: "President",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          src: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
          name: "Jane Smith",
          title: "Board Member",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          src: "https://bulma.io/images/placeholders/1280x960.png"
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

.cell {
  width: 33%;
  color: var(--green-custom);
  background-color: var(--off-white-custom);
  margin: 5px;
}
</style>
