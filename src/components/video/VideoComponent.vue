<template>
    <div>
        <iframe
            v-if="typeLink === 'rutube' && !preview"
            :id="videoId"
            ref="videoRutube"
            :src="getLink"
            frameBorder="0"
            allow=" autoplay"
            webkitAllowFullScreen
            mozallowfullscreen
            allowFullScreen
            :class="props.className"
        ></iframe>
        <iframe
            v-if="typeLink === 'vk' && !preview"
            id="vk"
            ref="videoVkRef"
            :src="getLink"
            :class="props.className"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameborder="0"
            allowfullscreen
        ></iframe>
        <iframe
            v-if="typeLink === 'vk' && preview"
            id="vk"
            ref="videoVkRef"
            :src="getLink"
            class="video__preview-vk video__preview"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameborder="0"
            allowfullscreen
            contenteditable="false"
        ></iframe>
        <img
            v-if="typeLink === 'rutube' && preview"
            class="video__preview"
            :src="getLinkPreview"
            alt="prewiew"
        />
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'

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
const typeLink = ref()
const videoId = ref()
const videoRutube = ref('videoRutube')
const videoVkRef = ref('videoVkRef')

const getLink = computed(() => {
    if (typeLink.value === 'rutube') {
        return `https://rutube.ru/play/embed/${videoId.value}`
    } else if (typeLink.value === 'vk') {
        return `https://vk.com/video_ext.php?oid=-${videoId.value.split('_')[0]}&id=${videoId.value.split('_')[1]}&js_api=1`
    }
    return null
})

const getLinkPreview = computed(() => {
    if (typeLink.value === 'rutube') {
        return ` https://preview.rutube.ru/preview/${videoId.value}.webp`
    }
    return null
})

function getTypeLink() {
    if (new RegExp(/^https:\/\/rutube/).test(props.src)) {
        videoId.value = props.src.split('video/')[1].split('/')[0]
        typeLink.value = 'rutube'
    } else if (
        new RegExp(/^https:\/\/vk.com/).test(props.src) ||
        new RegExp(/^https:\/\/vkvideo.ru/).test(props.src)
    ) {
        typeLink.value = 'vk'
        videoId.value = props.src.split('video-')[1]?.split('%')[0]
    }
}

onMounted(() => {
    getTypeLink()
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

.video__preview-vk :deep(.page_wrap) {
    display: none;
}

.videoplayer_controls {
    display: none;
}
</style>
