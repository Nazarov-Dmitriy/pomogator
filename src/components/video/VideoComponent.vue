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
        <!-- @mouseleave="mouseOver"
            @mouseover="mouseLeave" -->
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
            class="video__preview"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameborder="0"
            allowfullscreen
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
import { computed, onMounted, ref,  watch } from 'vue'

import '../../utils/vk_api.js'
// import axios from 'axios'

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
// const playerVkRef = ref(null)

// const player = videoVk.value.VideoPlayer;

// const player = VK.VideoPlayer(videoVk.value);

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

function getTypeLink () {
    if (new RegExp(/^https:\/\/rutube/).test(props.src)) {
        videoId.value = props.src.split('video/')[1].split('/')[0]
        typeLink.value = 'rutube'
    } else if (new RegExp(/^https:\/\/vk.com/).test(props.src)) {
        typeLink.value = 'vk'
        videoId.value = props.src.split('video-')[1].split('%')[0]
    }
    // console.log(props.src);
}

async function playerVk () {
    // eslint-disable-next-line no-undef
    const player = VK.VideoPlayer(document.getElementById('vk'))
    //    await nextTick()
    //     player.play()
    //     player.setVolume(1)
}

// async function mouseOver () {
//     await nextTick()
//     var player = videoRutube.value
//     player.contentWindow.postMessage(
//         JSON.stringify({
//             type: 'player:pause',
//             data: {}
//         }),
//         '*'
//     )
// }

// async function mouseLeave () {
//     await nextTick()
//     var player = videoRutube.value
//     console.dir(player.contentWindow.document);

//     player.contentWindow.postMessage(
//         JSON.stringify({
//             type: 'player:play',
//             data: {
//                 volume: 0
//             }
//         }),
//         '*'
//     )
// }

onMounted(() => {
    getTypeLink()

    // try {
    //     axios.post(`https://api.vk.ru/method/video.get`, {
    //         access_token: "378def6a378def6a378def6aeb349301ac3378d378def6a517ec3840a09ce5314c01aab",
    //         owner_id: "-218772170",
    //         videos: "-218772170_456239481"

    //     }, {headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    //         "Access-Control-Allow-Headers": "Content-Type, x-requested-with",
    //         'Access-Control-Allow-Credentials': true
    //     }},).then((res) => {
    //         this.newsList = []
    //         this.newsList = [...res.data]
    //     })
    // } catch (err) {
    // }
})

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
