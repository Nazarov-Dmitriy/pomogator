<template>
    <section class="article__contaner">
        <SearchPanel
            v-model="searchValue"
            :is-search-visible="true"
            class="trend__search-panel"
            :active-tags="activeTags"
            @search="search()"
            @active-tags="setTags"
        />
        <CabinetListArticle
            class="cabinet-trend__article-header"
            :data="data"
            @remove-article="removeArticle"
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
import { computed, onMounted, ref, watch } from 'vue'

const newsStore = useNewsStore()
const isLoad = ref(false)

const getNewsList = computed(() => {
    return newsStore.getNewsList
})
const getTags = computed(() => {
    return newsStore.getTags
})

const getCategory = computed(() => {
    return newsStore.getCategory
})

const activeTags = ref([])

const searchValue = ref('')

const data = ref([])

function search() {
    data.value = getNewsList.value.filter((el) => {
        return el.title.toLocaleLowerCase().includes(searchValue.value.toLocaleLowerCase())
    })
}

function setTags(id) {
    if (!activeTags.value.includes(id)) {
        activeTags.value.push(id)
    } else {
        activeTags.value = activeTags.value.filter((el) => el !== id)
    }
}

function removeArticle() {
    isLoad.value = false
    newsStore.getNewsListDb()
}

onMounted(() => {
    newsStore.getNewsListDb()
    newsStore.getTagsDb()
    newsStore.getCategoryDb()
})

watch(searchValue, (newVal) => {
    if (newVal.trim() == '') {
        data.value = getNewsList.value
    }
})

watch(
    activeTags,
    (newVal) => {
        isLoad.value = false
        if (activeTags.value.length > 0) {
            newsStore.getLisParamstDb({ tags: newVal.toString() })
        } else {
            newsStore.getNewsListDb()
        }
    },
    { deep: true }
)

watch([getNewsList, getTags, getCategory], () => {
    isLoad.value = true
    data.value = getNewsList.value
})
</script>

<style lang="scss" scoped>
.article__contaner {
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
