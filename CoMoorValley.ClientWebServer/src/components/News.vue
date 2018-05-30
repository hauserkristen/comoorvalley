<template>
  <div class="row-container">
    <div class="col-container">
      <div class="box">
        <div>
            <h3>Select type of shift to clock into:</h3>
          </div>
          <div class="col-container">
            <button 
              v-for="availableType in currentAvailableTypes" :key="availableType"
              class="button is-info"
              @click="submitEmployeeType(availableType)"
              style="margin-top: 2px; margin-bottom: 2px;">
              {{availableType}}
            </button>
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'log-in',
  computed: {
    ...mapGetters([
      'currentAvailableTypes'
    ])
  },
  methods: {
    ...mapActions([
      'submitEmployeeType'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 350px;
  margin-top: 10px;
}

.col-container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.row-container {
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
</style>
