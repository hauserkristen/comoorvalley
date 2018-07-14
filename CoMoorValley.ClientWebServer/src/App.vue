<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    'navbar': NavBar
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
 :root {
  --green-custom: rgb(52,71,0);
  --light-green-custom:rgb(171,186,125);
  --off-white-custom:rgb(248,247,247);
  --light-brown-custom:rgb(201,188,171);
  --brown-custom: rgb(131,111,93);

  --opacity: 0.8;
  --gree-custom-opaque: rgba(52,71,0,var(--opacity));
  --light-green-custom-opaque: rgba(171,186,125,var(--opacity));
  --off-white-custom-opaque: rgba(248,247,247,var(--opacity));
  --light-brown-custom-opaque: rgba(201,188,171,var(--opacity));
  --brown-custom-opaque: rgba(131,111,93,var(--opacity));
 }

 .home-background {
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

 .opaque-brown {
    background: var(--brown-custom-opaque);
    border-radius: 10px;
 }

 body, html {
   background-color: var(--off-white-custom);
   color: var(--brown-custom);
   height: 100%;
   width: 100%;
 }

.grid {
  display: flex;
  flex-wrap: wrap;
}
</style>
