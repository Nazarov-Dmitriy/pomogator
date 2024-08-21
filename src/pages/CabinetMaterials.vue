<template>
    <div class="page">
        <HeaderComponent />
        <H2 class="cabinet-material__header kreadon">
            Мои материалы
        </H2>
        <CabinetSearchPanel
            v-model="searchValue"
            class="cabinet-trend__search-panel"
            @search="search()"
        />
        <CabinetListArticle
            class="cabinet-trend__article-header"
            :data="data"
            :search="searchValue"
        />
    </div>
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import CabinetSearchPanel from '../components/cabinet/CabinetSearchPanel.vue';
import CabinetListArticle from '../components/cabinet/CabinetListArticle.vue';
import { onMounted, ref, watch } from 'vue';
import  {getAll}  from '../db/db.js';   

const searchValue = ref('')

const dataAll = ref([])

const data = ref([])

function search (){
    data.value  = dataAll.value.filter(el => {
        return  (el.title).toLocaleLowerCase().includes((searchValue.value).toLocaleLowerCase())
    })
}

onMounted(()=>{
    dataAll.value = [...getAll()]
    data.value = dataAll.value
})

watch(searchValue , (newVal)=>{
    if(newVal.trim() == ''){
        data.value = dataAll.value
    }
})

</script>
<style scoped lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
}

.cabinet-material__header {
    padding: 60px 80px 0 80px;
    font-style: normal;
    font-weight: 600;
    color: #4360F8;
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
        padding:0 16px 32px 16px;
    }
}

.cabinet-list-article__title {
    font-family: "Kreadon-Demi";
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
}
</style>
