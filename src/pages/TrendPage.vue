<template>
    <div class="page">
        <HeaderComponent />
        <TrendAbout />

        <SearchPanel
            v-model="searchValue"
            is-search-visible="true"
            class="trend__search-panel"
            :active-tags="activeTags"
            @search="search()"
            @active-tags="setTags"
        />
        <ListArticle
            class="trend__article-header"
            :data="data"
            :search="searchValue"
        >
            <template #header>
                <h2
                    v-if="data.length > 0"
                    class="list-article__title"
                >
                    Содержание
                </h2>
            </template>
        </ListArticle>
        <OtherTrend />
        <FooterComponent />
    </div>
    <Teleport to="body">
        <template v-if="!isLoad">
            <Loader />
        </template>
    </Teleport>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TrendAbout from '../components/trend/TrendAbout.vue';
import SearchPanel from '../components/searchPanel/SearchPanel.vue';
import ListArticle from '../components/article/ListArticle.vue';
import OtherTrend from '../components/trend/OtherTrend.vue';
import { computed, onMounted, ref, watch } from 'vue';
import FooterComponent from '../components/main/FooterComponent.vue';
import { useNewsStore } from '@/stores/newsStore';
import Loader from '@/components/loader/Loader.vue';
import { useRoute } from 'vue-router';

const newsStore = useNewsStore();
const isLoad = ref(false);
const searchValue = ref('');
const dataTrend = ref([])
const data = ref([])
const activeTags = ref([])
const route = useRoute();


const getNewsList = computed(() => {
    return newsStore.getNewsList;
})

const getTags = computed(() => {
    return newsStore.getTags;
})

const getCategory = computed(() => {
    return newsStore.getCategory;
})

const getCategoryId = computed(() => {
    return newsStore.getCategoryId;
})

function search () {
    data.value = dataTrend.value.filter(el => {
        return (el.title).toLocaleLowerCase().includes((searchValue.value).toLocaleLowerCase())
    })
}

function setTags (id){  
    if (!activeTags.value.includes(id)) {
        activeTags.value.push(id)
    }else{
        activeTags.value =  activeTags.value.filter( el => el !== id)
    }
}

onMounted(() => {
    data.value = dataTrend.value
    newsStore.getTagsDb();
    newsStore.getLisParamstDb({ "category": getCategoryId.value });

})

watch(searchValue, (newVal) => {
    if (newVal.trim() == '') {
        data.value = dataTrend.value
    }
})

watch(activeTags, (newVal) => {
    console.log(newVal);

    isLoad.value = false
    if (activeTags.value.length > 0) {
        newsStore.getLisParamstDb({ "tags": newVal.toString() })
    }else{
        newsStore.getLisParamstDb({ "category": getCategoryId.value })
    }
},{deep: true})

watch([getNewsList, getTags, getCategory], () => {
    console.log("getNewsList, getTags, get");
    
    isLoad.value = true
    data.value = getNewsList.value
})

watch(() => route.params.name, () => {
    newsStore.getLisParamstDb({ "category": getCategoryId.value });
    activeTags.value=[]
    isLoad.value = false;
})




</script>
<style scoped lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
}

.trend__search-panel {
    padding: 60px 80px 64px 80px;
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

.trend__article-header {
    padding: 0 80px 60px 80px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 0 40px 40px 40px;
    }

    @media (max-width: $sm) {
        padding: 0 16px 32px 16px;
    }
}

.list-article__title {
    font-family: "Kreadon-Demi";
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
}
</style>
