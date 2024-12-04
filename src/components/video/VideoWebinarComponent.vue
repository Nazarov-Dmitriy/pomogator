<template>
    <div class="video-player">
        <iframe
            ref="videoVkRef"
            :src="props.src + '&js_api=1'"
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
    },
    user: {
        type: Object,
        default: () => {}
    },
    subscribe: {
        type: Boolean
    },
    isUserCertificat: {
        type: Boolean
    }
})

const emit = defineEmits(['certificat'])

const videoVkRef = ref('videoVkRef')
const durration = ref(0)
const timer = ref(0)
let player
let timerId = ref()
function playerVk() {
    try {
        // eslint-disable-next-line no-undef
        player = VK.VideoPlayer(videoVkRef.value)
        player.on('inited', () => {
            if (player.getDuration() > 0) {
                durration.value = player.getDuration() - player.getCurrentTime()
            }
        })

        player.on('started', () => {
            if (player.getDuration() > 0) {
                startTimer()
            }
        })

        player.on('resumed', () => {
            if (player.getDuration() > 0) {
                startTimer()
            }
        })

        player.on('paused', () => {
            stopTimer()
        })
    } catch (e) {
        console.dir(e)
    }
}

function startTimer() {
    timerId.value = setInterval(() => timer.value++, 1000)
}

function stopTimer() {
    clearInterval(timerId.value)
}

onMounted(() => {
    if (props.user && !props.subscribe && !props.isUserCertificat) {
        playerVk()
    }
})

watch(
    props,
    () => {
        if (props.user && !props.subscribe && !props.isUserCertificat) {
            playerVk()
        }
    },
    { deep: true }
)

watch(timer, (newVal) => {
    if ((newVal / durration.value) * 100 > 70) {
        emit('certificat')
    }
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
