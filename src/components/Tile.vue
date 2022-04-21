<template>
  <div @mouseover="tooltip?.show()" @mouseleave="tooltip?.hide()" class="tile-container">
    <router-link :to="linkTo">
      <img class="picture" v-if="imgSrc" :src="imgSrc" :alt="names?.join(' / ') ?? 'picture'" />
      <p class="title">
        <NameHeadline :names="names" />
      </p>
    </router-link>
    <Tooltip ref="tooltip" v-if="$slots.default">
      <slot />
    </Tooltip>
  </div>
</template>

<script setup>
import NameHeadline from './NameHeadline.vue';
import Tooltip from './Tooltip.vue';
import { ref } from '@vue/reactivity';
const props = defineProps({ 'imgSrc': String, 'names': Array, 'linkTo': [String, Object] });
const tooltip = ref(null);
</script>

<style>
.tile-container {
  position: relative;
}

.picture {
  max-width: 100%;
}

.title {
  text-align: center;
}
</style>