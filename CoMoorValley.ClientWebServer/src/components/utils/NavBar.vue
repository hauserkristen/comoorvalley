<template>
  <div>
    <nav 
      id="navbar" 
      class="navbar is-fixed-top is-dark">

      <!--Logo and burger menu options-->
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img :src="coMoorLogo"
            alt="Co-Moor Valley"
            width="28"
            height="28">
        </router-link>
        
        <!--workflow on the burger menu when clicked-->
        <div v-on:click="active = !active" 
          :class = "{'is-active': active }" 
          class="navbar-burger burger"
          data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <!--Navbar Options-->
      <div :class="{'is-active': active }" class="navbar-menu">

        <!--Right portion of Navbar-->
        <div class="navbar-end">

          <!--Main Options-->
          <router-link v-for="navItem in navItems" 
            :key="navItem.item" 
            class="navbar-item"
            :to="navItem.route">
            {{ navItem.item }}
          </router-link>

        </div> <!--Right NavBar ends-->

      </div> <!--NavBar Items ends-->
    </nav> <!--NavBar ends-->
  </div>
</template>

<script>
import logo from './../../assets/logo.png'
export default {
  data () {
    return {
      active: false,
      coMoorLogo: logo,
      navItems: [{
        'item': 'Home',
        'route': '/'
      }, {
        'item': 'Information',
        'route': '/info'
      }, {
        'item': 'News',
        'route': '/news'
      }, {
        'item': 'Gallery',
        'route': '/gallery'
      }, {
        'item': 'About Us',
        'route': '/about'
      }, {
        'item': 'Contact Us',
        'route': '/contact'
      }]
    }
  }
}
</script>

<style scoped>

</style>
