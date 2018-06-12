<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/utils/NavBar'

export default {
  name: 'app',
  components: {
    'navbar': NavBar
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
 .hero.is-info {
    background: url('./assets/Home_Background.jpg');
    background-repeat:no-repeat;
    background-position-x: center;
    background-position-x: center;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
