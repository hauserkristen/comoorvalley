<template>
  <div class="row-container">
    <div class="col-container">
      
      <div class="box">
        <div class="content">

          <div class="field">
            <div class="control">
              <input 
                class="input is-info"
                type="number"
                placeholder="User ID"
                :disabled="!isUserID"
                v-model="userID">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input 
                class="input is-info"
                type="password"
                placeholder="Password"
                :disabled="isUserID"
                v-model="password">
            </div>
          </div>

          <keypad :onSubmit="addValue"></keypad>
        </div>
      </div>

      <div class="box">
        <div v-if="isUserID" class="row-container">
          <button class="button is-success" @click="enterPassword()">Next</button>
        </div>
        <div v-else class="row-container">
          <button class="button is-primary" @click="enterPassword()">Back</button>
          <button style="margin-left: 5px;" class="button is-success" @click="submit()">Log In</button>
        </div>
      </div>

    </div>
    <div class="col-container">
      <div class="box">
        <div class="col-container">
          <h2 class="centered">Notifications</h2>
        </div>
        <div class="notification is-primary" v-for="note in notifications" :key="note">
          <button class="delete"></button>
          {{note}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Keypad from './utils/Keypad'

export default {
  name: 'splash',
  components: {
    'keypad': Keypad
  },
  data () {
    return {
      isUserID: true,
      password: '',
      interval: {}
    }
  },
  computed: {
    userID: {
      get: function () { return this.currentUserID },
      set: function (val) { this.setUserID(val) }
    },
    ...mapGetters([
      'currentUserID',
      'notifications'
    ])
  },
  methods: {
    addValue (val) {
      if (this.isUserID) {
        if (val !== '#' && val !== '*') {
          this.setUserID(this.currentUserID + val)
        }
      } else {
        this.password = this.password + val
      }
    },
    enterPassword () {
      this.isUserID = !this.isUserID
    },
    submit () {
      const userInfo = {}
      userInfo.UserID = parseInt(this.currentUserID)
      userInfo.Password = this.password

      this.submitUser(userInfo)
    },
    ...mapActions([
      'setUserID',
      'submitUser'
    ]),
    beforeDestroy: function () {
      clearInterval(this.interval)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centered {
  text-align: center;
}

.box {
  width: 350px;
  flex: 1;
}
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
