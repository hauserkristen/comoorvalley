<template>
  <div class="row-container total">
    <div class="col-container">
      <div class="larger box">
        
        <div class="smaller box">
          <div>
            <h3>Main Menu Items:</h3>
          </div>
          <div class="col-container">
            <button 
              v-for="element in currentMenuItems.mainItems" :key="element"
              class="button is-info"
              @click="addMenuItem(element)"
              style="margin-top: 2px; margin-bottom: 2px;"
              :class="{'is-outlined': element !== mainItem}">
              {{element}}
            </button>
          </div>
        </div>

        <div class="smaller box">
          <div>
            <h3>Additions:</h3>
          </div>
          <div class="col-container">
            <button 
              v-for="element in currentMenuItems.additions" :key="element"
              class="button is-info" 
              @click="addAddition(element)"
              style="margin-top: 2px; margin-bottom: 2px;"
              :class="{'is-outlined': additions.indexOf(element) === -1}">
              {{element}}
            </button>
          </div>
        </div>

        <button class="button is-success" @click="submitCurrentOrder()">Submit Order</button>
      </div>    
    </div>


    <div class="col-container">
      <div class="larger box">
        <div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Table Number:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input class="input" type="number" placeholder="Table Number" v-model="tableNum">
                </p>
              </div>
            </div>
          </div>
        </div>
        <button style="margin: 10px;" class="button is-success" @click="submitCurrentTableOrder()">Submit Table Order</button>
        <div class="left-row-container">
          <label class="label">Order:</label>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Main Item</th>
              <th>Additions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="element in orders" :key="element.mainItem">
              <td>
                <h3>{{element.mainItem}}</h3>
              </td>
              <td>
                <h3 v-for="addition in element.additions" :key="addition">{{addition}}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {cloneDeep} from 'lodash'

export default {
  name: 'order',
  data () {
    return {
      orders: [],
      tableNum: 0,
      mainItem: '',
      additions: []
    }
  },
  computed: {
    selectType (type) {
      this.submitEmployeeType(type)
    },
    ...mapGetters([
      'currentMenuItems'
    ])
  },
  methods: {
    addAddition (item) {
      const index = this.additions.indexOf(item)
      if (index !== -1) {
        this.additions.splice(index, 1)
      } else {
        this.additions.push(item)
      }
    },
    submitCurrentOrder () {
      const order = {}
      order.mainItem = this.mainItem
      order.additions = cloneDeep(this.additions)
      this.orders.push(order)

      this.mainItem = ''
      this.additions = []
    },
    submitCurrentTableOrder () {
      this.submitTableOrder({orders: this.orders, tableNum: this.tableNum})
      this.orders = []
      this.tableNum = 0
      this.mainItem = ''
      this.additions = []
    },
    addMenuItem (item) {
      this.mainItem = item
    },
    ...mapActions([
      'submitTableOrder'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.total {
  text-align: center;
}

.box {
  margin-top: 10px;
}

.larger {
  width: 400px;
  margin-top: 10px;
}

.smaller {
  width: 350px;
  margin-top: 10px;
}

.col-container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
}

.row-container {
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}

.left-row-container {
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
}
</style>
