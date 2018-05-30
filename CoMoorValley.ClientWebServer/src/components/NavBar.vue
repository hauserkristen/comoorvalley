<template>
  <div>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Restaurant Services
          </h1>
        </div>
      </div>

      <div class="hero-foot">
        <div class="row-container">
          <button v-if="currentUserType === 'Manager'" class="button padded" @click="getAllEmployeeTypes()">Create New Employee</button>
          <button v-if="currentLogOutState" class="button padded" @click="employeeLogOut()">Log out</button>
          <button v-if="currentLogOutState" class="button padded" @click="employeeLockPage()">Lock Screen</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'nav-bar',
  computed: {
    ...mapGetters([
      'currentLogOutState',
      'currentUserType'
    ])
  },
  methods: {
    ...mapActions([
      'employeeLockPage',
      'employeeLogOut',
      'getAllEmployeeTypes'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.padded {
  margin: 5px;
}
</style>
