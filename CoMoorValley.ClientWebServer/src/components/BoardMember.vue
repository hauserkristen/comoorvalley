<template>
  <div class="card cell">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="src" alt="No image available.">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{name}}</p>
          <p class="subtitle is-6">{{title}}</p>
        </div>
      </div>

      <div class="content">
        {{description}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'board-member',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.cell {
  width: 200px;
  color: var(--green-custom);
  background-color: var(--off-white-custom);
  margin: 5px;
}
</style>
