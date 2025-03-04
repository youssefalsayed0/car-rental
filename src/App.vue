<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <RouterView/>
  <MainFooter/>
</template>

<style scoped>
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
