<template>
    <section class="cabinet-favorite">
        <div class="cabinet-favorite__container">
            <CabinetTitle> Материалы</CabinetTitle>
            <SearchPanel :isSearchVisible="isSearchVisible" />
            <div class="cards">
                <ListArticle :data="currentMaterials" :isOfferVisible="isOfferVisible" />
            </div>
            <PaginationComponent
                :perpage="4"
                :data="cardMaterialData"
                @setList="updateCurrentMaterials"
            />
            <div class="cabinet-favorite__webinars">
                <CabinetTitle> Вебинары</CabinetTitle>
                <SearchPanel :isSearchVisible="isSearchVisible" />
                <ListArticle
                    :data="currentWebinars"
                    :isOfferVisible="isOfferVisible"
                    :customClass="['custom-card', 'custom-text-right', 'custom-text-left']"
                />
                <PaginationComponent
                    :perpage="3"
                    :data="cardWebinarData"
                    @setList="updateCurrentWebinars"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import SearchPanel from '../../searchPanel/SearchPanel.vue'
import CabinetTitle from '../CabinetTitle.vue'
import PaginationComponent from '../../pagination/PaginationComponent.vue'
import ListArticle from '../../article/ListArticle.vue'

const isSearchVisible = ref(false)
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

<style lang="scss">
.cabinet-favorite {
    padding: 60px 80px;
}
.cabinet-favorite__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.cards {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 16px;
}

.cabinet-favorite__webinars {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.custom-card {
    display: flex;
    text-align: right;
}
.custom-text-right {
    text-align: right;
}

.custom-text-left {
    justify-content: flex-start;
}
</style>
