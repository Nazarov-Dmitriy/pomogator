<template>
    <div class="page">
        <HeaderComponent />
        <ArticleComponent
            v-if="Object.keys(article).length !== 0 "
            :other-atricle="otherAtricle"
            :article="article"
            :page="page"
        />
        <OtherTrend v-if="page === 'trend'" />
        <OtherArticle
            v-if="page === 'blog'"
            position="main"
            :other-atricle="otherAtriclePage"
        />
        <FooterComponent />
        <router-view />
    </div>
    <Teleport to="body">
        <template v-if="!isLoad">
            <Loader />
        </template>
    </Teleport>
</template>
<script setup>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import ArticleComponent from '../components/article/ArticleComponent.vue'
import FooterComponent from '../components/main/FooterComponent.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import { useNewsStore } from '@/stores/newsStore'; 
import OtherTrend from '../components/trend/OtherTrend.vue';
import OtherArticle from '../components/article/OtherArticle.vue';
import Loader from '@/components/loader/Loader.vue';

const isLoad = ref(false);
const newsStore = useNewsStore();
const route = useRoute()
const articleId = ref()
const article = ref({})
const otherAtricle = ref([])
const otherAtriclePage = ref([])
const page = ref('')


const getNewsList = computed(() => {
    return newsStore.getNewsList;
})

const getTags = computed(() => {
    return newsStore.getTags;
})

const getNews = computed(() => {
    return newsStore.getNews;
})

onMounted(() => {
    articleId.value = +route.params.id;
    newsStore.getTagsDb();
    newsStore.getNewsDb(articleId.value);
    newsStore.getNewsListDb();
    newsStore.addShow(articleId.value)
})

function getOtherAtricle () {
    otherAtricle.value = randomArticle(articleId.value, 3);
    otherAtriclePage.value = randomArticle(articleId.value, 4);
}

function getPage () {
    if (route.name === 'blog-article') {
        page.value = 'blog'
    } else {
        page.value = 'trend'
    }
}

function randomArticle (id, count) {
    const idArr = [id];
    const arrContnent = [];
    let currentCount = getNewsList.value.length <= count ? getNewsList.value.length - 1 : count;
     
    while (arrContnent.length < currentCount) {
        let randomIndex = Math.floor(Math.random() * getNewsList.value.length);
        if (!idArr.includes(randomIndex)) {
            arrContnent.push(getNewsList.value[randomIndex]);    
            idArr.push(randomIndex)
        }
    }
    return arrContnent
}

watch(() => route.params, (newVal) => {
    articleId.value = +newVal.id
    isLoad.value = false;
    newsStore.getNewsDb(articleId.value);
    newsStore.getNewsListDb();
}, { deep: true })

watch([getNewsList, getTags, getNews], () => {
    if(getNewsList.value.length > 0 && getTags.value.length > 0  && getNews.value  ){
        isLoad.value = true;
        article.value = getNews.value;
        getPage();
        getOtherAtricle()
    }
  
})
</script>
<style lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
}
</style>