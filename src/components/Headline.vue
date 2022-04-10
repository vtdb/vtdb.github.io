<template>
  <div class="headline-container">
    <div class="headline">
      <template v-if="!to">{{ text }}</template>
      <RouterLink v-else :to="to">
        <div class="link-text-container">{{ text }}</div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['text', 'to']);
</script>

<style scoped>
.headline-container {
  border: 1px solid var(--color-background-soft);
  border-left: 4px solid var(--color-background-soft);
}
.headline {
  padding: 0 10px;
}
.link-text-container::after {
  content: "→";
  float: right;
  position: relative;
  top: -2px;
}
</style>