<template>
    <MainLayots>
        <div class="page">
            <WebinarHeader :webinar="webinar" />
            <WebinarVideo :webinar="webinar" :is-favorite="isFavorite" :user="getUser" />
            <WebinarCertificate />
            <SubscrideComponent />
        </div>
    </MainLayots>
    <Teleport to="body">
        <template v-if="!isLoad">
            <Loader />
        </template>
    </Teleport>
</template>

<script setup>
import SubscrideComponent from '@/components/blog/SubscrideComponent.vue'
import Loader from '@/components/loader/Loader.vue'
import WebinarCertificate from '@/components/webinar/WebinarCertificate.vue'
import WebinarHeader from '@/components/webinar/WebinarHeader.vue'
import WebinarVideo from '@/components/webinar/WebinarVideo.vue'
import MainLayots from '@/layouts/MainLayots.vue'
import { useNewsStore } from '@/stores/newsStore'
import { useUserStore } from '@/stores/userStore'
import { useWebinarStore } from '@/stores/webinarStore'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const isLoad = ref(false)
const newsStore = useNewsStore()
const userStore = useUserStore()
const webinarStore = useWebinarStore()
const webinarId = ref()
const route = useRoute()
const webinar = ref(null)
const router = useRouter()
const isFavorite = ref(null)

const getTags = computed(() => {
    return newsStore.getTags
})

const getWebinar = computed(() => {
    return webinarStore.getWebinar
})

const getUser = computed(() => {
    return userStore.getUser
})

const getErrors = computed(() => {
    return newsStore.getErrors
})

onMounted(async () => {
    webinarId.value = +route.params.id
    newsStore.getTagsDb()
    webinarStore.getWebinarDb(webinarId.value)
    webinarStore.addShow(webinarId.value)

    if (getUser.value) {
        isFavorite.value = await webinarStore.getFaforite({
            webinar_id: webinarId.value,
            user_id: getUser.value.id
        })
    }
})

watch(
    () => route.params,
    (newVal) => {
        webinarId.value = +newVal.id
        isLoad.value = false
        newsStore.getWebinarDb(webinarId.value)
    },
    { deep: true }
)

watch([getTags, getWebinar], () => {
    if (getTags.value.length > 0 && getWebinar.value) {
        isLoad.value = true
        webinar.value = getWebinar.value
    }
})

watch(getUser, async () => {
    isFavorite.value = await webinarStore.getFaforite({
        webinar_id: webinarId.value,
        user_id: getUser.value.id
    })
})

watch(getErrors, () => {
    if (getErrors.value === 'not found') {
        router.push({ name: 'NotFound' })
    }
})
</script>

<style lang="scss" scoped>
.page {
    :deep(.news__info) {
        margin-right: 80px;
        margin-left: 80px;

        @media (max-width: $lg) {
            margin-right: 40px;
            margin-left: 40px;
        }
        @media (max-width: $sm) {
            margin-right: 16px;
            margin-left: 16px;
        }
    }
}
</style>
