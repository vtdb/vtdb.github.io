<template>
    <div class="hoverbox" v-if="visible && $slots.default" ref="hoverbox"
        :class="{ 'hoverbox-on-the-right': isRight, 'hoverbox-on-the-left': !isRight }">
        <div class="hoverbox-close" @click="close"></div>
        <div>
            <slot />
        </div>
        <Loading v-if="busy" />
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import Loading from "./Loading.vue";

const props = defineProps({ 'busy': { default: false, type: Boolean } });

const hoverbox = ref(null);

const visible = ref(false);
const showFired = ref(false);
const hideFired = ref(false);
const showTimeout = ref({ id: 0 });
const hideTimeout = ref({ id: 0 });
const isRight = computed(() => {
    if (hoverbox.value) {
        let rect = hoverbox.value?.getBoundingClientRect();
        let fits = rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        console.log(fits);
        return fits;
    } else {
        return true;
    }
});

function show() {
    clearTimeout(hideTimeout.value.id);
    if (visible.value || showFired.value) return;
    showTimeout.value.id = setTimeout(() => { visible.value = true; showFired.value = false; }, 100);
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
    position: absolute;
    top: 0px;
    padding: 5px 5px 5px 5px;
    border: 1px solid var(--color-background-soft);
    background-color: var(--color-background);
}

.hoverbox-on-the-right {
    left: calc(100% + 5px);
}

.hoverbox-on-the-left {
    right: calc(100% + 5px);
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
    z-index: 3;
}

.hoverbox-close:hover {
    opacity: 0.8;
}

.hoverbox-close:after {
    content: '\2715';
}
</style>