<template>
  <div class="treasure"><p>{{ title }}</p></div>
</template>

<style scoped>
.treasure {
  z-index: 1;
  height: 200px;
  background: url(~assets/treasure.svg) no-repeat, url(~assets/label.svg) no-repeat;
  background-position: 350px top, left 35px;
}
</style>

<script lang="ts">
export default {
  props: {
    title: String,
  },
}
</script>
