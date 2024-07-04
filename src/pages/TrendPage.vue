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

const searchValue = ref('')

const dataAll = ref([
    {
        title: 'Роль информационных технологий в науке 0',
        img: '../../assets/images/test/image.png',
        tags: ['статья', 'химия'],
        publication_date: '01.05.2024',
        show: 5,
        like: 22,
        id: 1
    },
    {
        title: 'IT-технологии в физике: новые горизонты исследований IT-технологии в физике: новые горизонты исследований 1',
        img: '../../assets/images/test/image2.png',
        tags: ['статья', 'химия'],
        publication_date: '01.05.2024',
        show: 15,
        like:22, 
        id:2
    },
    {
        title: 'Роль информационных технологий в науке 2',
        img: '../../assets/images/test/image.png',
        tags: ['статья', 'химия'],
        publication_date: '01.05.2024',
        show: 5,
        like:22, id:3
    },
    {
        title: 'Робототехника: будущее уже здесь 3',
        img: '../../assets/images/test/image2.png',
        tags: ['статья', 'химия'],
        publication_date: '01.05.2024',
        show: 45,
        like:22, id:4
    },
    {
        title: 'Роль информационных технологий в науке 4',
        img: '../../assets/images/test/image.png',
        tags: ['статья', 'химия'],
        publication_date: '01.05.2024',
        show: 5,
        like:22, id:5
    },
    {
        title: 'Роль информационных технологий в науке 5',
        img: '../../assets/images/test/image.png',
        tags: ['статья', 'химия'],
        publication_date: '01.05.2024',
        show: 45,
        like:22, id:6
    },
    {
        title: 'Роль информационных технологий в науке 6',
        img: '../../assets/images/test/image.png',
        tags: ['статья', 'химия'],
        publication_date: '01.05.2024',
        show: 45,
        like:22, id:7
    },
    {
        title: 'Роль информационных технологий в науке 7',
        img: '../../assets/images/test/image2.png',
        tags: ['статья', 'химия'],
        publication_date: '01.05.2024',
        show: 5,
        like:22, id:8
    },
    {
        title: 'Роль информационных технологий в науке 8',
        img: '../../assets/images/test/image.png',
        tags: ['статья', 'химия'],
        publication_date: '01.05.2024',
        show: 45,
        like:22, id:9
    },
    {
        title: 'Роль информационных технологий в науке 9',
        img: '../../assets/images/test/image2.png',
        tags: ['статья', 'химия'],
        publication_date: '01.05.2024',
        show: 15,
        like:22, id:10
    },
    {
        title: 'Роль информационных технологий в науке 10',
        img: '../../assets/images/test/image.png',
        tags: ['статья', 'химия'],
        publication_date: '01.05.2024',
        show: 65,
        like:22, id:11
    },
    {
        title: 'Роль информационных технологий в науке 11',
        img: '../../assets/images/test/image.png',
        tags: ['статья', 'химия'],
        publication_date: '01.05.2024',
        show: 25,
        like:22, id:12
    },
])

const data = ref([])

function search (){
    data.value  = dataAll.value.filter(el => {
        return  (el.title).toLocaleLowerCase().includes((searchValue.value).toLocaleLowerCase())
    })
}

onMounted(()=>{
    data.value = dataAll.value
    console.log(data);
})

watch(searchValue , (newVal)=>{
    if(newVal.trim() == ''){
        data.value = dataAll.value
    }
})

// watch(data , ()=>{
//     console.log(3);
// }, {deep: true})

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
    padding: 64px 80px 60px 80px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 32px 40px 40px 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}

.list-article__title {
    font-family: "Kreadon-Demi";
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
}
</style>
