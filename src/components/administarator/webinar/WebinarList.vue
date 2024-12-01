<template>
    <section class="webinar__contaner">
        <SearchPanel
            v-model="searchValue"
            :is-search-visible="true"
            class="trend__search-panel"
            :active-tags="activeTags"
            :show-published="true"
            @search="search()"
            @active-tags="setTags"
            @published="setPublished"
        />
        <CabinetListArticle
            :data="data"
            :is-offer-visible="false"
            :search="searchValue"
            :webinar="true"
        />
        <Teleport to="body">
            <template v-if="!isLoad">
                <Loader />
            </template>
        </Teleport>
    </section>
</template>
<script setup>
import CabinetListArticle from '@/components/cabinet/CabinetListArticle.vue'
import Loader from '@/components/loader/Loader.vue'
import SearchPanel from '@/components/searchPanel/SearchPanel.vue'
import { useNewsStore } from '@/stores/newsStore'
import { useWebinarStore } from '@/stores/webinarStore'
import { computed, onMounted, ref, watch } from 'vue'

const isLoad = ref(false)
const newsStore = useNewsStore()
const webinarStore = useWebinarStore()
const activeTags = ref([])
const searchValue = ref('')
const data = ref([])
const published = ref('all')

const getWebinarList = computed(() => {
    return webinarStore.getWebinarList
})

const getTags = computed(() => {
    return newsStore.getTags
})

function search() {
    data.value = getWebinarList.value.filter((el) => {
        return el.title.toLocaleLowerCase().includes(searchValue.value.toLocaleLowerCase())
    })
}

async function setTags(id) {
    if (!activeTags.value.includes(id)) {
        activeTags.value.push(id)
    } else {
        activeTags.value = activeTags.value.filter((el) => el !== id)
    }
}

function setPublished(value) {
    published.value = value
    if (activeTags.value.length > 0) {
        webinarStore.getLisParamstDb({
            tags: activeTags.value.toString(),
            published: value
        })
    } else {
        webinarStore.getLisParamstDb({ published: value })
    }
}

onMounted(async () => {
    newsStore.getTagsDb()
    webinarStore.getLisParamstDb({ published: published.value })
})

watch(searchValue, (newVal) => {
    if (newVal.trim() == '') {
        data.value = getWebinarList.value
    }
})

watch(
    activeTags,
    (newVal) => {
        isLoad.value = true
        if (activeTags.value.length > 0) {
            webinarStore.getLisParamstDb({ tags: newVal.toString(), published: published.value })
        } else {
            webinarStore.getLisParamstDb({ published: published.value })
        }
    },
    { deep: true }
)

watch(
    [getWebinarList, getTags],
    () => {
        isLoad.value = true
        data.value = getWebinarList.value
    },
    { deep: true }
)
</script>

<style lang="scss">
.webinar__contaner {
    padding: 20px 80px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: $lg) {
        padding: 20px 40px;
    }
    @media (max-width: $sm) {
        padding: 16px;
    }

    :deep(.offer-material) {
        display: none;
    }
}
</style>
