<template>
  <div class="header">
    <a-menu mode="horizontal">
      <a-menu-item key="home">
        <nuxt-link to="/">
          <a-icon type="home" />Home
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="about">
        <nuxt-link to="/about">
          <a-icon type="appstore" />About
        </nuxt-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<style scoped>
.header {
  height: 50px;
  background: green;
}
</style>

<script>
import Vue from "vue";
import { Menu } from "ant-design-vue";

Vue.component(Menu.name, Menu);
Vue.use(Menu);

export default {}
</script>
