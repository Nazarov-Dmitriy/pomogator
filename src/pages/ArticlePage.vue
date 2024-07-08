<template>
    <div class="page">
        <HeaderComponent />
        <ArticleComponent
            :article="article"
            :type="typeArticle"
            :other-atricle="otherAtricle"
        />        
        <FooterComponent />
        <router-view />
    </div>
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ArticleComponent from '../components/article/ArticleComponent.vue'    
// import FooterComponent from '../components/main/FooterComponent.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import  { getById , randomArticle}  from '../db/db.js';   

const route = useRoute()
const articleId = ref()
const article = ref()
const otherAtricle = ref([])
const typeArticle=ref('')

onMounted(()=>{
    articleId.value =+route.params.id
    getArticle()
    getOtherAtricle()
})

function getArticle (){
    let data = getById(articleId.value);
    article.value =data[0] 
    typeArticle.value = route.name
}

function getOtherAtricle (){
    otherAtricle.value = randomArticle(articleId.value , 3);
}

watch(() => route.params, (newVal) => {
    articleId.value = +newVal.id
    getArticle()
    getOtherAtricle ()  
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