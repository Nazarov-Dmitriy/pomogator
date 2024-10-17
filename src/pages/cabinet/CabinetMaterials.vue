<template>
    <CabinetSearchPanel
        class="cabinet-trend__search-panel"
        :tags="getTags"
        :active-tags="activeTags"
        @active-tags="setTags"
    />
    <CabinetListArticle
        class="cabinet-trend__article-header"
        :data="getMaterial"
        @remove-article="removeArticle()"
    />
    <Teleport to="body">
        <template v-if="!isLoad">
            <Loader />
        </template>
    </Teleport>
</template>
<script setup>
import CabinetSearchPanel from '@/components/cabinet/CabinetSearchPanel.vue'
import CabinetListArticle from '@/components/cabinet/CabinetListArticle.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useNewsStore } from '@/stores/newsStore'
import { useUserStore } from '@/stores/userStore'
import Loader from '@/components/loader/Loader.vue'

const userStore = useUserStore()
const newsStore = useNewsStore()

const isLoad = ref(false)
const activeTags = ref([])

const getUser = computed(() => {
    return userStore.getUser
})

const getMaterial = computed(() => {
    return userStore.getMyMaterial
})

const getTags = computed(() => {
    return newsStore.getTags
})

function setTags(id) {
    if (!activeTags.value.includes(id)) {
        activeTags.value.push(id)
    } else {
        activeTags.value = activeTags.value.filter((el) => el !== id)
    }
}

function removeArticle() {
    userStore.getMyMaterialDb({ id: getUser.value?.id })
}

onMounted(() => {
    newsStore.getTagsDb()
    if (getUser.value) {
        userStore.getMyMaterialDb({ id: getUser.value?.id })
    }
})

watch([getTags, getMaterial], () => {
    setTimeout(() => {
        isLoad.value = true
    }, 500)
})

watch(
    activeTags,
    (newVal) => {
        isLoad.value = false
        if (activeTags.value.length > 0) {
            userStore.getMyMaterialDb({ id: getUser.value?.id, tags: newVal.toString() })
        } else {
            userStore.getMyMaterialDb({ id: getUser.value?.id })
        }
    },
    { deep: true }
)

watch(getUser, () => {
    userStore.getMyMaterialDb({ id: getUser.value?.id })
})
</script>
<style scoped lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: flex-start;
}

.cabinet-trend__search-panel {
    padding: 0 80px;
    box-sizing: border-box;
    z-index: 2;
    position: relative;

    @media (max-width: $lg) {
        padding: 8px 40px 32px 40px;
    }

    @media (max-width: $sm) {
        padding: 24px 0px 32px 0px;
    }
}

.cabinet-trend__article-header {
    padding: 0 80px 60px 80px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 0 40px 40px 40px;
    }

    @media (max-width: $sm) {
        padding: 0 16px 32px 16px;
    }
}

.cabinet-list-article__title {
    font-family: 'Kreadon-Demi';
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
}
</style>
