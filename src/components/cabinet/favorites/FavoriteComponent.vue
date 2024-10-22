<template>
    <section class="cabinet-favorite">
        <div class="cabinet-favorite__container">
            <CabinetTitle> Материалы</CabinetTitle>
            <SearchPanel
                v-model="searchMyMaterialValue"
                :is-search-visible="true"
                :active-tags="activeTagsMyMaterial"
                @search="searchMyMaterial()"
                @active-tags="setTagsMyMaterial"
            />
            <div class="cards">
                <ListArticle
                    :data="dataMyMatirialNews"
                    :is-offer-visible="false"
                    custom-btn="custom-card-btns"
                />
            </div>

            <div class="cabinet-favorite__webinars">
                <CabinetTitle> Вебинары</CabinetTitle>
                <SearchPanel :is-search-visible="isSearchVisible" />
                <ListArticle
                    :data="dataMyMatirialWebinar"
                    :is-offer-visible="false"
                    :webinar="true"
                />
            </div>
        </div>
    </section>
    <Teleport to="body">
        <template v-if="!isLoad">
            <Loader />
        </template>
    </Teleport>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import SearchPanel from '../../searchPanel/SearchPanel.vue'
import CabinetTitle from '../CabinetTitle.vue'
import ListArticle from '../../article/ListArticle.vue'
import { useNewsStore } from '@/stores/newsStore'
import { useUserStore } from '@/stores/userStore'
import Loader from '@/components/loader/Loader.vue'
import { useWebinarStore } from '@/stores/webinarStore'

const newsStore = useNewsStore()
const userStore = useUserStore()
const webinarStore = useWebinarStore()
const isLoad = ref(false)
const searchMyMaterialValue = ref('')
const activeTagsMyMaterial = ref([])
const dataMyMatirialNews = ref([])
const dataMyMatirialWebinar = ref([])

const getUser = computed(() => {
    return userStore.getUser
})

const getNewsList = computed(() => {
    return newsStore.getNewsList
})

const getWebinarList = computed(() => {
    return webinarStore.getWebinarList
})

onMounted(() => {
    newsStore.getNewsFavorite(getUser.value?.id)
    webinarStore.getWebinarFavorite(getUser.value?.id)
})

function setTagsMyMaterial(id) {
    if (!activeTagsMyMaterial.value.includes(id)) {
        activeTagsMyMaterial.value.push(id)
    } else {
        activeTagsMyMaterial.value = activeTagsMyMaterial.value.filter((el) => el !== id)
    }
}

function searchMyMaterial() {
    dataMyMatirialNews.value = getNewsList.value.filter((el) => {
        return el.title
            .toLocaleLowerCase()
            .includes(searchMyMaterialValue.value.toLocaleLowerCase())
    })
}

watch(
    activeTagsMyMaterial,
    (newVal) => {
        isLoad.value = false
        if (activeTagsMyMaterial.value.length > 0) {
            newsStore.getFNewsFavorite(getUser.value?.id, { tags: newVal.toString() })
        } else {
            newsStore.getFNewsFavorite(getUser.value?.id)
        }
    },
    { deep: true }
)

watch(searchMyMaterial, (newVal) => {
    if (newVal.trim() == '') {
        dataMyMatirialNews.value = getNewsList.value
    }
})

watch([getNewsList, getWebinarList], () => {
    isLoad.value = true
    dataMyMatirialNews.value = getNewsList.value
    dataMyMatirialWebinar.value = getWebinarList.value
})
</script>

<style lang="scss">
.cabinet-favorite {
    padding: 60px 80px;
    @media (max-width: $lg) {
        padding: 40px;
    }
    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}
.cabinet-favorite__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.cards {
    display: grid;
    grid-template-columns: repeat(2, auto);
}

.cabinet-favorite__webinars {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 60px;

    @media(max-width: $lg){
        margin-top: 40px;
    }
    @media(max-width: $sm){
        margin-top: 32px;
    }
}

.custom-card {
    display: flex;
    text-align: right;

    @media (max-width: $lg) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: $md) {
        grid-template-columns: 1fr;
    }
}

.custom-card-btns {
    @media (max-width: $lg) {
        gap: 20px;
    }
}
.custom-text-right {
    justify-content: flex-start;
}

.custom-text-left {
    justify-content: flex-start;
}

.cabinet-favorite__article-wrapper {
    display: flex;
    flex-direction: column;
}
</style>
