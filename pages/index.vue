<template>
  <div class="root">
    <Photo title="MAP" />
    <Label />
    <Photo />
  </div>
</template>

<script>
import Photo from "~/components/image/image.vue";
import Label from "~/components/treasure-right/image.vue";

export default {
  components: {
    Photo,
    Label,
  },
  layout: "base",
}
</script>

<style>
.root {
  margin: 20px 50px;
}
</style>
