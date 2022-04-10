<template>
  <div>
    <router-link :to="linkTo" :title="names?.join(' / ')">
      <img class="picture" v-if="imgSrc" :src="imgSrc" :alt="names?.join(' / ') ?? 'picture'" />
      <p class="title">
        <NameHeadline :names="names" />
      </p>
    </router-link>
  </div>
</template>

<script setup>
import NameHeadline from './NameHeadline.vue';
const props = defineProps({ 'imgSrc': String, 'names': Array, 'linkTo': [String, Object] });
</script>

<style>
.picture {
  max-width: 100%;
}
.title {
  text-align: center;
}
</style>