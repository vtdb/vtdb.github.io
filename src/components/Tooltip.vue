<template>
    <div class="hoverbox" v-if="visible && $slots.default" ref="hoverbox" :class="{
        'hoverbox-on-the-right': !isFlipped && !vertical,
        'hoverbox-on-the-left': isFlipped && !vertical,
        'hoverbox-on-the-top': !isFlipped && vertical,
        'hoverbox-on-the-bottom': isFlipped && vertical,
    }">
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

const props = defineProps({ 'busy': { default: false, type: Boolean }, 'vertical': { default: false, type: Boolean } });

const hoverbox = ref(null);

const visible = ref(false);
const showFired = ref(false);
const hideFired = ref(false);
const showTimeout = ref({ id: 0 });
const hideTimeout = ref({ id: 0 });
const isFlipped = computed(() => {
    if (hoverbox.value) {
        const rect = hoverbox.value?.getBoundingClientRect();
        if (props.vertical)
            return rect?.top < 0;
        else
            return rect?.right >= (window.innerWidth || document.documentElement.clientWidth);
    } else {
        return false;
    }
});

function show() {
    clearTimeout(hideTimeout.value.id);
    hideFired.value = false;
    if (visible.value || showFired.value) return;
    showFired.value = true;
    showTimeout.value.id = setTimeout(() => { visible.value = true; showFired.value = false; }, 300);
}
function hide() {
    clearTimeout(showTimeout.value.id);
    showFired.value = false;
    if (!visible.value || hideFired.value) return;
    hideFired.value = true;
    hideTimeout.value.id = setTimeout(() => { visible.value = false; hideFired.value = false }, 300);
}
function close() {
    visible.value = false;
}
defineExpose({ show, hide })
</script>

<style>
.hoverbox {
    position: absolute;
    padding: 5px 5px 5px 5px;
    border: 1px solid var(--color-background-soft);
    background-color: var(--color-background);
    z-index: 2;
}

.hoverbox-on-the-right,
.hoverbox-on-the-left {
    top: 0px;
}

.hoverbox-on-the-right {
    left: calc(100% + 5px);
}

.hoverbox-on-the-left {
    right: calc(100% + 5px);
}

.hoverbox-on-the-top,
.hoverbox-on-the-bottom {
    height: auto;
}

.hoverbox-on-the-top {
    bottom: calc(100% + 5px);
}

.hoverbox-on-the-bottom {
    top: calc(100% + 5px);
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