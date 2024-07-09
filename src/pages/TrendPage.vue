<!-- eslint-disable vue/html-self-closing -->
<template>
    <div class="page">
        <HeaderComponent />
        <TrendAbout />

        <SearchPanel
            v-model="searchValue"
            class="trend__search-panel"
            @search="search()"
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
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TrendAbout from '../components/trend/TrendAbout.vue';
import SearchPanel from '../components/searchPanel/SearchPanel.vue';
import ListArticle from '../components/article/ListArticle.vue';
import OtherTrend from '../components/trend/OtherTrend.vue';
import { onMounted, ref, watch } from 'vue';
import { getTrend } from '../db/db.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const searchValue = ref('')
const dataTrend = ref([])
const data = ref([])

function search () {
    data.value = dataTrend.value.filter(el => {
        return (el.title).toLocaleLowerCase().includes((searchValue.value).toLocaleLowerCase())
    })
}

onMounted(() => {
    dataTrend.value = getTrend(route.params.name);
    data.value = dataTrend.value
})

watch(searchValue, (newVal) => {
    if (newVal.trim() == '') {
        data.value = dataTrend.value
    }
})

watch(() => route.params.name, (newVal) => {
    dataTrend.value = getTrend(newVal);
    data.value = dataTrend.value ;
}, { deep: true })

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
