<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    'nav-bar': NavBar
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
