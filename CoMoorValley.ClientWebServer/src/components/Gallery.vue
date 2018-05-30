<template>
  <div class="row-container">
    <div class="col-container">
      <div class="box">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name" v-model="name">
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password"v-model="password">
          </div>
        </div>

        <div class="field" v-for="availableType in currentNewEmployeeTypes" :key="availableType">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" @click="addItem(availableType)">
              {{availableType}}
            </label>
          </div>
        </div>
      </div>
      <button class="button is-success" @click="submit()">Create Employee</button>
    </div> 
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'new-employee',
  data () {
    return {
      name: '',
      password: '',
      selectedTypes: []
    }
  },
  computed: {
    ...mapGetters([
      'currentNewEmployeeTypes'
    ])
  },
  methods: {
    addItem (value) {
      const index = this.selectedTypes.indexOf(value)
      if (index !== -1) {
        this.selectedTypes.splice(index, 1)
      } else {
        this.selectedTypes.push(value)
      }
    },
    submit () {
      this.submitNewEmployee({name: this.name, password: this.password, employeeTypes: this.selectedTypes})
    },
    ...mapActions([
      'submitNewEmployee'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col-container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.row-container {
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
</style>
