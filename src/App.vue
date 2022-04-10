<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopMenu from '@/components/TopMenu.vue'
import "@/assets/base.css";
</script>

<template>
  <header>
    <TopMenu />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main{
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

@media screen and (min-width: 1200px) {
  main{
    max-width: 1200px;
  }
}
</style>