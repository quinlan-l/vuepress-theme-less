<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import Search from "../components/Search.vue"
</script>

<template>
  <div id="body-mask"></div>
  <Navbar />
  <Search />
  <HomeFooter />
</template>

<style lang="scss">
$height: calc(var(--navbar-height) / 2);

.footer {
  text-align: center;
  font-size: 13px;
  padding: 5px;
  line-height: $height;
  height: $height;
}

#app {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgb(127 127 200), rgb(20 20 20));
}

#body-mask {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, .6);
    display: none;
  }
</style>