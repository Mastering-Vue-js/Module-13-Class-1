<script setup>
</script>

<template>
  <!-- <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a> -->
  <!-- <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/contact">Contact</router-link> -->
  <router-view />
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
a {
  margin: 10px;
}
</style>
