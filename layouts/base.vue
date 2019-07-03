<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Header from "~/components/header.vue";
export default {
  components: {
    Header,
  },
  layout: "base",
}
</script>
