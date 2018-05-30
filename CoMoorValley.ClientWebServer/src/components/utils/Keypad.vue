<template>
  <div class="keypad-div">
    <div class="buttons centered">
      <button class="button is-info is-outlined is-large keypad" @click="onSubmit('1')">1</button>
      <button class="button is-info is-outlined is-large keypad" @click="onSubmit('2')">2</button>
      <button class="button is-info is-outlined is-large keypad" @click="onSubmit('3')">3</button>
    </div>

    <div class="buttons centered">
      <button class="button is-info is-outlined is-large keypad" @click="onSubmit('4')">4</button>
      <button class="button is-info is-outlined is-large keypad" @click="onSubmit('5')">5</button>
      <button class="button is-info is-outlined is-large keypad" @click="onSubmit('6')">6</button>
    </div>

    <div class="buttons centered">
      <button class="button is-info is-outlined is-large keypad" @click="onSubmit('7')">7</button>
      <button class="button is-info is-outlined is-large keypad" @click="onSubmit('8')">8</button>
      <button class="button is-info is-outlined is-large keypad" @click="onSubmit('9')">9</button>
    </div>

    <div class="buttons centered">
      <button class="button is-info is-outlined is-large keypad" @click="onSubmit('*')">*</button>
      <button class="button is-info is-outlined is-large keypad" @click="onSubmit('0')">0</button>
      <button class="button is-info is-outlined is-large keypad" @click="onSubmit('#')">#</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'keypad',
  props: {
    onSubmit: {
      type: Function,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.keypad-div {
  text-align: center;
}

.keypad {
  width: 75px;
  height: 75px;
  margin: 2px;
}

.centered {
  display: flex;
  justify-content: center;
}
</style>