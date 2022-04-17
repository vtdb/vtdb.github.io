<template>
    <div class="fill-parent loading-container">
        <div class="loading-spinner">Loading...</div>
        <div class="fill-parent loading-bg"></div>
    </div>
</template>

<style scoped>
.fill-parent {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0;
    bottom: 0;
}

.loading-container {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-spinner {
    z-index: 2;
    display: inline-block;
    margin: auto;
}

.loading-bg {
    background-color: var(--color-background-soft);
    opacity: 0.5;
}
</style>