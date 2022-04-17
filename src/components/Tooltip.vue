<template>
    <div class="hoverbox" v-if="visible && $slots.default">
        <div class="hoverbox-close" @click="close"></div>
        <div>
            <slot></slot>
        </div>  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const visible = ref(false);
const showFired = ref(false);
const hideFired = ref(false);
const showTimeout = ref({ id: 0 });
const hideTimeout = ref({ id: 0 });

function show() {
    clearTimeout(hideTimeout.value.id);
    if (visible.value || showFired.value) return;
    showTimeout.value.id = setTimeout(() => { visible.value = true; showFired.value = false }, 100);

}
function hide() {
    clearTimeout(showTimeout.value.id);
    if (!visible.value || hideFired.value) return;
    hideTimeout.value.id = setTimeout(() => { visible.value = false; hideFired.value = false }, 100);
}
function close() {
    visible.value = false;
}
defineExpose({ show, hide })
</script>

<style>
.hoverbox {
    min-width: 300px;
    position: absolute;
    top: 0px;
    left: calc(100% + 5px);
    padding: 5px 5px 5px 5px;
    border: 1px solid var(--color-background-soft);
}

.hoverbox-close {
    border-radius: 15px;
    cursor: pointer;
    font-family: Courier;
    font-size: 13px;
    position: absolute;
    right: 5px;
    text-align: center;
    top: 4px;
    width: 15px;
    z-index: 2;
}

.hoverbox-close:hover {
    opacity: 0.8;
}

.hoverbox-close:after {
    content: '\2715';
}
</style>