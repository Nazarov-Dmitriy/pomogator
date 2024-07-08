<template>
    <div class="page">
        <HeaderComponent />
        <TaskMaterial />

        <SearchPanel
            v-model="searchValue"
            class="trend__search-panel"
            @search="search()"
        />
        <ListArticle
            v-if="data.length > 0"
            class="trend__article-header"
            :data="data"
        >
            <template #header>
                <h2 class="list-article__title">
                    Содержание
                </h2>
            </template>
        </ListArticle>
        <SubscrideComponent />
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TaskMaterial from '../components/blog/TaskMaterial.vue';
import SearchPanel from '../components/searchPanel/SearchPanel.vue';
import ListArticle from '../components/article/ListArticle.vue';
import SubscrideComponent from '../components/blog/SubscrideComponent.vue';
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
        padding:0 16px 32px 16px;
    }
}

.list-article__title {
    font-family: "Kreadon-Demi";
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
}
</style>
