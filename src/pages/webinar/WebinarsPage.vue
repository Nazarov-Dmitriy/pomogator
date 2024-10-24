<template>
    <MainLayots>
        <WebinarsComponent />
        <div class="webinar__main">
            <SearchPanel
                v-model="searchValue"
                :is-search-visible="true"
                class="trend__search-panel"
                :active-tags="activeTags"
                @search="search()"
                @active-tags="setTags"
            />
            <ListArticle
                :data="data"
                :is-offer-visible="false"
                :search="searchValue"
                :webinar="true"
            />
        </div>
        <SubscrideComponent />
        <Teleport to="body">
            <template v-if="!isLoad">
                <Loader />
            </template>
        </Teleport>
    </MainLayots>
</template>
<script setup>
import ListArticle from '@/components/article/ListArticle.vue'
import SubscrideComponent from '@/components/blog/SubscrideComponent.vue'
import Loader from '@/components/loader/Loader.vue'
import SearchPanel from '@/components/searchPanel/SearchPanel.vue'
import WebinarsComponent from '@/components/webinar/WebinarsComponent.vue'
import MainLayots from '@/layouts/MainLayots.vue'
import { useNewsStore } from '@/stores/newsStore'
import { useWebinarStore } from '@/stores/webinarStore'
import { computed, onMounted, ref, watch } from 'vue'

const isLoad = ref(false)
const newsStore = useNewsStore()
const webinarStore = useWebinarStore()
const activeTags = ref([])
const searchValue = ref('')
const data = ref([])

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

onMounted(async () => {
    newsStore.getTagsDb()
    webinarStore.getLisParamstDb()
})

watch(searchValue, (newVal) => {
    if (newVal.trim() == '') {
        data.value = getWebinarList.value
    }
})

watch(
    activeTags,
    (newVal) => {
        isLoad.value = false
        if (activeTags.value.length > 0) {
            newsStore.getLisParamstDb({ tags: newVal.toString() })
        } else {
            newsStore.getLisParamstDb()
        }
    },
    { deep: true }
)

watch([getWebinarList, getTags], () => {
    isLoad.value = true
    data.value = getWebinarList.value
})
</script>

<style scoped lang="scss">
.webinar__main {
    padding: 60px 80px;

    :deep(.list-article){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: $lg) {
        padding: 40px;
    }
    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}

.trend__search-panel {
    padding-bottom: 32px;
}
</style>
