<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="modal" :class="{'is-active': currentModalInfo.isActive}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{currentModalInfo.title}}</p>
          <button class="delete" aria-label="close" @click="disableModal()"></button>
        </header>
        <section class="modal-card-body">
          <p>Hours worked: {{parseFloat(Math.round(currentModalInfo.currentHours * 100) / 100).toFixed(2)}}</p>
          <p>Amount Earned ($): {{parseFloat(Math.round(currentModalInfo.currentHours * currentModalInfo.currentPayRate * 100) / 100).toFixed(2)}}</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="disableModal()">Okay</button>
          <button class="button" @click="disableModal()">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
    'nav-bar': NavBar
  },
  methods: {
    ...mapActions([
      'getNotifications',
      'disableModal'
    ])
  },
  computed: {
    ...mapGetters([
      'currentModalInfo'
    ])
  },
  mounted: function () {
    const that = this
    setInterval(function () {
      that.getNotifications()
    }, 30000)
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
.opaque-white {
  background-color: rgba(255, 255, 255, 0.90);
  margin: 10px;
}

.fade-enter-active {
  animation: fade-in 0.5s ease-out forwards;
  overflow-y: hidden;
}
.fade-leave-active {
  transition: opacity 0.5s ease;
  opacity: 0;
  animation: fade-out 0.5s ease-out forwards;
  overflow-y: hidden;
}
.fade-leave {
  opacity: 1;
  transform: translateX(0);
  overflow-y: hidden;
}
.fade-move {
  overflow-y: hidden;
}
@keyframes fade-in {
  0% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes fade-out {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(30px);
  }
}
</style>
