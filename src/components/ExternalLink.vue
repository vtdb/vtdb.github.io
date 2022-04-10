<template>
    <div class="external-link-container">
        <a class="external-link-a" :href="url" target="_blank" rel="noopener noreferrer">
            <div class="external-link">
                <div class="external-link-icon">
                    <YouTubeIcon v-if="icon == 'youtube'" />
                    <TwitchIcon v-else-if="icon == 'twitch'" />
                    <VkIcon v-else-if="icon == 'vk'" />
                    <TwitterIcon v-else-if="icon == 'twitter'" />
                    <WebLinkIcon v-else />
                </div>
                <span>{{ title }}</span>
            </div>
        </a>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import VkIcon from './icons/VkIcon.vue';
import YouTubeIcon from './icons/YouTubeIcon.vue';
import TwitterIcon from './icons/TwitterIcon.vue';
import TwitchIcon from './icons/TwitchIcon.vue';
import WebLinkIcon from './icons/WebLinkIcon.vue';

const props = defineProps(['url', 'title']);
const icon = computed(() => {
    if (!props.url) return;

    let hostname = new URL(props.url)?.hostname;
    if (!hostname) return;

    if (hostname.includes('vk.com'))
        return 'vk';
    else if (hostname.includes('youtube.com'))
        return 'youtube';
    else if (hostname.includes('twitch.tv'))
        return 'twitch';
    else if (hostname.includes('twitter.com'))
        return 'twitter';

    return '';
});
</script>

<style scoped>
.external-link-container {
    margin: 4px 0;
}
.external-link {
    display: grid;
    grid-template-columns: 16px 1fr;
    gap: 8px;
    align-items: center;
    line-height: 1em;
}
.external-link-icon {
    fill: var(--color-text);
}
</style>