<template>
    <div class="video-player">
        <iframe
            :src="props.src"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen
        ></iframe>
    </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    className: {
        type: String,
        default: 'video-player'
    },
    preview: {
        type: Boolean,
        default: false
    }
})
const videoId = ref()
const videoVkRef = ref('videoVkRef')

async function playerVk() {
    const player = VK.VideoPlayer(document.getElementById('vk'))
}

onMounted(() => {})

watch(videoVkRef, () => {
    playerVk()
})
</script>
<style lang="scss">
.video-player {
    width: 100%;
    aspect-ratio: 100/56;

    #document {
        display: none;
    }
}

.video__preview {
    width: 100%;
    aspect-ratio: 2.9/ 1;
}
</style>
