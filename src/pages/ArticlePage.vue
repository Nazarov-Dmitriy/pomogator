<template>
    <div class="page">
        <HeaderComponent />
        <ArticleComponent
            :article="article"
            :type="typeArticle"
            :other-atricle="otherAtricle"
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
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ArticleComponent from '../components/article/ArticleComponent.vue'
import FooterComponent from '../components/main/FooterComponent.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import { getById, randomArticle } from '../db/db.js';
import OtherTrend from '../components/trend/OtherTrend.vue';
import OtherArticle from '../components/article/OtherArticle.vue';


const route = useRoute()
const articleId = ref()
const article = ref()
const otherAtricle = ref([])
const otherAtriclePage = ref([])
const typeArticle = ref('')
const page = ref('')

onMounted(() => {
    articleId.value = +route.params.id
    getArticle()
    getOtherAtricle()
    getPage();
})

function getArticle () {
    let data = getById(articleId.value);
    article.value = data[0]
    typeArticle.value = route.name
}

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



watch(() => route.params, (newVal) => {
    articleId.value = +newVal.id
    getArticle()
    getOtherAtricle()
    getPage()
}, { deep: true })

</script>
<style lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
}
</style>