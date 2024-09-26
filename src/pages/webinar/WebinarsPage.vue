<template>
    <MainLayots>
        <WebinarsComponent />
        <div class="webinar__main">
            <SearchPanel :isSearchVisible="isSearchVisible" />
            <ListArticle
                :data="currentWebinars"
                :isOfferVisible="isOfferVisible"
                custom-article="custom-card"
                custom-text="custom-text-right"
                custom-btn="custom-card-btns"
            />
            <PaginationComponent
                :perpage="3"
                :data="cardWebinarData"
                @setList="updateCurrentWebinars"
            />
            <FeedbackComponent/>
        </div>
    </MainLayots>
</template>
<script setup>
import ListArticle from '@/components/article/ListArticle.vue'
import FeedbackComponent from '@/components/feedback/FeedbackComponent.vue'
import PaginationComponent from '@/components/pagination/PaginationComponent.vue'
import SearchPanel from '@/components/searchPanel/SearchPanel.vue'
import WebinarsComponent from '@/components/webinar/WebinarsComponent.vue'
import MainLayots from '@/layouts/MainLayots.vue'
import { ref } from 'vue'

const isSearchVisible = ref(true)
const isOfferVisible = ref(false)

const cardMaterialData = ref([
    {
        id: 1,
        img: 'https://avgrodno.by/wp-content/uploads/2023/12/1.png',
        tags: ['статья', 'технологии'],
        title: 'Роль информационных технологий в науке',
        like: '100',
        show: '100',
        publication_date: '01.05.2024'
    },
    {
        id: 2,
        img: 'https://avgrodno.by/wp-content/uploads/2023/12/1.png',
        tags: ['статья', 'технологии'],
        title: 'Роль информационных технологий в науке',
        like: '100',
        show: '100',
        publication_date: '01.05.2024'
    },
    {
        id: 3,
        img: 'https://avgrodno.by/wp-content/uploads/2023/12/1.png',
        tags: ['статья', 'технологии'],
        title: 'Роль информационных технологий в науке',
        like: '100',
        show: '100',
        publication_date: '01.05.2024'
    },
    {
        id: 4,
        img: 'https://avgrodno.by/wp-content/uploads/2023/12/1.png',
        tags: ['статья2', 'технологии'],
        title: 'Влияние технологий на образование',
        like: '150',
        show: '200',
        publication_date: '02.05.2024'
    },
    {
        id: 5,
        img: 'https://avgrodno.by/wp-content/uploads/2023/12/1.png',
        tags: ['статья3', 'технологии'],
        title: 'Инновации в медицине',
        like: '120',
        show: '300',
        publication_date: '03.05.2024'
    },
    {
        id: 6,
        img: 'https://avatars.mds.yandex.net/i?id=73eea54d244a5342660766ad91fa5a8cbfe9ff52-9050465-images-thumbs&n=13',
        tags: ['статья4', 'наука'],
        title: 'Роль технологий в науке',
        like: '110',
        show: '150',
        publication_date: '04.05.2024'
    }
])

const cardWebinarData = ref([
    {
        id: 1,
        img: 'https://avatars.mds.yandex.net/i?id=73eea54d244a5342660766ad91fa5a8cbfe9ff52-9050465-images-thumbs&n=13',
        tags: ['вебинар', 'наука'],
        title: 'Современные вызовы в науке',
        like: '200',
        show: '300',
        publication_date: '15.06.2024'
    },
    {
        id: 2,
        img: 'https://avatars.mds.yandex.net/i?id=73eea54d244a5342660766ad91fa5a8cbfe9ff52-9050465-images-thumbs&n=13',
        tags: ['вебинар', 'наука'],
        title: 'Современные вызовы в науке',
        like: '200',
        show: '300',
        publication_date: '15.06.2024'
    },
    {
        id: 3,
        img: 'https://avatars.mds.yandex.net/i?id=73eea54d244a5342660766ad91fa5a8cbfe9ff52-9050465-images-thumbs&n=13',
        tags: ['вебинар', 'наука'],
        title: 'Современные вызовы в науке',
        like: '200',
        show: '300',
        publication_date: '15.06.2024'
    },
    {
        id: 4,
        img: 'https://avatars.mds.yandex.net/i?id=73eea54d244a5342660766ad91fa5a8cbfe9ff52-9050465-images-thumbs&n=13',
        tags: ['вебинар', 'наука'],
        title: 'Современные вызовы в науке',
        like: '200',
        show: '300',
        publication_date: '15.06.2024'
    },
    {
        id: 5,
        img: 'https://avatars.mds.yandex.net/i?id=73eea54d244a5342660766ad91fa5a8cbfe9ff52-9050465-images-thumbs&n=13',
        tags: ['вебинар', 'наука'],
        title: 'Современные вызовы в науке',
        like: '200',
        show: '300',
        publication_date: '15.06.2024'
    },
    {
        id: 6,
        img: 'https://avatars.mds.yandex.net/i?id=73eea54d244a5342660766ad91fa5a8cbfe9ff52-9050465-images-thumbs&n=13',
        tags: ['вебинар', 'наука'],
        title: 'Современные вызовы в науке',
        like: '200',
        show: '300',
        publication_date: '15.06.2024'
    }
])

const currentMaterials = ref([])
const currentWebinars = ref([])

function updateCurrentMaterials(paginatedData) {
    currentMaterials.value = paginatedData
}

function updateCurrentWebinars(paginatedData) {
    currentWebinars.value = paginatedData
}

updateCurrentMaterials(cardMaterialData.value.slice(0, 6))
updateCurrentWebinars(cardWebinarData.value.slice(0, 4))
</script>

<style scoped lang='scss'>
.webinar__main{
    padding: 60px 80px;
    @media(max-width: $lg){
        padding: 40px;
    }
    @media(max-width: $sm){
        padding: 32px 16px;
    }
}
</style>